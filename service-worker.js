const CACHE_NAME = 'diario-de-bordo-v2';

const ARQUIVOS_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/icons/icon-192.png',
    '/icons/icon-512.png',
];

// Instala o Service Worker e armazena os arquivos no cache
self.addEventListener("install", (event) => {
    console.log("Service Worker foi instalado");

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ARQUIVOS_CACHE))
    );
});

// Ativa o Service Worker e remove caches antigos
self.addEventListener("activate", (event) => {
    console.log("Service Worker foi ativado");

    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys
                .filter((k) => k !== CACHE_NAME)
                .map((k) => caches.delete(k))
            );
        })
    );
});

// Intercepta as requisições e busca primeiro no cache
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((resposta) => {
            if (resposta) {
                return resposta;
            } else {
                return fetch(event.request);
            }
        })
    );
});