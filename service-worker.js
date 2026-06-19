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
    "revision": "bdca36c97abe97e9ab69678c5901a6f2"
  },
  {
    "url": "ai/index.html",
    "revision": "7c6031266ff8c0b101efb10a2431caf2"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.045c7264.css",
    "revision": "0047fbbad3ac3c5596ec80316e24c9d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bffd8585.js",
    "revision": "88e297ceb72fb3cd83e39beae7fe33ab"
  },
  {
    "url": "assets/js/12.7318c753.js",
    "revision": "368c6f60505a038d5e9a700a5c3f4950"
  },
  {
    "url": "assets/js/13.0f9bb5b8.js",
    "revision": "7f384fe59859f840cb4c689121241604"
  },
  {
    "url": "assets/js/14.2ce21559.js",
    "revision": "7053c182d4cc8f5fec04697c7724a798"
  },
  {
    "url": "assets/js/15.9bd62ebb.js",
    "revision": "f0c28efacfa12faf3785ed414c54d285"
  },
  {
    "url": "assets/js/16.8c1d30f9.js",
    "revision": "5f1c603a24dff2808e0e95f9bbea7137"
  },
  {
    "url": "assets/js/17.6a79e39b.js",
    "revision": "631fe551f690efb015755e365ff9691d"
  },
  {
    "url": "assets/js/18.5978a0e4.js",
    "revision": "375f50b6344cd7cf96e0c6efe520fe31"
  },
  {
    "url": "assets/js/19.c9362d3f.js",
    "revision": "06b12d11865a2b9f5653be2788192f53"
  },
  {
    "url": "assets/js/2.847a50e2.js",
    "revision": "6f40f18ade53ea3034fd625dd325cc6d"
  },
  {
    "url": "assets/js/20.0a1885d8.js",
    "revision": "c1227ca7d092b0528600fb289142accf"
  },
  {
    "url": "assets/js/21.ea29fbc0.js",
    "revision": "97becedc84431988c7ef3fd7aa58571f"
  },
  {
    "url": "assets/js/22.3bec4d55.js",
    "revision": "2ed2518372f613731cb0b74860ccda67"
  },
  {
    "url": "assets/js/23.cf4bfa12.js",
    "revision": "4979d669a4e2298128e5e8cc2dd8740d"
  },
  {
    "url": "assets/js/24.acfd6ba0.js",
    "revision": "fdb0ddfcdd6b96255e9c9ee53eccc7ce"
  },
  {
    "url": "assets/js/25.72e4b705.js",
    "revision": "ccf8e18b17b1420329fc261f1ba88f66"
  },
  {
    "url": "assets/js/26.52736cb3.js",
    "revision": "a5e89d098b77e244db598f3d0d3c6295"
  },
  {
    "url": "assets/js/27.a83e7316.js",
    "revision": "08eec96564fa64220617d0f5ba83be4c"
  },
  {
    "url": "assets/js/28.317e3aa9.js",
    "revision": "4f59caca8321361b07a5c7701524f60b"
  },
  {
    "url": "assets/js/29.ded44730.js",
    "revision": "5e10563952cc5d276fbbdda855e26c18"
  },
  {
    "url": "assets/js/3.5e743c5f.js",
    "revision": "afdff9aa0aced389357877c2afb4105e"
  },
  {
    "url": "assets/js/30.21b28b8f.js",
    "revision": "c38c216ff8bfff5fdba517fbce19a8da"
  },
  {
    "url": "assets/js/31.035639f5.js",
    "revision": "d51a04ed76e0c4282c2beff7f461c868"
  },
  {
    "url": "assets/js/32.58255db6.js",
    "revision": "c067bf65e409ff73d7340d1687f1243b"
  },
  {
    "url": "assets/js/33.2cd6c741.js",
    "revision": "758d7572c57fd3c40ee1c252ac70ad4d"
  },
  {
    "url": "assets/js/34.c72a1671.js",
    "revision": "1f638d08467142b1155fbdd2f0f202dc"
  },
  {
    "url": "assets/js/35.d8c12bf1.js",
    "revision": "64d8f8049c43edf785d738dcacf82f85"
  },
  {
    "url": "assets/js/36.cd31010d.js",
    "revision": "f8076c298fa1a7661126885ff3310b36"
  },
  {
    "url": "assets/js/37.7ffdfa51.js",
    "revision": "c557df19ab8bd3d115ffc858fe2a04a4"
  },
  {
    "url": "assets/js/38.63aaf948.js",
    "revision": "e2b7f11547e7b5276cf7c7515aec7861"
  },
  {
    "url": "assets/js/39.fb1f9f7a.js",
    "revision": "1f11432f8d4e40e2f4d2646a6bf3022e"
  },
  {
    "url": "assets/js/4.882d8309.js",
    "revision": "e6d4ea8815ad890356ee317d701b8fb6"
  },
  {
    "url": "assets/js/40.39ca67fe.js",
    "revision": "2dfc9241dfc1c5730b74b23eb9da2020"
  },
  {
    "url": "assets/js/41.9c7b5eda.js",
    "revision": "ec34fc2808773fd457f4d4d43090305e"
  },
  {
    "url": "assets/js/42.ab086457.js",
    "revision": "0d5d4bdc368cd7765f83e9005432740f"
  },
  {
    "url": "assets/js/43.80bd2f6a.js",
    "revision": "dc22efeea29041b29af63bc8bef7f460"
  },
  {
    "url": "assets/js/44.69ea7ec3.js",
    "revision": "8bcc956ecaa6baacf927bda2da2ed0f3"
  },
  {
    "url": "assets/js/45.5b94261b.js",
    "revision": "792f3115ed3d89a033aca4497e3ee365"
  },
  {
    "url": "assets/js/46.ec44a8b8.js",
    "revision": "fe6e63e64006c2285ccb1f5dfd89ac48"
  },
  {
    "url": "assets/js/47.6d5bcf80.js",
    "revision": "d4c2b4596d2413d805278f80b10be707"
  },
  {
    "url": "assets/js/48.ac00cd92.js",
    "revision": "3f23c31171238d6a54f63ff265c748bb"
  },
  {
    "url": "assets/js/49.73082137.js",
    "revision": "0e500f826d52720fc8f7c33569791cc1"
  },
  {
    "url": "assets/js/5.cd210466.js",
    "revision": "fed4260189b9561ded44ef0b5a7150da"
  },
  {
    "url": "assets/js/50.c333bac6.js",
    "revision": "0cdc767467dcce416cfcb55123b73be3"
  },
  {
    "url": "assets/js/51.85c15534.js",
    "revision": "321b8e8bb896200195f70c07186d5dbc"
  },
  {
    "url": "assets/js/6.dde903b4.js",
    "revision": "0df2ae7c31efbbaa7dcc451d1e97a77d"
  },
  {
    "url": "assets/js/7.82471f00.js",
    "revision": "e5f3c7578595cf92dadddd6767a60676"
  },
  {
    "url": "assets/js/app.25555b5e.js",
    "revision": "6bd7283a2540b5fa421fd90f47c26e69"
  },
  {
    "url": "assets/js/vendors~docsearch.407c7246.js",
    "revision": "6e47bdedf0e858aee9cf0e49b1cc7ff3"
  },
  {
    "url": "assets/js/vendors~flowchart.d80b4d56.js",
    "revision": "061eb3e09bee52cacbe12b1d7088cff8"
  },
  {
    "url": "assets/js/vendors~notification.cf96a6a5.js",
    "revision": "1ac55cc4f1d9413003e98361e824af91"
  },
  {
    "url": "codes/GESP_1.html",
    "revision": "70c3706a82779b7d96dd94db535fca47"
  },
  {
    "url": "codes/GESP_2.html",
    "revision": "6f6dcb2b6686ed1fd8ec5ab1cad82a8c"
  },
  {
    "url": "codes/GESP_3.html",
    "revision": "ffc6df4ddfb67ab22889f19e06460f9e"
  },
  {
    "url": "codes/GESP_4.html",
    "revision": "652543014d9d13cf864d94839daf8ac1"
  },
  {
    "url": "codes/GESP_5.html",
    "revision": "a0197b7212e74314e064d3f03067f3e0"
  },
  {
    "url": "codes/GESP_6.html",
    "revision": "374aae0a36766d98e7f6f34b1e1c5f31"
  },
  {
    "url": "codes/GESP_7.html",
    "revision": "efd1e6e8d0f21aad61d69b4d11151fcd"
  },
  {
    "url": "codes/GESP_8.html",
    "revision": "f14afb0da407b8c7679f779091766837"
  },
  {
    "url": "codes/index.html",
    "revision": "a801b138154acce3a2ada2fe7fb3cac3"
  },
  {
    "url": "farmcode.jpg",
    "revision": "8d75b9b3f57d7f6cb8e2d2c9be537255"
  },
  {
    "url": "guide/index.html",
    "revision": "2d2ac87def3b659335ed3aeba28cc419"
  },
  {
    "url": "guide/introduce.html",
    "revision": "ccb6bcad113fb83efe96a8f8ee23e0cf"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d64ef6c392b5f63742df7eb75857a9ad"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "links/Game Theory.html",
    "revision": "6c7ee764d7a2b6f2604320e9687bd01c"
  },
  {
    "url": "links/index.html",
    "revision": "d784a81e96aae4e202a84ff6663598e0"
  },
  {
    "url": "links/links.html",
    "revision": "d03169874fbd94466705fb4fdc9b5267"
  },
  {
    "url": "links/wisdom.html",
    "revision": "31fb1d53b4a5998cabd28f2e0f298a27"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "maths/fun math.html",
    "revision": "1da6f36c0af1cfed838f3276c7104335"
  },
  {
    "url": "maths/index.html",
    "revision": "28272a12c34a6f3a9027f3ba18957556"
  },
  {
    "url": "merged.jpg",
    "revision": "b3a77707fb17b6b199f2b17cac183f26"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
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
