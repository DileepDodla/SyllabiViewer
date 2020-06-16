'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ad481382a0e930f8f8fdede4dab237dc",
"assets/assets/fonts/Verdana.ttf": "9823f881f20427dca0c5e9a045339601",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem1.json": "89d08f2b7cd6ccea84a4719fe1477676",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem2.json": "709e4fa72a56572a6ee32ab3c2733da9",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem3.json": "4f3982de1916351d86ebcc578ca70c77",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem4.json": "d3fbac3030be0cc7e114f2b1ee81599e",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem5.json": "cd79272d9fadfb9d044b8f38abad2ada",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem6.json": "4a2ed8a88a41377388c23ca7124889be",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem7.json": "9c0446eb42823feef0a5bbe86df424b9",
"assets/assets/syllabus/B.Tech/CE/reg2016/sem8.json": "d8cb6fd603fe050f6e96c1c091028b8a",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem1.json": "77b2052432c59e3b4f67b79200b22899",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem2.json": "f03721fa7060620ee8082290210fa61f",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem3.json": "8a0644020ce3b79ca559cd096acd5e24",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem4.json": "0fad4f041d03f996d313768018244572",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem5.json": "8264abbb1e4d22fb8436755d7fe1ea65",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem6.json": "a0c39680c2d8d7a3ca80b95788e5bd3f",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem7.json": "2ccf0be10f7d5c4f78a0213da1daa213",
"assets/assets/syllabus/B.Tech/CE/reg2018/sem8.json": "63fc753e00de714653f382af96a8e93c",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem1.json": "89d08f2b7cd6ccea84a4719fe1477676",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem2.json": "709e4fa72a56572a6ee32ab3c2733da9",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem3.json": "4f3982de1916351d86ebcc578ca70c77",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem4.json": "d3fbac3030be0cc7e114f2b1ee81599e",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem5.json": "cd79272d9fadfb9d044b8f38abad2ada",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem6.json": "4a2ed8a88a41377388c23ca7124889be",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem7.json": "9c0446eb42823feef0a5bbe86df424b9",
"assets/assets/syllabus/B.Tech/ChE/reg2016/sem8.json": "d8cb6fd603fe050f6e96c1c091028b8a",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem1.json": "77b2052432c59e3b4f67b79200b22899",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem2.json": "f03721fa7060620ee8082290210fa61f",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem3.json": "8a0644020ce3b79ca559cd096acd5e24",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem4.json": "0fad4f041d03f996d313768018244572",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem5.json": "8264abbb1e4d22fb8436755d7fe1ea65",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem6.json": "a0c39680c2d8d7a3ca80b95788e5bd3f",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem7.json": "2ccf0be10f7d5c4f78a0213da1daa213",
"assets/assets/syllabus/B.Tech/ChE/reg2018/sem8.json": "63fc753e00de714653f382af96a8e93c",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem1.json": "ef86f92d4f4c36315c42bfbc597a972b",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem2.json": "1e1860cf36f509784744b2bddf95f78a",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem3.json": "4d2eb177eb33060339992cf40e9bbf3f",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem4.json": "48dbd1ac80cae8881ec21a600085033f",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem5.json": "aa0ae5a91b2c49e8d387608ef3508126",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem6.json": "b87bb3c101597aa2fc6d3502eedd44ce",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem7.json": "e4bea57467725330f8bbc15532130477",
"assets/assets/syllabus/B.Tech/CSE/reg2016/sem8.json": "5cef89fb1648b158f9e5b3226dbeca39",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem1.json": "77b2052432c59e3b4f67b79200b22899",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem2.json": "f03721fa7060620ee8082290210fa61f",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem3.json": "8a0644020ce3b79ca559cd096acd5e24",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem4.json": "0fad4f041d03f996d313768018244572",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem5.json": "8264abbb1e4d22fb8436755d7fe1ea65",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem6.json": "a0c39680c2d8d7a3ca80b95788e5bd3f",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem7.json": "2ccf0be10f7d5c4f78a0213da1daa213",
"assets/assets/syllabus/B.Tech/CSE/reg2018/sem8.json": "63fc753e00de714653f382af96a8e93c",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem1.json": "ef86f92d4f4c36315c42bfbc597a972b",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem2.json": "1e1860cf36f509784744b2bddf95f78a",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem3.json": "4d2eb177eb33060339992cf40e9bbf3f",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem4.json": "48dbd1ac80cae8881ec21a600085033f",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem5.json": "85fcab0fdcb93aae398edd40b4c535a8",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem6.json": "73243d61effa85ca4945a9dd73d06d01",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem7.json": "955bdbbffa2177bc0170640558f3704a",
"assets/assets/syllabus/B.Tech/ECE/reg2016/sem8.json": "334835b29da2bf17141f038bea074dc4",
"assets/assets/syllabus/B.Tech/ECE/reg2018/oe.json": "860782ba9d6659232d446e2a1f6fcf1b",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem1.json": "0ecae0d6802deefc9153eaedd13d061e",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem2.json": "ca090a89b049fcbdacc265ec7ff9fcbb",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem3.json": "04a51eb95107fb1b6972a4f94cbf5967",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem4.json": "10d6e1d48f94d2b745f5d95eae6bcb1f",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem5.json": "32cc6691d9a5fdae857e3c1d738ca51b",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem6.json": "31bc462661752579ca5c9ae710c3247d",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem7.json": "487ca421099d8ac804d33d4ac4a90459",
"assets/assets/syllabus/B.Tech/ECE/reg2018/sem8.json": "018d6c358b9222a051de95b82f60a250",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem1.json": "ef86f92d4f4c36315c42bfbc597a972b",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem2.json": "1e1860cf36f509784744b2bddf95f78a",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem3.json": "4d2eb177eb33060339992cf40e9bbf3f",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem4.json": "48dbd1ac80cae8881ec21a600085033f",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem5.json": "85fcab0fdcb93aae398edd40b4c535a8",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem6.json": "73243d61effa85ca4945a9dd73d06d01",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem7.json": "955bdbbffa2177bc0170640558f3704a",
"assets/assets/syllabus/B.Tech/EEE/reg2016/sem8.json": "334835b29da2bf17141f038bea074dc4",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem1.json": "77b2052432c59e3b4f67b79200b22899",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem2.json": "f03721fa7060620ee8082290210fa61f",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem3.json": "8a0644020ce3b79ca559cd096acd5e24",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem4.json": "0fad4f041d03f996d313768018244572",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem5.json": "8264abbb1e4d22fb8436755d7fe1ea65",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem6.json": "a0c39680c2d8d7a3ca80b95788e5bd3f",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem7.json": "2ccf0be10f7d5c4f78a0213da1daa213",
"assets/assets/syllabus/B.Tech/EEE/reg2018/sem8.json": "63fc753e00de714653f382af96a8e93c",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem1.json": "89d08f2b7cd6ccea84a4719fe1477676",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem2.json": "709e4fa72a56572a6ee32ab3c2733da9",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem3.json": "4f3982de1916351d86ebcc578ca70c77",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem4.json": "d3fbac3030be0cc7e114f2b1ee81599e",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem5.json": "cd79272d9fadfb9d044b8f38abad2ada",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem6.json": "4a2ed8a88a41377388c23ca7124889be",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem7.json": "9c0446eb42823feef0a5bbe86df424b9",
"assets/assets/syllabus/B.Tech/ME/reg2016/sem8.json": "d8cb6fd603fe050f6e96c1c091028b8a",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem1.json": "77b2052432c59e3b4f67b79200b22899",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem2.json": "f03721fa7060620ee8082290210fa61f",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem3.json": "8a0644020ce3b79ca559cd096acd5e24",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem4.json": "0fad4f041d03f996d313768018244572",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem5.json": "8264abbb1e4d22fb8436755d7fe1ea65",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem6.json": "a0c39680c2d8d7a3ca80b95788e5bd3f",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem7.json": "2ccf0be10f7d5c4f78a0213da1daa213",
"assets/assets/syllabus/B.Tech/ME/reg2018/sem8.json": "63fc753e00de714653f382af96a8e93c",
"assets/assets/syllabus/M.Tech/ChE/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/ChE/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/ChE/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/ChE/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Communication%2520Systems/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Communication%2520Systems/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Communication%2520Systems/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Communication%2520Systems/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/CSE/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/CSE/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/CSE/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/CSE/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Environmental%2520Engineering/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Environmental%2520Engineering/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Environmental%2520Engineering/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Environmental%2520Engineering/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Geotechnical%2520Engineering/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Geotechnical%2520Engineering/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Geotechnical%2520Engineering/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Geotechnical%2520Engineering/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Hydraulics%2520and%2520Water%2520Resources%2520Engineering/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Hydraulics%2520and%2520Water%2520Resources%2520Engineering/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Hydraulics%2520and%2520Water%2520Resources%2520Engineering/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Hydraulics%2520and%2520Water%2520Resources%2520Engineering/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Industrial%2520Engineering/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Industrial%2520Engineering/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Industrial%2520Engineering/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Industrial%2520Engineering/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Power%2520Systems/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Power%2520Systems/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Power%2520Systems/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Power%2520Systems/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Production%2520Engineering/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Production%2520Engineering/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Production%2520Engineering/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Production%2520Engineering/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Signal%2520Processing/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Signal%2520Processing/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Signal%2520Processing/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Signal%2520Processing/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Structural%2520Engineering/sem1.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Structural%2520Engineering/sem2.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Structural%2520Engineering/sem3.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/assets/syllabus/M.Tech/Structural%2520Engineering/sem4.json": "5e42bb0c61bf57aad49a41d94da70717",
"assets/FontManifest.json": "a746dba8a20e42764fdee0996723e849",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "b1e53fde1f754f9aa8e46c004c25e79f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "5a5b2d616df2c163c0313d4ad19acca9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "2de94c92ecb198456868297fe6174f42",
"icons/Icon-512.png": "c5c69e96cd89a0b58b3b3e7b4e26699a",
"index.html": "cce857d99d8c251a5f71dae14b8224c0",
"/": "cce857d99d8c251a5f71dae14b8224c0",
"main.dart.js": "035124f5c6d7244a711727f76045d4ce",
"manifest.json": "1cd1c4552f5fe27a1600ee7d2660470f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
