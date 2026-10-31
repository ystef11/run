// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1614457..1615942
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e = i.onNext, t = i.onBack, o = i.progressBarPercentage, y = i.plan, x = (0, E.E9)((function(i2) {
    return i2.training.updatePlan;
  })), s = (0, r.useState)(false), a = (0, A.A)(s, 2), l = a[0], c = a[1], d = (0, r.useState)((function() {
    var i2, e2, t2 = (null !== (i2 = null == y || null === (e2 = y.availability) || void 0 === e2 ? void 0 : e2.days) && void 0 !== i2 ? i2 : []).map((function(i3) {
      return String(i3);
    }));
    return t2.length ? t2 : h.j_.map((function(i3) {
      return i3.value;
    }));
  })), v = (0, A.A)(d, 2), g = v[0], f = v[1], m = (0, r.useMemo)((function() {
    var i2, e2, t2 = String(null !== (i2 = null == y ? void 0 : y.level) && void 0 !== i2 ? i2 : "");
    return "INTRO_TO_RUNNING" === (null == y ? void 0 : y.goal) || "INTRO" === t2 ? 3 : null !== (e2 = h.GH[t2]) && void 0 !== e2 ? e2 : 4;
  }), [null == y ? void 0 : y.level, null == y ? void 0 : y.goal]), S = g.length >= m;
  return r.createElement(k.A, { title: "What days are you free to run?", subtitle: "Select the days you are available to run each week", progressBarPercentage: o, onBack: t, onContinue: function() {
    S && (c(true), x({ updatedFields: { availability: g }, onNext: function() {
      c(false), e();
    } }));
  }, continueDisabled: !S, continueLoading: l }, h.j_.map((function(i2) {
    var e2 = g.includes(i2.value);
    return r.createElement(p, { key: i2.value, type: "button", onClick: function() {
      return e3 = i2.value, void f((function(i3) {
        return i3.includes(e3) ? i3.filter((function(i4) {
          return i4 !== e3;
        })) : [].concat((0, n.A)(i3), [e3]);
      }));
      var e3;
    } }, r.createElement(Q, null, i2.title), r.createElement(C, { $checked: e2 }, e2 && r.createElement(I.G8W, { size: 22 })));
  })), !S && r.createElement(u, null, "Based on your current plan, you must be available for ", m, " days per week to ensure a safe program."));
});
