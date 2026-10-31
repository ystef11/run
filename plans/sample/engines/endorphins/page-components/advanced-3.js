// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8182245..8194933
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  var t, n, o = e.onSaveSuccess, i = e.onSavingChange, l = (0, m.O$)((function(e2) {
    return e2.training.data;
  })), c = (0, m.E9)((function(e2) {
    return e2.training.updateExistingPlan;
  })), u = (function() {
    var e2 = (0, r.useRef)(null), t2 = (0, r.useState)(500), n2 = (0, v.A)(t2, 2), o2 = n2[0], i2 = n2[1];
    return (0, r.useEffect)((function() {
      var t3 = e2.current;
      if (t3) {
        var n3 = new ResizeObserver((function(e3) {
          var t4, n4 = (function(e4, t5) {
            var n5 = "undefined" != typeof Symbol && e4[Symbol.iterator] || e4["@@iterator"];
            if (!n5) {
              if (Array.isArray(e4) || (n5 = (function(e5, t6) {
                if (e5) {
                  if ("string" == typeof e5) return jEe(e5, t6);
                  var n6 = {}.toString.call(e5).slice(8, -1);
                  return "Object" === n6 && e5.constructor && (n6 = e5.constructor.name), "Map" === n6 || "Set" === n6 ? Array.from(e5) : "Arguments" === n6 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n6) ? jEe(e5, t6) : void 0;
                }
              })(e4)) || t5 && e4 && "number" == typeof e4.length) {
                n5 && (e4 = n5);
                var r3 = 0, o3 = function() {
                };
                return { s: o3, n: function() {
                  return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
                }, e: function(e5) {
                  throw e5;
                }, f: o3 };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i3, a2 = true, l2 = false;
            return { s: function() {
              n5 = n5.call(e4);
            }, n: function() {
              var e5 = n5.next();
              return a2 = e5.done, e5;
            }, e: function(e5) {
              l2 = true, i3 = e5;
            }, f: function() {
              try {
                a2 || null == n5.return || n5.return();
              } finally {
                if (l2) throw i3;
              }
            } };
          })(e3);
          try {
            for (n4.s(); !(t4 = n4.n()).done; ) {
              var r2 = t4.value;
              i2(r2.contentRect.width);
            }
          } catch (e4) {
            n4.e(e4);
          } finally {
            n4.f();
          }
        }));
        return n3.observe(t3), i2(t3.clientWidth), function() {
          return n3.disconnect();
        };
      }
    }), []), [e2, o2];
  })(), d = (0, v.A)(u, 2), p = d[0], A = d[1], h = (null == l ? void 0 : l.preferredUnit) === ive.wd.KILOMETERS, g = (0, r.useMemo)((function() {
    return (0, vEe.T4)(null == l ? void 0 : l.raceDistance, null == l ? void 0 : l.goal, h);
  }), [null == l ? void 0 : l.raceDistance, null == l ? void 0 : l.goal, h]), b = (0, r.useState)((function() {
    return { peakMileage: 40, startMileage: 20, workoutsPerWeek: 4, buildLevel: bEe.STANDARD, gradualStart: false, minLongRunDistance: g.minLongRunDistance.min, maxLongRunDistance: g.maxLongRunDistance.min };
  })), y = (0, v.A)(b, 2), x = y[0], E = y[1], w = (0, r.useRef)(false), C = (0, r.useRef)(false);
  (0, r.useEffect)((function() {
    var e2, t2, n2, r2, o2, i2, a2, s2, c2;
    if (null != l && l.trainingPlanParams) {
      var u2 = l.trainingPlanParams, d2 = null !== (e2 = u2.minLongRunDistance) && void 0 !== e2 ? e2 : g.minLongRunDistance.min, p2 = null !== (t2 = u2.maxLongRunDistance) && void 0 !== t2 ? t2 : g.maxLongRunDistance.min, f2 = h ? (0, vEe.eS)(d2) : d2, m2 = h ? (0, vEe.eS)(p2) : p2;
      E({ peakMileage: h ? (0, vEe.eS)(null !== (n2 = u2.peakMileage) && void 0 !== n2 ? n2 : 40) : null !== (r2 = u2.peakMileage) && void 0 !== r2 ? r2 : 40, startMileage: h ? (0, vEe.eS)(null !== (o2 = u2.startMileage) && void 0 !== o2 ? o2 : 20) : null !== (i2 = u2.startMileage) && void 0 !== i2 ? i2 : 20, workoutsPerWeek: null !== (a2 = u2.workoutsPerWeek) && void 0 !== a2 ? a2 : 4, buildLevel: null !== (s2 = u2.buildLevel) && void 0 !== s2 ? s2 : bEe.STANDARD, gradualStart: null !== (c2 = u2.gradualStart) && void 0 !== c2 && c2, minLongRunDistance: f2, maxLongRunDistance: m2 });
    }
  }), [null == l ? void 0 : l._id, null == l ? void 0 : l.trainingPlanParams, h, g]);
  var k = (0, r.useMemo)((function() {
    var e2 = (0, vEe.Px)(x.startMileage, x.peakMileage, g, null == l ? void 0 : l.raceDistance);
    return { minLongRun: { min: e2.minLongRunDistance.min, max: e2.minLongRunDistance.max }, maxLongRun: { min: e2.maxLongRunDistance.min, max: e2.maxLongRunDistance.max } };
  }), [g, x.startMileage, x.peakMileage, null == l ? void 0 : l.raceDistance]), B = (0, r.useMemo)((function() {
    var e2, t2 = null == l || null === (e2 = l.plan) || void 0 === e2 || null === (e2 = e2[l.plan.length - 1]) || void 0 === e2 ? void 0 : e2.endDate;
    if (!t2) return false;
    var n2 = (0, Az.A)(t2), r2 = n2.subtract(3, "week"), o2 = (0, Az.A)();
    return o2.isAfter(r2) && o2.isBefore(n2.add(1, "day"));
  }), [null == l ? void 0 : l.plan]), S = (null == l ? void 0 : l.goal) === ive.hz.INTRO_TO_RUNNING, I = (null !== (t = null == l ? void 0 : l.currentWeek) && void 0 !== t ? t : 1) > 2, D = Boolean(null == l ? void 0 : l._id) && !S && !B, P = (function(e2) {
    var t2 = e2.trainingPlanId, n2 = e2.advancedValues, o2 = e2.isKilometers, i2 = e2.enabled, l2 = (0, m.E9)((function(e3) {
      return e3.training.generatePlanPreview;
    })), c2 = (0, r.useState)(null), u2 = (0, v.A)(c2, 2), d2 = u2[0], p2 = u2[1], f2 = (0, r.useState)(false), A2 = (0, v.A)(f2, 2), h2 = A2[0], g2 = A2[1], b2 = (0, r.useState)(null), y2 = (0, v.A)(b2, 2), x2 = y2[0], E2 = y2[1], w2 = (0, r.useRef)(/* @__PURE__ */ new Map()), C2 = (0, r.useRef)(null), k2 = (0, r.useCallback)((function() {
      var e3 = (0, a.A)(s().mark((function e4(n3) {
        var r2, i3, a2, c3, u3, d3, f3, m2;
        return s().wrap((function(e5) {
          for (; ; ) switch (e5.prev = e5.next) {
            case 0:
              if (t2) {
                e5.next = 2;
                break;
              }
              return e5.abrupt("return");
            case 2:
              if (r2 = o2 ? (0, vEe.aB)(n3.minLongRunDistance) : n3.minLongRunDistance, i3 = o2 ? (0, vEe.aB)(n3.maxLongRunDistance) : n3.maxLongRunDistance, a2 = o2 ? (0, vEe.aB)(n3.peakMileage) : n3.peakMileage, c3 = o2 ? (0, vEe.aB)(n3.startMileage) : n3.startMileage, u3 = { peakMileage: a2, startMileage: c3, workoutsPerWeek: n3.workoutsPerWeek, buildLevel: n3.buildLevel, gradualStart: n3.gradualStart, minLongRunDistance: r2, maxLongRunDistance: i3 }, d3 = JSON.stringify(u3), !w2.current.has(d3)) {
                e5.next = 13;
                break;
              }
              return p2(null !== (f3 = w2.current.get(d3)) && void 0 !== f3 ? f3 : null), g2(false), E2(null), e5.abrupt("return");
            case 13:
              return e5.prev = 13, g2(true), E2(null), e5.next = 18, l2({ trainingPlanId: t2, params: u3 });
            case 18:
              (m2 = e5.sent) && (w2.current.set(d3, m2), p2(m2)), e5.next = 26;
              break;
            case 22:
              e5.prev = 22, e5.t0 = e5.catch(13), E2("Failed to load chart preview"), p2(null);
            case 26:
              return e5.prev = 26, g2(false), e5.finish(26);
            case 29:
            case "end":
              return e5.stop();
          }
        }), e4, null, [[13, 22, 26, 29]]);
      })));
      return function(t3) {
        return e3.apply(this, arguments);
      };
    })(), [t2, o2, l2]);
    return (0, r.useEffect)((function() {
      if (i2 && t2) return null !== C2.current && window.clearTimeout(C2.current), g2(true), C2.current = window.setTimeout((function() {
        k2(n2), C2.current = null;
      }), 800), function() {
        null !== C2.current && window.clearTimeout(C2.current);
      };
    }), [n2, i2, t2, k2]), { previewPlan: d2, isLoadingChart: h2, chartError: x2 };
  })({ trainingPlanId: null == l ? void 0 : l._id, advancedValues: x, isKilometers: h, enabled: D }), T = P.previewPlan, O = P.isLoadingChart, M = P.chartError, R = (0, r.useMemo)((function() {
    return (function(e2) {
      var t2;
      if (!e2) return [];
      var n2 = FEe(e2.mileageTrend), r2 = FEe(e2.currentMileageTrend);
      return null != n2 && null !== (t2 = n2.labels) && void 0 !== t2 && t2.length ? n2.labels.map((function(e3, t3) {
        var o2, i2, a2;
        return { label: "W".concat(e3), value: null !== (o2 = n2.data[t3]) && void 0 !== o2 ? o2 : 0, secondaryValue: null !== (i2 = null == r2 || null === (a2 = r2.data) || void 0 === a2 ? void 0 : a2[t3]) && void 0 !== i2 ? i2 : 0 };
      })) : [];
    })(T);
  }), [T]);
  (0, r.useEffect)((function() {
    if (!w.current) {
      var e2 = swe(x.workoutsPerWeek, h), t2 = e2.min, n2 = e2.max, r2 = Math.min(Math.max(x.startMileage, t2), n2), o2 = Math.min(Math.max(x.peakMileage, t2), n2);
      r2 === x.startMileage && o2 === x.peakMileage || (w.current = true, E((function(e3) {
        return lwe(lwe({}, e3), {}, { startMileage: r2, peakMileage: o2 });
      })), window.setTimeout((function() {
        w.current = false;
      }), 100));
    }
  }), [x.workoutsPerWeek, h]), (0, r.useEffect)((function() {
    if (!C.current) {
      var e2 = (0, vEe.cn)(x.minLongRunDistance, x.maxLongRunDistance, { minLongRunDistance: k.minLongRun, maxLongRunDistance: k.maxLongRun }), t2 = e2.min, n2 = e2.max;
      t2 === x.minLongRunDistance && n2 === x.maxLongRunDistance || (C.current = true, E((function(e3) {
        return lwe(lwe({}, e3), {}, { minLongRunDistance: t2, maxLongRunDistance: n2 });
      })), window.setTimeout((function() {
        C.current = false;
      }), 100));
    }
  }), [k, x.startMileage, x.peakMileage]);
  var F = (0, r.useMemo)((function() {
    var e2 = h ? (0, vEe.aB)(x.startMileage) : x.startMileage, t2 = (h ? (0, vEe.aB)(x.peakMileage) : x.peakMileage) - e2, n2 = h ? "km" : "miles", r2 = h ? (0, vEe.eS)(30) : 30, o2 = x.peakMileage - x.startMileage;
    return { isValid: t2 <= 30, errorMessage: t2 > 30 ? "Range cannot exceed ".concat(r2, " ").concat(n2, " (current: ").concat(o2, " ").concat(n2, ")") : null };
  }), [x.peakMileage, x.startMileage, h]), j = (0, r.useMemo)((function() {
    var e2, t2 = (null == l || null === (e2 = l.availability) || void 0 === e2 || null === (e2 = e2.days) || void 0 === e2 ? void 0 : e2.length) || 7, n2 = x.workoutsPerWeek;
    return { isValid: n2 <= t2, errorMessage: n2 > t2 ? "Cannot schedule ".concat(n2, " workouts per week with only ").concat(t2, " available days.") : null };
  }), [x.workoutsPerWeek, null == l || null === (n = l.availability) || void 0 === n || null === (n = n.days) || void 0 === n ? void 0 : n.length]), L = (0, vEe.$)(x.minLongRunDistance, x.maxLongRunDistance, { minLongRunDistance: k.minLongRun, maxLongRunDistance: k.maxLongRun }), N = { isValid: F.isValid && j.isValid && L.isValid, errorMessages: [F.errorMessage, j.errorMessage, L.errorMessage].filter(Boolean) }, q = swe(x.workoutsPerWeek, h), z = h ? "km" : "mi", U = (0, r.useState)(false), H = (0, v.A)(U, 2), W = H[0], V = H[1], Y = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      var t2, n2, r2, a2, u2;
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (null != l && l._id && N.isValid && !B) {
              e4.next = 2;
              break;
            }
            return e4.abrupt("return");
          case 2:
            return t2 = h ? (0, vEe.aB)(x.minLongRunDistance) : x.minLongRunDistance, n2 = h ? (0, vEe.aB)(x.maxLongRunDistance) : x.maxLongRunDistance, r2 = h ? (0, vEe.aB)(x.peakMileage) : x.peakMileage, a2 = h ? (0, vEe.aB)(x.startMileage) : x.startMileage, V(true), null == i || i(true), e4.prev = 8, e4.next = 11, c({ trainingPlanId: l._id, updatedFields: { trainingPlanParams: lwe(lwe({}, null !== (u2 = l.trainingPlanParams) && void 0 !== u2 ? u2 : {}), {}, { peakMileage: r2, startMileage: a2, workoutsPerWeek: x.workoutsPerWeek, buildLevel: x.buildLevel, gradualStart: x.gradualStart, minLongRunDistance: t2, maxLongRunDistance: n2, usingCustomParams: true }) }, onNext: function() {
              f.oR.success("Plan updated successfully"), o();
            } });
          case 11:
            e4.next = 16;
            break;
          case 13:
            e4.prev = 13, e4.t0 = e4.catch(8), f.oR.error("Could not update plan. Please try again.");
          case 16:
            return e4.prev = 16, V(false), null == i || i(false), e4.finish(16);
          case 20:
          case "end":
            return e4.stop();
        }
      }), e3, null, [[8, 13, 16, 20]]);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })();
  if (null == l || !l._id) return r.createElement(Twe, null, "Loading plan\u2026");
  if (S) return r.createElement(Oxe, { title: "Volume adjustments not available", body: "Intro to Running plans use a fixed 5-week structure with time-based targets. Volume adjustments are available for race training and general training plans." });
  var Q = B, G = B ? "You're almost done" : h ? "Plan build" : "Plan mileage", K = B ? "There are less than 3 weeks left in your plan. Plan build adjustments are not available during this period of your training." : "Customize your weekly distance, runs per week, and training progression.";
  return r.createElement(cwe, null, r.createElement(uwe, null, r.createElement(dwe, null, G), r.createElement(pwe, null, K)), !B && r.createElement(fwe, { ref: p }, r.createElement(mwe, null, "Weekly distance"), O && !M ? r.createElement(Awe, null, r.createElement(gwe, null), r.createElement(bwe, null, "Updating preview\u2026")) : M ? r.createElement(Awe, null, r.createElement(bwe, null, M), r.createElement(vwe, null, "Try adjusting your weekly distance range or runs per week settings.")) : R.length <= 1 ? r.createElement(Awe, null, r.createElement(gwe, null), r.createElement(bwe, null, "Updating preview\u2026")) : r.createElement(r.Fragment, null, r.createElement(E0.A, { data: R, width: A, height: 180, showSecondaryLine: true, showSelectionLine: true, showPoints: true, showArea: true, lineColor: fn.Tj.primary, secondaryLineColor: "rgba(160, 160, 160, 1)", formatYAxisLabel: function(e2) {
    return Math.round(e2).toString();
  }, backgroundColor: "transparent", getTooltipText: function(e2) {
    return "Proposed: ".concat(Math.round(10 * e2) / 10, " ").concat(z);
  }, getSecondaryTooltipText: function(e2) {
    var t2;
    return "Current: ".concat(Math.round(10 * ((null === (t2 = R[e2]) || void 0 === t2 ? void 0 : t2.secondaryValue) || 0)) / 10, " ").concat(z);
  }, primaryLineLabel: "Proposed", secondaryLineLabel: "Current" }))), r.createElement(REe, { title: "Weekly distance range", mode: "dual", value: [x.startMileage, x.peakMileage], min: q.min, max: q.max, step: 1, onChange: function(e2) {
    E((function(t2) {
      return lwe(lwe({}, t2), {}, { startMileage: e2[0], peakMileage: e2[1] });
    }));
  }, valueLabel: "".concat(x.startMileage, "\u2013").concat(x.peakMileage), unitLabel: z, minLabel: q.min, maxLabel: q.max, highlightRange: true, disabled: Q }), r.createElement(REe, { title: "Runs per week", mode: "single", value: [x.workoutsPerWeek], min: 3, max: 7, step: 1, onChange: function(e2) {
    E((function(t2) {
      return lwe(lwe({}, t2), {}, { workoutsPerWeek: e2[0] });
    }));
  }, valueLabel: "".concat(x.workoutsPerWeek), minLabel: 3, maxLabel: 7, disabled: Q }), r.createElement(REe, { title: "Long run distance range", mode: "dual", value: [x.minLongRunDistance, x.maxLongRunDistance], min: k.minLongRun.min, max: k.maxLongRun.max, step: 1, onChange: function(e2) {
    E((function(t2) {
      return lwe(lwe({}, t2), {}, { minLongRunDistance: e2[0], maxLongRunDistance: e2[1] });
    }));
  }, valueLabel: "".concat(x.minLongRunDistance, "\u2013").concat(x.maxLongRunDistance), unitLabel: z, minLabel: k.minLongRun.min, maxLabel: k.maxLongRun.max, highlightRange: true, disabled: Q }), !I && !B && r.createElement(ywe, null, r.createElement(xwe, null, r.createElement(Ewe, null, "Gradual Build"), r.createElement(wwe, null, "Gradually increase mileage over the first three weeks to ease into your plan")), r.createElement(Cwe, { type: "button", role: "switch", "aria-checked": Boolean(x.gradualStart), $active: Boolean(x.gradualStart), onClick: function() {
    return E((function(e2) {
      return lwe(lwe({}, e2), {}, { gradualStart: !e2.gradualStart });
    }));
  }, disabled: W }, r.createElement(kwe, { $active: Boolean(x.gradualStart) }))), (null == T ? void 0 : T.nextWeek) && !M && !B && r.createElement(Bwe, null, r.createElement(Swe, null, "Preview your next week"), r.createElement(Iwe, null, "See how your training plan will look next week"), r.createElement(y$, { weekData: T.nextWeek, index: 0, disableUserInteraction: true })), !B && r.createElement(r.Fragment, null, N.errorMessages.map((function(e2) {
    return r.createElement(Dwe, { key: e2 }, e2);
  })), r.createElement(Pwe, { type: "button", onClick: Y, disabled: !N.isValid || W }, W ? "Updating\u2026" : "Update plan")));
});
