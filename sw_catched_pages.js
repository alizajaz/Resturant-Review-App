//install events
 const CACHE_NAME = 'v2';
const urlsToCache = [
  'index.html',
  'restaurant.html',
  '/css/styles.css',
  '/js/main.js'
  ];


//Installation take place here
self.addEventListener('install', e=> {
  console.log('Service Worker: my-site-cache-v1 Installing');

e.waitUntil(  //Perform install steps
    caches.open(CACHE_NAME).then(cache => {
  console.log('Service Worker: Catching Files');
      cache.addAll(urlsToCache);
    })
    .then(() => self.skipWaiting())
  );
});



// //call activate events
// self.addEventListener('activate', e=> {
//   console.log('Service Worker:Activated');
//
//   //remove unwanted catches
//   e.waitUntil(
//     caches.keys().then(CACHE_NAME => {
//       return Promise.all(
//         CACHE_NAME.map(cache => {
//           if (cache!== CACHE_NAME) {
//             console.log('Service Worker:clear old cache');
//             return caches.delete(cache);
//           }
//         })
//   )
// })
// );
// });

// Call Fetch event
self.addEventListener('fetch', e => {
  console.log('Service Worker:Fetch');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
      });
