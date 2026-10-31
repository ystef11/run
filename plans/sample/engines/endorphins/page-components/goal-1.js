// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1036330..1037072
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t = i.onNext, A = i.onBack, a = i.progressBarPercentage, r = i.plan, l = (0, x.E9)((function(i2) {
    return i2.training.updatePlan;
  })), I = (0, y.useState)(false), E = (0, o.A)(I, 2), c = E[0], k = E[1], h = (0, n.in)(null == r ? void 0 : r.raceDistance), p = h ? "What's your ".concat(h, " experience?") : "What's your running experience?", Q = h ? "This helps us build a ".concat(h, " plan tailored to your current fitness level.") : "This helps us build a training plan tailored to your current fitness level.";
  return y.createElement(s.A, { title: p, subtitle: Q, options: n.bp, initialValue: null !== (e = null == r ? void 0 : r.onboardingLevel) && void 0 !== e ? e : null, progressBarPercentage: a, onBack: A, onSubmit: function(i2) {
    k(true), l({ updatedFields: { onboardingLevel: i2 }, onNext: function() {
      k(false), t();
    } });
  }, saving: c });
});
