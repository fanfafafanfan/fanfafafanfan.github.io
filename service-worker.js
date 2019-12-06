/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a954092309e46c0eda9a8d9337fa12ec"
  },
  {
    "url": "assets/css/0.styles.fb4a43b5.css",
    "revision": "86b0e15586a4c02c87aa74c0555dffc4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e0ce4abd.js",
    "revision": "0c15ec133cc378579e9522b88b7c0234"
  },
  {
    "url": "assets/js/11.cbc03147.js",
    "revision": "1485bb8506e33106d3bd2268e8dd32de"
  },
  {
    "url": "assets/js/12.70919d72.js",
    "revision": "205f0bf089c43c6ac39d302e6b586380"
  },
  {
    "url": "assets/js/13.903cad9a.js",
    "revision": "89e1f7ee9300a8bbd0de3bff6238906b"
  },
  {
    "url": "assets/js/14.5570a386.js",
    "revision": "013a204f5876e5c724974bfb6ca44dde"
  },
  {
    "url": "assets/js/2.f6ff693a.js",
    "revision": "c195351a593915e143a309d702f9c1d2"
  },
  {
    "url": "assets/js/3.f12db583.js",
    "revision": "4a143beb52891ab6999f257fd37e9437"
  },
  {
    "url": "assets/js/4.38aa44de.js",
    "revision": "0a4caabb58c6dcefc7bd12bd2f08772c"
  },
  {
    "url": "assets/js/5.26f937d8.js",
    "revision": "f56264941b2d660205b7d898c9496688"
  },
  {
    "url": "assets/js/6.005e41e4.js",
    "revision": "bfbc12dd2b1b36a329762b3b86275743"
  },
  {
    "url": "assets/js/7.ef0bccb4.js",
    "revision": "2f1204e6bb53cbb53af554dfa62d3e3f"
  },
  {
    "url": "assets/js/8.00df5470.js",
    "revision": "54b0b173a412f8170681adfb61a7806c"
  },
  {
    "url": "assets/js/9.b64ce4df.js",
    "revision": "2f1d0541eb3d3f3496b4752a07319f1f"
  },
  {
    "url": "assets/js/app.37c122b7.js",
    "revision": "8161f363f238fdaa3b7d03673bf88e8c"
  },
  {
    "url": "guide/index.html",
    "revision": "33b1dfc3436c03edc1adb1a7fc7e747d"
  },
  {
    "url": "index.html",
    "revision": "65f11f41e99a4fddb2c7ef249c5046fd"
  },
  {
    "url": "money.gif",
    "revision": "99c4719dc61c4f58584bd5bd58774415"
  },
  {
    "url": "thumbnail/filesystem/index.html",
    "revision": "001725657631afc078d34087ddc924d1"
  },
  {
    "url": "thumbnail/node/index.html",
    "revision": "44c7aeeb6daa20ca0a929824130707f5"
  },
  {
    "url": "thumbnail/what-is-nodejs/index.html",
    "revision": "efd734bd6231e4d67c0c5e8cfece63f8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
