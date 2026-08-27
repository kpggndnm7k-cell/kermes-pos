const CACHE='kermes-pos-v1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>self.clients.claim());
self.addEventListener('fetch',e=>{
  if(e.request.method==='GET' && e.request.url.startsWith(self.location.origin)){
    e.respondWith(caches.open(CACHE).then(c=>c.match(e.request).then(x=>x||fetch(e.request).then(r=>{c.put(e.request,r.clone());return r;}))));
  }
});
