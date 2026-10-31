// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8409102..8413602
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e, t, n = (0, h.g)(), o = n.id, i = n.week, a = (0, h.W6)(), l = Number(i), s = (0, Nf.P)().hasAccess, c = (0, m.E9)((function(e2) {
    return e2.training.getTrainingPlanById;
  })), u = (0, m.O$)((function(e2) {
    return e2.training.data;
  })), d = (0, B_.mh)(u, true);
  (0, r.useEffect)((function() {
    null != u && u.plan.length || c({ trainingPlanId: o });
  }), [o, u]);
  var p = null == u ? void 0 : u.plan[l - 1], f = null !== (e = null == u || null === (t = u.plan) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0, A = l > 1, g = l < f, b = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null == p || null === (t2 = p.workouts) || void 0 === t2 ? void 0 : t2.filter((function(e3) {
      return "REST" !== e3.type;
    })).length) && void 0 !== e2 ? e2 : 0;
  }), [p]), v = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null == p || null === (t2 = p.workouts) || void 0 === t2 ? void 0 : t2.filter((function(e3) {
      return e3.isComplete || e3.isSkipped;
    })).length) && void 0 !== e2 ? e2 : 0;
  }), [p]), y = (0, r.useMemo)((function() {
    return null != p && p.workouts ? (function(e2) {
      var t2, n2 = (0, Pc.A)(e2).sort((function(e3, t3) {
        return new Date(e3.date).getTime() - new Date(t3.date).getTime();
      })), r2 = [], o2 = (function(e3, t3) {
        var n3 = "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
        if (!n3) {
          if (Array.isArray(e3) || (n3 = (function(e4, t4) {
            if (e4) {
              if ("string" == typeof e4) return rje(e4, t4);
              var n4 = {}.toString.call(e4).slice(8, -1);
              return "Object" === n4 && e4.constructor && (n4 = e4.constructor.name), "Map" === n4 || "Set" === n4 ? Array.from(e4) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? rje(e4, t4) : void 0;
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
    })(p.workouts) : [];
  }), [p]), x = function(e2) {
    return !s && false === e2.isAccessible;
  }, E = function(e2) {
    a.push("/training-plan/".concat(o, "/week/").concat(e2));
  }, w = function(e2) {
    "REST" !== e2.type && (x(e2) ? a.push("/training-purchase?source=week_view_workout_lock") : a.push("/training-plan/".concat(o, "/workout/").concat(e2._id)));
  }, C = function(e2) {
    var t2;
    return null !== (t2 = fn.MZ[e2]) && void 0 !== t2 ? t2 : fn.Tj.grey;
  };
  return r.createElement(bA.A, { variant: "feed" }, r.createElement("style", null, "\n        html, body { overflow-x: hidden; background: transparent !important; margin: 0; padding: 0; }\n        #root { background: transparent !important; min-height: 100vh; }\n        .container { background: transparent !important; }\n      "), r.createElement(vme, null, r.createElement(ije, null, r.createElement(aje, null, r.createElement(lje, null, d), r.createElement(sje, null, u ? (0, B_.n3)(u) : ""), r.createElement(cje, null, r.createElement(uje, { onClick: function() {
    return A && E(l - 1);
  }, $disabled: !A, "aria-label": "Previous week" }, "\u2039"), r.createElement(dje, null, "Week ", l), r.createElement(uje, { onClick: function() {
    return g && E(l + 1);
  }, $disabled: !g, "aria-label": "Next week" }, "\u203A"))), p && r.createElement(MFe, { weekData: p, totalWorkouts: b, completedWorkouts: v }), r.createElement(pje, null, y.map((function(e2) {
    if (e2.workouts.length > 1) {
      var t2 = e2.workouts[0];
      return r.createElement(mje, { key: e2.date }, r.createElement(gje, null, r.createElement(vje, null, t2.date ? (0, Az.A)(t2.date).utc().format("dddd") : ""), r.createElement(yje, null, t2.date ? (0, Az.A)(t2.date).utc().format("MMM D") : "")), e2.workouts.map((function(e3) {
        return "REST" === e3.type ? null : r.createElement(hje, { key: e3._id, onClick: function() {
          return w(e3);
        } }, r.createElement(oje, { workout: e3, getColor: C, locked: x(e3) }));
      })));
    }
    return e2.workouts.map((function(e3) {
      var t3 = x(e3);
      return r.createElement(Aje, { key: e3._id, $completed: e3.isComplete, $isKey: e3.isKeyWorkout, $isRest: "REST" === e3.type, $locked: t3, onClick: function() {
        return w(e3);
      } }, r.createElement(gje, null, r.createElement(bje, null, r.createElement(vje, null, e3.date ? (0, Az.A)(e3.date).utc().format("dddd") : ""), t3 && r.createElement(e_.A, { title: "Upgrade", variant: "default" }), !t3 && e3.isKeyWorkout && r.createElement(e_.A, { title: "Key", variant: "gold" }), !t3 && e3.isModifiedWorkout && r.createElement(e_.A, { title: "Modified", variant: "default" })), r.createElement(yje, null, e3.date ? (0, Az.A)(e3.date).utc().format("MMM D") : "")), r.createElement(oje, { workout: e3, getColor: C, locked: t3 }));
    }));
  }))))));
});
