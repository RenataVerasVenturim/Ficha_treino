const CACHE_NAME = "treino-cache-v1";
const urlsToCache = [
    "./",
    "./index.html",
    "./manifest.json",
    "./gifs/remada-baixa.gif",
    "./gifs/Face-Pull.gif",
    "./gifs/remada-serrote.gif",
    "./gifs/prancha.webp",
    "./gifs/glute-bridge.gif",
    "./gifs/alongamento-peitoral-parede.gif",
    "./gifs/Crucifixo-inverso-na-maquina.gif",
    "./gifs/Puxada-neutra-com-triangulo.gif",
    "./gifs/Dead-Bug.gif",
    "./gifs/bg1.png",
    "./gifs/Child.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});
