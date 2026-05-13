/* ═══════════════════════════════════════════
   Panini WC 2026 – Service Worker
   Versión de caché: v1.1.0
   Cambios: OCR on-device con Tesseract.js
   ↑ Cambiá este número para forzar actualización
   ═══════════════════════════════════════════ */
const CACHE = 'panini-2026-v1.1.0';

const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800&display=swap',
];

/* INSTALL: precachear recursos */
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE)));
});

/* ACTIVATE: limpiar cachés viejos */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* FETCH: cache-first + network fallback */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Tesseract carga modelos pesados; usar network-first con cache para offline
  if (url.hostname === 'cdn.jsdelivr.net' || url.hostname === 'unpkg.com' || url.hostname === 'tessdata.projectnaptha.com') {
    e.respondWith(
      fetch(e.request).then(resp => {
        if (resp && resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return resp;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Para fuentes y otros recursos: cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200 || resp.type === 'opaque') return resp;
        const clone = resp.clone();
        caches.open(CACHE).then(cache => cache.put(e.request, clone));
        return resp;
      });
    }).catch(() => caches.match('./index.html'))
  );
});

/* SKIP WAITING: recibir mensaje para actualizar */
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
