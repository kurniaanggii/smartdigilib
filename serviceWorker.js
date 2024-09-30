const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/book1.jpg",
  "/images/book2.jpg",
  "/images/book3.jpg",
  "/images/book4.jpg",
  "/images/book5.jpg",
  "/images/book6.jpg",
  "/images/book7.jpg",
  "/images/book8.jpg",
  "/images/book9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })