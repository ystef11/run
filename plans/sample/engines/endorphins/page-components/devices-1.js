// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1034642..1036217
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e = i.onNext, t = i.onBack, x = i.progressBarPercentage, A = (0, n.W6)(), r = (0, a.O$)((function(i2) {
    return i2.user.data;
  })), k = (0, s.useState)(false), h = (0, y.A)(k, 2), p = h[0], Q = h[1], C = (0, E.H)((function() {
    return Q(true);
  })), u = C.connect, v = C.connecting, g = C.garminPreConnect;
  if (p || (0, E.r)(r)) return s.createElement(d, (0, o.A)({}, i, { onBack: (0, E.r)(r) ? t : function() {
    return Q(false);
  } }));
  var f = function(i2, e2, t2) {
    return s.createElement(U, { type: "button", onClick: function() {
      return u(i2);
    }, disabled: null !== v }, v === i2 ? s.createElement(j, null) : s.createElement(s.Fragment, null, s.createElement(Z, { src: t2, alt: "" }), e2));
  };
  return s.createElement(Y, null, s.createElement(J, null, s.createElement(T, { onClick: t, "aria-label": "Back" }, "\u2190")), s.createElement(D, null, s.createElement(I.A, { percentage: x })), s.createElement(G, null, s.createElement(l.H2, null, "Connect Your Device"), s.createElement(l.a3, null, "Automatically sync workouts and get real-time coaching optimizations based on your progress."), s.createElement(K, null, f("garmin", "Connect Garmin", "/images/garmin-icon.png"), f("coros", "Connect with Coros", "/images/coros-icon.png"), f("suunto", "Connect with Suunto", "/images/suunto-icon.png"), f("whoop", "Connect with Whoop", "/images/whoop-icon.png"), f("oura", "Connect with Oura", "/images/oura-icon.png"), s.createElement(U, { type: "button", onClick: function() {
    return A.push("/app-handoff");
  }, disabled: null !== v }, s.createElement(Z, { src: "/images/apple-health-icon.png", alt: "" }), "Connect Apple Health", s.createElement(H, null, "App only"))), s.createElement(w, { type: "button", onClick: e, disabled: null !== v }, "Skip for now")), s.createElement(c.A, g));
});
