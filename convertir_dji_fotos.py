#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir las fotos DJI a WebP y agregarlas al directorio images/
"""

import os
from pathlib import Path
from PIL import Image

# Configuracion
SOURCE_DIR = r"F:\2025\11\22\mariana"
TARGET_DIR = "images"
WEBP_QUALITY = 85
MAX_DIMENSION = 2400

def convert_to_webp(source_path, target_path, quality=85, max_dim=2400):
    """Convierte una imagen a formato WebP optimizado."""
    try:
        img = Image.open(source_path)
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
            if width > height:
                new_width = max_dim
                new_height = int(height * (max_dim / width))
            else:
                new_height = max_dim
                new_width = int(width * (max_dim / height))
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Guardar como WebP
        img.save(target_path, 'WEBP', quality=quality, method=6)
        webp_size = os.path.getsize(target_path)

        return True, original_size, webp_size

    except Exception as e:
        print(f"[ERROR] al convertir {source_path}: {str(e)}")
        return False, 0, 0

def format_size(bytes_val):
    """Formatea bytes a formato legible."""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if bytes_val < 1024.0:
            return f"{bytes_val:.1f} {unit}"
        bytes_val /= 1024.0
    return f"{bytes_val:.1f} TB"

def main():
    print("=" * 60)
    print("  CONVERSION FOTOS DJI A WEBP")
    print("=" * 60)
    print()

    # Buscar archivos DJI
    dji_files = []
    for file in os.listdir(SOURCE_DIR):
        if file.upper().startswith('DJI') and Path(file).suffix.upper() in ['.JPG', '.JPEG']:
            dji_files.append(file)

    dji_files.sort()

    if not dji_files:
        print("[ERROR] No se encontraron fotos DJI")
        return

    print(f"[OK] Se encontraron {len(dji_files)} fotos DJI")
    print()

    # Convertir fotos
    converted = 0
    total_original_size = 0
    total_webp_size = 0

    for filename in dji_files:
        source_path = os.path.join(SOURCE_DIR, filename)
        webp_filename = Path(filename).stem + '.webp'
        target_path = os.path.join(TARGET_DIR, webp_filename)

        print(f"[INFO] Convirtiendo {filename}...")
        success, original_size, webp_size = convert_to_webp(
            source_path, target_path, WEBP_QUALITY, MAX_DIMENSION
        )

        if success:
            converted += 1
            total_original_size += original_size
            total_webp_size += webp_size
            reduction = ((original_size - webp_size) / original_size) * 100
            print(f"       {format_size(original_size)} -> {format_size(webp_size)} (-{reduction:.1f}%)")

    print()
    print("=" * 60)
    print("  RESUMEN")
    print("=" * 60)
    print(f"[OK] Convertidas: {converted}/{len(dji_files)}")
    print(f"[SIZE] Original: {format_size(total_original_size)}")
    print(f"[SIZE] WebP: {format_size(total_webp_size)}")

    if total_original_size > 0:
        reduction_percent = ((total_original_size - total_webp_size) / total_original_size) * 100
        print(f"[SIZE] Ahorro: {format_size(total_original_size - total_webp_size)} ({reduction_percent:.1f}%)")

    print()
    print("[NEXT] Ejecuta: python generar_lista_fotos.py")
    print("=" * 60)

if __name__ == "__main__":
    main()
