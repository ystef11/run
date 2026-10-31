// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1071171..1072787
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e = Q === i.value, t = e && L.ry.includes(i.value);
  return g.createElement(F, { key: i.value, $selected: e }, g.createElement(W, { type: "button", onClick: function() {
    return e2 = i.value, C(e2), void (L.ry.includes(e2) || (M(""), _(""), ti("")));
    var e2;
  } }, g.createElement(b, null, g.createElement(B, null, i.title), g.createElement(Y, null, i.description)), g.createElement(J, { $selected: e }, e && g.createElement(T, null))), t && g.createElement(D, null, g.createElement(G, null, "SET_PR" === i.value ? "What time are you aiming to beat?" : "What's your target finish time?"), g.createElement(K, null, Ei && g.createElement(g.Fragment, null, g.createElement(U, null, g.createElement(Z, { inputMode: "numeric", "aria-label": "Hours", placeholder: "00", value: P, onChange: function(i2) {
    var e2, t2 = V(i2.target.value, 2);
    M(t2), si(true), 2 === t2.length && (null === (e2 = ni.current) || void 0 === e2 || e2.focus());
  } }), g.createElement(H, null, "Hours")), g.createElement(j, null, ":")), g.createElement(U, null, g.createElement(Z, { ref: ni, inputMode: "numeric", "aria-label": "Minutes", placeholder: "00", value: z, onChange: function(i2) {
    var e2, t2 = V(i2.target.value, 2), o = "" !== t2 && Number(t2) > 59 ? "59" : t2;
    _(o), si(true), 2 === o.length && (null === (e2 = Ai.current) || void 0 === e2 || e2.focus());
  } }), g.createElement(H, null, "Minutes")), g.createElement(j, null, ":"), g.createElement(U, null, g.createElement(Z, { ref: Ai, inputMode: "numeric", "aria-label": "Seconds", placeholder: "00", value: ei, onChange: function(i2) {
    var e2 = V(i2.target.value, 2), t2 = "" !== e2 && Number(e2) > 59 ? "59" : e2;
    ti(t2), si(true);
  } }), g.createElement(H, null, "Seconds"))), Qi && g.createElement(w, null, "Goal Time: ", g.createElement(N, null, ui)), Ci && g.createElement(O, null, "Please enter a valid time for this race distance")));
});
