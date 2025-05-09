if (!self.define) {
  let e,
    s = {};
  const a = (a, i) => (
    (a = new URL(a + '.js', i).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, r) => {
    const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[c]) return;
    let f = {};
    const d = (e) => a(e, c),
      n = { module: { uri: c }, exports: f, require: d };
    s[c] = Promise.all(i.map((e) => n[e] || d(e))).then((e) => (r(...e), f));
  };
}
define(['./workbox-84839ebf'], function (e) {
  'use strict';
  self.addEventListener('message', (e) => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'assets/activities-CjTbQOCy.svg', revision: '4d6e1b8a78e7a2437aa934d71d5b1b11' },
        { url: 'assets/activity-off-CoLVOUEw.svg', revision: '684877f7f121e6605277783dfcdb40de' },
        { url: 'assets/activity-on-_tImjDRd.svg', revision: 'c10e6ae81b363dd3f11edfa3886f50e8' },
        { url: 'assets/AliPay-2hndWtbu.svg', revision: '43561a92f96598804e240ef34f3e5b95' },
        { url: 'assets/announcement-DHzM57ko.svg', revision: 'feeb0492f9655dfc8d12a14a902d50c0' },
        { url: 'assets/avatarIcon-CB4-UU5N.png', revision: 'd32e7699eadd65d5652f866c8a14de49' },
        { url: 'assets/ball-BJK1nWTd.svg', revision: 'adbf11981d06055473ff54b698f280f0' },
        { url: 'assets/bell-SbC-Sk1s.svg', revision: '398214022bb3ebeac4cf1b7a3aef6ee6' },
        { url: 'assets/carousel1-CDvCB8WV.jpg', revision: 'dfad6324d6f5a8ee1410d29af3a773e2' },
        { url: 'assets/carousel2-xo0GpywX.jpg', revision: '733b6337fb6a640d172bbe1ac46e7e1e' },
        { url: 'assets/cc-er-A283NGoe.png', revision: 'd48fda8a3e53453d8050b8cca4409dec' },
        { url: 'assets/cc-tr-NNkg7aR7.png', revision: 'cdb97aadd9aed34a5ca66fe70439115a' },
        { url: 'assets/chain-C6pA1IyZ.png', revision: 'a0d19b3795b2f3b05fcc454e885c6707' },
        { url: 'assets/chat-3HAy-xeF.svg', revision: '712878f09099985ebcde235a63be2193' },
        { url: 'assets/clear_cache-DC41hrN-.svg', revision: '4455c3479eaa4cfc2cf82b1b9fae3232' },
        { url: 'assets/coin-off-Cw6G4k5l.svg', revision: '8889325a0d5798ace246ddd67075c787' },
        { url: 'assets/coin-on-BZAEm0RM.svg', revision: 'a2ac37114967006dc784e002447f2542' },
        { url: 'assets/coming_soon-AjHuMXcI.svg', revision: '9846dbdd8059ec7479621b48a2999002' },
        { url: 'assets/copy-jGC2AYzK.svg', revision: 'cac065628a9eaa30c3a451eb960206c2' },
        {
          url: 'assets/customer-service-1PsbgCLT.svg',
          revision: '83948e07a1f8e32f62f5e6ddf0f098d9',
        },
        { url: 'assets/edit-IxkkrXaH.svg', revision: '93ca67a35753565db9220c08478f7e5f' },
        { url: 'assets/electronic-CyBKQUAO.svg', revision: 'e6c52d4eae439f664fae00a52abad0c9' },
        { url: 'assets/electronic-DNxgNpRv.png', revision: '118ab2accd8fd7a9be1d5f559cf0cb08' },
        { url: 'assets/electronic-DoC_oNgN.svg', revision: '71ba6b7b120255d07c10a5fe01655fa4' },
        { url: 'assets/FD_1-RpIrUzOB.png', revision: 'e2d39d1a0d6365e39408d28d8fe20999' },
        { url: 'assets/FD_2-BD_V1EsV.png', revision: '2202819416c721882e6858050a0fccb1' },
        {
          url: 'assets/Financia_Direct-C6CQWAUS.png',
          revision: 'c44f6a81f89a3cb54ed7062f222bfcdd',
        },
        { url: 'assets/fish-DwxOJdVD.svg', revision: 'b301bafc10dfef63aaf7cbfaee0af1ec' },
        { url: 'assets/fishing-CN0ICBY5.png', revision: 'f3ec3642f52c546d873b6c3bb4509880' },
        { url: 'assets/fishing-sGPhxydB.png', revision: '0e445fd1218f9c2b6ece4e182971b67a' },
        {
          url: 'assets/Framework7Icons-Regular-Db9RwDq_.woff2',
          revision: '4a39aba9fb8a2f831fa437780e1a058a',
        },
        {
          url: 'assets/Framework7Icons-Regular-DocpuGSF.woff',
          revision: 'd03b787b6492fa2b0141c43fb7e56689',
        },
        {
          url: 'assets/fund_management-P_qsJHim.svg',
          revision: '4e77358f4b3582afec0d53d6c806cb9c',
        },
        {
          url: 'assets/game_management-BmjyobDy.svg',
          revision: 'de3031345763d79493000200424a1087',
        },
        { url: 'assets/games-off-BpOD6xgU.svg', revision: '9e8e1f110a71a5eb5d3ea3fc26ff0f7b' },
        { url: 'assets/games-on-C2XUpcY2.svg', revision: '05368284d0a3e8d1d3965bf43737ec1c' },
        {
          url: 'assets/google_authenticator-DBKNbIP7.svg',
          revision: 'ad0f1a476bac1df0a46e6f94491404b0',
        },
        { url: 'assets/home-off-BzxiGZJF.svg', revision: '3bd371ec4c57c04f2f02fbe517c5db89' },
        { url: 'assets/home-on-DCT8sj1C.svg', revision: '0acfd116aa6ab87dbee651826bf6aa96' },
        { url: 'assets/index-D-SXkv6H.js', revision: '51b46aa9902067a759a7f48ef8985d17' },
        { url: 'assets/index-DeOMQXji.css', revision: 'b9b1a37d3d008df5164cacb62d4b6ce5' },
        { url: 'assets/live-1-DjpUfQeU.png', revision: 'b5d213076175640ad733e0d2bb1acc06' },
        { url: 'assets/live-2-CVMfG44s.png', revision: '8215ae183d0d8df22cc4404786365f37' },
        { url: 'assets/live-VSJCFAFK.png', revision: '57fae8a05807bd524e99a3f32818869a' },
        { url: 'assets/logo_icon-C9gZZN3x.png', revision: '9051d5be90aff429f419b42638d32aa8' },
        { url: 'assets/logo-DsyPQ0jk.png', revision: '69c9e3bd260b625796fd7140aa26b400' },
        { url: 'assets/lottery-CPUA8oXr.png', revision: 'f199aa9aacecf95b8b4f56b21d21e693' },
        { url: 'assets/lottery-DrCn7YeR.svg', revision: '6a1c3c2a4ffd791d1d4bd477e8358d09' },
        {
          url: 'assets/material-icons-Dr0goTwe.woff',
          revision: '3e1afe59fa075c9e04c436606b77f640',
        },
        {
          url: 'assets/material-icons-kAwBdRge.woff2',
          revision: '53436aca8627a49f4deaaa44dc9e3c05',
        },
        { url: 'assets/newspaper-DIczR6qd.svg', revision: 'a0a60ef7afdc39dfed579ba252ab57d3' },
        { url: 'assets/Nunito-Black-DHv_wkcN.ttf', revision: '27ee28fd596c0bd4235fa792d0d8b1ce' },
        {
          url: 'assets/Nunito-BlackItalic-CyB2PzJR.ttf',
          revision: '47e66b00cd98f1925da80dd6b7ff29a1',
        },
        { url: 'assets/Nunito-Bold-CZ01jYvx.ttf', revision: 'ba43cdecf9625c0dcec567ba29555e15' },
        {
          url: 'assets/Nunito-BoldItalic-B_XwxZVy.ttf',
          revision: 'dc69781f4856bdb711087d1ae07ca208',
        },
        {
          url: 'assets/Nunito-ExtraBold-DusrvNCE.ttf',
          revision: '5b5a206f5cd32fa496c93925d0caf609',
        },
        {
          url: 'assets/Nunito-ExtraBoldItalic-9wQW-h5Z.ttf',
          revision: 'e01118312e526f062fc8ad8f3c64de0e',
        },
        {
          url: 'assets/Nunito-ExtraLight-CzD0wFeL.ttf',
          revision: 'ef7ff1b92707646c2e02a39067aab385',
        },
        {
          url: 'assets/Nunito-ExtraLightItalic-BPY4vZPI.ttf',
          revision: 'f9088a8e7dae2fc4e88975f6e1726c93',
        },
        { url: 'assets/Nunito-Italic-B5Hdwsby.ttf', revision: 'fac5c8ffb51e06094affdbb7fff9000e' },
        { url: 'assets/Nunito-Light-CFkSxSOc.ttf', revision: '7de99c591b88e33ceda578f9ee140263' },
        {
          url: 'assets/Nunito-LightItalic-yK_RdHvM.ttf',
          revision: 'cdf25a6c9cbb6def64afcc30d3e511b9',
        },
        { url: 'assets/Nunito-Medium-L5wTUp6G.ttf', revision: 'd26cecc95cdc8327b337357e6c5c1f5b' },
        {
          url: 'assets/Nunito-MediumItalic-CHlUhlrb.ttf',
          revision: 'bd282ec988480f875b2f7cb0465ff7fa',
        },
        { url: 'assets/Nunito-Regular-BzIFT1ox.ttf', revision: 'b83ce9c59c73ade26bb7871143fd76bb' },
        {
          url: 'assets/Nunito-SemiBold-BDYPXFJ_.ttf',
          revision: '38257ec36f55676f98fcdf1264adb69d',
        },
        {
          url: 'assets/Nunito-SemiBoldItalic-Bd2i-lK0.ttf',
          revision: '4c2772c15392fbfdb077342b7851f66c',
        },
        { url: 'assets/pay_pass-BZyOWZcv.svg', revision: 'ce9831b6a929714e67e4d60a4458a57b' },
        { url: 'assets/poker-Bm6ph9bx.png', revision: '034f07a9d1a643d08e9a8ab2a7a45cb4' },
        { url: 'assets/poker-CFt2GgG6.png', revision: '102a0b45c9e96cacb0d8949643d158f1' },
        { url: 'assets/profile-off-DshAVj7-.svg', revision: 'c8ac77f13bc4b1ba2f9803cebb90febd' },
        { url: 'assets/profile-on-D_uP2bYu.svg', revision: '8c2fb62dc667de2b1812a1bc65485001' },
        {
          url: 'assets/recharge_tutorial-juooPCou.svg',
          revision: 'd5f9d3ee8ea856f996848c12fccae0d4',
        },
        { url: 'assets/refresh_2-D_PDeqq5.svg', revision: '76d87139603c514e83040d4b54be1eb1' },
        { url: 'assets/refresh-DLdhmdAe.svg', revision: 'b6f9d22ff172c773e02a19d03c97fa23' },
        { url: 'assets/share-BbAOD8lR.svg', revision: '601c36750c2b59528bcdfcbdbd60f84b' },
        { url: 'assets/sport-1-BKmy3xIU.png', revision: 'b656e5b65391df91d5d1e49a59ad6e31' },
        { url: 'assets/sport-2-Bwg-jVMb.png', revision: '908eb464551d3aa4440fbe14b1f63c7f' },
        { url: 'assets/sport-3-DVXsAKYW.png', revision: 'd750a00fb968d2598fe62a4c99cff510' },
        { url: 'assets/sports-CMoAjjw3.png', revision: '58ce399d7ca3b92a0760ba5410dddd5b' },
        { url: 'assets/sports-DymleOeg.png', revision: 'df98baebb3a109d52cf2bf1bca9e7e97' },
        { url: 'assets/Step_1-ua-1QZaq.png', revision: '8c2a60947d04edf2e8fc7c63aca1a7c8' },
        { url: 'assets/Step_2-BNf8aIU5.png', revision: '196ae33637a6df52c4395b324b1b03d1' },
        { url: 'assets/SVGAppLogo-DWk1zLaz.svg', revision: '2decc081e9a4a38cf4a1e19d46ce14c2' },
        { url: 'assets/telegram_logo-B020cLVm.png', revision: '08412639439510ebb7b148b44ce6778b' },
        { url: 'assets/Telegram-Dhm7lMKR.png', revision: 'd00d00a43c57b9b1f5648b47c837ccd4' },
        { url: 'assets/u8-er-D75TqRa7.png', revision: 'aba57bd7a79b7f104e9f005028f71ca3' },
        { url: 'assets/u8-tr-DGuZyuss.png', revision: '25411ba17b02c489a04190b52de683be' },
        { url: 'assets/USDT_1-alVxFqPn.png', revision: '8b85abe0fdc577b915a87789b3ee86d6' },
        { url: 'assets/USDT_2_1-BG2vOnTA.png', revision: '4cba3d69dba21c8a25f4c68619b3af42' },
        { url: 'assets/USDT_2_2-DvmQtq3J.png', revision: '4c4771937784f5255fbb31f601870eec' },
        { url: 'assets/USDT_2_4-CtrUywwV.png', revision: '29c57ad9751168144e1627d220e230d1' },
        { url: 'assets/USDT_2_5-C4W6nXhu.png', revision: '4cffee3f6146365f9d70352efc5edc93' },
        { url: 'assets/USDT_Recharge-iVimLgNq.png', revision: 'dec9b38591ff4e3eb7b4c15a902bdff2' },
        { url: 'assets/video-BdYKPYyT.png', revision: 'fa97da590ab2003728bc6b9641c5fc59' },
        { url: 'assets/video-mSYQ3OLM.svg', revision: '40068fb19f95c7561f5a9d635e580da8' },
        { url: 'assets/virtual_add-DI1No8Du.svg', revision: 'a2cf58f8b3d4c04572670494b7f783b8' },
        { url: 'assets/WC_1-Dj2-vXXP.png', revision: 'ca7a8169460509951b80365ed069ae90' },
        { url: 'assets/WC_2-DlzHqGLA.png', revision: '89b22071261b24b4126250b8a5c8b1f5' },
        { url: 'assets/WC_3-nEdAtW1f.png', revision: '2eec72260157d0b205a21fcb8bef68dc' },
        { url: 'assets/WC_4-BkikY7in.png', revision: 'bd6c3a383931c4fa3a3580b10c9524ae' },
        { url: 'assets/WC_5-Dj7UX14t.png', revision: '97450cea1053989e26fc7e05b65c4ce7' },
        { url: 'assets/WeChat-B8YX20uO.svg', revision: 'f7ad9ac7a9f2079dd96ecdb8e7ba77fe' },
        {
          url: 'assets/Withdrawal_Course-D6gQ5qBF.png',
          revision: '82afe9ae5ce1bd6869ed9c309a9ed594',
        },
        { url: 'icons/128x128.png', revision: '4e35a6dad5f1ab5b385f86dfe97579b8' },
        { url: 'icons/144x144.png', revision: '47efa07843a29aff095e50015e084e85' },
        { url: 'icons/152x152.png', revision: 'ab189ff1c3604cbecd2ccc180b6f7c25' },
        { url: 'icons/192x192.png', revision: '9ad7d46019f56396237834ced5038973' },
        { url: 'icons/256x256.png', revision: '28969ffd71e59d0bb2ca642ac8bb0134' },
        { url: 'icons/512x512.png', revision: 'aa0c2f038e42624eb7ee396b272ee852' },
        { url: 'icons/apple-touch-icon.png', revision: '4e94b1d1edaea36f052ec015c03ff26b' },
        { url: 'icons/favicon.png', revision: '4e35a6dad5f1ab5b385f86dfe97579b8' },
        { url: 'icons/screenshot-desktop.png', revision: '9486bdd6b0849ddf101b87a0eee57161' },
        { url: 'icons/screenshot-mobile.png', revision: '81a9fe6151c52e1acfb7d3ba8eaeb1ed' },
        { url: 'index.html', revision: '2dbd7e1af32a36da80bc95f556f149ed' },
      ],
      { ignoreURLParametersMatching: [/^utm/, /^fbclid$/] },
    ),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL('/index.html'), {
        denylist: [/^\/_/, /\/[^\/]+.[^\/]+$/],
      }),
    );
});
//# sourceMappingURL=service-worker.js.map
