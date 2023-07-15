const { offlineFallback, warmStrategyCache } = require("workbox-recipes");
const { StaleWhileRevalidate, CacheFirst } = require("workbox-strategies");
const { registerRoute } = require("workbox-routing");
const { CacheableResponsePlugin } = require("workbox-cacheable-response");
const { ExpirationPlugin } = require("workbox-expiration");
const { precacheAndRoute } = require("workbox-precaching/precacheAndRoute");

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: "page-cache",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === "navigate", pageCache);

// TODO: Implement asset caching

// determine how to serve the request
const serveCache = new StaleWhileRevalidate({
  cacheName: "static-resources",
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
  ],
});

// Checks the request destination
const matchCallback = ({ request }) => {
  return (
    request.destination === "style" ||
    request.destination === "script" ||
    request.destination === "image"
  );
};

//
offlineFallback({
  strategy: pageCache,
  serveCache,
});

// Register a route for matching requests
registerRoute(matchCallback, serveCache, pageCache);
