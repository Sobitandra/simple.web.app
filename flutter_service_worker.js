'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "37b5f3f09ced91c549e27c5e82d13e16",
"version.json": "1dd8c90fc22752096fcb5afe0f3acdc6",
"index.html": "91cd895d420f384fcb8805846704c613",
"/": "91cd895d420f384fcb8805846704c613",
"main.dart.js": "241e4a2b24726602be068ae1e9627368",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.wasm.map": "b70d855345c62da5485acb82db896919",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "bc146d91b14c9b40ddf712a689f653cc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "66214d5b2e3c12a18dd3000d28b1ff25",
"main.dart.wasm": "855bc3b9a402cdef9cdfee414d916ecb",
"assets/AssetManifest.json": "c2c87edab636e605087202058c583f19",
"assets/NOTICES": "1f2539266e0d24e7dc38efb5cb5c7af6",
"assets/FontManifest.json": "c78f6af764baa4346d9e3defec7ef0b3",
"assets/AssetManifest.bin.json": "f603a637a93e3ba328cfbbddff51d1dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "40da01f4aad5773ed97b32021b9fc7ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "264ac4c454038f8a922b65755f53f6ed",
"assets/fonts/arial_bold.ttf": "142301adf4e0699237f9e11a77761d0d",
"assets/fonts/arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/fonts/MaterialIcons-Regular.otf": "0f2e07035a7580e237a6c4e79e7fcb0e",
"assets/assets/images/blue-arrow.png": "ebe65a8526c8da9d1e97eefd8eb75ae8",
"assets/assets/images/fullScreenOff.png": "6cf018bb24477e88221887b033e8e69d",
"assets/assets/images/check.png": "dc0a5f7aa4b134c008c19c6b238ecca9",
"assets/assets/images/check.jpg": "df066218c21a2f77dac77106c5d3085b",
"assets/assets/images/mustbe.png": "e2dfa1b8db1f57098bbda5f0560c19cd",
"assets/assets/images/3Bars.png": "4c14dcbac9e63cd4ffa76855d9321817",
"assets/assets/images/pc_off.png": "a3edba5617f764145f79ac6a36e27245",
"assets/assets/images/no.png": "c34edc786f8108ea6a576937623a5ae9",
"assets/assets/images/fullScreenOn.png": "322fe5f3af8208f5a541310dd65594f1",
"assets/assets/images/close_bin.png": "28619237a241d34f969c7c3dac446ba0",
"assets/assets/images/reset.png": "669da2ec0c5e91e8696b2d0f0b799603",
"assets/assets/images/yes.png": "f7b40a5dbdbcc4a6cad68d048b21dbf9",
"assets/assets/images/sound.png": "58f9c052f330a26389b7b5ab8ec40f1e",
"assets/assets/images/trashb.jpg": "a148c1b0d94298c777fcea0b21905be0",
"assets/assets/images/open_bin.png": "3af24e7188a7c218adc59cfef23b2250",
"assets/assets/images/123.jpg": "44531d605e9d6c9ea5c3693e52f8395c",
"assets/assets/images/no_sound.png": "3f45d5ef2f2ef03f8e4b7a32985559bd",
"assets/assets/images/logo.png": "c84d805c02296d2be52ef099d4c561da",
"assets/assets/images/pc.png": "30f0ca49f09fc1d6769929e4227bb376",
"assets/assets/images/undo.png": "6a7e4060c03e03fc335e364182068629",
"assets/assets/images/colours.jpg": "f0b1c78211413176f7d40b76273efbfb",
"assets/assets/images/last.png": "98209f8fb6fc90f64a18b136e4c377a6",
"assets/assets/images/123x.jpg": "5aecab68167e0d2d9c96d4ae5d8a0a80",
"assets/assets/images/redo.png": "9e507a801f28a919dbc1c3e94e224692",
"assets/assets/images/dropIcon.png": "9936efb028dad8259ef3ce5ceb0e77eb",
"assets/assets/svg_images/eraser-svgrepo-com.svg": "df92e2f0931e2a2da793efac227c72d6",
"assets/assets/svg_images/redo-svgrepo-com.svg": "6af724c627cc9204aafe5a1c678d93d7",
"assets/assets/svg_images/cross.svg": "40c22658bf654de77a7e071fb1634b12",
"assets/assets/svg_images/undo-svgrepo-com.svg": "43cda4046d91070c321261248cc4ed60",
"assets/assets/objects/balls/rugby.png": "9075a7e9cba32cf36015b0243b7f987b",
"assets/assets/objects/balls/tennis.png": "9b83ef2e2de91876d2139e8948706efc",
"assets/assets/objects/balls/soccer.png": "d5566b4c5e3df2860a72c8db07ca274e",
"assets/assets/objects/balls/basket.png": "7af5acb4f4257e31b28b65623990df22",
"assets/assets/objects/balls/pal.png": "8ccc8676350525508f5a9caea7c8a05b",
"assets/assets/objects/fruit/fruit3.png": "891725e225ca194b41d28110ea72d659",
"assets/assets/objects/fruit/fruit2.png": "bc51476633f6b0ee68ae2b857ef066ef",
"assets/assets/objects/fruit/fruit1.png": "24aeb030babbd816a7705aafba989a75",
"assets/assets/objects/fruit/fruit5.png": "0caf0d89fccd3cb76ddb9b054dc6f9d6",
"assets/assets/objects/fruit/fruit4.png": "6a59a6fc1c882a99b51b34171f81a976",
"assets/assets/objects/fruit/fruit6.png": "a71a21fd28fdd6bafa3c8bc77e84ac75",
"assets/assets/objects/shapes_geometric/ex.png": "8fb71065eeea5582eb0af0b269a86376",
"assets/assets/objects/shapes_geometric/rectangle.png": "cd525d30243f3c2fac04c2d09ce90212",
"assets/assets/objects/shapes_geometric/circle.png": "1232ac8e9c95093427fc2a2cca814578",
"assets/assets/objects/shapes_geometric/triangle.png": "c8ba23f91c683083f5849d2aedcdbf28",
"assets/assets/objects/shapes_geometric/square.png": "9bab90c92f4459c460373f671df36da3",
"assets/assets/objects/toys/colored_ball.png": "22a569f58c6f673c9262806c93f26f48",
"assets/assets/objects/toys/doll.png": "ae7035a112aa2ae5ceac4402ab5aec3e",
"assets/assets/objects/toys/robot.png": "2d28ff13a2ad67bf6eee137aa3667e17",
"assets/assets/objects/toys/car.png": "255e264be5e5153dc5dd242200ae3076",
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
"assets/assets/objects/animals/dog.png": "3a49377d9bc0f63bb6275727041cdfbc",
"assets/assets/objects/animals/scimmia.png": "a5c3764714e98768f3a7dfdd232fb18f",
"assets/assets/objects/animals/cat.png": "adc3e511501ccaf125848219e9c72166",
"assets/assets/objects/animals/tortoies.png": "1efcb6ebfc8eca7962192278ad4af7ed",
"assets/assets/objects/animals/crab.png": "3ffa72b43920e01ab441051e8cce67c7",
"assets/assets/objects/animals/fish.png": "0dc65cfa9ef9c66f0ae2db2500cff1c7",
"assets/assets/objects/figures/home.png": "4641b164cd3454b701273b9cdab6d8f2",
"assets/assets/objects/figures/arrow.png": "8fb5f2152817673f184422931e70247c",
"assets/assets/objects/figures/cloud.png": "dca8c71296b4703d147bbe43eba718ea",
"assets/assets/objects/figures/star.png": "a069cabff7541c97a5907caaafa83caa",
"assets/assets/objects/figures/hart.png": "9204b272efdd44e2ef5a295a1fccb17e",
"assets/assets/objects/insects/insect5.png": "a7e8edde00a9bf24642bacc59a8f57d3",
"assets/assets/objects/insects/insect4.png": "cbc7bea89a4b188a49d1292af2604c53",
"assets/assets/objects/insects/insect6.png": "d86c2906b523f27e17f59e091fdcf0c6",
"assets/assets/objects/insects/insect7.png": "b0c62c56c29d8d33dc1ec062a663b61d",
"assets/assets/objects/insects/insect3.png": "bb1a9686dc882adda1a945dee1a17eed",
"assets/assets/objects/insects/insect2.png": "e5ba4a18ddd0a35a4be5b2888ac17bb1",
"assets/assets/objects/insects/insect1.png": "0f5dbda6876349be3fec5c7524e10cc6",
"assets/assets/objects/insects/flower_1.png": "a2249fbb2c7bbdeb1cf7bdcbb41e5b8a",
"assets/assets/objects/insects/flower_2.png": "8511792ad81140504efb8fd2fb30c77f",
"assets/assets/audio/Trash-bin.mp3": "8f5cde0d1cca64672216ca9a64943355",
"assets/assets/audio/applause.wav": "d2586314f523c85fc4909a9e487a7006",
"assets/assets/audio/click.wav": "36dbff7b5d1fb79d9a42ec8029471149",
"assets/assets/audio/missed.mp3": "1b3c1087d9df0e0e68180a4a0e21a52a",
"assets/assets/audio/Wrong-answer-sound.mp3": "41ef5267fb87705b2ac94a030f1ce981",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
