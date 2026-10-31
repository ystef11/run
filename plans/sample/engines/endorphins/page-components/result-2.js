// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1554665..1555305
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e = i.rows, t = i.onEditRow;
  return 0 === e.length ? null : I.createElement(N, null, I.createElement(O, null, "How we built your plan"), I.createElement(V, null, "Tap any row to adjust. You can change these anytime \u2014 even after you start training."), I.createElement("div", null, e.map((function(i2, o) {
    return I.createElement(P, { key: i2.key, type: "button", $bordered: o < e.length - 1, onClick: function() {
      return t(i2);
    } }, I.createElement(M, null, I.createElement(h.G3G, { size: 18 })), I.createElement(q, null, I.createElement(X, null, i2.label), I.createElement(z, null, i2.value)), I.createElement(_, null, "Edit"), I.createElement($, null, I.createElement(h.ZK4, { size: 16 })));
  }))));
});
