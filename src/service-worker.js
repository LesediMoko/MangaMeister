self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
        return cache.addAll([
            '/index.html',
            './index.css',
            './main.tsx'
        ]);
        })
    );
    });
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    )
})