'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "298d128d34f78e08c42d0a7a833e02c4",
"version.json": "1dd8c90fc22752096fcb5afe0f3acdc6",
"index.html": "551469b777e9ec50d608e9468834738c",
"/": "551469b777e9ec50d608e9468834738c",
"main.dart.js": "99be5fbb5c6c97a1db0da9b0f484067d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66214d5b2e3c12a18dd3000d28b1ff25",
"assets/AssetManifest.json": "59cfc8daf7a511c86074d7f8dd0b3748",
"assets/NOTICES": "bc9165016a420050f5a2ac00a7ad56b3",
"assets/FontManifest.json": "c78f6af764baa4346d9e3defec7ef0b3",
"assets/AssetManifest.bin.json": "0525eefe7cbb7d68d6ee6cdd7f9c61a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "40da01f4aad5773ed97b32021b9fc7ab",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c2874d29cbc2e8b7b88c3393c94a1518",
"assets/fonts/arial_bold.ttf": "142301adf4e0699237f9e11a77761d0d",
"assets/fonts/arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/fonts/MaterialIcons-Regular.otf": "0f2e07035a7580e237a6c4e79e7fcb0e",
"assets/assets/images/blue-arrow.png": "491c60bb89069e4e53e8dfdf9fc53c5f",
"assets/assets/images/fullScreenOff.png": "ce711d7099fc32483479fd20fefc3de5",
"assets/assets/images/check.png": "02a707f58661843c13196ab60dface5a",
"assets/assets/images/check.jpg": "12b4dd7e94118c8de6424be069401fa9",
"assets/assets/images/mustbe.png": "9728dcb9638f626f3c690dad9b1a57f1",
"assets/assets/images/3Bars.png": "996bc9733ff0c31e2f56ee2f23364e81",
"assets/assets/images/pc_off.png": "03fa82fa73174893703eb3e124400a23",
"assets/assets/images/no.png": "3a804f2e7a6cf1528add836a74382310",
"assets/assets/images/fullScreenOn.png": "541d3dd2975569d89492d616b772700f",
"assets/assets/images/close_bin.png": "e7d755b7e38fb126a16ba327b75ed934",
"assets/assets/images/reset.png": "669da2ec0c5e91e8696b2d0f0b799603",
"assets/assets/images/yes.png": "2e2e01553e27bad778d1635ab042a8db",
"assets/assets/images/sound.png": "58f9c052f330a26389b7b5ab8ec40f1e",
"assets/assets/images/trashb.jpg": "a148c1b0d94298c777fcea0b21905be0",
"assets/assets/images/open_bin.png": "2cf0225bda341587ee9e2215736c7ecd",
"assets/assets/images/123.jpg": "23e72832989bfc7c6e3a2ef66f3d1ad3",
"assets/assets/images/no_sound.png": "2ea642b67d32254adbfc9e2def887e99",
"assets/assets/images/logo.png": "8775a5bf2a56e2565b1ff5874b84c3a4",
"assets/assets/images/pc.png": "0eb27d705642cfa1b9061d614b32760e",
"assets/assets/images/undo.png": "6a7e4060c03e03fc335e364182068629",
"assets/assets/images/colours.jpg": "18693e01345fd6559a5379bb0d307873",
"assets/assets/images/last.png": "34239103561819b5b6b8a197fd9e99d6",
"assets/assets/images/123x.jpg": "2742a27243d2e4c99f6aedf7593d7459",
"assets/assets/images/redo.png": "caa119eb97c7a98597edc58e978ac2d2",
"assets/assets/images/dropIcon.png": "1a8afde746fa3352be739a7fcbc0f14e",
"assets/assets/svg_images/eraser-svgrepo-com.svg": "df92e2f0931e2a2da793efac227c72d6",
"assets/assets/svg_images/redo-svgrepo-com.svg": "6af724c627cc9204aafe5a1c678d93d7",
"assets/assets/svg_images/cross.svg": "40c22658bf654de77a7e071fb1634b12",
"assets/assets/svg_images/undo-svgrepo-com.svg": "43cda4046d91070c321261248cc4ed60",
"assets/assets/objects/balls/rugby.png": "523ef8b2d7739a1b56f1849f47f427c7",
"assets/assets/objects/balls/tennis.png": "ac8b4d78f25e27f67e79e8521abb875b",
"assets/assets/objects/balls/soccer.png": "4168b10748fa9805d837224139d95a14",
"assets/assets/objects/balls/basket.png": "f32ae3050d4ac8b3355e9aae77ac43b7",
"assets/assets/objects/balls/pal.png": "a99d22801dbaa5bbdffcf19d87e3bb44",
"assets/assets/objects/fruit/fruit3.png": "925419123eb2be1570a8fda6eeb30411",
"assets/assets/objects/fruit/fruit2.png": "030fa7cbc67db9d46ad4db246d7b212b",
"assets/assets/objects/fruit/fruit1.png": "450d734ce2751a9aea99aca4fa933fbb",
"assets/assets/objects/fruit/fruit5.png": "3ac3049c11a2f827e42cb3b9d900b60a",
"assets/assets/objects/fruit/fruit4.png": "5098729b3a77c2d721e0aae5d385a8db",
"assets/assets/objects/fruit/fruit6.png": "a3b71ab3928f3131b3b36b8d47e82170",
"assets/assets/objects/shapes_geometric/ex.png": "8fb71065eeea5582eb0af0b269a86376",
"assets/assets/objects/shapes_geometric/rectangle.png": "cd525d30243f3c2fac04c2d09ce90212",
"assets/assets/objects/shapes_geometric/circle.png": "1232ac8e9c95093427fc2a2cca814578",
"assets/assets/objects/shapes_geometric/triangle.png": "c8ba23f91c683083f5849d2aedcdbf28",
"assets/assets/objects/shapes_geometric/square.png": "9bab90c92f4459c460373f671df36da3",
"assets/assets/objects/toys/colored_ball.png": "72156b8ab27aa374a338f10d8df8db1c",
"assets/assets/objects/toys/doll.png": "754bc18a90ca6e40fbaaefd9774a98a7",
"assets/assets/objects/toys/robot.png": "160b985916ce743d22bf18b7badf28a0",
"assets/assets/objects/toys/car.png": "9e6770cee2c5f64c2b04090413ee28de",
"assets/assets/objects/geometric/ex.png": "8fb71065eeea5582eb0af0b269a86376",
"assets/assets/objects/geometric/rectangle.png": "cd525d30243f3c2fac04c2d09ce90212",
"assets/assets/objects/geometric/circle.png": "1232ac8e9c95093427fc2a2cca814578",
"assets/assets/objects/geometric/triangle.png": "c8ba23f91c683083f5849d2aedcdbf28",
"assets/assets/objects/geometric/square.png": "9bab90c92f4459c460373f671df36da3",
"assets/assets/objects/shapes/home.png": "4641b164cd3454b701273b9cdab6d8f2",
"assets/assets/objects/shapes/arrow.png": "8fb5f2152817673f184422931e70247c",
"assets/assets/objects/shapes/cloud.png": "dca8c71296b4703d147bbe43eba718ea",
"assets/assets/objects/shapes/star.png": "a069cabff7541c97a5907caaafa83caa",
"assets/assets/objects/shapes/hart.png": "9204b272efdd44e2ef5a295a1fccb17e",
"assets/assets/objects/animals/dog.png": "3bc3ce387cbe72e27e2d6990d5333fa1",
"assets/assets/objects/animals/scimmia.png": "a6bd5e3278c1ab05acd6406e0147a265",
"assets/assets/objects/animals/cat.png": "1e9170b62c0c36e00d6a00f2e48edad0",
"assets/assets/objects/animals/tortoies.png": "1152910ee0fd2d393ec368d951d42864",
"assets/assets/objects/animals/crab.png": "8fc4727672b8a552efe1dcc6454e1ebe",
"assets/assets/objects/animals/fish.png": "4c7ca2e77f941af7dda59efc33d3098c",
"assets/assets/objects/figures/home.png": "4641b164cd3454b701273b9cdab6d8f2",
"assets/assets/objects/figures/arrow.png": "8fb5f2152817673f184422931e70247c",
"assets/assets/objects/figures/cloud.png": "dca8c71296b4703d147bbe43eba718ea",
"assets/assets/objects/figures/star.png": "a069cabff7541c97a5907caaafa83caa",
"assets/assets/objects/figures/hart.png": "9204b272efdd44e2ef5a295a1fccb17e",
"assets/assets/objects/insects/insect5.png": "233c229559839254b14f9d9d3b7ad20c",
"assets/assets/objects/insects/insect4.png": "a81ee65c5016032fa0be929caab8340f",
"assets/assets/objects/insects/insect6.png": "512c5701dbe86eb61bf298e5870f5af2",
"assets/assets/objects/insects/insect7.png": "9ec9eb017674c382f31cade9a849390d",
"assets/assets/objects/insects/insect3.png": "a303f6135951f330bd5f1a8078cbcd30",
"assets/assets/objects/insects/insect2.png": "04c11669eee4a76803ac5b1ab34f6d2f",
"assets/assets/objects/insects/insect1.png": "9e9c322015c5dd0ef26d2c25d3b38db0",
"assets/assets/objects/insects/flower_1.png": "e937e4ede4a8a83c5ecfa6accff7a800",
"assets/assets/objects/insects/flower_2.png": "c431708234603700155b85b9999df23b",
"assets/assets/audio/Trash-bin.mp3": "8f5cde0d1cca64672216ca9a64943355",
"assets/assets/audio/applause.wav": "d2586314f523c85fc4909a9e487a7006",
"assets/assets/audio/click.wav": "36dbff7b5d1fb79d9a42ec8029471149",
"assets/assets/audio/missed.mp3": "1b3c1087d9df0e0e68180a4a0e21a52a",
"assets/assets/audio/Wrong-answer-sound.mp3": "41ef5267fb87705b2ac94a030f1ce981",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
