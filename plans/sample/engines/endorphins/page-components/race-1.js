// Extracted from bundle.2e558b6680807ff3845d.js
// Source SHA256 15c7852d4492dce9bd3bd98268abc7df39af07647cd929a5fe743c891c2666c9
// Byte offsets (UTF-16): 11340..19469
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  var n = e.onNext, t = e.onBack, r = e.progressBarPercentage, o = e.plan, a = (0, v.O$)((function(e2) {
    return e2.race.pagedRaces;
  })), i = (0, v.O$)((function(e2) {
    return e2.race.pagedIsLoading;
  })), l = (0, v.O$)((function(e2) {
    return e2.race.pagedIsLoadingMore;
  })), c = (0, v.O$)((function(e2) {
    return e2.race.pagedHasMore;
  })), u = (0, v.E9)((function(e2) {
    return e2.race.fetchRacesFirstPage;
  })), s = (0, v.E9)((function(e2) {
    return e2.race.fetchNextRacesPage;
  })), d = (0, v.E9)((function(e2) {
    return e2.training.updatePlan;
  })), m = (0, $e.Z)(), g = (0, A.W6)(), E = (0, h.useState)(""), D = (0, f.A)(E, 2), j = D[0], z = D[1], L = (0, h.useState)((function() {
    var e2 = null == o ? void 0 : o.raceDistance;
    return e2 && I.jq.some((function(n2) {
      return n2.value === e2;
    })) ? e2 : null;
  })), H = (0, f.A)(L, 2), P = H[0], M = H[1], B = (0, h.useState)(void 0), F = (0, f.A)(B, 2), G = F[0], W = F[1], Y = (0, h.useState)(void 0), K = (0, f.A)(Y, 2), Q = K[0], q = K[1], V = (0, h.useState)(null), Z = (0, f.A)(V, 2), X = Z[0], ee = Z[1], ne = (0, h.useState)(false), te = (0, f.A)(ne, 2), re = te[0], oe = te[1], ae = (0, h.useState)(false), ie = (0, f.A)(ae, 2), le = ie[0], ce = ie[1], ue = (0, h.useState)(null), se = (0, f.A)(ue, 2), de = se[0], pe = se[1], fe = (0, h.useState)("BLOCKED"), me = (0, f.A)(fe, 2), ge = me[0], ye = me[1], he = (0, h.useState)(false), Ae = (0, f.A)(he, 2), Ee = Ae[0], be = Ae[1], ve = (0, h.useState)(false), xe = (0, f.A)(ve, 2), ke = xe[0], we = xe[1], Se = (0, h.useState)(""), Te = (0, f.A)(Se, 2), Ce = Te[0], _e = Te[1], De = (0, h.useState)(false), Ne = (0, f.A)(De, 2), Re = Ne[0], Ie = Ne[1], je = (0, h.useState)(false), ze = (0, f.A)(je, 2), Le = ze[0], He = ze[1], Pe = !!(G || Q || P), Me = (0, h.useRef)(null);
  (0, h.useEffect)((function() {
    return Me.current && clearTimeout(Me.current), Me.current = setTimeout((function() {
      return u({ search: j, distance: P, dateFrom: G ? new Date(G) : null, dateTo: Q ? new Date(Q) : null }).catch((function() {
      }));
    }), 300), function() {
      Me.current && clearTimeout(Me.current);
    };
  }), [j, P, G, Q, u]);
  var Be = (0, h.useRef)(null);
  (0, h.useEffect)((function() {
    var e2 = Be.current;
    if (e2) {
      var n2 = new IntersectionObserver((function(e3) {
        var n3;
        null !== (n3 = e3[0]) && void 0 !== n3 && n3.isIntersecting && c && !l && s();
      }), { rootMargin: "200px" });
      return n2.observe(e2), function() {
        return n2.disconnect();
      };
    }
  }), [c, l, s, a.length]);
  var Fe = (0, h.useCallback)((function(e2) {
    oe(true), d({ updatedFields: { race: e2._id, raceDate: e2.date, raceDistance: e2.distance, goal: "RACE" }, onNext: function() {
      oe(false), n();
    } });
  }), [d, n]), ln = (0, h.useRef)(null), cn = (0, h.useCallback)((function(e2) {
    var n2 = Ke(e2.date, e2.distance);
    return "BLOCKED" === n2 ? (ye("BLOCKED"), void pe(e2)) : "SHORT_NOTICE" === n2 ? ((0, We.Q5)(Ye.zk.ONBOARDING_RACE_SHORT_NOTICE_SHOWN, { race_distance: e2.distance, weeks_until_race: _.A.utc(e2.date).diff((0, _.A)(), "week") }), ln.current = e2, be(false), ye("SHORT_NOTICE"), void pe(e2)) : void Fe(e2);
  }), [Fe]), un = (0, h.useCallback)((function() {
    pe(null), d({ updatedFields: { goal: "GENERAL" }, onNext: function() {
      return g.push((0, R.N)("/onboarding?step=training-choice", g.location.search));
    } });
  }), [d, g]), sn = (0, h.useCallback)((0, p.A)(y().mark((function e2() {
    var n2, t2, r2, o2;
    return y().wrap((function(e3) {
      for (; ; ) switch (e3.prev = e3.next) {
        case 0:
          if (!le) {
            e3.next = 2;
            break;
          }
          return e3.abrupt("return");
        case 2:
          return ce(true), window.localStorage.removeItem("onboardingGeneralStep"), window.localStorage.removeItem("onboardingGeneralPreset"), window.localStorage.removeItem("onboardingRaceStep"), e3.prev = 6, e3.next = 9, m(Ge.tF.GENERAL_FITNESS);
        case 9:
          n2 = e3.sent, t2 = n2.preset, (0, We.Q5)(Ye.zk.ONBOARDING_RACE_SKIPPED_TO_GENERAL, { preset_id: t2.id }), r2 = t2.onboardingSteps.find((function(e4) {
            return "notifications" !== e4 && "find-your-race" !== e4;
          })), g.push((0, R.N)("/onboarding/general?preset=".concat(t2.id, "&step=").concat(r2), g.location.search)), e3.next = 21;
          break;
        case 16:
          e3.prev = 16, e3.t0 = e3.catch(6), o2 = e3.t0 instanceof Error ? e3.t0.message : String(e3.t0), (0, We.Q5)(Ye.zk.WEB_ERROR, { source: "find_your_race_skip_to_general", message: o2 }), ce(false);
        case 21:
        case "end":
          return e3.stop();
      }
    }), e2, null, [[6, 16]]);
  }))), [le, m, g]), dn = !!Ce && "BLOCKED" === Ke(new Date(Ce), P), pn = (0, h.useCallback)((function() {
    P && Ce && (oe(true), d({ updatedFields: { race: null, raceDate: new Date(Ce).toISOString(), raceDistance: P }, onNext: function() {
      oe(false), n();
    } }));
  }), [P, Ce, d, n]), fn = (0, h.useMemo)((function() {
    return e2 = G, n2 = Q, (0, T.t)({ from: e2, to: n2 });
    var e2, n2;
  }), [G, Q]), mn = ke || !i && 0 === a.length;
  return h.createElement(N.A, { title: "What race are you running?", subtitle: "Choose a race to train for.", progressBarPercentage: r, onBack: t, onContinue: function() {
    if (P && Ce) return "SHORT_NOTICE" === Ke(new Date(Ce), P) ? ((0, We.Q5)(Ye.zk.ONBOARDING_RACE_SHORT_NOTICE_SHOWN, { race_distance: P, weeks_until_race: _.A.utc(Ce).diff((0, _.A)(), "week"), manual_entry: true }), be(true), ye("SHORT_NOTICE"), void pe({ name: "Your ".concat((0, I.in)(P)), date: new Date(Ce).toISOString(), distance: P })) : void pn();
  }, continueDisabled: !mn || !P || !Ce || dn, continueLoading: re, continueLabel: "Continue", footerLinkLabel: "I don't have a race yet", onFooterLink: sn, footerLinkDisabled: le || re }, h.createElement(Qe, null, h.createElement(qe, { type: "button", onClick: function() {
    return we(true);
  } }, "Don't see your race?")), h.createElement(x.A, { type: "search", value: j, onChange: function(e2) {
    z(e2), we(false);
  }, placeholder: "Search for your race", fullWidth: true }), h.createElement(Ve, null, h.createElement(U, { label: fn, active: !!G || !!Q || "date" === X, isOpen: "date" === X, onClick: function() {
    return ee((function(e2) {
      return "date" === e2 ? null : "date";
    }));
  } }), h.createElement(U, { label: P ? (0, I.in)(P) : "Distance", active: !!P || "distance" === X, isOpen: "distance" === X, onClick: function() {
    return ee((function(e2) {
      return "distance" === e2 ? null : "distance";
    }));
  } }), Pe && h.createElement(Ue, { type: "button", onClick: function() {
    M(null), W(void 0), q(void 0), ee(null);
  } }, "Reset")), "date" === X && h.createElement(J, { from: G, to: Q, onApply: function(e2, n2) {
    W(e2), q(n2), ee(null);
  }, onClear: function() {
    W(void 0), q(void 0), ee(null);
  } }), "distance" === X && h.createElement(Ze, null, h.createElement(Xe, { type: "button", $active: !P, onClick: function() {
    M(null), ee(null);
  } }, "All distances"), I.jq.map((function(e2) {
    return h.createElement(Xe, { key: e2.value, type: "button", $active: P === e2.value, onClick: function() {
      M(e2.value), ee(null);
    } }, e2.label);
  }))), i && 0 === a.length ? h.createElement(k.EL, { count: 4 }) : mn ? h.createElement(Je, null, dn ? h.createElement(on, null, h.createElement(O.a3, null, "That race is under 2 weeks away, too close to build any plan, even a taper. Our general training plan can keep your fitness sharp instead."), h.createElement(S.A, { fullWidth: true, variant: "primary", onClick: un }, "Switch to General Training")) : h.createElement(h.Fragment, null, h.createElement(O.H4, null, "Don't see your race?"), h.createElement(O.a3, null, "Select your race distance and date below."), h.createElement(en, { type: "button", onClick: function() {
    return Ie(true);
  } }, P ? (0, I.in)(P) : "Select Race Distance", h.createElement(nn, null, h.createElement(b.qt4, null))), P && h.createElement(en, { type: "button", onClick: function() {
    return He(true);
  } }, Ce ? (0, _.A)(Ce).format("MMM D, YYYY") : "Select Race Date", h.createElement(nn, null, h.createElement(b.nih, null))))) : h.createElement(h.Fragment, null, a.map((function(e2) {
    return h.createElement($, { key: e2._id, race: e2, tooSoon: "BLOCKED" === Ke(e2.date, e2.distance), shortNotice: "SHORT_NOTICE" === Ke(e2.date, e2.distance), onSelect: cn });
  })), c && h.createElement(tn, null, h.createElement(an, { ref: Be }), l && h.createElement(rn, null))), h.createElement(Oe, { race: de, visible: !!de, tier: ge, onClose: function() {
    pe(null), be(false), ln.current = null;
  }, onSwitchToGeneral: un, onContinueAnyway: function() {
    (0, We.Q5)(Ye.zk.ONBOARDING_RACE_SHORT_NOTICE_CONTINUE, { race_distance: null == de ? void 0 : de.distance, manual_entry: Ee });
    var e2 = ln.current;
    pe(null), ln.current = null, Ee ? (be(false), pn()) : e2 && Fe(e2);
  } }), h.createElement(w.Ay, { visible: Re, onDismiss: function() {
    return Ie(false);
  }, presentationStyle: "center", animationType: "fade" }, h.createElement(w.rQ, null, h.createElement(w.wt, null, "Select your race distance"), h.createElement(w.s_, { onClick: function() {
    return Ie(false);
  } }, "\xD7")), h.createElement(w.cw, null, I.jq.map((function(e2) {
    return h.createElement(C.A, { key: e2.value, title: e2.label, selected: P === e2.value, onSelect: function() {
      M(e2.value), Ie(false);
    } });
  })))), h.createElement(w.Ay, { visible: Le, onDismiss: function() {
    return He(false);
  }, presentationStyle: "center", animationType: "fade" }, h.createElement(w.rQ, null, h.createElement(w.wt, null, "Select your race date"), h.createElement(w.s_, { onClick: function() {
    return He(false);
  } }, "\xD7")), h.createElement(w.cw, null, h.createElement(T.A, { mode: "single", value: { from: Ce || void 0 }, minDate: _.A.utc().startOf("day").add(2, "week").toDate(), applyLabel: "Done", onApply: function(e2) {
    e2.from && _e(e2.from), He(false);
  } }))));
});
