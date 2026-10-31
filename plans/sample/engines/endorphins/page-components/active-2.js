// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8106502..8112957
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e, t, n = (0, h.W6)(), o = (0, h.zy)(), i = new URLSearchParams(o.search), l = i.get("race"), c = i.get("partnerId") || i.get("partner");
  (0, yj.b)();
  var u = (0, m.O$)((function(e2) {
    return e2.user.data;
  })), d = !(null == u || !u._id), p = (0, Nf._)(u), A = (0, Nf.P)().hasAccess, g = (0, m.O$)((function(e2) {
    return e2.training.data;
  })), b = (0, m.O$)((function(e2) {
    return e2.activity.data.length;
  })), y = (0, m.O$)((function(e2) {
    return e2.training.allPlans;
  })), x = "RACE" === (null == g ? void 0 : g.goal) && "MILE" !== (null == g ? void 0 : g.raceDistance) && ((null !== (e = null == g || null === (t = g.progress) || void 0 === t ? void 0 : t.completedWorkouts) && void 0 !== e ? e : 0) >= 4 || b >= 30), E = (0, m.E9)((function(e2) {
    return e2.training.getPlan;
  })), w = (0, m.E9)((function(e2) {
    return e2.training.getPlansSummary;
  })), C = (0, m.E9)((function(e2) {
    return e2.activity.getActivities;
  })), k = (0, r.useState)(true), B = (0, v.A)(k, 2), S = B[0], I = B[1], D = (0, r.useState)(false), P = (0, v.A)(D, 2), T = P[0], O = P[1], M = (0, r.useState)(false), R = (0, v.A)(M, 2), F = R[0], j = R[1], L = (0, r.useState)(false), N = (0, v.A)(L, 2), q = N[0], z = N[1], U = (0, cr.A)().trackSubscriptionCompleted;
  (0, r.useEffect)((function() {
    var e2 = "true" === i.get("success"), t2 = i.get("session_id");
    if (e2) {
      f.oR.success("Payment successful! Your subscription is now active."), U("web", "unknown", { session_id: t2 || void 0, race_id: l || void 0 });
      var r2 = new URLSearchParams();
      if (l && r2.set("race", l), c) {
        var o2 = i.get("partnerId") ? "partnerId" : "partner";
        r2.set(o2, c);
      }
      var a2 = r2.toString();
      n.replace("/training".concat(a2 ? "?".concat(a2) : ""));
    }
  }), [o.search]), (0, r.useEffect)((function() {
    var e2 = (function() {
      var e3 = (0, a.A)(s().mark((function e4() {
        return s().wrap((function(e5) {
          for (; ; ) switch (e5.prev = e5.next) {
            case 0:
              if (!d) {
                e5.next = 10;
                break;
              }
              return I(true), e5.prev = 2, e5.next = 5, Promise.all([E(), w()]);
            case 5:
              return e5.prev = 5, I(false), e5.finish(5);
            case 8:
              e5.next = 11;
              break;
            case 10:
              I(false);
            case 11:
            case "end":
              return e5.stop();
          }
        }), e4, null, [[2, , 5, 8]]);
      })));
      return function() {
        return e3.apply(this, arguments);
      };
    })();
    e2();
  }), [E, w, d]), (0, r.useEffect)((function() {
    d && 0 === b && C({});
  }), [d, b, C]);
  var H = (0, r.useCallback)((function() {
    n.push("/onboarding?step=training-choice&from=training");
  }), [n]), W = Boolean(g && "LIVE" === g.status && g._id), V = (0, r.useMemo)((function() {
    return (null == y ? void 0 : y.filter((function(e2) {
      return "COMPLETED" === e2.status;
    }))) || [];
  }), [y]), Y = (0, r.useMemo)((function() {
    return (null == y ? void 0 : y.filter((function(e2) {
      return "ABANDONED" === e2.status || "INACCESSIBLE" === e2.status || "DROPPED" === e2.status;
    }))) || [];
  }), [y]), Q = (0, r.useMemo)((function() {
    if (null == g || !g.plan) return { completedWeeks: [], currentAndFutureWeeks: [] };
    var e2 = [], t2 = [];
    return g.plan.forEach((function(n2) {
      n2.isComplete ? e2.push(n2) : t2.push(n2);
    })), { completedWeeks: e2, currentAndFutureWeeks: t2 };
  }), [g]), G = Q.completedWeeks, K = Q.currentAndFutureWeeks, J = (0, r.useMemo)((function() {
    var e2, t2, n2, r2, o2, i2, a2, l2, s2;
    if (!g) return { completionPercentage: 0, completedWorkouts: 0, totalWorkouts: 0, completedDistance: 0, totalDistance: 0, unit: B_.wd.MILES };
    var c2 = null !== (e2 = null === (t2 = g.progress) || void 0 === t2 ? void 0 : t2.totalWorkouts) && void 0 !== e2 ? e2 : 0, u2 = null !== (n2 = null === (r2 = g.progress) || void 0 === r2 ? void 0 : r2.completedWorkouts) && void 0 !== n2 ? n2 : 0, d2 = "INTRO_TO_RUNNING" === g.goal ? B_.wd.MINUTES : null !== (o2 = g.preferredUnit) && void 0 !== o2 ? o2 : B_.wd.MILES;
    return { completionPercentage: c2 > 0 ? u2 / c2 * 100 : 0, completedWorkouts: u2, totalWorkouts: c2, completedDistance: null !== (i2 = null === (a2 = g.progress) || void 0 === a2 || null === (a2 = a2.completedDistance) || void 0 === a2 ? void 0 : a2.value) && void 0 !== i2 ? i2 : 0, totalDistance: null !== (l2 = null === (s2 = g.progress) || void 0 === s2 || null === (s2 = s2.totalDistance) || void 0 === s2 ? void 0 : s2.value) && void 0 !== l2 ? l2 : 0, unit: d2 };
  }), [g]), X = (0, r.useMemo)((function() {
    var e2;
    if (A || null == g || null === (e2 = g.plan) || void 0 === e2 || !e2.length) return null;
    var t2 = null;
    return g.plan.forEach((function(e3) {
      var n2;
      (null === (n2 = e3.workouts) || void 0 === n2 ? void 0 : n2.some((function(e4) {
        return "REST" !== e4.type && false !== e4.isAccessible;
      }))) && (t2 = e3.week);
    })), t2;
  }), [A, null == g ? void 0 : g.plan]), Z = (0, r.useMemo)((function() {
    if (A || !X) return -1;
    var e2 = K.findIndex((function(e3) {
      return e3.week === X;
    }));
    return -1 === e2 || e2 >= K.length - 1 ? -1 : e2;
  }), [A, K, X]), _ = (0, r.useMemo)((function() {
    return !(A || !X || !K.length) && -1 === K.findIndex((function(e2) {
      return e2.week === X;
    }));
  }), [A, K, X]), $ = W || V.length > 0 || Y.length > 0;
  return d && (p || $ || S) ? r.createElement(r.Fragment, null, r.createElement(Tbe, null), r.createElement(bA.A, { variant: "feed" }, r.createElement(vme, null, r.createElement(Ibe, null, S ? r.createElement(rve, null, r.createElement(ove, { $variant: "title" }), r.createElement(ove, { $variant: "subtitle" }), r.createElement(ove, { $variant: "progress" }), r.createElement(ove, { $variant: "stats" }), [1, 2, 3].map((function(e2) {
    return r.createElement(ove, { key: e2, $variant: "week" });
  }))) : W ? r.createElement(Obe, null, r.createElement(Mbe, null, "Active Plan"), r.createElement(Rbe, null, "Premium"), r.createElement(Fbe, null, (0, B_.mh)(g, true)), r.createElement(jbe, null, r.createElement(Lbe, null, r.createElement(Nbe, { $percentage: J.completionPercentage }))), r.createElement(qbe, null, r.createElement(zbe, null, J.completedWorkouts, " / ", J.totalWorkouts, " Workouts"), r.createElement(zbe, null, Number(J.completedDistance).toFixed(1), " /", " ", Number(J.totalDistance).toFixed(1), " ", (0, B_.j2)(J.unit, true))), x && g && r.createElement(Uhe, { planId: g._id }), r.createElement(_Ae, { trainingPlan: g }), T && G.map((function(e2, t2) {
    return r.createElement(y$, { key: "completed-".concat(e2.week), weekData: e2, index: t2, hasAccess: A });
  })), G.length > 0 && r.createElement(Ube, { onClick: function() {
    return O(!T);
  } }, T ? r.createElement(k_.Ucs, { size: 14, color: "white" }) : r.createElement(k_.Vr3, { size: 14, color: "white" }), r.createElement(Hbe, null, T ? "Collapse completed weeks" : "".concat(G.length, " Completed ").concat(1 === G.length ? "Week" : "Weeks", " \u2014 Tap to expand"))), _ && r.createElement(Che, null), K.map((function(e2, t2) {
    return r.createElement(r.Fragment, { key: "current-".concat(e2.week) }, r.createElement(y$, { weekData: e2, index: t2, hasAccess: A }), t2 === Z && r.createElement(Che, null));
  })), r.createElement(Dge, { title: "Completed", plans: V, isOpen: F, onToggle: function() {
    return j(!F);
  }, onPlanClick: function(e2) {
    return n.push("/training-plan/".concat(e2));
  } }), r.createElement(Dge, { title: "Previous", plans: Y, isOpen: q, onToggle: function() {
    return z(!q);
  }, onPlanClick: function(e2) {
    return n.push("/training-plan/".concat(e2));
  } })) : r.createElement(Obe, null, r.createElement(kme, { allPlans: y, onStartPlan: H }), r.createElement(Dge, { title: "Completed", plans: V, isOpen: F, onToggle: function() {
    return j(!F);
  }, onPlanClick: function(e2) {
    return n.push("/training-plan/".concat(e2));
  } }), r.createElement(Dge, { title: "Previous", plans: Y, isOpen: q, onToggle: function() {
    return z(!q);
  }, onPlanClick: function(e2) {
    return n.push("/training-plan/".concat(e2));
  } })))))) : r.createElement(r.Suspense, { fallback: null }, r.createElement(Ige, null));
});
