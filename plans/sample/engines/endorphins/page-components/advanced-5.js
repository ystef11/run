// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 10881390..10885727
// This is a fragment of the vendor bundle, not an independently runnable engine.
function P4n() {
  var e = (0, h.W6)(), t = (0, fl.X)();
  (0, r.useEffect)((function() {
    var e2, t2, n2 = document.title, r2 = document.body.style.background, o2 = document.body.style.margin;
    document.title = "Free Training Plan Generator | 5K, 10K, Half & Marathon Plans", document.body.style.background = vA.qy.ink, document.body.style.margin = "0";
    var i = [], a = (function(e3, t3) {
      var n3 = document.querySelector('meta[name="'.concat(e3, '"]'));
      n3 || ((n3 = document.createElement("meta")).setAttribute("name", e3), document.head.appendChild(n3), i.push(n3));
      var r3 = n3.getAttribute("content");
      return n3.setAttribute("content", t3), function() {
        var e4;
        null != r3 && (null === (e4 = n3) || void 0 === e4 || e4.setAttribute("content", r3));
      };
    })("description", S4n), l = document.querySelector('link[rel="canonical"]'), s = !l, c = null !== (e2 = null === (t2 = l) || void 0 === t2 ? void 0 : t2.getAttribute("href")) && void 0 !== e2 ? e2 : null;
    l || ((l = document.createElement("link")).setAttribute("rel", "canonical"), document.head.appendChild(l)), l.setAttribute("href", B4n);
    var u = document.createElement("script");
    u.type = "application/ld+json", u.text = JSON.stringify(I4n), document.head.appendChild(u), i.push(u);
    var d = document.createElement("script");
    return d.type = "application/ld+json", d.text = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: D4n.map((function(e3) {
      return { "@type": "Question", name: e3.q, acceptedAnswer: { "@type": "Answer", text: e3.a } };
    })) }), document.head.appendChild(d), i.push(d), function() {
      var e3;
      document.title = n2, document.body.style.background = r2, document.body.style.margin = o2, a(), s ? null === (e3 = l) || void 0 === e3 || e3.remove() : l && null != c && l.setAttribute("href", c), i.forEach((function(e4) {
        return e4.remove();
      }));
    };
  }), []);
  var n = (0, r.useCallback)((function() {
    var n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "register";
    t ? t.open(n2) : e.push("login" === n2 ? "/login" : "/register");
  }), [t, e]), o = (0, r.useCallback)((function() {
    (0, ml.J4)("TrainingPlanGeneratorCTAClicked"), (0, ml.Pi)("training_plan_generator_cta_clicked"), n("register");
  }), [n]);
  return r.createElement(Wg.q, { value: { open: n } }, r.createElement(R4n, null, r.createElement(hA.A, { onRegister: function() {
    return n("register");
  }, onLogin: function() {
    return n("login");
  } }), r.createElement(F4n, null, r.createElement(j4n, null, r.createElement(L4n, { "aria-hidden": true }), "Free tool, no account needed"), r.createElement(N4n, null, "Free ", r.createElement(q4n, null, "Training Plan Generator")), r.createElement(z4n, null, "Build a personalized 5K, 10K, half marathon, or marathon running plan in seconds. Set your goal and mileage, then watch the same engine that powers your in-app plan lay down a periodized build with progressive mileage, recovery weeks, and a race-week taper.")), r.createElement(mx.A, null), r.createElement(U4n, null, r.createElement(H4n, null, "How the training plan generator works"), r.createElement(W4n, null, "A training plan generator turns your goal race and current fitness into a week-by-week running schedule. Choose your race distance, set your starting and peak weekly mileage, and pick how many weeks you have until race day. The generator builds a periodized plan in seconds: a foundation phase to establish base mileage, progressive build weeks that raise your volume, recovery weeks so your body adapts to the load, and a taper that drops mileage into race week so you arrive fresh and ready to perform."), r.createElement(W4n, null, "The preview above runs on the same engine as your full Endorphins plan. When you sign up free, that build becomes a complete day-by-day training plan with paced workouts, AI-assisted coaching, and automatic adjustments based on the runs you actually log, so your plan stays realistic week after week."), r.createElement(H4n, null, "Plans for every race distance"), r.createElement(W4n, null, "Whether you are chasing a faster 5K, building toward your first 10K, training for a half marathon, or preparing for a full marathon, the generator adapts the plan length and mileage progression to your goal. Switch between miles and kilometers, ease into the first weeks with a gradual start, and adjust your peak volume to match the training you can realistically fit into your week."), r.createElement(H4n, null, "Frequently asked questions"), D4n.map((function(e2) {
    return r.createElement(V4n, { key: e2.q }, r.createElement(Y4n, null, e2.q), r.createElement(W4n, null, e2.a));
  })), r.createElement(Q4n, { type: "button", onClick: o }, "Get your free personalized training plan")), r.createElement(fx.A, null)));
}
