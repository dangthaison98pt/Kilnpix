// Kilnpix: the web build uses pthreads (SharedArrayBuffer), which browsers only
// allow on cross-origin isolated pages. Static hosts like GitHub Pages cannot send
// the COOP/COEP headers, so this service worker adds them to every response.
//
// Loaded twice: as a classic <script> on the page (registers the worker and reloads
// once it controls the page) and as the service worker itself.

if (typeof window === "undefined") {
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

  self.addEventListener("fetch", (event) => {
    const request = event.request;
    if (request.cache === "only-if-cached" && request.mode !== "same-origin") {
      return;
    }
    event.respondWith(
      fetch(request).then((response) => {
        if (response.status === 0) {
          return response;
        }
        const headers = new Headers(response.headers);
        headers.set("Cross-Origin-Opener-Policy", "same-origin");
        headers.set("Cross-Origin-Embedder-Policy", "require-corp");
        headers.set("Cross-Origin-Resource-Policy", "cross-origin");
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      })
    );
  });
} else if (!window.crossOriginIsolated && window.isSecureContext && "serviceWorker" in navigator) {
  const reloadedKey = "kilnpixCoiReloaded";
  navigator.serviceWorker.register(document.currentScript.src).then((registration) => {
    if (registration.active && !navigator.serviceWorker.controller) {
      // Worker exists but this load was not intercepted (e.g. hard refresh).
      if (!sessionStorage.getItem(reloadedKey)) {
        sessionStorage.setItem(reloadedKey, "1");
        window.location.reload();
      }
    } else if (!registration.active) {
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!sessionStorage.getItem(reloadedKey)) {
          sessionStorage.setItem(reloadedKey, "1");
          window.location.reload();
        }
      });
    }
  });
}
