// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8074466..8079284
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  var t = e.allPlans, n = e.onStartPlan, o = t.length > 0, i = (0, r.useState)(0), a = (0, v.A)(i, 2), l = a[0], s = a[1], c = (0, r.useRef)(null), u = (0, r.useRef)(false), d = (0, r.useRef)(null);
  return (0, r.useEffect)((function() {
    var e2 = setInterval((function() {
      u.current || s((function(e3) {
        return (e3 + 1) % xme.length;
      }));
    }), 3500);
    return function() {
      return clearInterval(e2);
    };
  }), []), (0, r.useEffect)((function() {
    if (c.current) {
      var e2 = c.current.querySelector("[data-testimonial-card]");
      if (e2) {
        var t2 = l * (e2.offsetWidth + 12);
        c.current.scrollTo({ left: t2, behavior: "smooth" });
      }
    }
  }), [l]), (0, r.useEffect)((function() {
    return function() {
      d.current && clearTimeout(d.current);
    };
  }), []), r.createElement(Yme, null, r.createElement(Qme, null, r.createElement(Gme, null), r.createElement(Kme, null), r.createElement(Jme, null, r.createElement(Xme, null, r.createElement(Zme, null, r.createElement(C_._H6, { size: 14, color: L.A.white }), r.createElement(_me, null, "1 min setup")), r.createElement($me, null, r.createElement(C_.ZpW, { size: 22, color: L.A.white }))), r.createElement(eAe, null, "Build your ".concat(o ? "next" : "first", " plan")), r.createElement(tAe, null, "Personalized training plans built by expert coaches that adjust weekly based on your progress."), r.createElement(nAe, null, r.createElement(rAe, null, r.createElement(C_.zZQ, { size: 14, color: "rgba(255,255,255,0.9)" }), r.createElement(oAe, null, "Adaptive")), r.createElement(rAe, null, r.createElement(C_.nih, { size: 14, color: "rgba(255,255,255,0.9)" }), r.createElement(oAe, null, "Schedule-friendly")), r.createElement(rAe, null, r.createElement(C_.NyR, { size: 14, color: "rgba(255,255,255,0.9)" }), r.createElement(oAe, null, "Coach-backed")), r.createElement(rAe, null, r.createElement(C_.ZpW, { size: 14, color: "rgba(255,255,255,0.9)" }), r.createElement(oAe, null, "All goals"))), r.createElement(iAe, null, r.createElement(aAe, { onClick: n }, "Start my ".concat(o ? "next" : "first", " plan")), r.createElement(lAe, { onClick: n }, "Explore plan options")), r.createElement(sAe, null, r.createElement(C_.YmN, { size: 16, color: "rgba(255,255,255,0.70)" }), r.createElement(cAe, null, "Built by expert coaches and adjusted week to week as you progress.")))), r.createElement(EAe, null, r.createElement(uAe, null, r.createElement(dAe, null, Eme.map((function(e2, t2) {
    return r.createElement(pAe, { key: e2, $offset: t2 > 0 }, r.createElement(fAe, { src: e2, alt: "Coach" }));
  }))), r.createElement(mAe, null, r.createElement(AAe, null, "Built by expert coaches"), r.createElement(hAe, null, "Real coaching principles baked into your plan so you can train confidently from day one.")))), o && r.createElement(EAe, null, r.createElement(gAe, null, "Create a Plan"), r.createElement(bAe, { onClick: n }, r.createElement(vAe, null, r.createElement(yAe, null, "Start a new Training Plan"), r.createElement(xAe, null, "Build a personalized training plan")), r.createElement(C_.ZK4, { size: 20, color: "rgba(255,255,255,0.45)" }))), !o && r.createElement(EAe, null, r.createElement(wAe, null, r.createElement(CAe, { $variant: "blue" }), r.createElement(kAe, null, r.createElement(BAe, null, r.createElement(C_._H6, { size: 18, color: L.A.white })), r.createElement(SAe, null, r.createElement(IAe, null, "BENEFITS"), r.createElement(DAe, null, "Why start a plan?"))), r.createElement(PAe, null, wme.map((function(e2) {
    return r.createElement(TAe, { key: e2.title }, r.createElement(OAe, { style: { background: e2.color } }, r.createElement(e2.icon, { size: 18, color: L.A.white })), r.createElement(MAe, null, e2.title), r.createElement(RAe, null, e2.body));
  }))))), !o && r.createElement(EAe, null, r.createElement(wAe, null, r.createElement(CAe, { $variant: "white" }), r.createElement(kAe, null, r.createElement(BAe, null, r.createElement(C_.fcY, { size: 18, color: L.A.white })), r.createElement(SAe, null, r.createElement(IAe, null, "HOW IT WORKS"), r.createElement(DAe, null, "Set up in minutes"))), r.createElement(FAe, null, r.createElement(jAe, null), Cme.map((function(e2, t2) {
    return r.createElement(LAe, { key: e2.title }, r.createElement(NAe, null, r.createElement(qAe, null, t2 + 1)), r.createElement(zAe, null, r.createElement(UAe, null, e2.title), r.createElement(HAe, null, e2.body)));
  }))))), !o && r.createElement(EAe, null, r.createElement(wAe, null, r.createElement(CAe, { $variant: "warm" }), r.createElement(kAe, null, r.createElement(BAe, null, r.createElement(C_.Cku, { size: 18, color: L.A.white })), r.createElement(SAe, null, r.createElement(IAe, null, "TESTIMONIALS"), r.createElement(DAe, null, "What runners say"))), r.createElement(WAe, { ref: c, onMouseDown: function() {
    u.current = true, d.current && clearTimeout(d.current);
  }, onMouseUp: function() {
    d.current && clearTimeout(d.current), d.current = setTimeout((function() {
      u.current = false;
    }), 2500);
  } }, xme.map((function(e2, t2) {
    return r.createElement(VAe, { key: e2.meta, "data-testimonial-card": true }, r.createElement(YAe, null, [0, 1, 2, 3, 4].map((function(e3) {
      return r.createElement(C_.DBe, { key: e3, size: 14, color: "#FFD166" });
    }))), r.createElement(QAe, null, "\u201C", e2.quote, "\u201D"), r.createElement(GAe, null, "\u2014 ", e2.meta));
  }))), r.createElement(KAe, null, xme.map((function(e2, t2) {
    return r.createElement(JAe, { key: t2, $active: t2 === l });
  }))))));
});
