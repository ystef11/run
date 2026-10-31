// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8248383..8265836
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e, t, n, o, i, l, c, u = (0, h.W6)(), d = (0, h.zy)(), p = (0, h.g)().tmsId, f = (0, m.O$)((function(e2) {
    return e2.training.data;
  })), A = (0, m.O$)((function(e2) {
    return e2.training.trainingModificationHistory;
  })), g = (0, m.E9)((function(e2) {
    return e2.training.resolveTrainingModificationSuggestion;
  })), b = (0, m.E9)((function(e2) {
    return e2.training.sendTMSFeedback;
  })), y = (0, m.E9)((function(e2) {
    return e2.training.getTrainingModificationHistory;
  })), E = (0, m.E9)((function(e2) {
    return e2.training.updateTMSStatus;
  })), w = (0, m.E9)((function(e2) {
    return e2.training.getPMSPreviewResponse;
  })), C = null !== (e = null === (t = d.state) || void 0 === t ? void 0 : t.tms) && void 0 !== e ? e : null, k = null !== (n = A.find((function(e2) {
    return String(e2._id) === p;
  }))) && void 0 !== n ? n : C, B = (0, r.useState)(false), S = (0, v.A)(B, 2), I = S[0], D = S[1], P = (0, r.useState)(false), T = (0, v.A)(P, 2), O = T[0], M = T[1], R = (0, r.useState)(null), F = (0, v.A)(R, 2), j = F[0], L = F[1], N = (0, r.useState)(false), q = (0, v.A)(N, 2), z = q[0], U = q[1], H = (0, r.useState)(true), W = (0, v.A)(H, 2), V = W[0], Y = W[1], Q = (0, r.useState)(null), G = (0, v.A)(Q, 2), K = G[0], J = G[1], X = (0, r.useState)(false), Z = (0, v.A)(X, 2), _ = Z[0], $ = Z[1], ee = (0, r.useState)(false), te = (0, v.A)(ee, 2), ne = te[0], re = te[1], oe = (0, r.useState)(false), ie = (0, v.A)(oe, 2), ae = ie[0], le = ie[1], se = (0, r.useState)("thumbs-down"), ce = (0, v.A)(se, 2), ue = ce[0], de = ce[1], pe = (0, r.useState)(false), fe = (0, v.A)(pe, 2), me = fe[0], Ae = fe[1], he = (0, r.useState)(true), ge = (0, v.A)(he, 2), be = ge[0], ve = ge[1];
  (0, r.useEffect)((function() {
    !k && null != f && f._id && y({ trainingPlanId: f._id });
  }), [k, null == f ? void 0 : f._id, y]);
  var ye = null !== (o = null == k ? void 0 : k.paramsModifications) && void 0 !== o ? o : {}, xe = ye.oldTrainingParams, Ee = ye.newTrainingParams, we = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null !== (t2 = null == Ee ? void 0 : Ee.startMileage) && void 0 !== t2 ? t2 : null == xe ? void 0 : xe.startMileage) && void 0 !== e2 ? e2 : 20;
  }), [null == Ee ? void 0 : Ee.startMileage, null == xe ? void 0 : xe.startMileage]), Ce = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null !== (t2 = null == Ee ? void 0 : Ee.peakMileage) && void 0 !== t2 ? t2 : null == xe ? void 0 : xe.peakMileage) && void 0 !== e2 ? e2 : 40;
  }), [null == Ee ? void 0 : Ee.peakMileage, null == xe ? void 0 : xe.peakMileage]), ke = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null !== (t2 = null == Ee ? void 0 : Ee.workoutsPerWeek) && void 0 !== t2 ? t2 : null == xe ? void 0 : xe.workoutsPerWeek) && void 0 !== e2 ? e2 : 4;
  }), [null == Ee ? void 0 : Ee.workoutsPerWeek, null == xe ? void 0 : xe.workoutsPerWeek]), Be = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null !== (t2 = null == Ee ? void 0 : Ee.minLongRunDistance) && void 0 !== t2 ? t2 : null == xe ? void 0 : xe.minLongRunDistance) && void 0 !== e2 ? e2 : 8;
  }), [null == Ee ? void 0 : Ee.minLongRunDistance, null == xe ? void 0 : xe.minLongRunDistance]), Se = (0, r.useMemo)((function() {
    var e2, t2;
    return null !== (e2 = null !== (t2 = null == Ee ? void 0 : Ee.maxLongRunDistance) && void 0 !== t2 ? t2 : null == xe ? void 0 : xe.maxLongRunDistance) && void 0 !== e2 ? e2 : 16;
  }), [null == Ee ? void 0 : Ee.maxLongRunDistance, null == xe ? void 0 : xe.maxLongRunDistance]), Ie = (0, r.useState)(we), De = (0, v.A)(Ie, 2), Pe = De[0], Te = De[1], Oe = (0, r.useState)(Ce), Me = (0, v.A)(Oe, 2), Re = Me[0], Fe = Me[1], je = (0, r.useState)(ke), Le = (0, v.A)(je, 2), Ne = Le[0], qe = Le[1], ze = (0, r.useState)(Be), Ue = (0, v.A)(ze, 2), He = Ue[0], We = Ue[1], Ve = (0, r.useState)(Se), Ye = (0, v.A)(Ve, 2), Qe = Ye[0], Ge = Ye[1];
  (0, r.useEffect)((function() {
    Te(we), Fe(Ce), qe(ke), We(Be), Ge(Se);
  }), [we, Ce, ke, Be, Se]);
  var Ke = (0, r.useMemo)((function() {
    return (0, vEe.T4)(null == f ? void 0 : f.raceDistance, null == f ? void 0 : f.goal, false);
  }), [null == f ? void 0 : f.raceDistance, null == f ? void 0 : f.goal]), Je = (0, r.useMemo)((function() {
    return (0, vEe.Px)(Pe, Re, Ke, null == f ? void 0 : f.raceDistance);
  }), [Pe, Re, Ke, null == f ? void 0 : f.raceDistance]), Xe = (0, r.useMemo)((function() {
    return { minLongRun: { min: Je.minLongRunDistance.min, max: Je.minLongRunDistance.max }, maxLongRun: { min: Je.maxLongRunDistance.min, max: Je.maxLongRunDistance.max } };
  }), [Je]), Ze = (0, r.useMemo)((function() {
    return Pe !== we || Re !== Ce || Ne !== ke || He !== Be || Qe !== Se;
  }), [Pe, we, Re, Ce, Ne, ke, He, Be, Qe, Se]), _e = (0, r.useMemo)((function() {
    return !(!xe || !Ee) && xe.startMileage === Ee.startMileage && xe.peakMileage === Ee.peakMileage && xe.workoutsPerWeek === Ee.workoutsPerWeek && xe.minLongRunDistance === Ee.minLongRunDistance && xe.maxLongRunDistance === Ee.maxLongRunDistance;
  }), [xe, Ee]), $e = k ? Uf(k) : null, et = $e ? Hf($e) : "default", tt = (0, r.useCallback)((function(e2, t2) {
    var n2 = t2 - e2;
    return { isValid: n2 <= 30, errorMessage: n2 > 30 ? "Range cannot exceed ".concat(30, " miles (current: ").concat(n2, " miles)") : null };
  }), []), nt = (0, r.useCallback)((function(e2) {
    var t2, n2 = (null == f || null === (t2 = f.availability) || void 0 === t2 || null === (t2 = t2.days) || void 0 === t2 ? void 0 : t2.length) || 7;
    return { isValid: e2 <= n2, errorMessage: e2 > n2 ? "Cannot schedule ".concat(e2, " workouts per week with only ").concat(n2, " available days.") : null };
  }), [null == f || null === (i = f.availability) || void 0 === i || null === (i = i.days) || void 0 === i ? void 0 : i.length]), rt = (0, r.useMemo)((function() {
    return tt(Pe, Re);
  }), [Pe, Re, tt]), ot = (0, r.useMemo)((function() {
    return nt(Ne);
  }), [Ne, nt]), it = (0, r.useMemo)((function() {
    return (0, vEe.$)(He, Qe, Je);
  }), [He, Qe, Je]), at = (0, r.useMemo)((function() {
    return { isValid: rt.isValid && ot.isValid && it.isValid, errorMessages: [rt.errorMessage, ot.errorMessage, it.errorMessage].filter(Boolean) };
  }), [rt, ot, it]), lt = (0, r.useMemo)((function() {
    return Ee;
  }), [JSON.stringify(Ee)]), st = (0, r.useCallback)((function() {
    var e2 = (0, a.A)(s().mark((function e3(t2) {
      var n2;
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (null != f && f._id && null != k && k._id && !z) {
              e4.next = 2;
              break;
            }
            return e4.abrupt("return");
          case 2:
            return U(true), J(null), e4.prev = 4, e4.next = 7, w({ trainingPlanId: f._id, properties: RIe, params: null != t2 ? t2 : lt, tmsId: String(k._id) });
          case 7:
            if (n2 = e4.sent) {
              e4.next = 10;
              break;
            }
            throw new Error("No preview data received");
          case 10:
            L(n2), $(true), Y(false), e4.next = 20;
            break;
          case 15:
            e4.prev = 15, e4.t0 = e4.catch(4), J("Failed to load preview data. Please try again."), $(true), Y(false);
          case 20:
            return e4.prev = 20, U(false), e4.finish(20);
          case 23:
          case "end":
            return e4.stop();
        }
      }), e3, null, [[4, 15, 20, 23]]);
    })));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })(), [null == f ? void 0 : f._id, null == k ? void 0 : k._id, lt, w, z]);
  (0, r.useEffect)((function() {
    !k || null == $e || !$e.showChartsAndButtons || _ || j || z || st();
  }), [k, null == $e ? void 0 : $e.showChartsAndButtons, _, j, z, st]);
  var ct = (0, r.useMemo)((function() {
    return e2 = function(e3, t3, n2, r2, o2) {
      st(MIe(MIe({}, lt), {}, { startMileage: e3, peakMileage: t3, workoutsPerWeek: n2, minLongRunDistance: r2, maxLongRunDistance: o2 }));
    }, function() {
      for (var n2 = arguments.length, r2 = new Array(n2), o2 = 0; o2 < n2; o2++) r2[o2] = arguments[o2];
      clearTimeout(t2), t2 = setTimeout((function() {
        return e2.apply(void 0, r2);
      }), 800);
    };
    var e2, t2;
  }), [st, lt]), ut = (0, r.useMemo)((function() {
    return { min: 10, max: (0, yEe.E5)(Ne) };
  }), [Ne]), dt = (0, r.useCallback)((function() {
    u.push("/training/coaching");
  }), [u]);
  if (!k || !$e) return r.createElement(bA.A, { variant: "feed" }, r.createElement(LDe, null, r.createElement(NDe, null), r.createElement(zDe, null, "Loading mileage update...")));
  var pt, ft, mt, At, ht, gt, bt, vt, yt, xt, Et, wt, Ct, kt, Bt, St, It, Dt, Pt, Tt, Ot, Mt, Rt, Ft, jt = be ? "Suggested Next Week" : "Current Next Week", Lt = (ht = parseFloat(String(null !== (pt = null == j || null === (ft = j.nextWeekDistance) || void 0 === ft ? void 0 : ft.value) && void 0 !== pt ? pt : 0)), gt = parseFloat(String(null !== (mt = null == j || null === (At = j.currentNextWeekDistance) || void 0 === At ? void 0 : At.value) && void 0 !== mt ? mt : 0)), Math.round(10 * (ht - gt)) / 10), Nt = (function(e2, t2, n2, r2) {
    var o2 = parseFloat(String(null !== (e2 = null == j || null === (t2 = j.nextWeekLongRun) || void 0 === t2 ? void 0 : t2.value) && void 0 !== e2 ? e2 : 0)), i2 = parseFloat(String(null !== (n2 = null == j || null === (r2 = j.currentNextWeekLongRun) || void 0 === r2 ? void 0 : r2.value) && void 0 !== n2 ? n2 : 0));
    return Math.round(10 * (o2 - i2)) / 10;
  })(), qt = (yt = null !== (bt = null == xe ? void 0 : xe.peakMileage) && void 0 !== bt ? bt : 0, xt = ne ? Re : null !== (vt = null == Ee ? void 0 : Ee.peakMileage) && void 0 !== vt ? vt : 0, 0 === yt ? 0 : Math.round((xt - yt) / yt * 100)), zt = (ne ? Ne : null !== (l = null == Ee ? void 0 : Ee.workoutsPerWeek) && void 0 !== l ? l : 0) - (null !== (c = null == xe ? void 0 : xe.workoutsPerWeek) && void 0 !== c ? c : 0), Ut = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      var t2;
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (window.confirm("Accepting this suggestion will update the future weeks of your plan. Continue?")) {
              e4.next = 2;
              break;
            }
            return e4.abrupt("return");
          case 2:
            return e4.prev = 2, D(true), E({ tmsId: String(k._id), isAccepted: true }), t2 = ne ? MIe(MIe({}, Ee), {}, { startMileage: Pe, peakMileage: Re, workoutsPerWeek: Ne, minLongRunDistance: He, maxLongRunDistance: Qe }) : void 0, e4.next = 8, g({ trainingPlanId: f._id, tmsId: String(k._id), isAccepted: true, status: qf.VK.ACCEPTED, customParams: t2, onNext: function() {
              return y({ trainingPlanId: f._id });
            } });
          case 8:
            dt(), e4.next = 14;
            break;
          case 11:
            e4.prev = 11, e4.t0 = e4.catch(2), alert("Unable to accept suggestion. Please try again.");
          case 14:
            return e4.prev = 14, D(false), e4.finish(14);
          case 17:
          case "end":
            return e4.stop();
        }
      }), e3, null, [[2, 11, 14, 17]]);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })(), Ht = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return e4.prev = 0, D(true), E({ tmsId: String(k._id), isAccepted: false }), e4.next = 5, g({ trainingPlanId: f._id, tmsId: String(k._id), isAccepted: false, status: qf.VK.CONFIRMED, onNext: function() {
              return y({ trainingPlanId: f._id });
            } });
          case 5:
            dt(), e4.next = 11;
            break;
          case 8:
            e4.prev = 8, e4.t0 = e4.catch(0), alert("Unable to confirm suggestion.");
          case 11:
            return e4.prev = 11, D(false), e4.finish(11);
          case 14:
          case "end":
            return e4.stop();
        }
      }), e3, null, [[0, 8, 11, 14]]);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })(), Wt = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return e4.prev = 0, D(true), E({ tmsId: String(k._id), isAccepted: false }), e4.next = 5, g({ trainingPlanId: f._id, tmsId: String(k._id), isAccepted: false, status: qf.VK.DECLINED, onNext: function() {
              return y({ trainingPlanId: f._id });
            } });
          case 5:
            le(false), dt(), e4.next = 12;
            break;
          case 9:
            e4.prev = 9, e4.t0 = e4.catch(0), alert("Unable to decline suggestion.");
          case 12:
            return e4.prev = 12, D(false), e4.finish(12);
          case 15:
          case "end":
            return e4.stop();
        }
      }), e3, null, [[0, 9, 12, 15]]);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })(), Vt = (function() {
    var e2 = (0, a.A)(s().mark((function e3(t2, n2) {
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if ("decline" !== ue) {
              e4.next = 20;
              break;
            }
            return e4.prev = 1, D(true), E({ tmsId: String(k._id), isAccepted: false }), e4.next = 6, b({ trainingPlanId: f._id, tmsId: String(k._id), feedback: "DECLINED", comments: n2, selectedOptions: t2 });
          case 6:
            return e4.next = 8, g({ trainingPlanId: f._id, tmsId: String(k._id), isAccepted: false, status: qf.VK.DECLINED, onNext: function() {
              return y({ trainingPlanId: f._id });
            } });
          case 8:
            le(false), dt(), e4.next = 15;
            break;
          case 12:
            e4.prev = 12, e4.t0 = e4.catch(1), alert("Unable to decline suggestion.");
          case 15:
            return e4.prev = 15, D(false), e4.finish(15);
          case 18:
            e4.next = 24;
            break;
          case 20:
            return e4.next = 22, b({ trainingPlanId: f._id, tmsId: String(k._id), feedback: "NEGATIVE", comments: n2, selectedOptions: t2 });
          case 22:
            Ae(true), le(false);
          case 24:
          case "end":
            return e4.stop();
        }
      }), e3, null, [[1, 12, 15, 18]]);
    })));
    return function(t2, n2) {
      return e2.apply(this, arguments);
    };
  })(), Yt = O ? void 0 : 2;
  return r.createElement(r.Fragment, null, r.createElement(bA.A, { variant: "feed" }, r.createElement(vme, null, r.createElement(yme, null, r.createElement(YIe, null, r.createElement(QIe, { onClick: dt }, r.createElement(FIe, null), r.createElement("span", null, "Back to Coaching")), r.createElement(GIe, null, "Mileage Suggestion"), r.createElement(KIe, null, $e.badgeText && r.createElement(XIe, { $variant: et }, $e.badgeText), k.createdAt && r.createElement(ZIe, null, r.createElement(NIe, null), "Suggestion for ", x()(k.createdAt).format("M/D/YYYY"))), !$e.showChartsAndButtons || _e ? r.createElement(r.Fragment, null, r.createElement(_Ie, null), r.createElement(lDe, null, "Suggestion Details"), r.createElement(rDe, { $expanded: O, $maxLines: Yt }, k.description), k.description && k.description.length > 100 && r.createElement(oDe, { onClick: function() {
    return M(!O);
  } }, O ? "Show Less" : "Read More"), r.createElement(_Ie, null), r.createElement(iDe, null, r.createElement(RSe, { icon: r.createElement(LIe, null), title: "Runs per Week", value: "".concat(null !== (Ot = null !== (Mt = null == Ee ? void 0 : Ee.workoutsPerWeek) && void 0 !== Mt ? Mt : null == xe ? void 0 : xe.workoutsPerWeek) && void 0 !== Ot ? Ot : 0, " days"), delta: (null !== (Rt = null == Ee ? void 0 : Ee.workoutsPerWeek) && void 0 !== Rt ? Rt : 0) - (null !== (Ft = null == xe ? void 0 : xe.workoutsPerWeek) && void 0 !== Ft ? Ft : 0), deltaUnit: "day" }), r.createElement(RSe, { icon: r.createElement(zIe, null), title: "Overall Volume", value: 0 === qt ? "Steady" : qt > 0 ? "Increase" : "Decrease", delta: qt, deltaUnit: "%", showDelta: false })), r.createElement(_Ie, null)) : r.createElement(r.Fragment, null, K ? r.createElement(r.Fragment, null, r.createElement(_Ie, null), r.createElement(IDe, null, r.createElement(HIe, null), r.createElement(DDe, null, "Unable to Load Preview"), r.createElement(PDe, null, K), r.createElement(TDe, { onClick: function() {
    L(null), $(false), st();
  } }, "Try Again"))) : r.createElement(r.Fragment, null, r.createElement($Ie, null, r.createElement(eDe, null, r.createElement(tDe, { src: "https://images.endorphinsrunning.com/other/coaches/stowe_icon.png", alt: "Coach Stowe" }), r.createElement(nDe, null, "Coach Stowe")), r.createElement(rDe, { $expanded: O, $maxLines: Yt }, k.description), k.description && k.description.length > 100 && r.createElement(oDe, { onClick: function() {
    return M(!O);
  } }, O ? "Show Less" : "Read More")), r.createElement(iDe, null, r.createElement(RSe, { icon: r.createElement(jIe, null), title: "Next Week's Long Run", value: "".concat(null !== (Et = null == j || null === (wt = j.nextWeekLongRun) || void 0 === wt ? void 0 : wt.value) && void 0 !== Et ? Et : "\u2014", " mi"), delta: Nt, deltaUnit: "mile" }), r.createElement(RSe, { icon: r.createElement(LIe, null), title: "Runs per Week", value: "".concat(ne ? Ne : null !== (Ct = null == Ee ? void 0 : Ee.workoutsPerWeek) && void 0 !== Ct ? Ct : "\u2014", " days"), delta: zt, deltaUnit: "day" })), r.createElement(iDe, null, r.createElement(RSe, { icon: r.createElement(qIe, null), title: "Next Week Mileage", value: "".concat(null !== (kt = null == j || null === (Bt = j.nextWeekDistance) || void 0 === Bt ? void 0 : Bt.value) && void 0 !== kt ? kt : "\u2014", " mi"), delta: Lt, deltaUnit: "mile" }), r.createElement(RSe, { icon: r.createElement(zIe, null), title: "Overall Volume", value: 0 === qt ? "Steady" : qt > 0 ? "Increase" : "Decrease", delta: qt, deltaUnit: "%", showDelta: false })), r.createElement(_Ie, null), r.createElement(aDe, null, r.createElement(sDe, null, r.createElement("div", null, r.createElement(lDe, null, "Upcoming Weekly Mileage"), r.createElement(cDe, null, "Tap to view details")), ne && r.createElement(uDe, null, Pe, "-", Re, " mi")), r.createElement(TIe.A, { data: null !== (St = null == j ? void 0 : j.mileageTrend) && void 0 !== St ? St : [], isLoading: z && !j }), z && j && r.createElement(dDe, null, r.createElement(qDe, null), r.createElement(pDe, null, V ? "Loading preview..." : "Updating preview..."))), r.createElement(_Ie, null), r.createElement(aDe, null, r.createElement(fDe, null, r.createElement(mDe, { onClick: function() {
    return re(!ne);
  } }, r.createElement(ADe, null, "Adjust Manually"), r.createElement(WIe, { $expanded: ne })), ne && Ze && r.createElement(gDe, { onClick: function() {
    Te(we), Fe(Ce), qe(ke), We(Be), Ge(Se), st(lt);
  } }, r.createElement(UIe, null), "Revert to Original")), ne && r.createElement(hDe, null, r.createElement(REe, { title: "Weekly Distance Range", mode: "dual", min: ut.min, max: ut.max, value: [Pe, Re], valueLabel: "".concat(Pe, "\u2013").concat(Re), unitLabel: "mi", minLabel: ut.min, maxLabel: ut.max, onChange: function(e2) {
    var t2 = Math.round(e2[0]), n2 = Math.round(e2[1]);
    if (t2 !== Pe || n2 !== Re) {
      Te(t2), Fe(n2);
      var r2 = (0, vEe.Px)(t2, n2, Ke, null == f ? void 0 : f.raceDistance), o2 = (0, vEe.cn)(He, Qe, r2), i2 = o2.min, a2 = o2.max;
      i2 !== He && We(i2), a2 !== Qe && Ge(a2), ct(t2, n2, Ne, i2, a2);
    }
  }, highlightRange: true, error: rt.errorMessage }), r.createElement(REe, { title: "Runs per Week", mode: "single", min: 3, max: 7, value: [Ne], valueLabel: "".concat(Ne), minLabel: 3, maxLabel: 7, onChange: function(e2) {
    var t2 = Math.round(e2[0]);
    if (t2 !== Ne) {
      qe(t2);
      var n2 = { min: 10, max: Math.min(13 * t2, 80) }, r2 = Math.min(Math.max(Pe, n2.min), n2.max), o2 = Math.min(Math.max(Re, n2.min), n2.max);
      Te(r2), Fe(o2), ct(r2, o2, t2, He, Qe);
    }
  }, error: ot.errorMessage }), r.createElement(REe, { title: "Long Run Distance Range", mode: "dual", min: Xe.minLongRun.min, max: Xe.maxLongRun.max, value: [He, Qe], valueLabel: "".concat(He, "\u2013").concat(Qe), unitLabel: "mi", minLabel: Xe.minLongRun.min, maxLabel: Xe.maxLongRun.max, onChange: function(e2) {
    var t2 = Math.round(e2[0]), n2 = Math.round(e2[1]);
    t2 === He && n2 === Qe || (We(t2), Ge(n2), ct(Pe, Re, Ne, t2, n2));
  }, highlightRange: true, error: it.errorMessage }))), r.createElement(_Ie, null), (null == j ? void 0 : j.nextWeek) && r.createElement(aDe, null, r.createElement(bDe, null, r.createElement(lDe, null, jt), r.createElement(vDe, null, r.createElement(yDe, { $active: !be, onClick: function() {
    return ve(false);
  } }, "Current"), r.createElement(yDe, { $active: be, onClick: function() {
    return ve(true);
  } }, "Suggested"))), r.createElement(xDe, null, null !== (It = null === (Dt = be ? null === (Pt = j.nextWeek) || void 0 === Pt ? void 0 : Pt.workouts : null === (Tt = j.currentNextWeekPreview) || void 0 === Tt ? void 0 : Tt.workouts) || void 0 === Dt ? void 0 : Dt.map((function(e2, t2) {
    return r.createElement(EDe, { key: t2 }, r.createElement(wDe, { $color: (n2 = e2.workoutType, null !== (o2 = { EASY_RUN: "#2D8CEC", LONG_RUN: "#4CAF50", TEMPO: "#FFBA3B", INTERVALS: "#FF499E", REST: "#555", HILLS: "#FF5722", STRIDES: "#00BCD4", STRENGTH: "#DA70D6" }[null != n2 ? n2 : ""]) && void 0 !== o2 ? o2 : "#888") }), r.createElement(CDe, null, r.createElement(kDe, null, e2.workoutType || "Workout"), r.createElement(BDe, null, e2.date ? x()(e2.date).format("ddd") : "Day ".concat(t2 + 1), e2.distance ? " \xB7 ".concat(e2.distance) : "")));
    var n2, o2;
  }))) && void 0 !== It ? It : r.createElement(SDe, null, "No preview available"))))), !K && $e.showChartsAndButtons && _e && r.createElement(ODe, null, r.createElement(MDe, { onClick: Ht, disabled: I }, I ? "Processing..." : "Acknowledge")), !K && $e.showChartsAndButtons && !_e && r.createElement(ODe, null, ne && !at.isValid && at.errorMessages.map((function(e2, t2) {
    return r.createElement(FDe, { key: t2 }, e2);
  })), r.createElement(MDe, { onClick: Ut, disabled: I || ne && !at.isValid }, I ? "Processing..." : "Accept"), r.createElement(RDe, { onClick: function() {
    var e2;
    me || "NEGATIVE" === (null === (e2 = k.feedback) || void 0 === e2 ? void 0 : e2.type) ? Wt() : (de("decline"), le(true));
  }, disabled: I }, "Not Now")))))), r.createElement(cke, { visible: ae, onClose: function() {
    return le(false);
  }, onSkip: "decline" === ue ? Wt : void 0, onSubmit: Vt }));
});
