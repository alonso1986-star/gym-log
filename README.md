# Gym Log

App web para registrar entrenamientos de hipertrofia (series, reps, peso, RIR) y ver el progreso por ejercicio. Funciona sin conexión y se instala en la pantalla de inicio del iPhone/iPad.

## Publicar en GitHub Pages
1. Crea un repositorio nuevo (p. ej. `GYM-LOG`).
2. Sube todos los archivos de esta carpeta a la raíz: `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. Abre `https://<usuario>.github.io/GYM-LOG/` en Safari → Compartir → **Añadir a pantalla de inicio**.

## Actualizar la app
Sustituye `index.html` y sube el número de `CACHE` en `sw.js` (`gymlog-v1` → `gymlog-v2`). Los datos no se pierden.

## Datos
Se guardan solo en el dispositivo. Usa **Ajustes → Exportar copia (JSON)** con regularidad; para pasar los datos a otro dispositivo, **Importar copia**. **Exportar CSV** abre directamente en Excel.
