// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 10744847..10747135
// This is a fragment of the vendor bundle, not an independently runnable engine.
function PQn(e) {
  var t = e.registerTarget, n = void 0 === t ? "/register" : t, o = (0, h.W6)(), i = (0, r.useState)(0), a = (0, v.A)(i, 2), l = a[0], s = a[1];
  (0, r.useEffect)((function() {
    var e2 = window.setInterval((function() {
      s((function(e3) {
        return (e3 + 1) % IQn.length;
      }));
    }), 4200);
    return function() {
      return window.clearInterval(e2);
    };
  }), []);
  var c = IQn[l];
  return r.createElement(YQn, null, r.createElement(QQn, { style: { backgroundImage: "url(".concat("https://images.endorphinsrunning.com/other/og_images/og_image.png", ")") }, "aria-hidden": true }), r.createElement(GQn, { "aria-hidden": true }), r.createElement(KQn, { "aria-hidden": true }), r.createElement(JQn, null, r.createElement(XQn, null, r.createElement(ZQn, null, "The Ultimate Running Community"), r.createElement(_Qn, null, "Train sharper. ", r.createElement($Qn, null, "Run together."), " Race faster."), r.createElement(eGn, null, "Personalized AI coaching, ", yA.aA, " free group runs a year across", " ", yA.a$, " cities, and the best race-day energy anywhere \u2014 all in one app loved by", " ", yA.rm, " runners."), r.createElement(tGn, null, r.createElement(nGn, { onClick: function() {
    return o.push(n);
  } }, "Start training free"), r.createElement(rGn, { href: "https://apps.apple.com/us/app/id6736627957", target: "_blank", rel: "noopener noreferrer" }, r.createElement(oGn, { src: "https://i.imgur.com/vaGUZzb.png", alt: "Download on the App Store" })), r.createElement(rGn, { href: "https://play.google.com/store/apps/details?id=com.endorphinsrunning.endorphinsmobile", target: "_blank", rel: "noopener noreferrer" }, r.createElement(oGn, { src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg", alt: "Get it on Google Play" }))), r.createElement(iGn, null, r.createElement(aGn, null, "Syncs with"), r.createElement(lGn, null, DQn.map((function(e2) {
    return r.createElement(sGn, { key: e2.alt, src: e2.src, alt: e2.alt, onError: function(e3) {
      e3.target.style.visibility = "hidden";
    } });
  }))))), r.createElement(cGn, null, r.createElement(uGn, null, r.createElement(rE.A, { glow: c.accent }, IQn.map((function(e2, t2) {
    return r.createElement(dGn, { key: e2.key, $active: t2 === l }, e2.render());
  })))), r.createElement(pGn, null, r.createElement(fGn, { $color: c.accent }), r.createElement(mGn, null, c.title)), r.createElement(AGn, null, IQn.map((function(e2, t2) {
    return r.createElement(hGn, { key: e2.key, $active: t2 === l, onClick: function() {
      return s(t2);
    }, "aria-label": "Show ".concat(e2.title) });
  }))))));
}
