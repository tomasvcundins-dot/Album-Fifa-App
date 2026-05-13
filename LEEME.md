# 📲 Panini FIFA World Cup 2026 – Mi Álbum
## Guía de instalación y actualización

---

## ¿Qué contiene este ZIP?

| Archivo | Descripción |
|---|---|
| `index.html` | La app principal |
| `sw.js` | Service Worker (activa el modo offline y las actualizaciones) |
| `manifest.json` | Configuración de la app (nombre, ícono, pantalla completa) |

---

## 🚀 Instalación – Opción A: GitHub Pages (GRATIS, recomendada)

Esta es la forma más fácil de tener la app con actualizaciones.

1. Creá una cuenta en **github.com**
2. Creá un repositorio nuevo (ej: `mi-album-panini`)
3. Subí los 3 archivos (`index.html`, `sw.js`, `manifest.json`)
4. En el repositorio → **Settings → Pages → Source: main branch**
5. Tu app queda en: `https://TU-USUARIO.github.io/mi-album-panini/`
6. Abrís esa URL en Chrome en tu Android → menú ⋮ → **"Agregar a pantalla de inicio"**
7. ¡Listo! Funciona como app nativa

### Para actualizar (cuando Claude te mande archivos nuevos):
1. Entrás al repositorio en GitHub
2. Hacés clic en el archivo a reemplazar → ícono de lápiz ✏️ o subís el nuevo
3. La próxima vez que abras la app, aparece el banner **"Nueva versión disponible"**
4. Tocás el banner → se actualiza al instante sin perder tus datos

---

## 🚀 Instalación – Opción B: Netlify Drop (sin cuenta)

1. Abrís **netlify.com/drop**
2. Arrastrás la carpeta con los 3 archivos
3. Te da una URL tipo `https://algo-random.netlify.app`
4. Abrís en Chrome Android → instalás como app

### Para actualizar:
- Volvés a netlify.com → tu sitio → **Deploys → drag & drop** los archivos nuevos

---

## 🚀 Instalación – Opción C: Solo el HTML (sin actualizaciones automáticas)

Si solo querés usar la app sin actualizaciones:
1. Abrís `index.html` directamente en Chrome Android
2. Menú ⋮ → "Agregar a pantalla de inicio"
3. Funciona, pero sin el Service Worker ni el banner de actualización

---

## 📱 Instalar en el celular (Android con Chrome)

Una vez que tenés la URL de tu app hosteada:
1. Abrís la URL en **Chrome** (no en otro navegador)
2. Esperás unos segundos → aparece el banner **"Agregar a pantalla de inicio"**
3. O menú ⋮ → **"Instalar app"** / **"Agregar a pantalla de inicio"**
4. Confirmás → el ícono aparece en tu launcher como cualquier app

### iPhone (Safari):
1. Abrís la URL en **Safari**
2. Botón compartir → **"Agregar a pantalla de inicio"**

---

## 🔄 Sistema de actualizaciones

Cuando Claude te mande una nueva versión:
- **Si usás GitHub/Netlify**: reemplazás los archivos en el hosting
- La app detecta el cambio y muestra el banner dorado arriba
- Tocás el banner → recarga con la nueva versión
- **Tus figuritas guardadas NO se pierden** (están en localStorage del teléfono)

---

## 💾 Backup de tus datos

En la app, pestaña "Escanear" → sección "Gestión de datos":
- **Exportar** → guarda un archivo `panini-mundial-2026.json`
- **Importar** → carga tus datos desde ese archivo

Hacé backup antes de actualizar el teléfono o cambiar de navegador.

---

## ❓ Preguntas frecuentes

**¿Necesito internet para usar la app?**
Solo para escanear con IA (necesita conectarse a Claude). Todo lo demás funciona offline.

**¿Se borran mis datos si actualizo la app?**
No. Los datos están en el teléfono (localStorage), no en los archivos de la app.

**¿Puedo usarla en varios celulares?**
Sí, usando la función Exportar/Importar para sincronizar tus datos.

**¿Funciona en iPhone?**
Sí, con Safari. La instalación en pantalla de inicio también funciona, aunque sin algunos features de Android.
