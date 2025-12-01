# 📸 Selector de Fotos - Boda Juan Manuel & Luz Mariana

Sistema interactivo para seleccionar fotos del evento para diferentes propósitos: ampliación, impresión, invitaciones, etc.

## 🚀 Inicio Rápido

### 1. Agregar las Fotos

Coloca todas las fotos del evento en el directorio `images/`:

```
boda-juan-manuel-luz-mariana/
├── images/
│   ├── foto001.jpg
│   ├── foto002.jpg
│   ├── foto003.jpg
│   └── ...
├── selector.html
├── generar_lista_fotos.py
└── ...
```

**Formatos soportados:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

### 2. Generar la Lista de Fotos

Ejecuta el script Python para actualizar automáticamente el selector:

```bash
python generar_lista_fotos.py
```

Este script:
- ✅ Escanea el directorio `images/`
- ✅ Encuentra todas las fotos
- ✅ Actualiza `js/selector.js` automáticamente

### 3. Abrir el Selector

Abre `selector.html` en tu navegador web preferido.

## 📖 Cómo Usar el Selector

### Interfaz Principal

El selector tiene 3 secciones principales:

1. **Panel de Estadísticas** (arriba)
   - 🖼️ **Ampliación**: Fotos para ampliar
   - 📸 **Impresión**: Fotos para imprimir
   - 💌 **Invitación**: Fotos para usar en invitaciones
   - ❌ **Descartadas**: Fotos que no se usarán
   - ⭕ **Sin Clasificar**: Fotos pendientes de revisar

2. **Botones de Filtro**
   - Filtra la galería por categoría
   - Click en cualquier botón para ver solo esas fotos

3. **Galería de Fotos**
   - Vista en cuadrícula de todas las fotos
   - Las fotos se colorean según su categoría

### Seleccionar Fotos

1. **Click en una foto** para abrir el modal de selección
2. **Elige una o varias opciones:**
   - 🖼️ Ampliación
   - 📸 Impresión
   - 💌 Invitación
   - ❌ Descartar

3. **Click en "Guardar"** para confirmar
   - ✅ Las selecciones se guardan automáticamente en tu navegador
   - ✅ No perderás tu progreso al cerrar la página

### Exportar Resultados

#### 📥 Descargar Reporte (JSON)

Click en el botón "📥 Descargar Reporte" para obtener un archivo JSON con:
- Total de fotos
- Estadísticas por categoría
- Lista detallada de cada foto y sus categorías

**Formato del archivo:**
```json
{
  "evento": "Boda Juan Manuel & Luz Mariana",
  "fecha_exportacion": "2025-12-01T10:30:00.000Z",
  "total_fotos": 250,
  "estadisticas": {
    "ampliacion": 25,
    "impresion": 50,
    "invitacion": 10,
    "descartada": 15,
    "sinClasificar": 150
  },
  "selecciones": [
    {
      "numero_foto": 1,
      "archivo": "images/foto001.jpg",
      "ampliacion": true,
      "impresion": false,
      "invitacion": false,
      "descartada": false
    }
  ]
}
```

#### 📤 Copiar Resumen

Click en "📤 Copiar Resumen" para copiar al portapapeles un resumen en texto:

```
📸 SELECCIÓN DE FOTOS - BODA JUAN MANUEL & LUZ MARIANA
═════════════════════════════════════════════════════

📊 RESUMEN GENERAL:
   Total de fotos: 250
   🖼️  Para ampliación: 25
   📸 Para impresión: 50
   💌 Para invitación: 10
   ❌ Descartadas: 15
   ⭕ Sin clasificar: 150

🖼️  AMPLIACIÓN:
   Fotos: 1, 5, 12, 23, 45, ...
   Total: 25

📸 IMPRESIÓN:
   Fotos: 2, 3, 7, 9, 15, ...
   Total: 50
```

## 🎨 Características

### ✨ Guardado Automático
- Las selecciones se guardan en localStorage del navegador
- No necesitas preocuparte por perder tu progreso
- Puedes cerrar y reabrir el selector cuando quieras

### 🔍 Filtros Inteligentes
- Filtra por cualquier categoría
- Ve solo las fotos que necesitas revisar
- Los contadores se actualizan en tiempo real

### 📱 Diseño Responsive
- Funciona perfectamente en desktop, tablet y móvil
- Optimizado para todos los tamaños de pantalla

### ⌨️ Atajos de Teclado
Cuando el modal está abierto:
- `Esc` - Cerrar sin guardar
- `Enter` - Guardar y cerrar

### 🎯 Selección Múltiple
- Una foto puede tener varias categorías
- Por ejemplo: Ampliación + Impresión
- Las fotos con múltiples categorías se marcan con borde especial

## 🛠️ Actualizar las Fotos

Si agregas más fotos después:

1. Coloca las nuevas fotos en `images/`
2. Ejecuta nuevamente: `python generar_lista_fotos.py`
3. Recarga `selector.html` en el navegador (F5)

**Nota:** Tus selecciones previas se mantendrán intactas.

## 🗑️ Limpiar Todo

El botón "🗑️ Limpiar Todo" elimina **todas** las selecciones.

⚠️ **ADVERTENCIA:** Esta acción no se puede deshacer.

## 📋 Usar el Reporte JSON

El archivo JSON descargado puede usarse para:

### Python

```python
import json

with open('seleccion-fotos-boda-2025-12-01.json', 'r') as f:
    data = json.load(f)

# Obtener todas las fotos para ampliación
fotos_ampliacion = [
    s['archivo'] for s in data['selecciones']
    if s['ampliacion']
]

print(f"Fotos para ampliar: {len(fotos_ampliacion)}")
for foto in fotos_ampliacion:
    print(f"  - {foto}")
```

### JavaScript/Node.js

```javascript
const fs = require('fs');

const data = JSON.parse(
    fs.readFileSync('seleccion-fotos-boda-2025-12-01.json', 'utf8')
);

// Filtrar fotos para impresión
const fotosImpresion = data.selecciones
    .filter(s => s.impresion)
    .map(s => s.archivo);

console.log(`Fotos para imprimir: ${fotosImpresion.length}`);
```

## 🐛 Solución de Problemas

### No veo ninguna foto

1. ✅ Verifica que las fotos estén en el directorio `images/`
2. ✅ Ejecuta `python generar_lista_fotos.py`
3. ✅ Recarga la página (F5)

### Las nuevas fotos no aparecen

1. ✅ Ejecuta nuevamente `python generar_lista_fotos.py`
2. ✅ Recarga la página con Ctrl+F5 (forzar recarga)

### Perdí mis selecciones

Las selecciones se guardan en localStorage del navegador. Si:
- Limpiaste el caché del navegador
- Usaste modo incógnito/privado
- Abriste en otro navegador/dispositivo

Entonces las selecciones no estarán disponibles.

**Solución:** Exporta regularmente el reporte JSON como respaldo.

## 📁 Estructura de Archivos

```
boda-juan-manuel-luz-mariana/
├── selector.html              # Página principal del selector
├── generar_lista_fotos.py     # Script para actualizar la lista
├── SELECTOR_FOTOS_README.md   # Esta documentación
│
├── css/
│   └── selector.css           # Estilos del selector
│
├── js/
│   └── selector.js            # Lógica del selector
│
└── images/                    # Directorio de fotos
    ├── foto001.jpg
    ├── foto002.jpg
    └── ...
```

## 💡 Consejos

1. **Exporta regularmente** - Descarga el reporte JSON cada cierto tiempo como respaldo

2. **Usa filtros** - Para revisar muchas fotos, usa los filtros para trabajar por categorías

3. **Revisa el resumen** - Usa "Copiar Resumen" para compartir rápidamente las estadísticas

4. **Organiza las fotos** - Puedes crear subdirectorios dentro de `images/`:
   ```
   images/
   ├── ceremonia/
   ├── recepcion/
   └── fiesta/
   ```

## 🎯 Casos de Uso

### Ejemplo 1: Seleccionar fotos para álbum

1. Abre el selector
2. Marca las mejores fotos como "Impresión"
3. Exporta el JSON
4. Usa el JSON para copiar solo esas fotos a otra carpeta

### Ejemplo 2: Elegir foto para invitación

1. Filtra por "Sin Clasificar"
2. Revisa las fotos una por una
3. Marca las candidatas como "Invitación"
4. Filtra por "Invitación" para comparar
5. Exporta el resumen

### Ejemplo 3: Descartar fotos borrosas

1. Revisa todas las fotos
2. Marca las borrosas/malas como "Descartada"
3. Filtra por "Descartada" para verificar
4. Exporta la lista para eliminarlas después

## ✅ Listo para Usar

¡El selector está completamente funcional!

Solo necesitas:
1. Agregar las fotos en `images/`
2. Ejecutar `python generar_lista_fotos.py`
3. Abrir `selector.html`

---

**¿Preguntas?** Consulta este README o revisa el código fuente.

**Desarrollado para:** Boda Juan Manuel & Luz Mariana 💒