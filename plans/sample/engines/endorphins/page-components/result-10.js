// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 7372218..7372755
// This is a fragment of the vendor bundle, not an independently runnable engine.
function Vg(e) {
  var t = e.onStart, n = (0, r.useState)(false), o = (0, v.A)(n, 2), i = o[0], a = o[1];
  return (0, r.useEffect)((function() {
    var e2 = function() {
      return a(window.scrollY > 620);
    };
    return e2(), window.addEventListener("scroll", e2, { passive: true }), function() {
      return window.removeEventListener("scroll", e2);
    };
  }), []), r.createElement(Kb, { $visible: i, role: "region", "aria-label": "Sign up" }, r.createElement(Jb, null, r.createElement(Xb, null, "Start training free"), r.createElement(Zb, null, "No credit card needed")), r.createElement(_b, { type: "button", onClick: t }, "Get started"));
}
