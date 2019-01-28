//install events
const CACHE_NAME = 'my-site-cache-v2';

//Installation take place here
self.addEventListener('install', e=> {
  console.log('Service Worker: my-site-cache-v1 Installing');
});

// //call activate events
// self.addEventListener('activate', e=> {
//   console.log('Service Worker:Activated');
//   //remove unwanted catches
//   e.waitUntil(
//     catches.keys().then(CACHE_NAME => {
//       return Promise.all(
//         CACHE_NAME.map(cache => {
//           if (cache !==  CACHE_NAME) {
//             console.log('Service Worker:clear old cache');
//             return caches.delete(cache);
//     }
//   })
//   );
// })
// );
// });
//
//
//Call Fetch event
self.addEventListener('fetch',e => {
  console.log('Service Worker:Fetching');
  e.respondWith(
    fetch(e.request)
    .then(res => {
      //making copy of a response
      const resClone = res.clone();
      //opening caches
      caches
      .open(CACHE_NAME)
      .then(cache => {
        //adding response to catches
        cache.put(e.request, resClone);
      });
      return res;
    }).catch(err => caches.match(e.request).then(res => res))
    );
  });
