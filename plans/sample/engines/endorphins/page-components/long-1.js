// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1539996..1541382
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t, o = i.onNext, y = i.onBack, s = i.progressBarPercentage, A = i.plan, r = (0, a.E9)((function(i2) {
    return i2.training.updatePlan;
  })), E = (0, n.useState)(false), h = (0, x.A)(E, 2), p = h[0], Q = h[1], C = (0, n.useMemo)((function() {
    var i2, e2;
    return (null !== (i2 = null == A || null === (e2 = A.availability) || void 0 === e2 ? void 0 : e2.days) && void 0 !== i2 ? i2 : []).map((function(i3) {
      return String(i3);
    }));
  }), [null == A || null === (e = A.availability) || void 0 === e ? void 0 : e.days]), u = (0, n.useMemo)((function() {
    return I.j_.map((function(i2) {
      return c(c({}, i2), {}, { disabled: C.length > 0 && !C.includes(i2.value) });
    }));
  }), [C]), d = null != A && null !== (t = A.availability) && void 0 !== t && t.longrun ? String(A.availability.longrun) : null, v = !!d && C.length > 0 && !C.includes(d), g = (0, n.useMemo)((function() {
    var i2, e2;
    return null !== (i2 = null === (e2 = I.j_.find((function(i3) {
      return i3.value === d;
    }))) || void 0 === e2 ? void 0 : e2.title) && void 0 !== i2 ? i2 : null;
  }), [d]), f = (0, n.useMemo)((function() {
    var i2;
    return v ? null : d && C.includes(d) ? d : C.includes("SATURDAY") ? "SATURDAY" : null !== (i2 = C[0]) && void 0 !== i2 ? i2 : null;
  }), [v, d, C]);
  return n.createElement(l.A, { title: "Long Run Day", subtitle: "Select the day of the week when you'd like to do your longest run.", options: u, initialValue: f, progressBarPercentage: s, onBack: y, onSubmit: function(i2) {
    Q(true), r({ updatedFields: { longrun: i2 }, onNext: function() {
      Q(false), o();
    } });
  }, saving: p }, v && n.createElement(k, null, g, " isn't one of your available days anymore. Pick a new long run day to continue."));
});
