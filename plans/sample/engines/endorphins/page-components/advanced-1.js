// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 16159..22626
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t = i.onNext, o = i.onBack, y = i.progressBarPercentage, x = i.plan, s = (0, v.E9)((function(i2) {
    return i2.training.setOnboardingOverrides;
  })), n = (0, v.E9)((function(i2) {
    return i2.training.generatePlanPreview;
  })), A = "KILOMETERS" === String(null == x ? void 0 : x.preferredUnit), a = A ? "km" : "mi", r = null == x ? void 0 : x._id, l = (0, L.r)(x), I = null == x ? void 0 : x.trainingPlanParams, k = (0, Q.useMemo)((function() {
    var i2, e2, t2, o2, y2, s2, n2, a2, r2, E2, c2 = null !== (i2 = null !== (e2 = null == l ? void 0 : l.workoutsPerWeek) && void 0 !== e2 ? e2 : null == I ? void 0 : I.workoutsPerWeek) && void 0 !== i2 ? i2 : 4, k2 = H(null !== (t2 = null !== (o2 = null == l ? void 0 : l.peakMileage) && void 0 !== o2 ? o2 : null == I ? void 0 : I.peakMileage) && void 0 !== t2 ? t2 : 40, c2), h2 = H(null !== (y2 = null !== (s2 = null == l ? void 0 : l.startMileage) && void 0 !== s2 ? s2 : null == I ? void 0 : I.startMileage) && void 0 !== y2 ? y2 : 20, c2), p2 = (0, R.T4)(null == x ? void 0 : x.raceDistance, null == x ? void 0 : x.goal, A), Q2 = (0, R.Px)(A ? (0, R.eS)(h2) : h2, A ? (0, R.eS)(k2) : k2, p2, null == x ? void 0 : x.raceDistance), C2 = null !== (n2 = null == l ? void 0 : l.minLongRunDistance) && void 0 !== n2 ? n2 : null == I ? void 0 : I.minLongRunDistance, u2 = null !== (a2 = null == l ? void 0 : l.maxLongRunDistance) && void 0 !== a2 ? a2 : null == I ? void 0 : I.maxLongRunDistance, d2 = null != C2 ? A ? (0, R.eS)(C2) : C2 : Q2.minLongRunDistance.min, v2 = null != u2 ? A ? (0, R.eS)(u2) : u2 : Q2.maxLongRunDistance.min, g2 = (0, R.cn)(d2, v2, Q2);
    return { startMileage: h2, peakMileage: k2, workoutsPerWeek: c2, minLongRunDistance: g2.min, maxLongRunDistance: g2.max, gradualStart: null !== (r2 = null !== (E2 = null == l ? void 0 : l.gradualStart) && void 0 !== E2 ? E2 : null == I ? void 0 : I.gradualStart) && void 0 !== r2 && r2 };
  }), [r]), h = (0, Q.useState)(k), C = (0, c.A)(h, 2), u = C[0], g = C[1], W = (0, Q.useState)(null), w = (0, c.A)(W, 2), N = w[0], O = w[1], V = (0, Q.useState)(true), P = (0, c.A)(V, 2), M = P[0], q = P[1], X = (0, Q.useState)(false), z = (0, c.A)(X, 2), _ = z[0], $ = z[1], ii = (0, Q.useMemo)((function() {
    return (0, S.GU)(u.workoutsPerWeek, A);
  }), [u.workoutsPerWeek, A]), ei = function(i2) {
    return Math.round(A ? (0, R.eS)(i2) : i2);
  }, ti = function(i2) {
    return Math.round(A ? (0, R.aB)(i2) : i2);
  }, oi = (0, Q.useMemo)((function() {
    var i2 = (0, R.T4)(null == x ? void 0 : x.raceDistance, null == x ? void 0 : x.goal, A), e2 = A ? (0, R.eS)(u.startMileage) : u.startMileage, t2 = A ? (0, R.eS)(u.peakMileage) : u.peakMileage;
    return (0, R.Px)(e2, t2, i2, null == x ? void 0 : x.raceDistance);
  }), [u.startMileage, u.peakMileage, null == x ? void 0 : x.raceDistance, null == x ? void 0 : x.goal, A]), yi = (null == x || null === (e = x.availability) || void 0 === e || null === (e = e.days) || void 0 === e ? void 0 : e.length) || 7, xi = (0, Q.useMemo)((function() {
    return { longRunLimits: oi, availableDays: yi, isKilometers: A, unitLabel: a };
  }), [oi, yi, A, a]), si = (0, Q.useMemo)((function() {
    return j(u, xi);
  }), [u, xi]), ni = 0 === si.length, Ai = (0, Q.useRef)(xi);
  Ai.current = xi;
  var ai = (0, Q.useMemo)((function() {
    return d()((function() {
      var i2 = (0, E.A)(p().mark((function i3(e2) {
        var t2;
        return p().wrap((function(i4) {
          for (; ; ) switch (i4.prev = i4.next) {
            case 0:
              if (r) {
                i4.next = 2;
                break;
              }
              return i4.abrupt("return");
            case 2:
              if (!(j(e2, Ai.current).length > 0)) {
                i4.next = 5;
                break;
              }
              return q(false), i4.abrupt("return");
            case 5:
              return q(true), i4.prev = 6, i4.next = 9, s({ trainingPlanId: r, overrides: { startMileage: e2.startMileage, peakMileage: e2.peakMileage, workoutsPerWeek: e2.workoutsPerWeek, gradualStart: e2.gradualStart, minLongRunDistance: A ? (0, R.aB)(e2.minLongRunDistance) : e2.minLongRunDistance, maxLongRunDistance: A ? (0, R.aB)(e2.maxLongRunDistance) : e2.maxLongRunDistance } });
            case 9:
              return i4.next = 11, n({ trainingPlanId: r, params: {} });
            case 11:
              t2 = i4.sent, O(t2), i4.next = 17;
              break;
            case 15:
              i4.prev = 15, i4.t0 = i4.catch(6);
            case 17:
              return i4.prev = 17, q(false), i4.finish(17);
            case 20:
            case "end":
              return i4.stop();
          }
        }), i3, null, [[6, 15, 17, 20]]);
      })));
      return function(e2) {
        return i2.apply(this, arguments);
      };
    })(), 800);
  }), [r, A, s, n]);
  (0, Q.useEffect)((function() {
    return ai(u), function() {
      return ai.cancel();
    };
  }), [u, ai]);
  var ri = (0, Q.useMemo)((function() {
    var i2, e2, t2 = null == N ? void 0 : N.mileageTrend;
    return null !== (i2 = null == t2 || null === (e2 = t2.labels) || void 0 === e2 ? void 0 : e2.map((function(i3, e3) {
      var o2;
      return { label: String(i3).startsWith("W") ? String(i3) : "W".concat(i3), value: null !== (o2 = t2.data[e3]) && void 0 !== o2 ? o2 : 0 };
    }))) && void 0 !== i2 ? i2 : [];
  }), [null == N ? void 0 : N.mileageTrend]), li = (0, Q.useCallback)((function() {
    r && ni && (ai.cancel(), $(true), s({ trainingPlanId: r, overrides: { startMileage: u.startMileage, peakMileage: u.peakMileage, workoutsPerWeek: u.workoutsPerWeek, gradualStart: u.gradualStart, minLongRunDistance: A ? (0, R.aB)(u.minLongRunDistance) : u.minLongRunDistance, maxLongRunDistance: A ? (0, R.aB)(u.maxLongRunDistance) : u.maxLongRunDistance }, onNext: function() {
      $(false), t();
    }, onFailure: function() {
      return $(false);
    } }));
  }), [r, ni, ai, s, u, A, t]);
  return Q.createElement(F.A, { title: "Advanced edit", subtitle: "Fine-tune your plan build. These choices stick even if you change your level.", progressBarPercentage: y, onBack: o, onContinue: li, continueDisabled: !ni || _, continueLoading: _, continueLabel: "Save" }, Q.createElement(B, null, Q.createElement(Y, null, "Weekly Distance"), Q.createElement(m.A, { data: ri, unit: a, primaryLabel: "".concat(a, "/wk"), isLoading: M && ri.length <= 1 })), Q.createElement(f.A, { title: "Weekly Distance Range", value: [ei(u.startMileage), ei(u.peakMileage)], min: Math.round(ii.min), max: Math.round(ii.max), step: 1, onChange: function(i2) {
    var e2 = (0, c.A)(i2, 2), t2 = e2[0], o2 = e2[1];
    return g((function(i3) {
      return b(b({}, i3), {}, { startMileage: ti(t2), peakMileage: ti(o2) });
    }));
  }, valueLabel: "".concat(ei(u.startMileage), "-").concat(ei(u.peakMileage)), unitLabel: a, minLabel: Math.round(ii.min), maxLabel: Math.round(ii.max) }), Q.createElement(f.A, { title: "Runs per Week", value: [u.workoutsPerWeek], min: 2, max: 7, step: 1, onChange: function(i2) {
    var e2 = (0, c.A)(i2, 1)[0], t2 = Math.round(e2);
    g((function(i3) {
      return b(b({}, i3), {}, { workoutsPerWeek: t2, startMileage: H(i3.startMileage, t2), peakMileage: H(i3.peakMileage, t2) });
    }));
  }, valueLabel: "".concat(u.workoutsPerWeek), minLabel: 2, maxLabel: 7 }), Q.createElement(f.A, { title: "Long Run Distance Range", value: [u.minLongRunDistance, u.maxLongRunDistance], min: oi.minLongRunDistance.min, max: oi.maxLongRunDistance.max, step: 1, onChange: function(i2) {
    var e2 = (0, c.A)(i2, 2), t2 = e2[0], o2 = e2[1];
    return g((function(i3) {
      return b(b({}, i3), {}, { minLongRunDistance: Math.round(t2), maxLongRunDistance: Math.round(o2) });
    }));
  }, valueLabel: "".concat(Math.round(u.minLongRunDistance), "-").concat(Math.round(u.maxLongRunDistance)), unitLabel: a, minLabel: oi.minLongRunDistance.min, maxLabel: oi.maxLongRunDistance.max }), si.map((function(i2) {
    return Q.createElement(Z, { key: i2 }, i2);
  })), Q.createElement(J, null, Q.createElement(T, null, Q.createElement(D, null, "Gradual Start"), Q.createElement(G, null, "Reduces mileage in weeks 1-4 to help you ease into the plan gradually.")), Q.createElement(K, { $on: u.gradualStart, onClick: function() {
    return g((function(i2) {
      return b(b({}, i2), {}, { gradualStart: !i2.gradualStart });
    }));
  }, "aria-label": "Gradual Start", "aria-pressed": u.gradualStart }, Q.createElement(U, { $on: u.gradualStart }))));
});
