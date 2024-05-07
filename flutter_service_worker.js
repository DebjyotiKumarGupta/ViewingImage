'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b8ba6beac0a979e5ff8786f3b9c1146d",
".git/config": "044e3ede9d12ea7fd642f4abfb5c1545",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "679a155b180e4eb11db82098f5b5520e",
".git/HEAD": "7bf83bccc414bd0efd61df7cd21c5542",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4ae37f7eea823c75be0f7bd68d6bad7f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4d4ffb27ef9dee1ba54231d6f4fd220",
".git/logs/refs/heads/liveProject": "5fabca28d5b422d3a0eea7778fcdceda",
".git/logs/refs/heads/master": "08dbde6224222d394514ed33ea1d4d19",
".git/logs/refs/remotes/origin/liveProject": "f4f4873cf114fcc8f7ba4ff1c5e4b8e1",
".git/logs/refs/remotes/origin/main": "ff8cd7de392c38afd82209c7db0fa5bb",
".git/logs/refs/remotes/origin/master": "5046a56640de992e13a554c816d33b8f",
".git/objects/04/3151f3e1ffc5c5d30e7547c86332331f390138": "4b724e10426349e5252675bc9960cfc6",
".git/objects/06/fb8da8b9e9ace106a4b7741cefda637b4069e9": "d9dcfd378bed06225a57297582a80757",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/c853727e573a8aff28d3b6c50deca311eba3dc": "58c25dc4b259c5e4e594896b8b0f2d31",
".git/objects/11/f6058ee8130217da1055ab43662cff90848fb3": "6ddaf3d9e31df8708ae91b73cf9d840d",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2e/44a4ce59f30f439615b1a083fedbf1c94ffd60": "dff1e797abbfdea21042e33963ba9ae1",
".git/objects/35/7c59754bf38952566b8c05fdd71230ff1298a5": "1330614cb0b84cb3e86c3c8e1a76204e",
".git/objects/37/883ac149a6079bac87791f556d561df1176228": "557b0ce8dd3e75db8f0bb043450f225c",
".git/objects/3e/f9a1040073cd990633ba377e7c2aaea0118c91": "3093a7e9fe4ebdad6b1311d3a0f57406",
".git/objects/43/7b163bb39763b8cf847f1861b4733761cc3934": "0d9be7637a0200fcace7df935c6867e4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/54/22d687bfe55b0c00ea1e61679c7630dab2d4e8": "1eaad13347d771429562869faa3831cb",
".git/objects/5a/3bc9a6eefe9aba4f26dd7c9941bc7e16a649c3": "5fe3fac4bbf65c5bc88d18743ef84547",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/65/af626fadcfe3f8f3e41e609a35bc98e678b863": "8fc751820ee147a7c34fa2ea96ecd6bf",
".git/objects/69/6e1c788aa8c35a56ee0e153b70c0770b2c33bb": "44177e846313ecbf31bc3b76146e4113",
".git/objects/6e/92e17c4ec84d6846705552f3a03cdf442080c3": "be775da61f24b082c220785b5c479c31",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7a/d1c4e65d0fceabe63c62b206351120f9cdaa7f": "cb8c99744595cd68772afebec58f1e0b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/cc216581cc174e5b334d8cb61838810823a00f": "7e87bd863ab87a9165210672b5fcc0fe",
".git/objects/97/15ad2c3d0e81dd78122b75efd23f498fa894bb": "32522d9d3d757a6ad11c8930ab20d280",
".git/objects/a4/b4c772c4b8dd3ebd6a5421459288a7546af15a": "563f6988faa00a3fa154fad713cd9226",
".git/objects/a7/8cab8fa67baf9d7a44571c291fd7f09c92a009": "349e1b5f8873fbe3cfa9b299ab45cc45",
".git/objects/a8/3f208a913f584d23790e9c978dd9a6ad8dfc03": "70ea99950ace50e0191403b031cadc90",
".git/objects/a8/bc1bd7807efe427fecf1915ba23eafa27d428b": "08c1ab0e4da5f355e1c75851055d0d46",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/487517415df5e65acbb669cd7e36b6a1f3acfc": "5fc6a748aa9b9b33270350caa5b117cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/da8c58e8cda41a1998631f155005698c480bba": "26cac375ec49662ae4a1b6135dcdf6c6",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/bb99270be94d0eadf573ee35c6a05450a48ac1": "a03b717e5a7b5eb1770c54e9eb3fe8e0",
".git/objects/e6/374684622a81a7e98d71b2c38779c12fc2cc3d": "686c85ca16a98e3449afe5df5d3d7794",
".git/objects/e7/c98f138cb0c734498dee1b06ec917b7ab90b5e": "ca7985b6a41499c7a4d8ce08ea0a899b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fb/e5e6a584a115f9ca7b26c3be116930be843ab4": "2276ebb9167bf46a0a8e1fa367aa971e",
".git/objects/fc/2c0830b46e4ff93382cdc45db95070b8ed169b": "77bca3d9a9396609a5ea161152d0ce78",
".git/objects/fc/78c0adb2f6471c07504a36d517924a8feb4567": "6844f8f7532c3524ad2b72b17ceb6d41",
".git/refs/heads/liveProject": "53ed4bbdaf95053136eafc5f3ad12a4a",
".git/refs/heads/master": "53ed4bbdaf95053136eafc5f3ad12a4a",
".git/refs/remotes/origin/liveProject": "53ed4bbdaf95053136eafc5f3ad12a4a",
".git/refs/remotes/origin/main": "5344efc072eddf4522b7d2f5b75d5224",
".git/refs/remotes/origin/master": "f8f3801acdb045a084d66c5bb649fd67",
"assets/AssetManifest.bin": "e7eb78cae2f5c3a2fd181528b16f3c4b",
"assets/AssetManifest.bin.json": "00d5106e0c132273a9607a81a6ef1226",
"assets/AssetManifest.json": "48cf75dbc9eec3d9cf0c7df59ff87ac3",
"assets/assets/like.png": "0c302e644b17ada6cb86f0d006f03e37",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "84305ac5f4b9d7ff2676f1fd624e8d11",
"assets/NOTICES": "e6b5aebfc72d387bbca435d1041709da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c96338f5d5a845b314b687cf38c1c69b",
"/": "c96338f5d5a845b314b687cf38c1c69b",
"main.dart.js": "82cbe435142fa8c9f78a0a4bfb0ad94a",
"manifest.json": "4e7bf72774eb3792e847925440f9c6aa",
"version.json": "ca2cb36efc0676b095331803d901844c"};
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
