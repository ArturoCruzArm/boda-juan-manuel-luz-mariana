#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para generar automaticamente la lista de fotos en selector.js
Uso: python generar_lista_fotos.py

Este script:
1. Escanea el directorio images/ en busca de archivos de imagen
2. Genera la lista de rutas de fotos
3. Actualiza el archivo js/selector.js con la nueva lista
"""

import os
import re
from pathlib import Path

# Configuracion
IMAGES_DIR = "images"
SELECTOR_JS = "js/selector.js"
SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.JPG', '.JPEG', '.PNG', '.WEBP', '.GIF'}

def find_images(directory):
    """
    Encuentra todas las imagenes en el directorio especificado.
    Retorna una lista ordenada de rutas relativas.
    """
    images = []

    if not os.path.exists(directory):
        print(f"[WARN] El directorio '{directory}' no existe.")
        print(f"       Creando directorio...")
        os.makedirs(directory, exist_ok=True)
        return images

    # Recorrer el directorio y subdirectorios
    for root, dirs, files in os.walk(directory):
        for file in files:
            if Path(file).suffix in SUPPORTED_FORMATS:
                # Crear ruta relativa
                rel_path = os.path.join(root, file).replace('\\', '/')
                images.append(rel_path)

    # Ordenar las imagenes
    images.sort()

    return images

def format_photos_array(images):
    """
    Formatea la lista de imagenes como array de JavaScript.
    """
    if not images:
        return "const photos = [\n    // Las fotos se listaran aqui automaticamente\n    // Ejemplo: 'images/foto001.jpg', 'images/foto002.jpg', etc.\n];"

    lines = ["const photos = ["]

    for i, img in enumerate(images):
        # Agregar coma excepto en el ultimo elemento
        comma = "," if i < len(images) - 1 else ""
        lines.append(f"    '{img}'{comma}")

    lines.append("];")

    return "\n".join(lines)

def update_selector_js(photos_array):
    """
    Actualiza el archivo selector.js con la nueva lista de fotos.
    """
    if not os.path.exists(SELECTOR_JS):
        print(f"[ERROR] El archivo '{SELECTOR_JS}' no existe.")
        return False

    # Leer el archivo actual
    with open(SELECTOR_JS, 'r', encoding='utf-8') as f:
        content = f.read()

    # Reemplazar el array de fotos usando regex
    # Busca desde "const photos = [" hasta el primer "];" que encuentre
    pattern = r'const photos = \[[\s\S]*?\];'

    if not re.search(pattern, content):
        print(f"[ERROR] No se encontro el array 'photos' en {SELECTOR_JS}")
        return False

    # Reemplazar
    new_content = re.sub(pattern, photos_array, content, count=1)

    # Guardar el archivo actualizado
    with open(SELECTOR_JS, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return True

def main():
    """
    Funcion principal del script.
    """
    print("=" * 60)
    print("  GENERADOR DE LISTA DE FOTOS")
    print("  Boda Juan Manuel & Luz Mariana")
    print("=" * 60)
    print()

    # Buscar imagenes
    print(f"[INFO] Buscando imagenes en '{IMAGES_DIR}'...")
    images = find_images(IMAGES_DIR)

    if not images:
        print(f"[WARN] No se encontraron imagenes en '{IMAGES_DIR}'")
        print()
        print("[INFO] Instrucciones:")
        print(f"   1. Coloca tus fotos en el directorio '{IMAGES_DIR}/'")
        print(f"   2. Formatos soportados: {', '.join(SUPPORTED_FORMATS)}")
        print(f"   3. Ejecuta este script nuevamente")
        print()

        # Aun asi actualizar el archivo con array vacio
        photos_array = format_photos_array([])
        if update_selector_js(photos_array):
            print(f"[OK] Archivo '{SELECTOR_JS}' actualizado (sin fotos)")
        return

    print(f"[OK] Se encontraron {len(images)} imagenes")
    print()

    # Mostrar algunas fotos de ejemplo
    print("[INFO] Primeras 5 fotos encontradas:")
    for i, img in enumerate(images[:5], 1):
        print(f"   {i}. {img}")

    if len(images) > 5:
        print(f"   ... y {len(images) - 5} mas")
    print()

    # Generar array de JavaScript
    photos_array = format_photos_array(images)

    # Actualizar selector.js
    print(f"[INFO] Actualizando '{SELECTOR_JS}'...")
    if update_selector_js(photos_array):
        print(f"[OK] Listo! El selector ha sido actualizado con {len(images)} fotos")
        print()
        print("[NEXT] Proximos pasos:")
        print("   1. Abre selector.html en tu navegador")
        print("   2. Selecciona las fotos para ampliacion, impresion, etc.")
        print("   3. Descarga el reporte JSON con tus selecciones")
    else:
        print("[ERROR] Error al actualizar el archivo")

    print()
    print("=" * 60)

if __name__ == "__main__":
    main()