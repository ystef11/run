// Extracted from bundle.56cdff646092261b85f8.js
// Source SHA256 e15e895c8c785e4861ad4cb5b31631207201af7cb8c4bf5b2cb8c9371621c093
// Byte offsets (UTF-16): 7140..10063
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  var n = e.onNext, t = e.onBack, r = (0, p.O$)((function(e2) {
    return e2.user.data;
  })), a = (0, p.E9)((function(e2) {
    return e2.user.updateAgeGender;
  })), l = (0, u.useState)(null != r && r.birthdate ? new Date(r.birthdate) : null), o = (0, c.A)(l, 2), i = o[0], s = o[1], d = null == r ? void 0 : r.sex, f = (0, u.useState)("M" === d ? "MALE" : "F" === d ? "FEMALE" : ""), g = (0, c.A)(f, 2), b = g[0], A = g[1], E = (0, u.useState)((null == r ? void 0 : r.preferredUnit) || "MILES"), v = (0, c.A)(E, 2), w = v[0], k = v[1], S = (0, u.useState)(false), T = (0, c.A)(S, 2), M = T[0], C = T[1], D = (0, u.useState)(""), z = (0, c.A)(D, 2), j = z[0], F = z[1], I = (0, u.useState)(false), _ = (0, c.A)(I, 2), L = _[0], G = _[1], Y = (0, u.useState)(ee), $ = (0, c.A)(Y, 2), O = $[0], R = $[1], B = (0, u.useMemo)((function() {
    return i ? (e2 = i, (0, h.A)().diff((0, h.A)(e2), "year")) : void 0;
    var e2;
  }), [i]), Q = !!i && !!B && B >= 13 && B <= 100, W = !!b, U = !Q || !W || M, P = function() {
    return j && F("");
  }, K = i ? "".concat((0, h.A)(i).format("MMMM D, YYYY"), " (Age: ").concat(B, ")") : "Tap to set your birthdate";
  return u.createElement(ae, null, u.createElement(le, null, u.createElement(oe, { onClick: t, "aria-label": "Back" }, "\u2190")), u.createElement(ie, null, u.createElement(ce, null, "Account Setup"), u.createElement(se, null, "This helps us personalize your experience"), u.createElement(de, { type: "button", onClick: function() {
    R(i || ee), G(true);
  }, "data-testid": "age-gender-birthdate-input" }, u.createElement(pe, null, u.createElement(fe, null, "Birthdate"), u.createElement(me, null, K)), i && u.createElement(xe, { onClick: function(e2) {
    e2.stopPropagation(), s(null), P();
  } }, "Clear")), u.createElement(ue, null, "Sex"), ne.map((function(e2) {
    return u.createElement(y, { key: e2.value, label: e2.label, selected: b === e2.value, onSelect: function() {
      A(e2.value), (0, X.Q5)(Z.zk.GENDER_SELECTED, { sex: e2.value }), P();
    } });
  })), u.createElement(ue, null, "Preferred Unit"), te.map((function(e2) {
    return u.createElement(y, { key: e2.value, label: e2.label, selected: w === e2.value, onSelect: function() {
      k(e2.value), P();
    } });
  })), j && u.createElement(he, null, j)), u.createElement(ge, null, u.createElement(m.A, { fullWidth: true, variant: "primary", onClick: function() {
    return (0, X.Q5)(Z.zk.AGE_GENDER_CONTINUE_CLICKED), F(""), i ? Q ? W ? (C(true), void a({ birthdate: i.toISOString(), sex: "MALE" === b ? "M" : "F", preferredUnit: w, onSuccess: function() {
      (0, X.Q5)(Z.zk.AGE_GENDER_SUBMITTED, { sex: "MALE" === b ? "M" : "F", preferred_unit: w }), C(false), n();
    }, onFailure: function() {
      (0, X.Q5)(Z.zk.AGE_GENDER_SUBMISSION_FAILED), C(false), n();
    } })) : F("Please select a gender.") : F("Age must be between 13-100 years.") : F("Please select your birthdate.");
  }, disabled: U, loading: M }, "Continue")), u.createElement(x.Ay, { visible: L, onDismiss: function() {
    return G(false);
  }, presentationStyle: "center", animationType: "fade" }, u.createElement(x.rQ, null, u.createElement(x.wt, null, "Select your birthdate"), u.createElement(x.s_, { onClick: function() {
    return G(false);
  } }, "\xD7")), u.createElement(x.cw, null, u.createElement(N, { value: O, onChange: R, minYear: 1924, maxYear: re })), u.createElement(x.jl, null, u.createElement(m.A, { fullWidth: true, variant: "primary", onClick: function() {
    s(O), (0, X.Q5)(Z.zk.BIRTHDATE_SELECTED), P(), G(false);
  } }, "Done"))));
});
