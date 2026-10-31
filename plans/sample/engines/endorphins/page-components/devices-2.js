// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 486867..488173
// This is a fragment of the vendor bundle, not an independently runnable engine.
function me(e) {
  var t = e.config, n = e.ctaLabel, r = t.chat, o = (0, de.O)(), i = (0, b.useState)(0), a = (0, g.A)(i, 2), l = a[0], s = a[1];
  (0, b.useEffect)((function() {
    if (!(o || pe.length <= 1)) {
      var e2 = window.setInterval((function() {
        s((function(e3) {
          return (e3 + 1) % pe.length;
        }));
      }), fe);
      return function() {
        return window.clearInterval(e2);
      };
    }
  }), [o]);
  var c = t.deviceLogos.filter((function(e2) {
    return !!e2.src;
  })), u = t.channelLogos.filter((function(e2) {
    return !!e2.src;
  }));
  return b.createElement(Se, null, b.createElement(Ie, null, b.createElement(k.YN, null, "Proactive coaching"), b.createElement(De, null, b.createElement(k.pk, { as: "h1" }, b.createElement(Pe, { "aria-hidden": true }, "A real coach, right inside the apps you already text in."), pe.map((function(e2, t2) {
    return b.createElement(Te, { key: e2.lead, $active: t2 === l, $animate: !o }, e2.lead, " ", b.createElement(Oe, null, e2.accent));
  })))), b.createElement(Me, null, t.lead), b.createElement(Ae, { label: "Connect your devices", logos: c }), b.createElement(Ae, { label: "Coach you anywhere", logos: u }), b.createElement(qe, null, b.createElement(P.A, { source: "proactive_coach_hero" }, n)), b.createElement(ze, null, t.socialProof)), b.createElement(de.A, { chat: r, summary: "A conversation where the Endorphins coach messages first: it reads your connected devices, adjusts your training when your readiness drops, and sends the updated session to your phone." }));
}
