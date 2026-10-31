// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1587910..1588752
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e = i.onNext, t = i.onBack, o = i.progressBarPercentage, y = i.plan, x = (0, W.E9)((function(i2) {
    return i2.training.updatePlan;
  })), s = (0, S.useState)({ start: null, end: null }), n = (0, v.A)(s, 2), A = n[0], a = n[1], r = (0, S.useState)(false), l = (0, v.A)(r, 2), I = l[0], E = l[1], c = !!A.start && !!A.end && A.end.getTime() - A.start.getTime() >= 12096e5, k = "INTRO_TO_RUNNING" === (null == y ? void 0 : y.goal);
  return S.createElement(B.A, { title: "When do you want to start your plan?", subtitle: k ? "Pick a start date for your plan." : "Start today and commit to 16+ weeks \u2014 that's where real progress happens.", progressBarPercentage: o, onBack: t, onContinue: function() {
    A.start && A.end && c && (E(true), x({ updatedFields: { startDate: K(A.start), endDate: K(A.end) }, onNext: function() {
      E(false), e();
    }, onFailure: function() {
      return E(false);
    } }));
  }, continueDisabled: !c, continueLoading: I }, S.createElement(Ae, { range: A, setRange: a }));
});
