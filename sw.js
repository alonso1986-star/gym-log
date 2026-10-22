// Gym Log – service worker (funciona sin conexión)
// Sube el número de versión cuando cambies index.html para forzar la actualización.
const CACHE = 'gymlog-v2';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (req.mode === 'navigate') {
    // Red primero (máx. 3 s) para recibir actualizaciones; si no hay cobertura, la copia guardada.
    const net = fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(ca => ca.put('./index.html', c)); return r; });
    const timeout = new Promise((_, rej) => setTimeout(() => rej('timeout'), 3000));
    e.respondWith(Promise.race([net, timeout]).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
