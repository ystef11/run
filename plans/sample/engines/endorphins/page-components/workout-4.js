// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8429913..8434932
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  var t, n, o, i, a, l, s = e.workout, c = e.hasAccess, u = e.activityData, d = e.backPath, p = e.banner, f = e.loading, m = e.emptyMessage, A = e.exercises, h = e.qualityPacesProvisional, g = (0, r.useState)(false), b = (0, v.A)(g, 2), y = b[0], x = b[1], E = HNe(null == s ? void 0 : s.type), w = (0, r.useMemo)((function() {
    return (function(e2) {
      var t2, n2;
      if (!e2) return "";
      if ("REST" === e2.type) return "Today is a rest day. Rest is an important part of your training. Your body rebuilds and gets stronger during recovery. Enjoy it!";
      if ("FREE" === e2.type) return "This is a free run with no pacing targets, just enjoy the run! Keep it easy and carefree to maintain your mileage without adding training stress.";
      var r2 = ((null === (t2 = e2.coachNotes) || void 0 === t2 ? void 0 : t2.length) || 0) - 1;
      return r2 >= 0 && null !== (n2 = e2.coachNotes) && void 0 !== n2 && null !== (n2 = n2[r2]) && void 0 !== n2 && n2.description ? e2.coachNotes[r2].description : "";
    })(s);
  }), [s]), C = w.length > 0 || "REST" === (null == s ? void 0 : s.type) || "FREE" === (null == s ? void 0 : s.type), k = w.length > 100, B = null == s ? void 0 : s.activity, S = null !== (t = null !== (n = null !== (o = null == s || null === (i = s.performanceScore) || void 0 === i ? void 0 : i.totalScore) && void 0 !== o ? o : "string" != typeof B ? null == B || null === (a = B.performanceScore) || void 0 === a ? void 0 : a.totalScore : void 0) && void 0 !== n ? n : null == u || null === (l = u.performanceScore) || void 0 === l ? void 0 : l.totalScore) && void 0 !== t ? t : null, I = true === (null == s ? void 0 : s.isComplete) && null != S && "STRENGTH" !== (null == s ? void 0 : s.type), D = (0, r.useMemo)((function() {
    return (function(e2, t2) {
      var n2;
      if (!e2) return "Coach Notes";
      var r2 = null != (null === (n2 = e2.performanceScore) || void 0 === n2 ? void 0 : n2.totalScore) || null != t2;
      return e2.isComplete && r2 ? "Post-Workout Analysis" : "Coach Notes";
    })(s, S);
  }), [s, S]), P = (0, r.useMemo)((function() {
    return (function(e2) {
      var t2, n2, r2 = ((null == e2 || null === (t2 = e2.coachNotes) || void 0 === t2 ? void 0 : t2.length) || 0) - 1;
      return (r2 >= 0 ? null == e2 || null === (n2 = e2.coachNotes) || void 0 === n2 || null === (n2 = n2[r2]) || void 0 === n2 || null === (n2 = n2.user) || void 0 === n2 ? void 0 : n2.profilePicture : void 0) || "https://images.endorphinsrunning.com/other/coaches/stowe_icon.png";
    })(s);
  }), [s]), T = !(null == s || !s.isModifiedWorkout), O = !(null == s || !s.isKeyWorkout), M = "LONG_RUN" === (null == s ? void 0 : s.type) || "LONG_RUN_WORKOUT" === (null == s ? void 0 : s.type), R = "STRENGTH" === (null == s ? void 0 : s.type), F = (null == s ? void 0 : s.isComplete) && u && !R;
  return c || null == s || false !== s.isAccessible ? f ? r.createElement(wNe, null, "Loading workout...") : s ? r.createElement(r.Fragment, null, r.createElement(HLe, { $color: E, "aria-hidden": true }), r.createElement(WLe, null, r.createElement(VLe, null, T && r.createElement(e_.A, { title: "Modified", variant: "default" }), O && r.createElement(e_.A, { title: "Key Workout", variant: "gold" }), M && r.createElement(e_.A, { title: "Workout", variant: "gold" }), s.isSkipped && r.createElement(e_.A, { title: "Workout Skipped", variant: "default" })), r.createElement(YLe, null, R ? (0, B_.eO)(s.type) : UNe(s.type)), r.createElement(QLe, null, r.createElement(GLe, null, (0, Az.A)(s.date).utc().format("dddd, MMMM D, YYYY")), s.totalDistance && "STRENGTH" !== s.type && "REST" !== s.type && r.createElement(KLe, null, " ", "\u2022 ", s.totalDistance.value, " ", (0, B_.j2)(s.totalDistance.unit, false, true), " ", "total"))), p, I && r.createElement(JLe, null, r.createElement(wFe.A, { score: S, size: 300 })), C && r.createElement(XLe, null, r.createElement(ZLe, null, r.createElement(_Le, { src: P, alt: "Coach" }), r.createElement($Le, null, D)), r.createElement(eNe, { $clamped: k && !y }, w || "No coach notes available."), k && r.createElement(tNe, { onClick: function() {
    return x(!y);
  } }, y ? "Show Less" : "Read More")), s.segments && s.segments.length > 0 && r.createElement(nNe, null, s.segments.map((function(e2, t2) {
    var n2, o2, i2 = HNe(e2.type), a2 = e2.type === ive.MI.STRENGTH, l2 = null === (n2 = e2.reps) || void 0 === n2 ? void 0 : n2.every((function(e3) {
      return 1 === (e3.repCount || 1);
    })), c2 = e2.setCount > 1, u2 = "";
    if (!a2 && null !== (o2 = e2.setTotalDistanceOrTime) && void 0 !== o2 && o2.value) {
      var d2 = Number(e2.setTotalDistanceOrTime.value);
      u2 = 0 === EFe(d2, 2) ? "Optional" : "".concat(EFe(d2, 2), " ").concat((0, B_.j2)(e2.setTotalDistanceOrTime.unit, false, true));
    }
    var p2 = e2.reps && e2.reps.length > 0, f2 = a2 ? "Block ".concat(t2 + 1) : UNe(e2.type);
    return r.createElement(rNe, { key: t2 }, r.createElement(oNe, { $color: i2 }, r.createElement(iNe, null, f2), u2 && r.createElement(aNe, null, u2)), r.createElement(lNe, null, a2 ? p2 ? r.createElement(qNe, { segment: e2, exercises: A, isComplete: !!s.isComplete }) : e2.description ? r.createElement(xNe, null, e2.description) : null : r.createElement(r.Fragment, null, p2 ? c2 ? r.createElement(cNe, null, r.createElement(uNe, null, e2.setCount, " sets"), WNe(e2, l2), r.createElement(dNe, null, "repeat")) : r.createElement(sNe, null, WNe(e2, l2)) : e2.description ? r.createElement(xNe, null, e2.description) : null, (function(e3, t3) {
      var n3;
      return !(true !== t3 || null == e3 || !e3.type) && !!Oye.has(e3.type) && (null !== (n3 = e3.reps) && void 0 !== n3 ? n3 : []).some((function(t4) {
        return "WALK" !== t4.type && "pace" === uye(e3, t4);
      }));
    })(e2, h) && r.createElement(VNe, null, aye), c2 && e2.setRest && r.createElement(ENe, null, (0, B_.Xp)(e2.setRest), " ", e2.setRest.active ? "jog between sets" : "rest between sets"))));
  }))), F && r.createElement(sve.A, { activity: u }), (!s.segments || 0 === s.segments.length) && "REST" !== s.type && "FREE" !== s.type && !C && r.createElement(wNe, null, "No workout details available.")) : r.createElement(wNe, null, m || "Workout not found.") : r.createElement(jje, { backPath: d });
});
