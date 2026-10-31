// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 7501773..7503925
// This is a fragment of the vendor bundle, not an independently runnable engine.
function BM() {
  var e = (0, ev.w)(0.3), t = e.ref, n = e.revealed, o = (0, r.useState)(0), i = (0, v.A)(o, 2), a = i[0], l = i[1], s = (0, r.useState)(false), c = (0, v.A)(s, 2), u = c[0], d = c[1], p = (0, r.useState)(iM.O), f = (0, v.A)(p, 1)[0], m = (0, r.useState)((function() {
    var e2, t2;
    return "undefined" != typeof window && !(null === (e2 = (t2 = window).matchMedia) || void 0 === e2 || !e2.call(t2, "(min-width: 769px)").matches);
  })), A = (0, v.A)(m, 1)[0], h = n && !u && !f && A;
  return (0, r.useEffect)((function() {
    if (h) {
      var e2 = window.setTimeout((function() {
        return l((function(e3) {
          return (e3 + 1) % rv.kd.length;
        }));
      }), 4500);
      return function() {
        return window.clearTimeout(e2);
      };
    }
  }), [a, h]), r.createElement($b.wn, null, r.createElement($b.Rp, null, r.createElement($b.YN, null, "How Endorphins fixes it"), r.createElement($b.pk, null, rv.Tv), r.createElement(aM, { ref: t }, r.createElement("div", null, r.createElement(lM, null, rv.kd.map((function(e2, t2) {
    return r.createElement("li", { key: e2.id }, r.createElement(sM, { type: "button", $active: t2 === a, "aria-pressed": t2 === a, onClick: function() {
      return (function(e3) {
        d(true), l(e3);
      })(t2);
    } }, r.createElement(cM, { $active: t2 === a }, t2 + 1), r.createElement(uM, null, r.createElement(dM, null, e2.title), r.createElement(pM, null, e2.body), "unread" === e2.id && r.createElement(AM, { "aria-label": "Works with" }, oM.ZR.map((function(e3) {
      return r.createElement(hM, { key: e3.name }, r.createElement(gM, { src: e3.src, alt: "", loading: "lazy", onError: jh.mD }), e3.name);
    })))), t2 === a && h && r.createElement(mM, { key: a, "aria-hidden": true })), t2 === a && r.createElement(wM, null, r.createElement(vM, null, r.createElement(yM, { "aria-hidden": true }), r.createElement(EM, null, r.createElement(rE.A, { hideStatusBar: true }, r.createElement(jh.iG, { src: Lh.M[e2.shot], alt: e2.shotAlt, loading: "lazy", onError: jh.mD }))), r.createElement(Ax, { widgets: e2.chips }))));
  }))), r.createElement(kM, null, r.createElement(tv.A, { source: "fix_steps" }, "Start training free"))), r.createElement(bM, null, r.createElement(vM, null, r.createElement(yM, { "aria-hidden": true }), r.createElement(EM, null, r.createElement(rE.A, { hideStatusBar: true }, rv.kd.map((function(e2, t2) {
    return r.createElement(CM, { key: e2.id, src: Lh.M[e2.shot], alt: t2 === a ? e2.shotAlt : "", "aria-hidden": t2 !== a, $active: t2 === a, loading: "lazy", onError: jh.mD });
  })))), r.createElement(Ax, { key: rv.kd[a].id, widgets: rv.kd[a].chips }))))));
}
