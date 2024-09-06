'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "18a6f8f58a0f2a991beb2da862da661a",
"poke/version.json": "18a6f8f58a0f2a991beb2da862da661a",
"poke/assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"poke/assets/AssetManifest.bin.json": "a1995e592004c1ade9fd69621ecfc229",
"poke/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"poke/assets/NOTICES": "9552a700f669f277dc09e78e9505a2d5",
"poke/assets/fonts/MaterialIcons-Regular.otf": "221c979ebedc0ecc545f27648d238587",
"poke/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"poke/assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"poke/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"poke/assets/bg.jpg": "d03cd55af75ac27c4bc953b9f0ef8368",
"poke/assets/AssetManifest.bin": "d616075bf7e311043bc24a040e06781f",
"poke/assets/AssetManifest.json": "3e3f7ce5b1ee210dff91f165154c9a11",
"poke/index.html": "623b6846ad710c9ae32ae8dd879d7cb5",
"poke/.git/packed-refs": "8cc81dec39b0657ee954b266d0fff368",
"poke/.git/objects/27/7a1bd57d58fbac65d119052d2b00b0d0cf11eb": "6c24ecf1623ce93e56048804eec4b59b",
"poke/.git/objects/e0/ef8963ef242c0177de3abe08877b0d56db8226": "07eca1742e3d061351ebc8cc85a9c004",
"poke/.git/objects/00/3be232617321a82da5f26dbe7e0c75e82e14fa": "284ef58b8524a8776bb8da06562bcea5",
"poke/.git/objects/pack/pack-3984d28bde45afd11a49ae647beb38389da91915.idx": "b5e20c3b05ad170529a549f253fd68c9",
"poke/.git/objects/pack/pack-3984d28bde45afd11a49ae647beb38389da91915.pack": "c064578162e1edfcc0b9b62a2a0bdb8b",
"poke/.git/objects/1c/c1792d9772a540fe9ce7e44ae1512e05c8a6d6": "96418c39dc4f8f712b539fd58d601dcc",
"poke/.git/COMMIT_EDITMSG": "d9332c3f318d9e9c481f77b67d151e23",
"poke/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"poke/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"poke/.git/config": "bb82721e3f82878a23e714de94706895",
"poke/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"poke/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"poke/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"poke/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"poke/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"poke/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"poke/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"poke/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"poke/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"poke/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"poke/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"poke/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"poke/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"poke/.git/logs/HEAD": "d57c99d5b58907941fbfc91e4482d26d",
"poke/.git/logs/refs/remotes/origin/gh-pages": "8595bc306c57139b842ea8cb9c8fa33c",
"poke/.git/logs/refs/remotes/origin/HEAD": "c729cb703cb1b132cc4a1f083f5992f2",
"poke/.git/logs/refs/heads/gh-pages": "d57c99d5b58907941fbfc91e4482d26d",
"poke/.git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
"poke/.git/index": "337bcb6b7fb5d02742776fbb62de736d",
"poke/.git/refs/remotes/origin/gh-pages": "bd485dc00d6e9c184de09b34539926ec",
"poke/.git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
"poke/.git/refs/heads/gh-pages": "bd485dc00d6e9c184de09b34539926ec",
"poke/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"poke/main.dart.js": "99e1fa27b26fed1a79d3ada77103effc",
"poke/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"poke/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"poke/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"poke/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"poke/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"poke/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"poke/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"poke/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"poke/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"poke/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"poke/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"poke/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"poke/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"poke/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"poke/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"poke/manifest.json": "e46a1ffd4dece73d932751878a695a58",
"assets/FontManifest.json": "daf1f817658c2d4328a27ae7e3af9150",
"assets/AssetManifest.bin.json": "a1995e592004c1ade9fd69621ecfc229",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/NOTICES": "9552a700f669f277dc09e78e9505a2d5",
"assets/fonts/MaterialIcons-Regular.otf": "221c979ebedc0ecc545f27648d238587",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/bg.jpg": "d03cd55af75ac27c4bc953b9f0ef8368",
"assets/AssetManifest.bin": "d616075bf7e311043bc24a040e06781f",
"assets/AssetManifest.json": "3e3f7ce5b1ee210dff91f165154c9a11",
"index.html": "ab1d3e14eda71efa496df52c5fd32acd",
"/": "ab1d3e14eda71efa496df52c5fd32acd",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "20605e4237b01833ad9c1b4efa607003",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "e46a1ffd4dece73d932751878a695a58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
