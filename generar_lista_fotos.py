#!/usr/bin/env python3
"""
Script para generar automáticamente la lista de fotos en selector.js
Uso: python generar_lista_fotos.py

Este script:
1. Escanea el directorio images/ en busca de archivos de imagen
2. Genera la lista de rutas de fotos
3. Actualiza el archivo js/selector.js con la nueva lista
"""

import os
import re
from pathlib import Path

# Configuración
IMAGES_DIR = "images"
SELECTOR_JS = "js/selector.js"
SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF'}

def find_images(directory):
    """
    Encuentra todas las imágenes en el directorio especificado.
    Retorna una lista ordenada de rutas relativas.
    """
    images = []

    if not os.path.exists(directory):
        print(f"⚠️  El directorio '{directory}' no existe.")
        print(f"   Creando directorio...")
        os.makedirs(directory, exist_ok=True)
        return images

    # Recorrer el directorio y subdirectorios
    for root, dirs, files in os.walk(directory):
        for file in files:
            if Path(file).suffix in SUPPORTED_FORMATS:
                # Crear ruta relativa
                rel_path = os.path.join(root, file).replace('\\', '/')
                images.append(rel_path)

    # Ordenar las imágenes
    images.sort()

    return images

def format_photos_array(images):
    """
    Formatea la lista de imágenes como array de JavaScript.
    """
    if not images:
        return "const photos = [\n    // Las fotos se listarán aquí automáticamente\n    // Ejemplo: 'images/foto001.jpg', 'images/foto002.jpg', etc.\n];"

    lines = ["const photos = ["]

    for i, img in enumerate(images):
        # Agregar coma excepto en el último elemento
        comma = "," if i < len(images) - 1 else ""
        lines.append(f"    '{img}'{comma}")

    lines.append("];")

    return "\n".join(lines)

def update_selector_js(photos_array):
    """
    Actualiza el archivo selector.js con la nueva lista de fotos.
    """
    if not os.path.exists(SELECTOR_JS):
        print(f"❌ Error: El archivo '{SELECTOR_JS}' no existe.")
        return False

    # Leer el archivo actual
    with open(SELECTOR_JS, 'r', encoding='utf-8') as f:
        content = f.read()

    # Reemplazar el array de fotos usando regex
    # Busca desde "const photos = [" hasta el primer "];" que encuentre
    pattern = r'const photos = \[[\s\S]*?\];'

    if not re.search(pattern, content):
        print(f"❌ Error: No se encontró el array 'photos' en {SELECTOR_JS}")
        return False

    # Reemplazar
    new_content = re.sub(pattern, photos_array, content, count=1)

    # Guardar el archivo actualizado
    with open(SELECTOR_JS, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

def main():
    """
    Función principal del script.
    """
    print("=" * 60)
    print("  GENERADOR DE LISTA DE FOTOS")
    print("  Boda Juan Manuel & Luz Mariana")
    print("=" * 60)
    print()

    # Buscar imágenes
    print(f"🔍 Buscando imágenes en '{IMAGES_DIR}'...")
    images = find_images(IMAGES_DIR)

    if not images:
        print(f"⚠️  No se encontraron imágenes en '{IMAGES_DIR}'")
        print()
        print("📝 Instrucciones:")
        print(f"   1. Coloca tus fotos en el directorio '{IMAGES_DIR}/'")
        print(f"   2. Formatos soportados: {', '.join(SUPPORTED_FORMATS)}")
        print(f"   3. Ejecuta este script nuevamente")
        print()

        # Aún así actualizar el archivo con array vacío
        photos_array = format_photos_array([])
        if update_selector_js(photos_array):
            print(f"✅ Archivo '{SELECTOR_JS}' actualizado (sin fotos)")
        return

    print(f"✅ Se encontraron {len(images)} imágenes")
    print()

    # Mostrar algunas fotos de ejemplo
    print("📸 Primeras 5 fotos encontradas:")
    for i, img in enumerate(images[:5], 1):
        print(f"   {i}. {img}")

    if len(images) > 5:
        print(f"   ... y {len(images) - 5} más")
    print()

    # Generar array de JavaScript
    photos_array = format_photos_array(images)

    # Actualizar selector.js
    print(f"💾 Actualizando '{SELECTOR_JS}'...")
    if update_selector_js(photos_array):
        print(f"✅ ¡Listo! El selector ha sido actualizado con {len(images)} fotos")
        print()
        print("🌐 Próximos pasos:")
        print("   1. Abre selector.html en tu navegador")
        print("   2. Selecciona las fotos para ampliación, impresión, etc.")
        print("   3. Descarga el reporte JSON con tus selecciones")
    else:
        print("❌ Error al actualizar el archivo")

    print()
    print("=" * 60)

if __name__ == "__main__":
    main()