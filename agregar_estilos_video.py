# -*- coding: utf-8 -*-
#!/usr/bin/env python3
# Script para agregar estilos CSS para videos de YouTube

import sys

# Fix encoding para Windows
if sys.platform == 'win32':
    sys.stdout.reconfigure(encoding='utf-8')

# Leer el archivo CSS original
with open('css/selector.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Estilos CSS para videos
video_styles = """
/* ========================================
   VIDEO CONTAINERS
   ======================================== */
.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none; /* Makes video non-clickable */
}

/* Modal video container */
.modal-video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    background: #000;
}

.modal-video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none; /* Makes video non-clickable */
}

"""

# Agregar estilos solo si no existen
if '.video-container' not in content:
    # Insertar antes de la sección de "Reduce motion preference"
    content = content.replace(
        '/* Reduce motion preference */',
        video_styles + '/* Reduce motion preference */'
    )
    print("[OK] Estilos CSS para videos agregados")
else:
    print("[INFO] Estilos CSS para videos ya existen")

# Guardar el archivo modificado
with open('css/selector.css', 'w', encoding='utf-8') as f:
    f.write(content)

print("[COMPLETADO] Proceso terminado")
