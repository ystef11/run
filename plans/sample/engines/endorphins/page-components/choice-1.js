// Extracted from bundle.a0cb4851c131ec02d9a6.js
// Source SHA256 d9eb36e0c0af913d628d0388fbc062d9747f1f59dab9a650eb79d2f0a40c40e3
// Byte offsets (UTF-16): 6224..8799
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(n) {
  var e = n.onBack, r = (0, u.W6)(), o = (0, E.E9)((function(n2) {
    return n2.training.createPlan;
  })), t = (0, q.Z)(), a = (0, d.useState)(null), i = (0, k.A)(a, 2), l = i[0], c = i[1], s = (0, J.Z)(r.location.search), p = (function() {
    var n2 = (0, m.A)(w().mark((function n3(e2) {
      var a2, i2, s2, d2;
      return w().wrap((function(n4) {
        for (; ; ) switch (n4.prev = n4.next) {
          case 0:
            if (!l) {
              n4.next = 2;
              break;
            }
            return n4.abrupt("return");
          case 2:
            if (window.localStorage.removeItem("onboardingGeneralStep"), window.localStorage.removeItem("onboardingGeneralPreset"), window.localStorage.removeItem("onboardingRaceStep"), "race" !== e2.flow) {
              n4.next = 9;
              break;
            }
            return c(e2.id), o({ goal: "race", onNext: function() {
              (0, H.Q5)(X.zk.TRAINING_PLAN_CREATED, { goal: "race" }), c(null), r.push((0, J.N)("/onboarding/race?step=how-it-works", r.location.search));
            } }), n4.abrupt("return");
          case 9:
            if (a2 = Y[e2.flow]) {
              n4.next = 13;
              break;
            }
            return A.o.info('This training type is coming soon to web. Try "Upcoming race" for now.'), n4.abrupt("return");
          case 13:
            return c(e2.id), n4.prev = 14, n4.next = 17, t(a2);
          case 17:
            i2 = n4.sent, s2 = i2.preset, (0, H.Q5)(X.zk.TRAINING_PLAN_CREATED, { goal: "general", preset_id: a2 }), d2 = s2.onboardingSteps.find((function(n5) {
              return "notifications" !== n5 && "find-your-race" !== n5;
            })), r.push((0, J.N)("/onboarding/general?preset=".concat(a2, "&step=").concat(d2), r.location.search)), n4.next = 27;
            break;
          case 24:
            n4.prev = 24, n4.t0 = n4.catch(14), A.o.error("Could not start that plan. Please try again.");
          case 27:
            return n4.prev = 27, c(null), n4.finish(27);
          case 30:
          case "end":
            return n4.stop();
        }
      }), n3, null, [[14, 24, 27, 30]]);
    })));
    return function(e2) {
      return n2.apply(this, arguments);
    };
  })();
  return d.createElement(nn, null, d.createElement(en, null, d.createElement(rn, { onClick: s ? void 0 : e, $hidden: s, "aria-label": "Back", "aria-hidden": s, tabIndex: s ? -1 : void 0 }, "\u2190")), d.createElement(on, null, d.createElement(tn, null, "What brings you to Endorphins?"), d.createElement(an, null, "Pick a starting point \u2014 we'll fine-tune the details with a few quick questions."), d.createElement(ln, null, d.createElement(I.A, null, "~1 min setup")), d.createElement(cn, null, d.createElement(sn, null, "Most popular"), d.createElement(dn, null, "Top picks based on what runners choose most.")), Z.map((function(n2) {
    return d.createElement(P, { key: n2.id, label: n2.label, description: n2.description, Icon: n2.Icon, backgroundColor: n2.backgroundColor, borderColor: n2.borderColor, iconColor: n2.iconColor, loading: l === n2.id, disabled: null !== l && l !== n2.id, onSelect: function() {
      return p(n2);
    } });
  })), d.createElement(P, { label: Q.label, description: Q.description, Icon: Q.Icon, backgroundColor: Q.backgroundColor, borderColor: Q.borderColor, iconColor: Q.iconColor, disabled: null !== l, onSelect: function() {
    l || r.push("/app-handoff");
  } })));
});
