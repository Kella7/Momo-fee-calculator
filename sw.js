const CACHE_NAME = 'mtn-momo-calculator-v1';

const FILES_TO_CACHE = [
  './',
  './index.html'
];

// Save the calculator for offline use
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();
});

// Activate the latest version
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Allow the calculator to work without internet
self.addEventListener('fetch', function(event) {

  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(function(response) {

        const responseCopy = response.clone();

        caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(event.request, responseCopy);
          });

        return response;

      })
      .catch(function() {

        return caches.match(event.request)
          .then(function(cachedResponse) {

            return cachedResponse || caches.match('./index.html');

          });

      })
  );

});
