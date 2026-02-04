const CACHE_NAME = 'trading-journal-v1';
const urlsToCache = [
  '/',
  'index.html',
  'manifest.json',
  'icon-192.png'/*,
  'icon-512.png'*/
];


// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                reportToServer('Caching files: ', urlsToCache.join(', '));  // Log file yang di-cache
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                return self.skipWaiting();
            })
    );
});

// Activate event: Hapus cache lama jika ada
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    reportToServer('Loaded from cache: ', event.request.url);  // Log file yang diambil dari cache
                    return response;
                }
                // Jika tidak ada di cache, ambil dari network dan log
                return fetch(event.request).then(networkResponse => {
                    reportToServer('Loaded from network: ', event.request.url);  // Log file yang diambil dari network
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                        reportToServer('Cached from network: ', event.request.url);  // Log file yang baru di-cache
                        return networkResponse;
                    });
                });
            })
    );
});

function reportToServer(source, url) {
    const data = {
        file: url,
        source: source,
        timestamp: new Date().toISOString()
    };

    // Send the report to the server
    fetch('/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Report sent successfully:', data);
    })
    .catch(error => {
        console.error('Error reporting to server:', error);
    });
}