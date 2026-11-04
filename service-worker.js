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
    "revision": "55d9e878c624ea9655b018cbac9156d9"
  },
  {
    "url": "ai/index.html",
    "revision": "1b4124d8bc8417514de7e1651bd8f9b5"
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
    "url": "assets/js/21.1c8e318f.js",
    "revision": "08586a578f006bb47a24a9c5656fc720"
  },
  {
    "url": "assets/js/22.d25cf719.js",
    "revision": "e74ba51fca018cdd2a1e738304e218ad"
  },
  {
    "url": "assets/js/23.bd6455a4.js",
    "revision": "fedeec2023853e61e62580c422f33dac"
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
    "url": "assets/js/29.eda1cec2.js",
    "revision": "5b3a580991d5db2803f41c616d836a6f"
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
    "url": "assets/js/31.ce12e6b1.js",
    "revision": "67947b4ba9af9401cde1334af2eb1a3d"
  },
  {
    "url": "assets/js/32.e0ed9f28.js",
    "revision": "adcfb45c31ea39641b0eee9ee44954cc"
  },
  {
    "url": "assets/js/33.8d1d92de.js",
    "revision": "1a76ad2317137aa15fc67e6e723ec3e6"
  },
  {
    "url": "assets/js/34.04c78093.js",
    "revision": "bc24ca0c778945235ef59c4880574560"
  },
  {
    "url": "assets/js/35.d8baf6be.js",
    "revision": "e2514011f1a5efb2387dbaf24d7e2bd1"
  },
  {
    "url": "assets/js/36.ac6e080c.js",
    "revision": "55168b219739d93164efe3496e530f16"
  },
  {
    "url": "assets/js/37.d47a4917.js",
    "revision": "a922a5ae314c07b6578a37718458c96a"
  },
  {
    "url": "assets/js/38.106a316d.js",
    "revision": "27a652fb6f9f072956c5cb582864d149"
  },
  {
    "url": "assets/js/39.00382cf4.js",
    "revision": "dc7a466fc2c1a16823569d66e573e2be"
  },
  {
    "url": "assets/js/4.882d8309.js",
    "revision": "e6d4ea8815ad890356ee317d701b8fb6"
  },
  {
    "url": "assets/js/40.75be0bac.js",
    "revision": "53b4d5fa1a4806c5d2ccdacd1a233f4f"
  },
  {
    "url": "assets/js/41.7c1c1eb4.js",
    "revision": "a1ebee4970b109bfd4de25d6d52b1610"
  },
  {
    "url": "assets/js/42.48862ea8.js",
    "revision": "b347f714a8cbd6a870fdbf4850f3ea26"
  },
  {
    "url": "assets/js/43.f2a27847.js",
    "revision": "6e8eaeca37ff0720c5815ccfe80c7150"
  },
  {
    "url": "assets/js/44.d087fd0a.js",
    "revision": "dd4f135155212ad35394737c0278ce83"
  },
  {
    "url": "assets/js/45.9c394bbe.js",
    "revision": "c39d85ee8951cd44a0b1afdfdfe49d2a"
  },
  {
    "url": "assets/js/46.7c095c70.js",
    "revision": "9b96c7b1ec8f8ce2d90be6261cd847b7"
  },
  {
    "url": "assets/js/47.a9daa660.js",
    "revision": "e1a2d881827f3c0252fc82fd1af68fed"
  },
  {
    "url": "assets/js/48.dc4fc996.js",
    "revision": "abf4fbd2629a15377ddd58c62efaea74"
  },
  {
    "url": "assets/js/49.9120de72.js",
    "revision": "904ed5f8f92427cbeaa6657f5928bb4d"
  },
  {
    "url": "assets/js/5.cd210466.js",
    "revision": "fed4260189b9561ded44ef0b5a7150da"
  },
  {
    "url": "assets/js/50.983ff966.js",
    "revision": "73f39861650637502a8b1a69659c351d"
  },
  {
    "url": "assets/js/51.158b7d67.js",
    "revision": "01471163fbd745f75c4e225ed9d30139"
  },
  {
    "url": "assets/js/52.7429462b.js",
    "revision": "cde3f261862c6c84cfdd4287b617a73e"
  },
  {
    "url": "assets/js/53.9cebdf81.js",
    "revision": "ff477da6d4f8cbe020b80f5a2f7c50df"
  },
  {
    "url": "assets/js/54.ccce8c51.js",
    "revision": "81d89bc54fba04c29bb8c13afbfa877d"
  },
  {
    "url": "assets/js/55.f1421df3.js",
    "revision": "59307bac4ead60b1c3f6a4eed1a95716"
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
    "url": "assets/js/app.72e83179.js",
    "revision": "4e99f06fec848e41c6eac93acb29f580"
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
    "url": "catch/index.html",
    "revision": "b0e342e5632dd01d9c9794406405e598"
  },
  {
    "url": "catch/宏观经济学.html",
    "revision": "519279840b65f996f6a466ccb089efdd"
  },
  {
    "url": "codes/GESP_1.html",
    "revision": "04cf50c997bdb455b21906ec14011dfd"
  },
  {
    "url": "codes/GESP_2.html",
    "revision": "618b4c459abca0c70b50de0c1f62ccde"
  },
  {
    "url": "codes/GESP_3.html",
    "revision": "a6862d37d70f5165d3cf8a06d9a85e6d"
  },
  {
    "url": "codes/GESP_4.html",
    "revision": "0dcdbdb65f94dc024345ca0563dee23a"
  },
  {
    "url": "codes/GESP_5.html",
    "revision": "5b3d74b166de449a858a896608d7f996"
  },
  {
    "url": "codes/GESP_6.html",
    "revision": "2841759c4370a152d32f2e04dc8d9d9e"
  },
  {
    "url": "codes/GESP_7.html",
    "revision": "4d22253a2d294f03b5369f15930f9341"
  },
  {
    "url": "codes/GESP_8.html",
    "revision": "69d846ac60ddd35e2aac706640a88fc7"
  },
  {
    "url": "codes/index.html",
    "revision": "9b4bb21b79c9c998d7849d6603067eca"
  },
  {
    "url": "codes/NOI.html",
    "revision": "85ea394b092310e96495169d2c8c09cb"
  },
  {
    "url": "farmcode.jpg",
    "revision": "8d75b9b3f57d7f6cb8e2d2c9be537255"
  },
  {
    "url": "guide/index.html",
    "revision": "e0cd3dc58ca3e2dea618a481e4ff59c6"
  },
  {
    "url": "guide/introduce.html",
    "revision": "85c944b81d50c5b5c42ad0c8b5d5ab14"
  },
  {
    "url": "guide/mysite.html",
    "revision": "799c11e87c7bdd3134d5534ff6438194"
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
    "revision": "74b21cf22d48194d77d9c8e87169942f"
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
    "url": "links/index.html",
    "revision": "a4ad6045d956fc818ac33bb711e5d621"
  },
  {
    "url": "links/links.html",
    "revision": "0da0a3f69a8d23f23e139c590d7bf308"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "maths/fun math.html",
    "revision": "6bb89a7f3c9135f97623467d64c1741b"
  },
  {
    "url": "maths/index.html",
    "revision": "e5461ce37c30dea6fe35e8c93eff9c2e"
  },
  {
    "url": "maths/小学奥数.html",
    "revision": "af29d383e6f2355579844f79a05e6323"
  },
  {
    "url": "merged.jpg",
    "revision": "b3a77707fb17b6b199f2b17cac183f26"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "why/index.html",
    "revision": "a8d2255f6ffabe9e1419ad3da1105405"
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
