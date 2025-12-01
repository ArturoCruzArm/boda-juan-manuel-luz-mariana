#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir fotos a formato WebP optimizado
"""

import os
import sys
from pathlib import Path
from PIL import Image

# Configuracion
SOURCE_DIR = r"F:\2025\11\22\mariana\editadas\Edited"
TARGET_DIR = "images"
WEBP_QUALITY = 85  # Calidad WebP (0-100, 85 es un buen balance)
MAX_DIMENSION = 2400  # Dimension maxima (ancho o alto) para optimizar tamano

def create_target_directory():
    """Crea el directorio de destino si no existe."""
    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR)
        print(f"[OK] Directorio '{TARGET_DIR}/' creado")

def get_image_files(directory):
    """Obtiene lista de archivos de imagen del directorio."""
    supported_formats = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
    image_files = []

    if not os.path.exists(directory):
        print(f"[ERROR] El directorio '{directory}' no existe")
        return []

    for file in os.listdir(directory):
        if Path(file).suffix in supported_formats:
            image_files.append(file)

    image_files.sort()
    return image_files

def convert_to_webp(source_path, target_path, quality=85, max_dim=2400):
    """
    Convierte una imagen a formato WebP optimizado.
    """
    try:
        # Abrir imagen
        img = Image.open(source_path)

        # Obtener tamano original del archivo
        original_size = os.path.getsize(source_path)

        # Convertir RGBA a RGB si es necesario
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
            img = background

        # Redimensionar si es muy grande
        width, height = img.size
        if width > max_dim or height > max_dim:
            # Calcular nuevo tamano manteniendo aspecto
            if width > height:
                new_width = max_dim
                new_height = int(height * (max_dim / width))
            else:
                new_height = max_dim
                new_width = int(width * (max_dim / height))

            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Guardar como WebP
        img.save(target_path, 'WEBP', quality=quality, method=6)

        # Obtener tamano del archivo WebP
        webp_size = os.path.getsize(target_path)

        return True, original_size, webp_size

    except Exception as e:
        print(f"\n[ERROR] al convertir {source_path}: {str(e)}")
        return False, 0, 0

def format_size(bytes_val):
    """Formatea bytes a formato legible."""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if bytes_val < 1024.0:
            return f"{bytes_val:.1f} {unit}"
        bytes_val /= 1024.0
    return f"{bytes_val:.1f} TB"

def main():
    """Funcion principal."""
    print("=" * 70)
    print("  CONVERSION A WEBP - BODA JUAN MANUEL & LUZ MARIANA")
    print("=" * 70)
    print()

    # Crear directorio de destino
    create_target_directory()

    # Obtener lista de imagenes
    print(f"[INFO] Buscando imagenes en: {SOURCE_DIR}")
    image_files = get_image_files(SOURCE_DIR)

    if not image_files:
        print("[ERROR] No se encontraron imagenes para convertir")
        return

    print(f"[OK] Se encontraron {len(image_files)} imagenes")
    print()
    print(f"[CONFIG] Configuracion:")
    print(f"   - Calidad WebP: {WEBP_QUALITY}%")
    print(f"   - Dimension maxima: {MAX_DIMENSION}px")
    print(f"   - Destino: {TARGET_DIR}/")
    print()

    # Contadores
    converted = 0
    failed = 0
    total_original_size = 0
    total_webp_size = 0

    # Convertir imagenes
    print("Iniciando conversion...")
    print()

    for i, filename in enumerate(image_files, 1):
        source_path = os.path.join(SOURCE_DIR, filename)

        # Cambiar extension a .webp
        webp_filename = Path(filename).stem + '.webp'
        target_path = os.path.join(TARGET_DIR, webp_filename)

        # Convertir
        success, original_size, webp_size = convert_to_webp(
            source_path, target_path, WEBP_QUALITY, MAX_DIMENSION
        )

        if success:
            converted += 1
            total_original_size += original_size
            total_webp_size += webp_size

            if i % 50 == 0:  # Mostrar progreso cada 50 fotos
                print(f"[{i}/{len(image_files)}] Progreso: {(i/len(image_files)*100):.1f}%")
        else:
            failed += 1

    # Resumen final
    print()
    print("=" * 70)
    print("  RESUMEN DE CONVERSION")
    print("=" * 70)
    print()
    print(f"[STATS] Estadisticas:")
    print(f"   [OK] Convertidas exitosamente: {converted}")
    if failed > 0:
        print(f"   [ERROR] Fallidas: {failed}")
    print()
    print(f"[SIZE] Espacio:")
    print(f"   Tamano original total: {format_size(total_original_size)}")
    print(f"   Tamano WebP total: {format_size(total_webp_size)}")

    if total_original_size > 0:
        reduction_percent = ((total_original_size - total_webp_size) / total_original_size) * 100
        saved_space = total_original_size - total_webp_size
        print(f"   Espacio ahorrado: {format_size(saved_space)} ({reduction_percent:.1f}%)")

    print()
    print(f"[INFO] Las fotos WebP estan en: {TARGET_DIR}/")
    print()
    print("[NEXT] Proximos pasos:")
    print("   1. Ejecuta: python generar_lista_fotos.py")
    print("   2. Abre: selector.html")
    print()
    print("=" * 70)

if __name__ == "__main__":
    main()