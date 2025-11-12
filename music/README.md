# Carpeta de Música

## Cómo agregar música de fondo

1. Coloca tu archivo de música en esta carpeta
2. Nombra el archivo como `boda-cancion.mp3`
3. O actualiza la referencia en `index.html` línea 18:
   ```html
   <source src="music/tu-archivo.mp3" type="audio/mpeg">
   ```

## Formatos recomendados

- MP3 (más compatible)
- OGG (alternativa)
- WAV (alta calidad, pero archivo grande)

## Nota

Si el archivo de música es muy grande (más de 10-15 MB), considera:
- Comprimirlo con menor bitrate
- Usar un servicio de hosting externo
- Descomentarlas líneas en `.gitignore` para no subirlo a GitHub
