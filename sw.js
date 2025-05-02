const CACHE_NAME = 'utilitaire-rabah-v1';
const urlsToCache = [
  '/scientific-calculator/',
  '/scientific-calculator/index.html',
  '/scientific-calculator/styles.css', // Si vous avez un fichier CSS séparé
  '/scientific-calculator/scripts.js',  // Si vous avez un fichier JS séparé
  'https://i.imgur.com/h065EKT.jpeg',
  'https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.css',
  'https://cdn.jsdelivr.net/npm/fullcalendar@5.11.3/main.min.js',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

// Installation du service worker et mise en cache des fichiers
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercepter les requêtes réseau et servir les fichiers depuis le cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
