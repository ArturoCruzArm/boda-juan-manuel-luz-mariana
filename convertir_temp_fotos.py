#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script para convertir fotos temporales a formato WebP
"""

import os
from pathlib import Path
from PIL import Image

SOURCE_DIR = "temp_nuevas_fotos"
TARGET_DIR = "temp_nuevas_fotos_webp"
WEBP_QUALITY = 85
MAX_DIMENSION = 2400

def main():
    # Crear directorio de destino
    if not os.path.exists(TARGET_DIR):
        os.makedirs(TARGET_DIR)

    # Obtener lista de imágenes
    image_files = []
    for file in os.listdir(SOURCE_DIR):
        if Path(file).suffix.lower() in ['.jpg', '.jpeg']:
            image_files.append(file)

    image_files.sort()
    print(f"Encontradas {len(image_files)} imágenes")

    converted = 0
    for i, filename in enumerate(image_files, 1):
        source_path = os.path.join(SOURCE_DIR, filename)
        webp_filename = Path(filename).stem + '.webp'
        target_path = os.path.join(TARGET_DIR, webp_filename)

        try:
            img = Image.open(source_path)

            # Convertir RGBA a RGB si es necesario
            if img.mode in ('RGBA', 'LA', 'P'):
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                img = background

            # Redimensionar si es muy grande
            width, height = img.size
            if width > MAX_DIMENSION or height > MAX_DIMENSION:
                if width > height:
                    new_width = MAX_DIMENSION
                    new_height = int(height * (MAX_DIMENSION / width))
                else:
                    new_height = MAX_DIMENSION
                    new_width = int(width * (MAX_DIMENSION / height))
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

            # Guardar como WebP
            img.save(target_path, 'WEBP', quality=WEBP_QUALITY, method=6)
            converted += 1

            if i % 50 == 0:
                print(f"Progreso: {i}/{len(image_files)}")
        except Exception as e:
            print(f"Error al convertir {filename}: {str(e)}")

    print(f"\nConvertidas {converted} imágenes exitosamente")

if __name__ == "__main__":
    main()
