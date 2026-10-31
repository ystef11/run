// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1558517..1567646
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t, o, y, x = i.onNext, a = i.onBack, r = i.plan, E = (0, p.W6)(), c = (0, Q.E9)((function(i2) {
    return i2.training.generatePlanPreview;
  })), u = (0, I.useState)(true), F = (0, n.A)(u, 2), W = F[0], b = F[1], B = (0, I.useState)(false), J = (0, n.A)(B, 2), T = J[0], D = J[1], G = (0, I.useState)(null), K = (0, n.A)(G, 2), U = K[0], Z = K[1], H = "KILOMETERS" === String(null == r ? void 0 : r.preferredUnit), j = H ? "km" : "mi", w = (null == r ? void 0 : r.goal) === C.hz.INTRO_TO_RUNNING, N = null == r ? void 0 : r._id;
  (0, I.useEffect)((function() {
    var i2 = false;
    return !N || w ? (b(false), void D(!w)) : ((0, s.A)(l().mark((function e2() {
      var t2;
      return l().wrap((function(e3) {
        for (; ; ) switch (e3.prev = e3.next) {
          case 0:
            return e3.prev = 0, e3.next = 3, c({ trainingPlanId: N, params: {} });
          case 3:
            t2 = e3.sent, i2 || Z(t2), e3.next = 10;
            break;
          case 7:
            e3.prev = 7, e3.t0 = e3.catch(0), i2 || D(true);
          case 10:
            return e3.prev = 10, i2 || b(false), e3.finish(10);
          case 13:
          case "end":
            return e3.stop();
        }
      }), e2, null, [[0, 7, 10, 13]]);
    })))(), function() {
      i2 = true;
    });
  }), [N, w, c]);
  var O = (0, I.useMemo)((function() {
    var i2, e2;
    return null !== (i2 = null == r || null === (e2 = r.availability) || void 0 === e2 ? void 0 : e2.days) && void 0 !== i2 ? i2 : [];
  }), [null == r || null === (e = r.availability) || void 0 === e ? void 0 : e.days]), V = null == r || null === (t = r.availability) || void 0 === t ? void 0 : t.longrun, P = (0, I.useMemo)((function() {
    var i2, e2, t2, o2 = null == U ? void 0 : U.mileageTrend;
    return null !== (i2 = null !== (e2 = null == o2 || null === (t2 = o2.labels) || void 0 === t2 ? void 0 : t2.length) && void 0 !== e2 ? e2 : null == r ? void 0 : r.planDuration) && void 0 !== i2 ? i2 : 0;
  }), [null == U ? void 0 : U.mileageTrend, null == r ? void 0 : r.planDuration]), M = (0, I.useMemo)((function() {
    var i2, e2, t2 = String(null !== (i2 = null == r ? void 0 : r.level) && void 0 !== i2 ? i2 : "");
    return null !== (e2 = g.GH[t2]) && void 0 !== e2 ? e2 : 0;
  }), [null == r ? void 0 : r.level]), q = (0, I.useMemo)((function() {
    var i2, e2 = P ? "".concat(P, "-week") : "";
    if ((null == r ? void 0 : r.goal) === C.hz.INTRO_TO_RUNNING) return [e2, "Intro to Running"].filter(Boolean).join(" ").trim();
    if ((null == r ? void 0 : r.goal) === C.hz.RACE) {
      var t2, o2 = "string" == typeof (null == r ? void 0 : r.race) ? null == r ? void 0 : r.race : null == r || null === (t2 = r.race) || void 0 === t2 ? void 0 : t2.name, y2 = R._y[String(null == r ? void 0 : r.raceDistance)] || "";
      return [e2, o2 || y2 || "Training", o2 ? "" : "Plan"].filter(Boolean).join(" ").trim();
    }
    return [e2, Ji[String(null == r || null === (i2 = r.goalType) || void 0 === i2 ? void 0 : i2.raceGoal)] || "Personalized", "Plan"].filter(Boolean).join(" ").trim();
  }), [null == r ? void 0 : r.goal, null == r ? void 0 : r.race, null == r ? void 0 : r.raceDistance, null == r || null === (o = r.goalType) || void 0 === o ? void 0 : o.raceGoal, P]), X = (0, I.useMemo)((function() {
    var i2, e2, t2 = [];
    M && t2.push("".concat(M, " runs/week"));
    var o2 = (0, R.mB)(null !== (i2 = null == r ? void 0 : r.goalRaceTime) && void 0 !== i2 ? i2 : null == r || null === (e2 = r.goalType) || void 0 === e2 ? void 0 : e2.goalRaceTime);
    return o2 && t2.push("Goal: ".concat(o2)), t2.join(" \xB7 ");
  }), [M, null == r ? void 0 : r.goalRaceTime, null == r || null === (y = r.goalType) || void 0 === y ? void 0 : y.goalRaceTime]), z = (0, I.useMemo)((function() {
    var i2, e2 = (0, A.A)((0, A.A)((0, A.A)((0, A.A)((0, A.A)((0, A.A)((0, A.A)({}, C.ob.MONDAY, "OTHER"), C.ob.TUESDAY, "OTHER"), C.ob.WEDNESDAY, "OTHER"), C.ob.THURSDAY, "OTHER"), C.ob.FRIDAY, "OTHER"), C.ob.SATURDAY, "OTHER"), C.ob.SUNDAY, "OTHER"), t2 = null == U || null === (i2 = U.nextWeek) || void 0 === i2 ? void 0 : i2.workouts;
    return t2 && t2.length ? t2.forEach((function(i3) {
      if (null != i3 && i3.date) {
        var t3 = v.A.utc(i3.date).day(), o2 = R.A8[t3];
        if (o2) {
          var y2 = (0, R.rZ)(i3.type);
          ("OTHER" === e2[o2] || "REST" === e2[o2] || "HARD" === y2) && (e2[o2] = y2);
        }
      }
    })) : O.length && (O.forEach((function(i3) {
      e2[i3] = "EASY";
    })), V && (e2[V] = "LONG_RUN")), e2;
  }), [null == U ? void 0 : U.nextWeek, O, V]), _ = (0, I.useMemo)((function() {
    var i2 = function(i3) {
      var e3, t3;
      return null !== (e3 = null == i3 || null === (t3 = i3.labels) || void 0 === t3 ? void 0 : t3.map((function(e4, t4) {
        var o2;
        return { label: String(e4).startsWith("W") ? String(e4) : "W".concat(e4), value: null !== (o2 = i3.data[t4]) && void 0 !== o2 ? o2 : 0 };
      }))) && void 0 !== e3 ? e3 : [];
    }, e2 = i2(null == U ? void 0 : U.mileageTrend), t2 = i2(null == U ? void 0 : U.currentMileageTrend);
    return e2.map((function(i3, e3) {
      var o2;
      return Qi(Qi({}, i3), {}, { secondaryValue: null === (o2 = t2[e3]) || void 0 === o2 ? void 0 : o2.value });
    }));
  }), [null == U ? void 0 : U.mileageTrend, null == U ? void 0 : U.currentMileageTrend]), $ = (0, I.useMemo)((function() {
    var i2, e2, t2, o2;
    if (!r) return [];
    var y2 = [], x2 = null === (i2 = r.goalType) || void 0 === i2 ? void 0 : i2.raceGoal;
    if (y2.push({ key: "goal", label: "Goal", value: (0, R.gA)(x2, null !== (e2 = r.goalRaceTime) && void 0 !== e2 ? e2 : null === (t2 = r.goalType) || void 0 === t2 ? void 0 : t2.goalRaceTime), step: "goal-selection" }), M && y2.push({ key: "runs-per-week", label: "Running level", value: "".concat(M, " runs/week"), step: "level" }), r.level) {
      var s2, n2, A2, a2, l2, I2, E2 = (0, f.r)(r), c2 = null !== (s2 = null == U ? void 0 : U.updatedTrainingPlanParams) && void 0 !== s2 ? s2 : void 0, k2 = r.trainingPlanParams, h2 = null !== (n2 = null !== (A2 = null == E2 ? void 0 : E2.startMileage) && void 0 !== A2 ? A2 : null == c2 ? void 0 : c2.startMileage) && void 0 !== n2 ? n2 : null == k2 ? void 0 : k2.startMileage, p2 = null !== (a2 = null !== (l2 = null == E2 ? void 0 : E2.peakMileage) && void 0 !== l2 ? l2 : null == c2 ? void 0 : c2.peakMileage) && void 0 !== a2 ? a2 : null == k2 ? void 0 : k2.peakMileage;
      if ("number" == typeof h2 && "number" == typeof p2) {
        var Q2 = Math.round(H ? (0, m.eS)(h2) : h2), u2 = Math.round(H ? (0, m.eS)(p2) : p2);
        I2 = "".concat(Q2, "-").concat(u2, " ").concat(H ? "km" : "mi", "/week");
      } else {
        var d2 = (0, g.tK)(String(r.level), H);
        I2 = "Not set" === d2 ? "Not running yet" : "".concat(d2, "/week");
      }
      y2.push({ key: "volume", label: "Weekly volume", value: I2, step: "advanced-training" });
    }
    var v2 = (0, f.r)(r), L2 = null !== (o2 = null == U ? void 0 : U.updatedTrainingPlanParams) && void 0 !== o2 ? o2 : void 0, F2 = r.trainingPlanParams, W2 = !!r.level && "TWO_DAY" !== String(r.level) && (r.goal === C.hz.RACE || r.goal === C.hz.GENERAL);
    if (W2) {
      var b2, B2, Y2 = null !== (b2 = null !== (B2 = null == v2 ? void 0 : v2.intenseWorkouts) && void 0 !== B2 ? B2 : null == L2 ? void 0 : L2.intenseWorkouts) && void 0 !== b2 ? b2 : null == F2 ? void 0 : F2.intenseWorkouts;
      "number" == typeof Y2 && y2.push({ key: "speed-workouts", label: "Speed workouts", value: 0 === Y2 ? "No speed work" : 1 === Y2 ? "1 per week" : "".concat(Y2, " per week"), step: "intense-workouts" });
    }
    if (r.goal === C.hz.RACE) {
      var J2, T2, D2, G2 = null !== (J2 = null !== (T2 = null == v2 ? void 0 : v2.terrainProfile) && void 0 !== T2 ? T2 : null == F2 ? void 0 : F2.terrainProfile) && void 0 !== J2 ? J2 : "flat";
      y2.push({ key: "terrain", label: "Race terrain", value: null !== (D2 = { flat: "Flat", rolling: "Rolling", hilly: "Hilly", mountainous: "Mountainous" }[String(G2).toLowerCase()]) && void 0 !== D2 ? D2 : "Flat", step: "terrain" });
    }
    if (O.length) {
      var K2 = R.V_.filter((function(i3) {
        return O.includes(i3);
      })).map((function(i3) {
        return R.QI[i3];
      }));
      y2.push({ key: "days", label: "Available days", value: K2.join(" \xB7 "), step: "training-days" });
    }
    if (V && y2.push({ key: "longrun", label: "Long run day", value: R.nf[V], step: "long-run" }), W2) {
      var Z2, j2, w2, N2, P2, q2, X2, z2, _2, $2 = null !== (Z2 = null !== (j2 = null == v2 ? void 0 : v2.minLongRunDistance) && void 0 !== j2 ? j2 : null == L2 ? void 0 : L2.minLongRunDistance) && void 0 !== Z2 ? Z2 : null == F2 ? void 0 : F2.minLongRunDistance, ii2 = null !== (w2 = null !== (N2 = null == v2 ? void 0 : v2.maxLongRunDistance) && void 0 !== N2 ? N2 : null == L2 ? void 0 : L2.maxLongRunDistance) && void 0 !== w2 ? w2 : null == F2 ? void 0 : F2.maxLongRunDistance;
      if ("number" == typeof $2 && "number" == typeof ii2) {
        var ei2 = Math.round(H ? (0, m.eS)($2) : $2), ti2 = Math.round(H ? (0, m.eS)(ii2) : ii2);
        y2.push({ key: "long-run-range", label: "Long runs", value: "".concat(ei2, "-").concat(ti2, " ").concat(H ? "km" : "mi"), step: "long-run-settings" });
      }
      var oi = null !== (P2 = null !== (q2 = null == L2 ? void 0 : L2.longRunWorkouts) && void 0 !== q2 ? q2 : null == v2 ? void 0 : v2.longRunWorkouts) && void 0 !== P2 ? P2 : null == F2 ? void 0 : F2.longRunWorkouts, yi = null !== (X2 = null !== (z2 = null !== (_2 = null == L2 ? void 0 : L2.longRunWorkoutFrequency) && void 0 !== _2 ? _2 : null == v2 ? void 0 : v2.longRunWorkoutFrequency) && void 0 !== z2 ? z2 : null == F2 ? void 0 : F2.longRunWorkoutFrequency) && void 0 !== X2 ? X2 : 0, xi = (0, S.Rl)({ longRunWorkouts: oi, longRunWorkoutFrequency: yi });
      y2.push({ key: "long-run-workouts", label: "Long run workouts", value: oi ? "".concat((0, S.xi)({ frequency: yi, auto: xi }), " cadence") : "Off", step: "long-run-settings", section: "workouts" });
    }
    var si = r.recentRaceResult;
    if (si && (si.hours || si.minutes || si.seconds)) {
      var ni = (0, R.gw)(si), Ai = R.Jy[String(si.distance)] || "";
      ni && Ai && y2.push({ key: "recent-race", label: "Recent race", value: "".concat(ni, " ").concat(Ai), step: "recent-race-data" });
    }
    return y2;
  }), [r, O, V, M, H, null == U ? void 0 : U.updatedTrainingPlanParams]), ei = (0, I.useCallback)((function(i2) {
    var e2 = i2.section ? "&section=".concat(i2.section) : "";
    if ((null == r ? void 0 : r.goal) === C.hz.GENERAL || "INTRO_TO_RUNNING" === (null == r ? void 0 : r.goal)) {
      var t2 = null != r && r.presetId ? "&preset=".concat(r.presetId) : "";
      E.push("/onboarding/general?step=".concat(i2.step).concat(t2).concat(e2, "&edit=1"));
    } else E.push("/onboarding/race?step=".concat(i2.step).concat(e2, "&edit=1"));
  }), [E, null == r ? void 0 : r.goal, null == r ? void 0 : r.presetId]), ti = !W && !T && !!U;
  return I.createElement(Ci, null, W ? I.createElement(Si, null, I.createElement(Ri, null, I.createElement(k(), { animationData: hi, loop: true, autoplay: true })), I.createElement(Li, null, "Building your blueprint\u2026")) : ti ? I.createElement(ui, null, I.createElement(di, null, I.createElement(vi, null, I.createElement(k(), { animationData: hi, loop: false, autoplay: true }))), I.createElement(gi, null, !!q && I.createElement(fi, null, q), !!X && I.createElement(mi, null, X)), I.createElement(L.A, { buckets: z }), I.createElement(Y, { data: _, unitShort: j }), I.createElement(ii, { rows: $, onEditRow: ei })) : I.createElement(Si, null, I.createElement(Ri, null, I.createElement(k(), { animationData: hi, loop: true, autoplay: true })), I.createElement(Fi, null, "Your plan is complete"), I.createElement(Wi, null, "Your journey starts here. View your tailored plan and start training today!")), I.createElement(bi, null, I.createElement(Bi, { onClick: a, "aria-label": "Back" }, I.createElement(h.NEn, null)), I.createElement(Yi, null, I.createElement(d.A, { fullWidth: true, variant: "primary", shimmer: true, onClick: x }, "Start Training"))));
});
