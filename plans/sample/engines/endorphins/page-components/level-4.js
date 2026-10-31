// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1607869..1610721
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t, o, y = i.onNext, x = i.onBack, s = i.progressBarPercentage, n = i.plan, A = (0, u.E9)((function(i2) {
    return i2.training.updatePlan;
  })), a = (0, p.useState)(false), r = (0, k.A)(a, 2), l = r[0], I = r[1], E = String(null == n ? void 0 : n.preferredUnit).toUpperCase() === f._v, c = (0, p.useMemo)((function() {
    return (0, m.he)({ presetId: null == n ? void 0 : n.presetId, raceDistance: null == n ? void 0 : n.raceDistance });
  }), [null == n ? void 0 : n.presetId, null == n ? void 0 : n.raceDistance]), h = (0, p.useMemo)((function() {
    return R(c.minLevel);
  }), [c.minLevel]), Q = (0, p.useMemo)((function() {
    return R(c.maxLevel);
  }), [c.maxLevel]), d = (0, p.useMemo)((function() {
    var i2 = null == n ? void 0 : n.presetId;
    return i2 && i2 in m.jL ? m.jL[i2].defaultLevel : void 0;
  }), [null == n ? void 0 : n.presetId]), Z = (0, p.useMemo)((function() {
    return (function(i2, e2, t2, o2) {
      if ("number" != typeof i2) return null;
      var y2, x2 = e2 ? R(e2) : o2;
      y2 = i2 < 10 ? R("TWO_DAY") : i2 < 30 ? R("INTRO") : i2 < 60 ? R("BEGINNER") : i2 < 100 ? R("INTERMEDIATE") : x2;
      var s2 = Math.min(Math.max(Math.min(y2, x2), t2), o2);
      return f.eV[s2 - 1];
    })(null == n ? void 0 : n.monthlyMiles, d, h, Q);
  }), [null == n ? void 0 : n.monthlyMiles, d, h, Q]), H = (0, p.useState)((function() {
    var i2, e2;
    return e2 = R("RACE" !== String(null == n ? void 0 : n.goal) ? null != Z ? Z : null == n ? void 0 : n.level : null !== (i2 = null == n ? void 0 : n.level) && void 0 !== i2 ? i2 : Z), Math.min(Math.max(e2, h), Q);
  })), j = (0, k.A)(H, 2), w = j[0], N = j[1];
  (0, p.useEffect)((function() {
    N((function(i2) {
      return Math.min(Math.max(i2, h), Q);
    }));
  }), [h, Q]);
  var O = f.eV[w - 1], V = f.iw[O], P = (0, p.useMemo)((function() {
    return (0, f.tK)(O, E);
  }), [O, E]), M = null === (e = (0, S.r)(n)) || void 0 === e ? void 0 : e.intenseWorkouts, q = (0, p.useMemo)((function() {
    return null != M ? M : (0, f.dC)(O);
  }), [M, O]), X = null != Z && Z === O, z = (null !== (t = null == n || null === (o = n.availability) || void 0 === o ? void 0 : o.days) && void 0 !== t ? t : []).length, _ = 0 === z || z >= V;
  return p.createElement(g.A, { title: "Runs per Week", subtitle: "How many days would you like to run each week?", progressBarPercentage: s, onBack: x, onContinue: function() {
    _ && (I(true), A({ updatedFields: { level: O }, onNext: function() {
      I(false), y();
    } }));
  }, continueDisabled: !_, continueLoading: l }, p.createElement(L, null, p.createElement(F, null, p.createElement(W, null, X && p.createElement(b, null, p.createElement(C.gt3, { size: 10 }), "Recommended")), p.createElement(B, null, V), p.createElement(Y, null, "runs per week"), p.createElement(J, null, P)), p.createElement(v.A, { title: "", hideHeader: true, ariaLabel: "Runs per week", value: [w], min: h, max: Q, step: 1, onChange: function(i2) {
    var e2 = (0, k.A)(i2, 1)[0];
    return N(e2);
  }, showMinMaxLabels: true, minLabel: "Light", maxLabel: "High" })), p.createElement(T, null, p.createElement(D, null, "Plan Details"), p.createElement(G, null, "\u{1F3C3}\u200D\u2642\uFE0F Weekly distance: ", P), p.createElement(G, null, "\u{1F4C5} Runs per week: ", V), p.createElement(G, null, "\u{1F525} Intense workouts: ", q, " of ", V, " runs")), !_ && p.createElement(U, null, V, " runs per week needs at least ", V, " available days. You currently have ", z, ". Update your availability to continue."), p.createElement(K, null, "You can adjust your training schedule later"));
});
