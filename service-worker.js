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
    "revision": "6b13ee9ffb7aacd0296bb6e789a2dd29"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.0d949f24.css",
    "revision": "e6c41ca985da9bb269b60a6163e2c0f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.defc280f.js",
    "revision": "8a050c0fef0b10bd440e824537f04d6f"
  },
  {
    "url": "assets/js/11.0907d820.js",
    "revision": "371c5f58fab4cd529f6cb93c9a925b6a"
  },
  {
    "url": "assets/js/12.071cd5f2.js",
    "revision": "c9789c8d34c26725259760d846a0a015"
  },
  {
    "url": "assets/js/13.213f8271.js",
    "revision": "d6e78e8666b17c34838c6ee442692e99"
  },
  {
    "url": "assets/js/14.1e19f772.js",
    "revision": "9d09b7fe13f758c481e4cf3499e77bc8"
  },
  {
    "url": "assets/js/15.4612508d.js",
    "revision": "13847a23d284ffeb67b5e371e39c0c14"
  },
  {
    "url": "assets/js/16.bb2d624c.js",
    "revision": "3fe085f46ec74e2899f7430a235a941c"
  },
  {
    "url": "assets/js/17.e38a344a.js",
    "revision": "bd0b287a520d50eebfd212fa7c4a283f"
  },
  {
    "url": "assets/js/18.a16d444b.js",
    "revision": "73dce79ffcc431b5beb7ff9888049c4b"
  },
  {
    "url": "assets/js/19.d1887e97.js",
    "revision": "991952c3efcc2c8acdc2d7f7ce6c2e26"
  },
  {
    "url": "assets/js/20.79b5aef6.js",
    "revision": "1d8d096370bd9b57ddee5f02a68315eb"
  },
  {
    "url": "assets/js/21.fcea410d.js",
    "revision": "38d12db6effb80cf34aea99d60242435"
  },
  {
    "url": "assets/js/22.d319e342.js",
    "revision": "6d2240e9c0f4e5004cc3e0b05fc20080"
  },
  {
    "url": "assets/js/23.be80badc.js",
    "revision": "8b83e37e4213cb6394701efbe315299a"
  },
  {
    "url": "assets/js/24.cdde130f.js",
    "revision": "a1035402496d709f196cc9e20a84e4ba"
  },
  {
    "url": "assets/js/25.29b5b84e.js",
    "revision": "a7cc40772b6d1e9f1025cb7b12a28ad5"
  },
  {
    "url": "assets/js/26.b12c7725.js",
    "revision": "ce0cbb0a65a57015c017f85f6cacd31f"
  },
  {
    "url": "assets/js/27.968fd2ce.js",
    "revision": "8708e19035c96d59a138c19dd2dc0751"
  },
  {
    "url": "assets/js/28.a466e4b3.js",
    "revision": "5312905d1d268bb7cab47b9925c422fb"
  },
  {
    "url": "assets/js/29.d5010c92.js",
    "revision": "7a07f8878c11d3c02eeb34a490825c2e"
  },
  {
    "url": "assets/js/30.d6327c8b.js",
    "revision": "9360cee57c49b5300d2a56670c398b70"
  },
  {
    "url": "assets/js/31.c866f431.js",
    "revision": "fde94f139638e2a79726e24547f6d4f8"
  },
  {
    "url": "assets/js/32.74b516bf.js",
    "revision": "f4d3aa3a35ad9aad040a7913eeb3cbb3"
  },
  {
    "url": "assets/js/33.b3bde64d.js",
    "revision": "6b347325e377594edd8a632aa92a264a"
  },
  {
    "url": "assets/js/34.0aa314e9.js",
    "revision": "e2a64771160b9a8f2c8c4b827a479eb2"
  },
  {
    "url": "assets/js/35.aa2008b2.js",
    "revision": "94dc901063c12d775a7ce57984c1f51a"
  },
  {
    "url": "assets/js/36.0e98d206.js",
    "revision": "d85bd6082c1699f62796846557da2ad5"
  },
  {
    "url": "assets/js/37.5425221f.js",
    "revision": "10de3a0f38ffca4071fd0dca37aa151e"
  },
  {
    "url": "assets/js/38.3384c204.js",
    "revision": "9bd7ea3986c3584dd62d22c8a3cb7cfd"
  },
  {
    "url": "assets/js/39.7a2a3c16.js",
    "revision": "c24cb0953bfa4349c809667a697198b2"
  },
  {
    "url": "assets/js/40.b47ebdff.js",
    "revision": "57179af8103f22ef714d42b192bffdd3"
  },
  {
    "url": "assets/js/41.288f7405.js",
    "revision": "ed59f9d6987d28ccfc488d6ecb92edb5"
  },
  {
    "url": "assets/js/42.f229938a.js",
    "revision": "ab81e31646ab1793aa42462a49c2e562"
  },
  {
    "url": "assets/js/43.1a5c5e24.js",
    "revision": "5a6742c6e3c25c6784cbc281ab5a8b82"
  },
  {
    "url": "assets/js/44.ce262f03.js",
    "revision": "c0d06e7188d9b1467412bae4d7bcceaa"
  },
  {
    "url": "assets/js/45.b5800da7.js",
    "revision": "660cd207ac7fff93cc65ec46fb526b1c"
  },
  {
    "url": "assets/js/46.6268ef52.js",
    "revision": "ccc543683cc813f741f81f2a2b14ac98"
  },
  {
    "url": "assets/js/47.d557831f.js",
    "revision": "5972ca01e7bef808f1f2dd222bab2cbd"
  },
  {
    "url": "assets/js/48.fcf83cb6.js",
    "revision": "bd1dbcc0a02c4eb5778ca2f874948dc2"
  },
  {
    "url": "assets/js/49.24a64416.js",
    "revision": "f22985fa947f1be86fc8784fcef10c55"
  },
  {
    "url": "assets/js/5.8347827c.js",
    "revision": "92d3049bd0ec60ae9c9495c808e2a380"
  },
  {
    "url": "assets/js/50.5abfc4cf.js",
    "revision": "3589dca028fccadd6eba46e1eafe91b2"
  },
  {
    "url": "assets/js/51.4eeb8e20.js",
    "revision": "11a0cf78fb4ddf03f15041dab2f7c90b"
  },
  {
    "url": "assets/js/52.689e0966.js",
    "revision": "c07f73b67646029b23514c307c72c682"
  },
  {
    "url": "assets/js/53.6d307f06.js",
    "revision": "c556c801dea143a4d8f56f55e09bd505"
  },
  {
    "url": "assets/js/54.3f010c35.js",
    "revision": "a267d61b05e6f8c066a4f2bce1c19981"
  },
  {
    "url": "assets/js/55.e5afa8f0.js",
    "revision": "44c125b30f7d8bfc4d4b606ed1cd0e58"
  },
  {
    "url": "assets/js/56.5892829b.js",
    "revision": "49e95047f1a70904d1b59e7cae542cef"
  },
  {
    "url": "assets/js/57.b1c4f458.js",
    "revision": "7c000db936872cf91344e520fc12cce8"
  },
  {
    "url": "assets/js/58.a11753ce.js",
    "revision": "10978b89a94d5ea4509a6e9d0fef02f2"
  },
  {
    "url": "assets/js/59.8d640bb7.js",
    "revision": "167a847e3e2197034265ceed76dcaed9"
  },
  {
    "url": "assets/js/6.b53cb2c0.js",
    "revision": "c15cb2ca2491fb778f368bcd06256cb2"
  },
  {
    "url": "assets/js/60.86ae5029.js",
    "revision": "2892b735b2cabfdb2342dcda8e9a7d2f"
  },
  {
    "url": "assets/js/61.17e4a2d8.js",
    "revision": "c53082c2e18a739f7e945143230c12a4"
  },
  {
    "url": "assets/js/62.953575df.js",
    "revision": "6fdc811f9bebc8fc9c152842b552792c"
  },
  {
    "url": "assets/js/63.1a2a8316.js",
    "revision": "04ef66fd710b73c5c9b44332445b2bd9"
  },
  {
    "url": "assets/js/64.d4c144cd.js",
    "revision": "456efcb9d72e6da11bfdca59d2dca1df"
  },
  {
    "url": "assets/js/65.5972fda9.js",
    "revision": "ed764ea64da4d107994a4f38e776800f"
  },
  {
    "url": "assets/js/66.c5ff2be9.js",
    "revision": "a0e4a1038b916c97023428b20c756bd1"
  },
  {
    "url": "assets/js/67.ddb3d086.js",
    "revision": "826faca8175221b82fac4b36ff8a79b4"
  },
  {
    "url": "assets/js/68.9dec2bde.js",
    "revision": "5ba3717d9968ae7121c72f043600c883"
  },
  {
    "url": "assets/js/69.5c08efbd.js",
    "revision": "0e2b8cf332bd20dccce0dd953bc90375"
  },
  {
    "url": "assets/js/7.23a7b7da.js",
    "revision": "28c702ed254b7df118315a97229cd87c"
  },
  {
    "url": "assets/js/8.8be4391e.js",
    "revision": "0a1886a130ee2e9a5209848072c857e0"
  },
  {
    "url": "assets/js/9.6319a70a.js",
    "revision": "a4bfa8684d2f4114d2c7fc889841eaa4"
  },
  {
    "url": "assets/js/app.3dcb3081.js",
    "revision": "ac753f0c402c531572083aebe8eb0933"
  },
  {
    "url": "assets/js/vendors~docsearch.96cada6e.js",
    "revision": "2b0ca3fde340072473368c345c673901"
  },
  {
    "url": "assets/js/vendors~flowchart.a5e2895e.js",
    "revision": "4e26299ce5a008157de4386dfc5a6d7f"
  },
  {
    "url": "assets/js/vendors~notification.2227e2f2.js",
    "revision": "d310530e10d60ae00bc2231a7f8eb6af"
  },
  {
    "url": "farmcode.jpg",
    "revision": "8d75b9b3f57d7f6cb8e2d2c9be537255"
  },
  {
    "url": "guide/algorithm.html",
    "revision": "9c936ac467e6373fafe27a24a7ccfaac"
  },
  {
    "url": "guide/Beat.html",
    "revision": "95bd669906abcf951ca68d9154660ccc"
  },
  {
    "url": "guide/code.html",
    "revision": "b219f975e2b9b4b6979f64ae9275f227"
  },
  {
    "url": "guide/Eating.html",
    "revision": "9866589f8f570af3799d4e6193372436"
  },
  {
    "url": "guide/farm.html",
    "revision": "24c24bfc61fcc52fce390a45d4fd0630"
  },
  {
    "url": "guide/index.html",
    "revision": "b491460c3c2d1b1677605056f9c61e94"
  },
  {
    "url": "guide/introduce.html",
    "revision": "4db77fc74aef47e63664584cb5e92bad"
  },
  {
    "url": "guide/life.html",
    "revision": "5567abcdd56a5ae6aad88cdace78bb8e"
  },
  {
    "url": "guide/potato.html",
    "revision": "be114cda5a2c5f65cd2988cbbc9b82a9"
  },
  {
    "url": "guide/python.html",
    "revision": "8cf676e8dabfe4b27cd37c1c4d1aadca"
  },
  {
    "url": "guide/sleep.html",
    "revision": "fbe13e0e5ec84da26d9970e4809812d6"
  },
  {
    "url": "guide/tomato.html",
    "revision": "2b8ff2babdf67b691ed135ece8f1ac9d"
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
    "revision": "a345a79d4f1e861cf7e8454672f143a9"
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
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miniprogram/index.html",
    "revision": "f52feab5294597fe216a3fe9b9ca05a9"
  },
  {
    "url": "miniprogram/开发过程.html",
    "revision": "e4bcfde1d779f92e2e039b6010e65202"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "Python_algorithm/index.html",
    "revision": "e2bc69968d6e264bfa04a39ce7386528"
  },
  {
    "url": "Python_automation/basic.html",
    "revision": "67140bf9c6f8939d1e335cfe135049fc"
  },
  {
    "url": "Python_automation/batchworkbook.html",
    "revision": "f9e22aa8bfec434b1b0a998722eb7083"
  },
  {
    "url": "Python_automation/DecryptPDF.html",
    "revision": "4eaee256d9f073b3ae395e93b395b5c1"
  },
  {
    "url": "Python_automation/EncryptPDF.html",
    "revision": "45cab5fe968eaf382656248a89eadde0"
  },
  {
    "url": "Python_automation/example.html",
    "revision": "b794814977bde60b8544ab7d5c99fcd3"
  },
  {
    "url": "Python_automation/imgresized.html",
    "revision": "8492ed3a5fc9b9fb2efb77ba01387151"
  },
  {
    "url": "Python_automation/index.html",
    "revision": "9232d96f5a63d8f5e29068913d9d1ba2"
  },
  {
    "url": "Python_automation/joinppt.html",
    "revision": "2f8de0172ef1910ff2ab7f2e0d638a37"
  },
  {
    "url": "Python_automation/pdf2word.html",
    "revision": "2d24b9149bd8797e4d2ab9575c229ac9"
  },
  {
    "url": "Python_automation/Photo synthesis.html",
    "revision": "24a0a9a04b44210349632e7630bfe5d1"
  },
  {
    "url": "Python_automation/ppt2image.html",
    "revision": "4c01f723ec8912ead818b2447b05eba8"
  },
  {
    "url": "Python_automation/testipone.html",
    "revision": "5f9797b8f0aea0aa86703991742c865d"
  },
  {
    "url": "Python_automation/word2pdf.html",
    "revision": "07318836838c92ce4d7c1a317b77714c"
  },
  {
    "url": "python_basic/01 why.html",
    "revision": "7636c0643f7e0482acc55b304f0e2899"
  },
  {
    "url": "python_basic/02 环境安装与配置.html",
    "revision": "1425eacb5fb2c81e69eb68214a45df7a"
  },
  {
    "url": "python_basic/03变量.html",
    "revision": "4f9c02a071aca1ba1a16c41213967792"
  },
  {
    "url": "python_basic/04数字.html",
    "revision": "c164577e138f0481ba4c58af347a1f1f"
  },
  {
    "url": "python_basic/index.html",
    "revision": "ea4a94b55f3d66bab725197389245adf"
  },
  {
    "url": "Python_pandas/changeDatatype.html",
    "revision": "1f3a2c70269169d0748cb05141e4a9b0"
  },
  {
    "url": "Python_pandas/concatenateTables.html",
    "revision": "01df87d1f3690906f0e5ee55b65d622e"
  },
  {
    "url": "Python_pandas/CreatDataFrame.html",
    "revision": "8fc194d552f7eb7cfeec2081d4bf97f4"
  },
  {
    "url": "Python_pandas/createBonusColumn.html",
    "revision": "3ba2997edcbbf6cde3c16882633be6dc"
  },
  {
    "url": "Python_pandas/dropDuplicateEmails.html",
    "revision": "ed42e44dc0ceed11b6f007776665bb7d"
  },
  {
    "url": "Python_pandas/dropMissingData.html",
    "revision": "110801310871acd994910d869302b5a4"
  },
  {
    "url": "Python_pandas/example.html",
    "revision": "129933f66a5c69012d4b03b8758ac248"
  },
  {
    "url": "Python_pandas/fillMissingValues.html",
    "revision": "b35b4076ae39ac46148bc0714936e69a"
  },
  {
    "url": "Python_pandas/findHeavyAnimals.html",
    "revision": "009b53b3a671fe8b698ce370ad0aa1f8"
  },
  {
    "url": "Python_pandas/getDataframeSize.html",
    "revision": "f8b59a3c35c9ee223bb6a951ab53caef"
  },
  {
    "url": "Python_pandas/index.html",
    "revision": "5909bd9fbaf0da33666231f66128a13f"
  },
  {
    "url": "Python_pandas/meltTable.html",
    "revision": "72d63b546fac26fa72b4803c1a4b1c71"
  },
  {
    "url": "Python_pandas/modifySalaryColumn.html",
    "revision": "20d138415381a7e91948a87a14be91e1"
  },
  {
    "url": "Python_pandas/pivotTable.html",
    "revision": "e45231bf046718e8b48afe1218a547eb"
  },
  {
    "url": "Python_pandas/renameColumns.html",
    "revision": "07e01ee25baf766fdb02607af182b2b1"
  },
  {
    "url": "Python_pandas/selectData.html",
    "revision": "40023281b410bf40e7d8a7fc436c5004"
  },
  {
    "url": "Python_pandas/selectFirstRows.html",
    "revision": "d7dfd5906da4da935579267d78431f3c"
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
