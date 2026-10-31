// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 10414079..10419103
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e, t, n = (0, h.g)(), o = n.userId, i = n.week, a = (0, h.zy)(), l = (0, h.W6)(), s = (0, r.useMemo)((function() {
    return new URLSearchParams(a.search).get("planId") || void 0;
  }), [a.search]), c = s ? "?planId=".concat(encodeURIComponent(s)) : "", u = Number(i), d = (0, Nf.P)().hasAccess, p = amn(o, s), f = p.plan, m = p.loading, A = p.notFound, g = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null == f || null === (t2 = f.plan) || void 0 === t2 ? void 0 : t2.find((function(e3) {
      return Number(e3.week) === u;
    }))) && void 0 !== e2 ? e2 : null;
  }), [f, u]), b = null !== (e = null == f || null === (t = f.plan) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0, v = u > 1, y = u < b, x = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null == g || null === (t2 = g.workouts) || void 0 === t2 ? void 0 : t2.filter((function(e3) {
      return "REST" !== e3.type;
    })).length) && void 0 !== e2 ? e2 : 0;
  }), [g]), E = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null == g || null === (t2 = g.workouts) || void 0 === t2 ? void 0 : t2.filter((function(e3) {
      return e3.isComplete || e3.isSkipped;
    })).length) && void 0 !== e2 ? e2 : 0;
  }), [g]), w = (0, r.useMemo)((function() {
    return null != g && g.workouts ? (function(e2) {
      var t2, n2 = (0, Pc.A)(e2).sort((function(e3, t3) {
        return new Date(e3.date).getTime() - new Date(t3.date).getTime();
      })), r2 = [], o2 = (function(e3, t3) {
        var n3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
        if (!n3) {
          if (Array.isArray(e3) || (n3 = (function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4) return Vmn(e4, t4);
              var n4 = {}.toString.call(e4).slice(8, -1);
              return "Object" === n4 && e4.constructor && (n4 = e4.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e4) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Vmn(e4, t4) : void 0;
            }
          })(e3)) || t3 && e3 && "number" == typeof e3.length) {
            n3 && (e3 = n3);
            var r3 = 0, o3 = function() {
            };
            return { s: o3, n: function() {
              return r3 >= e3.length ? { done: true } : { done: false, value: e3[r3++] };
            }, e: function(e4) {
              throw e4;
            }, f: o3 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var i3, a2 = true, l2 = false;
        return { s: function() {
          n3 = n3.call(e3);
        }, n: function() {
          var e4 = n3.next();
          return a2 = e4.done, e4;
        }, e: function(e4) {
          l2 = true, i3 = e4;
        }, f: function() {
          try {
            a2 || null == n3.return || n3.return();
          } finally {
            if (l2) throw i3;
          }
        } };
      })(n2);
      try {
        var i2 = function() {
          var e3 = t2.value, n3 = (0, Az.A)(e3.date).utc().format("YYYY-MM-DD"), o3 = r2.find((function(e4) {
            return e4.date === n3;
          }));
          o3 ? o3.workouts.push(e3) : r2.push({ date: n3, workouts: [e3] });
        };
        for (o2.s(); !(t2 = o2.n()).done; ) i2();
      } catch (e3) {
        o2.e(e3);
      } finally {
        o2.f();
      }
      return r2;
    })(g.workouts) : [];
  }), [g]), C = function(e2) {
    return !d && false === e2.isAccessible;
  }, k = function(e2) {
    l.replace("/show-profile/training-plan/".concat(o, "/week/").concat(e2).concat(c));
  }, B = function(e2) {
    "REST" !== e2.type && (C(e2) ? l.push("/training-purchase?source=week_view_workout_lock") : l.push("/show-profile/training-plan/".concat(o, "/day/").concat(e2._id).concat(c)));
  }, S = function(e2) {
    var t2;
    return null !== (t2 = fn.MZ[e2]) && void 0 !== t2 ? t2 : fn.Tj.grey;
  }, I = "Week ".concat(u).concat(b ? " of ".concat(b) : "");
  return r.createElement(bA.A, { variant: "feed" }, r.createElement("style", null, "\n        html, body { overflow-x: hidden; background: transparent !important; margin: 0; padding: 0; }\n        #root { background: transparent !important; min-height: 100vh; }\n        .container { background: transparent !important; }\n      "), r.createElement(vme, null, r.createElement(yme, null, m ? r.createElement(Xmn, null, r.createElement(Zmn, null, "Loading\u2026")) : A || !f ? r.createElement(Xmn, null, r.createElement(Zmn, null, "No active training plan to view.")) : g ? r.createElement(r.Fragment, null, r.createElement(_mn, null, r.createElement($mn, null, r.createElement(eAn, { onClick: function() {
    return v && k(u - 1);
  }, $disabled: !v, "aria-label": "Previous week" }, "\u2039"), r.createElement(tAn, null, "Week ", u), r.createElement(eAn, { onClick: function() {
    return y && k(u + 1);
  }, $disabled: !y, "aria-label": "Next week" }, "\u203A"))), r.createElement(Jmn, null, r.createElement(pfn, { userId: o, subtitle: I, trainingPlanId: s })), r.createElement(MFe, { weekData: g, totalWorkouts: x, completedWorkouts: E }), r.createElement(nAn, null, w.map((function(e2) {
    if (e2.workouts.length > 1) {
      var t2 = e2.workouts[0];
      return r.createElement(oAn, { key: e2.date }, r.createElement(lAn, null, r.createElement(cAn, null, t2.date ? (0, Az.A)(t2.date).utc().format("dddd") : ""), r.createElement(uAn, null, t2.date ? (0, Az.A)(t2.date).utc().format("MMM D") : "")), e2.workouts.map((function(e3) {
        return "REST" === e3.type ? null : r.createElement(aAn, { key: e3._id, onClick: function() {
          return B(e3);
        } }, r.createElement(Ymn, { workout: e3, getColor: S, locked: C(e3) }));
      })));
    }
    return e2.workouts.map((function(e3) {
      var t3 = C(e3);
      return r.createElement(iAn, { key: e3._id, $completed: e3.isComplete, $isKey: e3.isKeyWorkout, $isRest: "REST" === e3.type, $locked: t3, onClick: function() {
        return B(e3);
      } }, r.createElement(lAn, null, r.createElement(sAn, null, r.createElement(cAn, null, e3.date ? (0, Az.A)(e3.date).utc().format("dddd") : ""), t3 && r.createElement(e_.A, { title: "Upgrade", variant: "default" }), !t3 && e3.isKeyWorkout && r.createElement(e_.A, { title: "Key", variant: "gold" }), !t3 && e3.isModifiedWorkout && r.createElement(e_.A, { title: "Modified", variant: "default" })), r.createElement(uAn, null, e3.date ? (0, Az.A)(e3.date).utc().format("MMM D") : "")), r.createElement(Ymn, { workout: e3, getColor: S, locked: t3 }));
    }));
  })))) : r.createElement(Xmn, null, r.createElement(Zmn, null, "Week ", u, " is not in this plan.")))));
});
