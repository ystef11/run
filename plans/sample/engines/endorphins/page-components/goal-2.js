// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1067697..1072791
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t, o, y, x, s, n = i.onNext, A = i.onBack, a = i.progressBarPercentage, r = i.plan, l = (0, m.E9)((function(i2) {
    return i2.training.updatePlan;
  })), I = (0, g.useState)(false), E = (0, d.A)(I, 2), c = E[0], k = E[1], h = (0, g.useState)(null !== (e = null == r || null === (t = r.goalType) || void 0 === t ? void 0 : t.raceGoal) && void 0 !== e ? e : null), p = (0, d.A)(h, 2), Q = p[0], C = p[1], u = null !== (o = null == r ? void 0 : r.goalRaceTime) && void 0 !== o ? o : null == r || null === (y = r.goalType) || void 0 === y ? void 0 : y.goalRaceTime, v = function(i2) {
    var e2 = null == u ? void 0 : u[i2];
    return null != e2 && "0" !== String(e2) ? String(e2) : "";
  }, f = (0, g.useState)((function() {
    return v("hours");
  })), S = (0, d.A)(f, 2), P = S[0], M = S[1], q = (0, g.useState)((function() {
    return v("minutes");
  })), X = (0, d.A)(q, 2), z = X[0], _ = X[1], $ = (0, g.useState)((function() {
    return v("seconds");
  })), ii = (0, d.A)($, 2), ei = ii[0], ti = ii[1], oi = (0, g.useState)(false), yi = (0, d.A)(oi, 2), xi = yi[0], si = yi[1], ni = (0, g.useRef)(null), Ai = (0, g.useRef)(null), ai = null == r ? void 0 : r.raceDistance, ri = (0, L.in)(ai) || "race", li = String(null !== (x = null !== (s = null == r ? void 0 : r.onboardingLevel) && void 0 !== s ? s : null == r ? void 0 : r.level) && void 0 !== x ? x : ""), Ii = L.R3.includes(String(null == r ? void 0 : r.onboardingLevel)) && !L.hf.includes(String(null == r ? void 0 : r.level)), Ei = (0, L.ax)(ai), ci = "RACE" === (null == r ? void 0 : r.goal), ki = (0, g.useMemo)((function() {
    if (!ci) return [{ title: "Maintain Fitness", description: "Stay in shape and keep up a consistent running routine", value: "MAINTAIN_FITNESS" }, { title: "Get Faster", description: "Improve your speed and running performance", value: "GET_FASTER" }, { title: "Become a Better Runner", description: "Build endurance, strength, and overall running ability", value: "IMPROVE_RUNNING" }, { title: "Have Fun", description: "Enjoy the journey and the process of running", value: "HAVE_FUN" }, { title: "I'm Not Sure Yet", description: "We'll help you figure it out along the way", value: "NOT_SURE" }];
    var i2 = (0, L.HU)(ai, li), e2 = { title: "Run a Specific Time", description: "Target a precise finish time like ".concat(i2), value: "RUN_SPECIFIC_TIME" }, t2 = { title: "Complete the Race", description: "Finish strong and cross the ".concat(ri, " finish line"), value: "COMPLETE_RACE" }, o2 = { title: "Have Fun", description: "Enjoy the journey and race day experience", value: "HAVE_FUN" }, y2 = { title: "I'm Not Sure Yet", description: "We'll help you figure it out along the way", value: "NOT_SURE" };
    return Ii ? [t2, o2, e2, y2] : [{ title: "Set a PR", description: "Beat your personal best for the ".concat(ri), value: "SET_PR" }, e2, t2, o2, y2];
  }), [ai, ri, li, Ii, ci]), hi = null != Q && L.ry.includes(Q), pi = function() {
    if (!hi) return true;
    var i2 = L.lf[String(ai)];
    if (!i2) return true;
    var e2 = (0, L.wG)({ hours: parseInt(P, 10) || 0, minutes: parseInt(z, 10) || 0, seconds: parseInt(ei, 10) || 0 });
    return e2 >= i2.lowSeconds && e2 <= i2.highSeconds;
  }, Qi = !!(P || z || ei), Ci = hi && Qi && xi && !pi(), ui = [Ei ? P : null, z, ei].filter((function(i2, e2) {
    return Ei || e2 > 0;
  })).map((function(i2) {
    return "" === (e2 = null != i2 ? i2 : "") || "0" === e2 ? "00" : e2.padStart(2, "0");
    var e2;
  })).join(":"), di = ci ? "What's Your ".concat(ri, " Goal?") : "What's Your Training Goal?", vi = ci ? "Choose your primary objective for this race. This helps us personalize your training plan." : "Choose your primary objective. This helps us personalize your training plan.";
  return g.createElement(R.A, { title: di, subtitle: vi, progressBarPercentage: a, onBack: A, onContinue: function() {
    if (null != Q && (!hi || pi())) {
      k(true);
      var i2 = function(i3) {
        return "" === i3 ? 0 : parseInt(i3, 10);
      }, e2 = hi && Qi ? { distance: ai, hours: Ei ? i2(P) : 0, minutes: i2(z), seconds: i2(ei) } : null;
      l({ updatedFields: { raceGoal: Q, goalRaceTime: e2 }, onNext: function() {
        k(false), n();
      } });
    }
  }, continueDisabled: null == Q || hi && !pi(), continueLoading: c }, ki.map((function(i2) {
    var e2 = Q === i2.value, t2 = e2 && L.ry.includes(i2.value);
    return g.createElement(F, { key: i2.value, $selected: e2 }, g.createElement(W, { type: "button", onClick: function() {
      return e3 = i2.value, C(e3), void (L.ry.includes(e3) || (M(""), _(""), ti("")));
      var e3;
    } }, g.createElement(b, null, g.createElement(B, null, i2.title), g.createElement(Y, null, i2.description)), g.createElement(J, { $selected: e2 }, e2 && g.createElement(T, null))), t2 && g.createElement(D, null, g.createElement(G, null, "SET_PR" === i2.value ? "What time are you aiming to beat?" : "What's your target finish time?"), g.createElement(K, null, Ei && g.createElement(g.Fragment, null, g.createElement(U, null, g.createElement(Z, { inputMode: "numeric", "aria-label": "Hours", placeholder: "00", value: P, onChange: function(i3) {
      var e3, t3 = V(i3.target.value, 2);
      M(t3), si(true), 2 === t3.length && (null === (e3 = ni.current) || void 0 === e3 || e3.focus());
    } }), g.createElement(H, null, "Hours")), g.createElement(j, null, ":")), g.createElement(U, null, g.createElement(Z, { ref: ni, inputMode: "numeric", "aria-label": "Minutes", placeholder: "00", value: z, onChange: function(i3) {
      var e3, t3 = V(i3.target.value, 2), o2 = "" !== t3 && Number(t3) > 59 ? "59" : t3;
      _(o2), si(true), 2 === o2.length && (null === (e3 = Ai.current) || void 0 === e3 || e3.focus());
    } }), g.createElement(H, null, "Minutes")), g.createElement(j, null, ":"), g.createElement(U, null, g.createElement(Z, { ref: Ai, inputMode: "numeric", "aria-label": "Seconds", placeholder: "00", value: ei, onChange: function(i3) {
      var e3 = V(i3.target.value, 2), t3 = "" !== e3 && Number(e3) > 59 ? "59" : e3;
      ti(t3), si(true);
    } }), g.createElement(H, null, "Seconds"))), Qi && g.createElement(w, null, "Goal Time: ", g.createElement(N, null, ui)), Ci && g.createElement(O, null, "Please enter a valid time for this race distance")));
  })));
});
