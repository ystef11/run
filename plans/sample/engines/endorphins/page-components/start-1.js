// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1585111..1587906
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t = i.onNext, o = i.onBack, y = i.progressBarPercentage, x = i.plan, s = (0, W.E9)((function(i2) {
    return i2.training.updatePlan;
  })), n = (0, W.E9)((function(i2) {
    return i2.training.getTrainingPlanOptions;
  })), A = (0, S.useState)([]), a = (0, v.A)(A, 2), r = a[0], l = a[1], I = (0, S.useState)(true), E = (0, v.A)(I, 2), c = E[0], k = E[1], h = (0, S.useState)(null), p = (0, v.A)(h, 2), Q = p[0], C = p[1], u = (0, S.useState)(false), g = (0, v.A)(u, 2), f = g[0], R = g[1], b = null == x ? void 0 : x.goal, Y = "INTRO_TO_RUNNING" === b, J = (0, S.useMemo)((function() {
    var i2, e2;
    return null != (e2 = null == x || null === (i2 = x.availability) || void 0 === i2 ? void 0 : i2.days) && e2.length ? e2.map((function(i3) {
      return i3.charAt(0) + i3.slice(1).toLowerCase();
    })) : Ee;
  }), [null == x || null === (e = x.availability) || void 0 === e ? void 0 : e.days]), T = (0, S.useMemo)((function() {
    return (function(i2) {
      for (var e2 = (0, F.A)().startOf("day"), t2 = [e2.toDate()], o2 = 1; o2 < 7 && t2.length < 3; o2++) {
        var y2 = e2.add(o2, "day");
        i2.includes(y2.format("dddd")) && t2.push(y2.toDate());
      }
      return t2;
    })(J).map((function(i2) {
      return { date: i2, label: U(i2) };
    }));
  }), [J]);
  (0, S.useEffect)((function() {
    var i2 = false;
    return (0, d.A)(m().mark((function e2() {
      var t2, o2, y2, x2;
      return m().wrap((function(e3) {
        for (; ; ) switch (e3.prev = e3.next) {
          case 0:
            return k(true), e3.next = 3, n();
          case 3:
            if (e3.t1 = t2 = e3.sent, e3.t0 = null !== e3.t1, !e3.t0) {
              e3.next = 7;
              break;
            }
            e3.t0 = void 0 !== t2;
          case 7:
            if (!e3.t0) {
              e3.next = 11;
              break;
            }
            e3.t2 = t2, e3.next = 12;
            break;
          case 11:
            e3.t2 = [];
          case 12:
            if (o2 = e3.t2, !i2) {
              e3.next = 15;
              break;
            }
            return e3.abrupt("return");
          case 15:
            y2 = (0, F.A)().startOf("day").toDate(), x2 = o2.map((function(i3, e4) {
              return Ie(Ie({}, i3), {}, { startDate: 0 === e4 ? y2 : (t3 = i3.startDate, o3 = (0, F.A)(t3).utc().format("YYYY-MM-DD"), (0, F.A)(o3).startOf("day").toDate()), clientId: e4 });
              var t3, o3;
            })), l(x2), 0 === x2.length && L.o.error("Could not load plan options. Please try again."), k(false);
          case 20:
          case "end":
            return e3.stop();
        }
      }), e2);
    })))(), function() {
      i2 = true;
    };
  }), []), (0, S.useEffect)((function() {
    !c && r.length > 0 && null === Q && C(r[0].clientId);
  }), [c, r, Q]);
  var D = (0, S.useCallback)((function(i2, e2) {
    l((function(t2) {
      return t2.map((function(t3) {
        return t3.clientId === i2 ? Ie(Ie({}, t3), {}, { startDate: (0, F.A)(e2).startOf("day").toDate() }) : t3;
      }));
    }));
  }), []), G = (0, S.useMemo)((function() {
    return Y ? r.slice(0, 1) : r.slice(0, 3);
  }), [Y, r]);
  return S.createElement(B.A, { title: "When do you want to start your plan?", subtitle: "Pick a start date for your training.", progressBarPercentage: y, onBack: o, onContinue: function() {
    if (null != Q) {
      var i2 = r.find((function(i3) {
        return i3.clientId === Q;
      }));
      i2 && (R(true), s({ updatedFields: { startDate: K(i2.startDate), planDuration: i2.duration }, onNext: function() {
        R(false), t();
      } }));
    }
  }, continueDisabled: c || null == Q, continueLoading: f || c }, c ? S.createElement(S.Fragment, null, S.createElement(ke, null), S.createElement(ke, null), S.createElement(ke, null)) : G.map((function(i2, e2) {
    return S.createElement(ei, { key: i2.clientId, option: i2, index: e2, selected: i2.clientId === Q, onSelect: function() {
      return C(i2.clientId);
    }, immediateDates: T, trainingDays: J, planGoal: b, onChangeStartDate: D });
  })));
});
