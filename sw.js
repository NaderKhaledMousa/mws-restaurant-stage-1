const appCache = 'mws-static-cache-v1';

const urlsToCache = [
    '/',
    '/css/styles.css',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/js/dbhelper.js',
    '/data/restaurants.json',
    '/index.html',
    '/restaurant.html'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(appCache).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});


self.addEventListener('fetch', function(event) {
   
    event.respondWith(
        caches.match(event.request , { ignoreSearch:true }).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

