# -*- coding: utf-8 -*-
#!/usr/bin/env python3
# Script para modificar selector.js y agregar soporte para videos de YouTube

import re
import sys

# Fix encoding para Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Leer el archivo original
with open('js/selector.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Agregar configuración de videos de YouTube después del array de photos
if 'const youtubeVideos' not in content:
    content = content.replace(
        "];\n\nconst STORAGE_KEY",
        "];\n\n// Videos de YouTube (índice -> URL del video)\nconst youtubeVideos = {\n    0: 'https://www.youtube.com/embed/wwsLq4HkTHs',\n    1: 'https://www.youtube.com/embed/KpS46Cr_qu8'\n};\n\nconst STORAGE_KEY"
    )
    print("[OK] Agregada configuracion de videos de YouTube")
else:
    print("[INFO] Configuracion de videos ya existe")

# 2. Modificar la función renderGallery para soportar videos
if 'const isVideo = youtubeVideos.hasOwnProperty(index);' not in content:
    # Buscar y reemplazar el innerHTML dentro de renderGallery
    pattern = r"(card\.innerHTML = `\s*<div class=\"photo-image-container\">\s*<img src=\"\$\{photo\}\" alt=\"Foto \$\{index \+ 1\}\" loading=\"lazy\">\s*</div>\s*<div class=\"photo-number\">Foto \$\{index \+ 1\}</div>\s*\$\{badgesHTML\}\s*`;)"

    replacement = r"""// Check if this is a YouTube video
        const isVideo = youtubeVideos.hasOwnProperty(index);

        if (isVideo) {
            card.innerHTML = `
                <div class="photo-image-container video-container">
                    <iframe src="${youtubeVideos[index]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="pointer-events: none;"></iframe>
                </div>
                <div class="photo-number">Video ${index + 1}</div>
                ${badgesHTML}
            `;
        } else {
            card.innerHTML = `
                <div class="photo-image-container">
                    <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
                </div>
                <div class="photo-number">Foto ${index + 1}</div>
                ${badgesHTML}
            `;
        }"""

    if re.search(pattern, content, re.DOTALL):
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        print("[OK] Modificada funcion renderGallery()")
    else:
        print("[WARN] No se pudo modificar renderGallery() automaticamente")
else:
    print("[INFO] renderGallery() ya esta modificada")

# 3. Modificar la función openModal para soportar videos
if 'const isVideo = youtubeVideos.hasOwnProperty(index);' not in content[content.find('function openModal'):]:
    # Buscar la función openModal
    pattern2 = r"(function openModal\(index\) \{[\s\S]*?modalImage\.src = photos\[index\];\s*modalPhotoNumber\.textContent = `Foto \$\{index \+ 1\}`;)"

    replacement2 = r"""function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    // Check if this is a YouTube video
    const isVideo = youtubeVideos.hasOwnProperty(index);

    if (isVideo) {
        modalImage.style.display = 'none';
        let videoContainer = document.getElementById('modalVideoContainer');
        if (!videoContainer) {
            videoContainer = document.createElement('div');
            videoContainer.id = 'modalVideoContainer';
            videoContainer.className = 'modal-video-container';
            modalImage.parentElement.appendChild(videoContainer);
        }
        videoContainer.style.display = 'block';
        videoContainer.innerHTML = `<iframe src="${youtubeVideos[index]}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="pointer-events: none; width: 100%; height: 100%;"></iframe>`;
        modalPhotoNumber.textContent = `Video ${index + 1}`;
    } else {
        const videoContainer = document.getElementById('modalVideoContainer');
        if (videoContainer) {
            videoContainer.style.display = 'none';
        }
        modalImage.style.display = 'block';
        modalImage.src = photos[index];
        modalPhotoNumber.textContent = `Foto ${index + 1}`;
    }"""

    if re.search(pattern2, content, re.DOTALL):
        content = re.sub(pattern2, replacement2, content, flags=re.DOTALL)
        print("[OK] Modificada funcion openModal()")
    else:
        print("[WARN] No se pudo modificar openModal() automaticamente")
else:
    print("[INFO] openModal() ya esta modificada")

# Guardar el archivo modificado
with open('js/selector.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n[COMPLETADO] Proceso terminado")
print("Videos de YouTube configurados:")
print("  - Video 1 (indice 0): https://youtu.be/wwsLq4HkTHs")
print("  - Video 2 (indice 1): https://youtu.be/KpS46Cr_qu8")
