// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 10303840..10306943
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e = (0, r.useState)("default"), t = (0, v.A)(e, 2), n = t[0], o = t[1], i = (0, r.useState)("small"), a = (0, v.A)(i, 2), l = a[0], s = a[1], c = (0, r.useState)(false), u = (0, v.A)(c, 2), d = u[0], p = u[1], f = (0, r.useState)(false), m = (0, v.A)(f, 2), A = m[0], h = m[1], g = (0, r.useState)(true), b = (0, v.A)(g, 2), y = b[0], x = b[1], E = (0, r.useState)(true), w = (0, v.A)(E, 2), C = w[0], k = w[1];
  return r.createElement(Unn, null, r.createElement("div", null, r.createElement(Hnn, null, "All Variants"), r.createElement("div", null, r.createElement(znn.A, { primaryText: "Account Settings", secondaryText: "Manage your profile and preferences", leftIcon: r.createElement(Xnn, null), onClick: function() {
  } }), r.createElement(Wnn, null, "default"), r.createElement(znn.A, { primaryText: "Start Training Plan", secondaryText: "Set up your first plan", variant: "action", leftIcon: r.createElement("span", { style: { fontSize: 20 } }, "\u{1F3C3}"), onClick: function() {
  } }), r.createElement(Wnn, null, "action"), r.createElement(znn.A, { primaryText: "Weekly Challenge", secondaryText: "Complete 5 runs this week", variant: "challenge", leftIcon: r.createElement("span", { style: { fontSize: 20 } }, "\u{1F3C6}"), onClick: function() {
  } }), r.createElement(Wnn, null, "challenge"), r.createElement(znn.A, { primaryText: "Injury Risk Detected", secondaryText: "Your mileage increased 30% this week", variant: "caution", leftIcon: r.createElement(Znn, null), onClick: function() {
  } }), r.createElement(Wnn, null, "caution"), r.createElement(znn.A, { primaryText: "System Maintenance", secondaryText: "Scheduled for Sunday 2am\u20134am", variant: "maintenance", leftIcon: r.createElement(_nn, null), onClick: function() {
  } }), r.createElement(Wnn, null, "maintenance"), r.createElement(znn.A, { primaryText: "Glass Row Style", secondaryText: "Subtle frosted appearance", variant: "glass", onClick: function() {
  } }), r.createElement(Wnn, null, "glass"))), r.createElement(Vnn, null), r.createElement("div", null, r.createElement(Hnn, null, "Playground"), r.createElement(Ynn, null, r.createElement(Qnn, null, r.createElement(znn.A, { primaryText: "Custom Row", secondaryText: y ? "With secondary text" : void 0, variant: n, size: l, transparent: d, disabled: A, leftIcon: C ? r.createElement(Xnn, null) : void 0, onClick: function() {
    return alert("Row clicked");
  } })), r.createElement(Gnn, null, r.createElement(Knn, null, "variant", r.createElement(Jnn, { value: n, onChange: function(e2) {
    return o(e2.target.value);
  } }, $nn.map((function(e2) {
    return r.createElement("option", { key: e2, value: e2 }, e2);
  })))), r.createElement(Knn, null, "size", r.createElement(Jnn, { value: l, onChange: function(e2) {
    return s(e2.target.value);
  } }, r.createElement("option", { value: "small" }, "small"), r.createElement("option", { value: "large" }, "large"))), r.createElement(Knn, null, "transparent", r.createElement("input", { type: "checkbox", checked: d, onChange: function(e2) {
    return p(e2.target.checked);
  } })), r.createElement(Knn, null, "disabled", r.createElement("input", { type: "checkbox", checked: A, onChange: function(e2) {
    return h(e2.target.checked);
  } })), r.createElement(Knn, null, "secondary text", r.createElement("input", { type: "checkbox", checked: y, onChange: function(e2) {
    return x(e2.target.checked);
  } })), r.createElement(Knn, null, "left icon", r.createElement("input", { type: "checkbox", checked: C, onChange: function(e2) {
    return k(e2.target.checked);
  } }))))));
});
