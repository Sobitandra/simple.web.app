'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "852fcc9eff37e1e1f531189e5c8669ea",
"version.json": "1dd8c90fc22752096fcb5afe0f3acdc6",
"index.html": "82dfab57cb45191406ab05381ad7cd97",
"/": "82dfab57cb45191406ab05381ad7cd97",
"main.dart.js": "dafde8e05931808d5c7bc6ddab202e8b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "2a0b154cc8ff614e74081a0af252980a",
"main.dart.mjs": "b589ce765ea237d6aca02d48ceba661b",
"icons/Icon-192.png": "29cb470a93b6188dcb81d2ee3421fed5",
"icons/Icon-maskable-192.png": "29cb470a93b6188dcb81d2ee3421fed5",
"icons/Icon-maskable-512.png": "bcad30c0a7a87183738368151b347b81",
"icons/Icon-512.png": "bcad30c0a7a87183738368151b347b81",
"manifest.json": "a018824eccc61567454f80bdd5676f56",
"main.dart.wasm": "39486ad465f43b0011b590b5387675dc",
"assets/AssetManifest.json": "c2c87edab636e605087202058c583f19",
"assets/NOTICES": "6bcf0ba1750fa65246e2e043d5344c5f",
"assets/FontManifest.json": "c78f6af764baa4346d9e3defec7ef0b3",
"assets/AssetManifest.bin.json": "f603a637a93e3ba328cfbbddff51d1dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ddb5253803db99aa4c89785e25567764",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "264ac4c454038f8a922b65755f53f6ed",
"assets/fonts/arial_bold.ttf": "142301adf4e0699237f9e11a77761d0d",
"assets/fonts/arial.ttf": "07d53b5b4d43b671764d7075be494019",
"assets/fonts/MaterialIcons-Regular.otf": "3d674e5a95c66d3418d7617e399882d9",
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
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
