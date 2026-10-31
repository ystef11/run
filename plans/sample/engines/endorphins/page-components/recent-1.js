// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 1597980..1605707
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(i) {
  var e, t = i.onNext, x = i.onBack, s = i.progressBarPercentage, a = i.plan, I = (0, r.O$)((function(i2) {
    return i2.user.data;
  })), p = (0, r.O$)((function(i2) {
    return i2.user.personalRecords;
  })), Q = (0, r.E9)((function(i2) {
    return i2.user.getPersonalRecordsForUser;
  })), C = (0, r.E9)((function(i2) {
    return i2.training.updatePlan;
  })), B = "INTRO_TO_RUNNING" === (null == a ? void 0 : a.goal), Y = null == a ? void 0 : a.onboardingLevel, J = h.R3.includes(String(Y)) && !h.hf.includes(String(null == a ? void 0 : a.level)), T = "KILOMETERS" === String(null !== (e = null == a ? void 0 : a.preferredUnit) && void 0 !== e ? e : null == I ? void 0 : I.preferredUnit).toUpperCase(), D = null == a ? void 0 : a.raceDistance, G = B || J, K = l.A5.MILE, U = (0, A.useState)((function() {
    var i2;
    return G ? K : null != a && null !== (i2 = a.recentRaceResult) && void 0 !== i2 && i2.distance ? a.recentRaceResult.distance : "RACE" === (null == a ? void 0 : a.goal) && D && v.includes(D) ? D : K;
  })), Z = (0, y.A)(U, 2), H = Z[0], j = Z[1], w = (0, A.useState)((function() {
    var i2;
    return (null == a || null === (i2 = a.recentRaceResult) || void 0 === i2 || null === (i2 = i2.hours) || void 0 === i2 ? void 0 : i2.toString()) || "";
  })), N = (0, y.A)(w, 2), O = N[0], V = N[1], P = (0, A.useState)((function() {
    var i2;
    return (null == a || null === (i2 = a.recentRaceResult) || void 0 === i2 || null === (i2 = i2.minutes) || void 0 === i2 ? void 0 : i2.toString()) || "";
  })), M = (0, y.A)(P, 2), q = M[0], X = M[1], z = (0, A.useState)((function() {
    var i2;
    return (null == a || null === (i2 = a.recentRaceResult) || void 0 === i2 || null === (i2 = i2.seconds) || void 0 === i2 ? void 0 : i2.toString()) || "";
  })), _ = (0, y.A)(z, 2), $ = _[0], ii = _[1], ei = (0, A.useState)("loading"), ti = (0, y.A)(ei, 2), oi = ti[0], yi = ti[1], xi = (0, A.useState)(null), ni = (0, y.A)(xi, 2), Ai = ni[0], ai = ni[1], ri = (0, A.useState)(false), li = (0, y.A)(ri, 2), Ii = li[0], Ei = li[1], ci = (0, A.useRef)(null), ki = (0, A.useRef)(null), hi = (0, A.useRef)(false), pi = (0, A.useState)(false), Qi = (0, y.A)(pi, 2), Ci = Qi[0], ui = Qi[1];
  (0, A.useEffect)((function() {
    var i2 = false;
    return (0, o.A)(n().mark((function e2() {
      return n().wrap((function(e3) {
        for (; ; ) switch (e3.prev = e3.next) {
          case 0:
            if (null == I || !I._id) {
              e3.next = 3;
              break;
            }
            return e3.next = 3, Q({ userId: I._id });
          case 3:
            i2 || ui(true);
          case 4:
          case "end":
            return e3.stop();
        }
      }), e2);
    })))(), function() {
      i2 = true;
    };
  }), []), (0, A.useEffect)((function() {
    if (Ci && !hi.current) {
      hi.current = true;
      var i2 = (function(i3, e3, t3) {
        var o3 = i3.filter(L).map((function(i4) {
          var e4 = u[i4.distance];
          return e4 && F(i4, e4) ? { effort: i4, raceType: e4 } : null;
        })).filter(Boolean);
        if (0 === o3.length) return null;
        var y3 = o3.find((function(i4) {
          return i4.raceType === e3;
        }));
        if (y3) return y3;
        if (t3) {
          var x3 = o3.find((function(i4) {
            return i4.raceType === t3;
          }));
          if (x3) return x3;
        }
        return o3.sort((function(i4, e4) {
          var t4 = new Date(e4.effort.startDate).getTime() - new Date(i4.effort.startDate).getTime();
          return 0 !== t4 ? t4 : d.indexOf(e4.raceType) - d.indexOf(i4.raceType);
        })), o3[0];
      })(p, H, D);
      if (i2) {
        ai(i2.effort), j(i2.raceType);
        var e2 = S(i2.effort.elapsedTimeSeconds);
        return V(e2.hours > 0 ? String(e2.hours) : ""), X(String(e2.minutes)), ii(String(e2.seconds)), void yi("auto");
      }
      var t2 = (0, Fi.$4)(), o2 = null == t2 ? void 0 : t2.distance, y2 = o2 ? h.lf[o2] : void 0;
      if (t2 && o2 && !G && v.includes(o2) && y2 && t2.seconds >= y2.lowSeconds && t2.seconds <= y2.highSeconds) {
        j(o2);
        var x2 = S(t2.seconds);
        V(x2.hours > 0 ? String(x2.hours) : ""), X(String(x2.minutes)), ii(String(x2.seconds));
      }
      yi("manual");
    }
  }), [Ci, p, H, D, G]);
  var di = H !== l.A5.MILE, vi = h.lf[H], gi = (0, A.useMemo)((function() {
    if (!vi) return true;
    var i2 = (0, h.wG)({ hours: parseInt(O, 10) || 0, minutes: parseInt(q, 10) || 0, seconds: parseInt($, 10) || 0 });
    return i2 < vi.lowSeconds || i2 > vi.highSeconds;
  }), [O, q, $, vi]), fi = (0, A.useMemo)((function() {
    return (function(i2, e2, t2, o2, y2) {
      if (!i2 && !e2 && !t2) return "";
      var x2 = 3600 * i2 + 60 * e2 + t2, s2 = (function(i3, e3) {
        switch (i3) {
          case l.A5.MILE:
            return e3 ? 1.609 : 1;
          case l.A5.FIVEK:
            return e3 ? 5 : 3.1;
          case l.A5.TENK:
            return e3 ? 10 : 6.2;
          case l.A5.TENMILE:
            return e3 ? 16.09 : 10;
          case l.A5.HALF:
            return e3 ? 21.1 : 13.1;
          case l.A5.FULL:
            return e3 ? 42.2 : 26.2;
          default:
            return 1;
        }
      })(o2, y2);
      if (!s2) return "";
      var n2 = x2 / s2, A2 = Math.floor(n2 / 3600), a2 = Math.floor(n2 % 3600 / 60), r2 = Math.floor(n2 % 60), I2 = y2 ? "km" : "mile";
      return "".concat(A2 > 0 ? "".concat(A2, ":") : "").concat(g(a2.toString()), ":").concat(g(r2.toString()), "/").concat(I2);
    })(parseInt(O, 10) || 0, parseInt(q, 10) || 0, parseInt($, 10) || 0, H, T);
  }), [O, q, $, H, T]), mi = f([O, q, $].map(g).filter((function(i2, e2) {
    return "00" !== i2 || e2 > 0;
  })).join(":")), Si = (0, A.useMemo)((function() {
    return vi ? { low: m(vi.lowSeconds), high: m(vi.highSeconds) } : { low: "", high: "" };
  }), [vi]), Ri = (0, A.useMemo)((function() {
    return null !== W(p, H);
  }), [p, H]), Li = !!Ai && Date.now() - new Date(Ai.startDate).getTime() > 15552e6, _i = (0, A.useCallback)((function(i2) {
    j(i2);
    var e2 = W(p, i2);
    if (e2) {
      ai(e2);
      var t2 = S(e2.elapsedTimeSeconds);
      V(t2.hours > 0 ? String(t2.hours) : ""), X(String(t2.minutes)), ii(String(t2.seconds)), yi("auto");
    } else V(""), X(""), ii(""), yi("manual");
  }), [p]), $i = (0, A.useCallback)((function() {
    var i2 = null != Ai ? Ai : W(p, H);
    if (i2) {
      ai(i2);
      var e2 = S(i2.elapsedTimeSeconds);
      V(e2.hours > 0 ? String(e2.hours) : ""), X(String(e2.minutes)), ii(String(e2.seconds)), yi("auto");
    }
  }), [Ai, p, H]), ie = function() {
    return G ? null : A.createElement(Di, null, v.map((function(i2) {
      return A.createElement(Gi, { key: i2, type: "button", $selected: H === i2, onClick: function() {
        return _i(i2);
      } }, R(i2));
    })));
  }, ee = "loading" === oi || gi;
  return A.createElement(Wi, null, A.createElement(bi, null, A.createElement(Bi, { onClick: x, "aria-label": "Back" }, "\u2190")), A.createElement(Yi, null, A.createElement(c.A, { percentage: s })), A.createElement(Ji, null, "loading" === oi ? A.createElement(A.Fragment, null, A.createElement(zi, { $w: "60%", $h: "20px" }), A.createElement(zi, { $w: "45%", $h: "12px" }), A.createElement(zi, { $w: "100%", $h: "120px" })) : "auto" === oi && Ai ? A.createElement(A.Fragment, null, A.createElement(Ti, null, A.createElement(E.H2, null, "We found your recent data"), A.createElement(E.a3, null, "We'll use your activity data to set your pacing")), ie(), A.createElement(si, { effort: Ai, isKilometers: T }), gi && A.createElement(Vi, null, "Please enter a valid time between ", Si.low, " and ", Si.high), Li && A.createElement(Mi, null, "From 6+ months ago \u2014 consider updating"), A.createElement(qi, { type: "button", onClick: function() {
    V(""), X(""), ii(""), yi("manual");
  } }, "Or, manually enter a time")) : A.createElement(A.Fragment, null, A.createElement(Ti, null, A.createElement(E.H2, null, G ? T ? "How fast can you run a kilometer?" : "How fast can you run a mile?" : "What is your current race time?"), A.createElement(E.a3, null, G ? "Don't worry if you're not sure. Just give us your best guess" : "Select a time that reflects your current ability")), ie(), A.createElement(Ki, null, B ? "My goal is to run the " : "I can currently run a ", A.createElement(Ui, null, R(H).toUpperCase()), " in", " ", mi), A.createElement(Zi, { $visible: !!fi }, "Pace: ", fi), A.createElement(Hi, null, di && A.createElement(A.Fragment, null, A.createElement(ji, null, A.createElement(wi, { inputMode: "numeric", "aria-label": "Hours", maxLength: 2, placeholder: "00", value: O, onChange: function(i2) {
    var e2, t2 = b(i2.target.value, Number.MAX_SAFE_INTEGER);
    V(t2), 2 === t2.length && (null === (e2 = ci.current) || void 0 === e2 || e2.focus());
  } }), A.createElement(Ni, null, "Hours")), A.createElement(Oi, null, ":")), A.createElement(ji, null, A.createElement(wi, { ref: ci, inputMode: "numeric", "aria-label": "Minutes", maxLength: 2, placeholder: "00", value: q, onChange: function(i2) {
    var e2, t2 = b(i2.target.value, 60);
    X(t2), 2 === t2.length && (null === (e2 = ki.current) || void 0 === e2 || e2.focus());
  } }), A.createElement(Ni, null, "Minutes")), A.createElement(Oi, null, ":"), A.createElement(ji, null, A.createElement(wi, { ref: ki, inputMode: "numeric", "aria-label": "Seconds", maxLength: 2, placeholder: "00", value: $, onChange: function(i2) {
    return ii(b(i2.target.value, 60));
  } }), A.createElement(Ni, null, "Seconds"))), gi && (O || q || $) && A.createElement(Vi, null, "Please enter a valid time between ", Si.low, " and ", Si.high), !gi && !J && A.createElement(Pi, null, "This should be your recent fastest time for this distance."), Ri && A.createElement(qi, { type: "button", onClick: $i }, "Use activity data"))), A.createElement(Xi, null, A.createElement(k.A, { fullWidth: true, variant: "primary", onClick: function() {
    "loading" === oi || gi || (Ei(true), C({ updatedFields: { recentRaceResult: { hours: parseInt(O, 10) || 0, minutes: parseInt(q, 10) || 0, seconds: parseInt($, 10) || 0, distance: H } }, onNext: function() {
      Ei(false), t();
    } }));
  }, disabled: ee, loading: Ii }, "Continue")));
});
