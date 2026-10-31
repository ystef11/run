// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1562389..1566111
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var i, e, t, o;
  if (!r) return [];
  var y = [], x = null === (i = r.goalType) || void 0 === i ? void 0 : i.raceGoal;
  if (y.push({ key: "goal", label: "Goal", value: (0, R.gA)(x, null !== (e = r.goalRaceTime) && void 0 !== e ? e : null === (t = r.goalType) || void 0 === t ? void 0 : t.goalRaceTime), step: "goal-selection" }), M && y.push({ key: "runs-per-week", label: "Running level", value: "".concat(M, " runs/week"), step: "level" }), r.level) {
    var s, n, A, a, l, I, E = (0, f.r)(r), c = null !== (s = null == U ? void 0 : U.updatedTrainingPlanParams) && void 0 !== s ? s : void 0, k = r.trainingPlanParams, h = null !== (n = null !== (A = null == E ? void 0 : E.startMileage) && void 0 !== A ? A : null == c ? void 0 : c.startMileage) && void 0 !== n ? n : null == k ? void 0 : k.startMileage, p = null !== (a = null !== (l = null == E ? void 0 : E.peakMileage) && void 0 !== l ? l : null == c ? void 0 : c.peakMileage) && void 0 !== a ? a : null == k ? void 0 : k.peakMileage;
    if ("number" == typeof h && "number" == typeof p) {
      var Q = Math.round(H ? (0, m.eS)(h) : h), u = Math.round(H ? (0, m.eS)(p) : p);
      I = "".concat(Q, "-").concat(u, " ").concat(H ? "km" : "mi", "/week");
    } else {
      var d = (0, g.tK)(String(r.level), H);
      I = "Not set" === d ? "Not running yet" : "".concat(d, "/week");
    }
    y.push({ key: "volume", label: "Weekly volume", value: I, step: "advanced-training" });
  }
  var v = (0, f.r)(r), L = null !== (o = null == U ? void 0 : U.updatedTrainingPlanParams) && void 0 !== o ? o : void 0, F = r.trainingPlanParams, W = !!r.level && "TWO_DAY" !== String(r.level) && (r.goal === C.hz.RACE || r.goal === C.hz.GENERAL);
  if (W) {
    var b, B, Y = null !== (b = null !== (B = null == v ? void 0 : v.intenseWorkouts) && void 0 !== B ? B : null == L ? void 0 : L.intenseWorkouts) && void 0 !== b ? b : null == F ? void 0 : F.intenseWorkouts;
    "number" == typeof Y && y.push({ key: "speed-workouts", label: "Speed workouts", value: 0 === Y ? "No speed work" : 1 === Y ? "1 per week" : "".concat(Y, " per week"), step: "intense-workouts" });
  }
  if (r.goal === C.hz.RACE) {
    var J, T, D, G = null !== (J = null !== (T = null == v ? void 0 : v.terrainProfile) && void 0 !== T ? T : null == F ? void 0 : F.terrainProfile) && void 0 !== J ? J : "flat";
    y.push({ key: "terrain", label: "Race terrain", value: null !== (D = { flat: "Flat", rolling: "Rolling", hilly: "Hilly", mountainous: "Mountainous" }[String(G).toLowerCase()]) && void 0 !== D ? D : "Flat", step: "terrain" });
  }
  if (O.length) {
    var K = R.V_.filter((function(i2) {
      return O.includes(i2);
    })).map((function(i2) {
      return R.QI[i2];
    }));
    y.push({ key: "days", label: "Available days", value: K.join(" \xB7 "), step: "training-days" });
  }
  if (V && y.push({ key: "longrun", label: "Long run day", value: R.nf[V], step: "long-run" }), W) {
    var Z, j, w, N, P, q, X, z, _, $ = null !== (Z = null !== (j = null == v ? void 0 : v.minLongRunDistance) && void 0 !== j ? j : null == L ? void 0 : L.minLongRunDistance) && void 0 !== Z ? Z : null == F ? void 0 : F.minLongRunDistance, ii = null !== (w = null !== (N = null == v ? void 0 : v.maxLongRunDistance) && void 0 !== N ? N : null == L ? void 0 : L.maxLongRunDistance) && void 0 !== w ? w : null == F ? void 0 : F.maxLongRunDistance;
    if ("number" == typeof $ && "number" == typeof ii) {
      var ei = Math.round(H ? (0, m.eS)($) : $), ti = Math.round(H ? (0, m.eS)(ii) : ii);
      y.push({ key: "long-run-range", label: "Long runs", value: "".concat(ei, "-").concat(ti, " ").concat(H ? "km" : "mi"), step: "long-run-settings" });
    }
    var oi = null !== (P = null !== (q = null == L ? void 0 : L.longRunWorkouts) && void 0 !== q ? q : null == v ? void 0 : v.longRunWorkouts) && void 0 !== P ? P : null == F ? void 0 : F.longRunWorkouts, yi = null !== (X = null !== (z = null !== (_ = null == L ? void 0 : L.longRunWorkoutFrequency) && void 0 !== _ ? _ : null == v ? void 0 : v.longRunWorkoutFrequency) && void 0 !== z ? z : null == F ? void 0 : F.longRunWorkoutFrequency) && void 0 !== X ? X : 0, xi = (0, S.Rl)({ longRunWorkouts: oi, longRunWorkoutFrequency: yi });
    y.push({ key: "long-run-workouts", label: "Long run workouts", value: oi ? "".concat((0, S.xi)({ frequency: yi, auto: xi }), " cadence") : "Off", step: "long-run-settings", section: "workouts" });
  }
  var si = r.recentRaceResult;
  if (si && (si.hours || si.minutes || si.seconds)) {
    var ni = (0, R.gw)(si), Ai = R.Jy[String(si.distance)] || "";
    ni && Ai && y.push({ key: "recent-race", label: "Recent race", value: "".concat(ni, " ").concat(Ai), step: "recent-race-data" });
  }
  return y;
});
