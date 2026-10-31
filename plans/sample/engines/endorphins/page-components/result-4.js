// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 503788..508936
// This is a fragment of the vendor bundle, not an independently runnable engine.
function Kn(e) {
  var t, n, r, o, i = e.config, a = e.onRegister, l = e.onLogin, s = e.ctaLabel, c = void 0 === s ? "Start training free" : s, u = (0, E.o)(), d = null != a ? a : function() {
    return null == u ? void 0 : u.open("register");
  }, p = null != l ? l : function() {
    return null == u ? void 0 : u.open("login");
  }, f = (0, B.w)(0.2), m = f.ref, A = f.revealed, h = (0, S.a)(7), v = (0, b.useState)(0), y = (0, g.A)(v, 2), x = y[0], O = y[1], M = (0, b.useState)(false), R = (0, g.A)(M, 2), j = R[0], L = R[1], N = null !== (t = i.bullets) && void 0 !== t ? t : [];
  (0, b.useEffect)((function() {
    if (!j && A && 0 !== N.length) {
      var e2 = setTimeout((function() {
        return O((function(e3) {
          return (e3 + 1) % N.length;
        }));
      }), Yn);
      return function() {
        return clearTimeout(e2);
      };
    }
  }), [x, j, A, N.length]), (0, b.useEffect)((function() {
    var e2 = document.title;
    document.title = i.seoTitle ? "".concat(i.seoTitle, " | Endorphins Running") : "".concat(i.title, " \u2014 Endorphins Running");
    var t2 = document.body.style.background, n2 = document.body.style.margin;
    return document.body.style.background = ue.qy.ink, document.body.style.margin = "0", function() {
      document.title = e2, document.body.style.background = t2, document.body.style.margin = n2;
    };
  }), [i.title, i.seoTitle]);
  var q = "integrationsHub" === i.layout, z = "proactiveCoach" === i.layout && !!i.proactiveCoach;
  return b.createElement(Jn, null, b.createElement(w.A, { onRegister: d, onLogin: p }), b.createElement(k.wn, null, b.createElement(k.Rp, null, b.createElement(k.gN, { ref: m, $revealed: A }, z && i.proactiveCoach ? b.createElement(me, { config: i.proactiveCoach, ctaLabel: c }) : q ? b.createElement(_n, null, b.createElement(k.YN, null, i.kicker), b.createElement(k.pk, { as: "h1" }, i.title), i.subhead && b.createElement($n, null, i.subhead), b.createElement(er, { ref: h }, b.createElement(F, { inner: null !== (n = i.integrationsInner) && void 0 !== n ? n : [], outer: null !== (r = i.integrationsOuter) && void 0 !== r ? r : [] })), b.createElement(tr, null, b.createElement(P.A, null, c))) : b.createElement(Zn, null, b.createElement(nr, null, b.createElement(k.YN, null, i.kicker), b.createElement(k.pk, { as: "h1" }, i.title), b.createElement(rr, null, N.map((function(e2, t2) {
    return b.createElement(or, { key: e2.title, type: "button", $active: t2 === x, onClick: function() {
      return (function(e3) {
        L(true), O(e3);
      })(t2);
    }, "aria-pressed": t2 === x }, b.createElement(ir, { $active: t2 === x }, t2 + 1), b.createElement(ar, null, b.createElement(lr, null, b.createElement(T.I, { name: e2.icon, size: 18 }), e2.title), b.createElement(sr, null, e2.body)));
  })), b.createElement(cr, null, b.createElement(P.A, null, c)))), b.createElement(ur, null, b.createElement(dr, { "aria-hidden": true }), b.createElement(pr, { ref: h }, N.map((function(e2, t2) {
    var n2, r2, o2;
    return b.createElement(fr, { key: e2.title, $active: t2 === x }, b.createElement(mr, null, b.createElement(Ar, { src: I.M[e2.shot], alt: "", loading: "lazy", onError: D.mD })), (null !== (n2 = e2.widgets) && void 0 !== n2 ? n2 : e2.audioCues) && t2 === x && b.createElement(br, { "aria-hidden": true }, (null !== (r2 = null !== (o2 = e2.widgets) && void 0 !== o2 ? o2 : e2.audioCues) && void 0 !== r2 ? r2 : []).map((function(e3, t3) {
      return b.createElement(vr, { key: e3, $pos: Qn[t3 % Qn.length], $delay: 0.4 + 0.9 * t3 }, b.createElement(yr, null), e3);
    }))));
  })))))))), z && i.proactiveCoach && b.createElement(b.Fragment, null, b.createElement(Ue.A, { eyebrow: i.proactiveCoach.flow.eyebrow, title: i.proactiveCoach.flow.title, body: i.proactiveCoach.flow.body, inputTag: i.proactiveCoach.flow.inputTag, outputMessage: i.proactiveCoach.flow.outputMessage, devices: i.proactiveCoach.deviceLogos, channels: i.proactiveCoach.channelLogos }), b.createElement(He.A, { eyebrow: i.proactiveCoach.threeSteps.eyebrow, title: i.proactiveCoach.threeSteps.title, body: i.proactiveCoach.threeSteps.body, steps: i.proactiveCoach.threeSteps.steps, devices: i.proactiveCoach.deviceLogos }), b.createElement(Ye, { eyebrow: i.proactiveCoach.dashboard.eyebrow, title: i.proactiveCoach.dashboard.title, body: i.proactiveCoach.dashboard.body, stats: i.proactiveCoach.dashboard.stats, shot: i.proactiveCoach.dashboard.shot })), q && b.createElement(Ue.A, null), q && i.threeSteps && b.createElement(He.A, { eyebrow: i.threeSteps.eyebrow, title: i.threeSteps.title, body: i.threeSteps.body, steps: i.threeSteps.steps, devices: null !== (o = i.integrationsInner) && void 0 !== o ? o : [] }), q && i.dataPromise && b.createElement(vt.A, { kicker: i.dataPromise.eyebrow, title: i.dataPromise.title, body: i.dataPromise.body }), i.planCatalog && b.createElement(Et, { eyebrow: i.planCatalog.eyebrow, title: i.planCatalog.title, body: i.planCatalog.body, groups: i.planCatalog.groups }), i.interactivePlanBuilder && b.createElement(Zt.A, null), i.experienceLevels && b.createElement(yt.A, { eyebrow: i.experienceLevels.eyebrow, title: i.experienceLevels.title, body: i.experienceLevels.body, levels: i.experienceLevels.levels }), i.managementTools && b.createElement(_t, { eyebrow: i.managementTools.eyebrow, title: i.managementTools.title, body: i.managementTools.body, tools: i.managementTools.tools }), i.showCommunityPhotos && b.createElement(Xn, { "aria-hidden": true }, b.createElement(qn.A, { photos: zn.QM, rows: 1 })), i.communityHero && b.createElement(Un.A, { image: i.communityHero.image, video: i.communityHero.video, videoMov: i.communityHero.videoMov, kicker: i.communityHero.kicker, headline: b.createElement(b.Fragment, null, i.communityHero.headlineTop, b.createElement("br", null), i.communityHero.headlineBottom), cta: null != c ? c : i.communityHero.cta }), i.showTestimonials && b.createElement(Hn.A, null), i.faq && b.createElement(Wn.A, { faqs: i.faq.items, kicker: i.faq.kicker, title: i.faq.title, shot: i.faq.shot }), b.createElement(C.A, null));
}
