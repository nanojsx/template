importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
)

const { registerRoute } = workbox.routing
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies
const { ExpirationPlugin } = workbox.expiration

registerRoute(
  ({ request }) => request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'css-cache'
  })
)

registerRoute(
  ({ request }) => request.destination === 'document',
  new StaleWhileRevalidate({
    cacheName: 'document-cache'
  })
)

registerRoute(
  ({ request }) => request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'script-cache'
  })
)

registerRoute(
  // Cache image files.
  ({ request }) => request.destination === 'image',
  // Use the cache if it's available.
  new CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60
      })
    ]
  })
)
