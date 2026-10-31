// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 702444..708898
// This is a fragment of the vendor bundle, not an independently runnable engine.
function $(e) {
  var t = e.instanceId, n = e.heading, r = e.mode, o = void 0 === r ? "register" : r, i = e.showSignupCodeOption, a = void 0 !== i && i, l = e.header, s = e.showAuthToggle, c = void 0 !== s && s, u = e.onToggleMode, d = e.onSuccess, p = e.onAuthMethod, f = e.surface, m = void 0 === f ? "glass" : f, A = e.stickySubmit, h = void 0 !== A && A, g = "login" === o, b = g || "undefined" == typeof window ? "" : (0, W.y)({ savedParams: (function() {
    try {
      return JSON.parse(localStorage.getItem("signupParams") || "{}");
    } catch (e2) {
      return {};
    }
  })(), locationSearch: window.location.search }), v = (0, q.useState)(""), y = (0, j.A)(v, 2), x = y[0], E = y[1], w = (0, q.useState)(""), C = (0, j.A)(w, 2), k = C[0], B = C[1], S = (0, q.useState)(""), I = (0, j.A)(S, 2), D = I[0], P = I[1], T = (0, q.useState)((function() {
    return b;
  })), O = (0, j.A)(T, 2), M = O[0], L = O[1], z = (0, q.useState)((function() {
    return !!b;
  })), G = (0, j.A)(z, 2), K = G[0], J = G[1], $2 = (0, q.useState)(_), ee = (0, j.A)($2, 2), me = ee[0], Ce = ee[1], ke = (0, q.useState)(false), Be = (0, j.A)(ke, 2), Se = Be[0], Ie = Be[1], De = (0, q.useState)(""), Pe = (0, j.A)(De, 2), Te = Pe[0], Oe = Pe[1], Me = (0, q.useState)(false), Re = (0, j.A)(Me, 2), Fe = Re[0], je = Re[1], Le = (0, q.useRef)(true);
  (0, q.useEffect)((function() {
    return function() {
      Le.current = false;
    };
  }), []);
  var Ne = (0, U.E9)((function(e2) {
    return e2.user.register;
  })), qe = (0, U.E9)((function(e2) {
    return e2.user.login;
  })), ze = (0, H.b)().getSignupInfo, Ue = (0, Y.i)().trackEvent, He = (0, V.d)({ text: g ? "signin_with" : "continue_with", onSuccess: d ? function(e2) {
    return d({ user: e2 });
  } : void 0, signupCode: M, onClick: function() {
    Ue(Q.zk.REGISTER_WITH_GOOGLE_CLICKED, { mode: g ? "login" : "register" }), null == p || p("google");
  } }), We = He.containerRef, Ve = He.error, Ye = (function() {
    var e2 = (0, R.A)(N().mark((function e3(t2) {
      var n2, r2, o2;
      return N().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (t2.preventDefault(), !Se) {
              e4.next = 3;
              break;
            }
            return e4.abrupt("return");
          case 3:
            if (Ue(Q.zk.REGISTER_BUTTON_CLICKED, { method: "email", mode: g ? "login" : "register" }), null == p || p("email"), i2 = void 0, i2 = X({}, _), g || x.trim() || (i2.firstName = "First name is required."), g || k.trim() || (i2.lastName = "Last name is required."), D.trim() ? Z.test(D) || (i2.email = "Enter a valid email address.") : i2.email = "Email is required.", Ce(i2), (g || !i2.firstName && !i2.lastName) && !i2.email) {
              e4.next = 7;
              break;
            }
            return e4.abrupt("return");
          case 7:
            if (Oe(""), Ie(true), !g) {
              e4.next = 18;
              break;
            }
            return e4.next = 12, qe({ email: D.trim(), onSuccess: function() {
              return d ? d({ email: D.trim() }) : je(true);
            } });
          case 12:
            if (n2 = e4.sent, Le.current) {
              e4.next = 15;
              break;
            }
            return e4.abrupt("return");
          case 15:
            return n2 && (Oe(n2), Ue(Q.zk.WEB_ERROR, { source: "login_submit", message: n2 })), Ie(false), e4.abrupt("return");
          case 18:
            return r2 = ze(X({ signupMethod: "email", signupTimestamp: /* @__PURE__ */ new Date() }, M.trim() ? { signupCode: M.trim() } : {})), e4.next = 21, Ne({ email: D.trim(), firstName: x.trim(), lastName: k.trim(), signupInfo: r2, onSuccess: function() {
              return d ? d({ email: D.trim() }) : je(true);
            } });
          case 21:
            if (o2 = e4.sent, Le.current) {
              e4.next = 24;
              break;
            }
            return e4.abrupt("return");
          case 24:
            o2 && (Oe(o2), Ue(Q.zk.WEB_ERROR, { source: "register_submit", message: o2 })), Ie(false);
          case 26:
          case "end":
            return e4.stop();
        }
        var i2;
      }), e3);
    })));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })(), Qe = function(e2) {
    return Ce((function(t2) {
      return t2[e2] ? X(X({}, t2), {}, (0, F.A)({}, e2, "")) : t2;
    }));
  };
  if (Fe) return q.createElement(te, { $surface: m, "aria-live": "polite" }, q.createElement(ve, { "aria-hidden": true }, "\u2713"), q.createElement(ye, null, "Check your inbox"), q.createElement(xe, null, "We sent a verification link to ", q.createElement("strong", null, D.trim()), ". Tap it to finish creating your account and start training."), q.createElement(Ee, null, "Didn\u2019t get it?", " ", q.createElement(we, { type: "button", onClick: function() {
    Ue(Q.zk.CTA_CLICKED, { source: "use_different_email" }), je(false);
  } }, "Use a different email")));
  var Ge = Ve || "";
  return q.createElement(te, { $surface: m, $stickySubmit: h }, q.createElement(le, { onSubmit: Ye, noValidate: true, $stickySubmit: h }, q.createElement(se, { $stickySubmit: h }, l, n && q.createElement(ne, null, n), c && u && q.createElement(re, null, g ? "New to Endorphins?" : "Already have an account?", " ", q.createElement(we, { type: "button", onClick: function() {
    Ue(Q.zk.AUTH_MODE_TOGGLED, { to: g ? "register" : "login" }), u();
  } }, g ? "Create an account" : "Log in")), q.createElement(ie, { ref: We, "aria-label": "Continue with Google" }), Ge && q.createElement(be, { role: "alert" }, Ge), q.createElement(ae, null, q.createElement("span", null, g ? "or log in with email" : "or sign up with email")), q.createElement(ce, null, !g && q.createElement(q.Fragment, null, q.createElement(de, null, q.createElement(pe, { htmlFor: "".concat(t, "-firstName") }, "First name"), q.createElement(fe, { id: "".concat(t, "-firstName"), name: "given-name", type: "text", autoComplete: "given-name", placeholder: "Jordan", value: x, $invalid: !!me.firstName, onChange: function(e2) {
    E(e2.target.value), Qe("firstName");
  }, "aria-invalid": !!me.firstName, "aria-describedby": me.firstName ? "".concat(t, "-firstName-err") : void 0 }), me.firstName && q.createElement(be, { id: "".concat(t, "-firstName-err"), role: "alert" }, me.firstName)), q.createElement(de, null, q.createElement(pe, { htmlFor: "".concat(t, "-lastName") }, "Last name"), q.createElement(fe, { id: "".concat(t, "-lastName"), name: "family-name", type: "text", autoComplete: "family-name", placeholder: "Rivera", value: k, $invalid: !!me.lastName, onChange: function(e2) {
    B(e2.target.value), Qe("lastName");
  }, "aria-invalid": !!me.lastName, "aria-describedby": me.lastName ? "".concat(t, "-lastName-err") : void 0 }), me.lastName && q.createElement(be, { id: "".concat(t, "-lastName-err"), role: "alert" }, me.lastName))), q.createElement(de, null, q.createElement(pe, { htmlFor: "".concat(t, "-email") }, "Email"), q.createElement(fe, { id: "".concat(t, "-email"), name: "email", type: "email", inputMode: "email", autoComplete: "email", placeholder: "you@email.com", value: D, $invalid: !!me.email, onChange: function(e2) {
    P(e2.target.value), Qe("email");
  }, "aria-invalid": !!me.email, "aria-describedby": me.email ? "".concat(t, "-email-err") : void 0 }), me.email && q.createElement(be, { id: "".concat(t, "-email-err"), role: "alert" }, me.email)), !g && a && q.createElement(q.Fragment, null, K ? q.createElement(de, null, q.createElement(pe, { htmlFor: "".concat(t, "-code") }, "Code (optional)"), q.createElement(fe, { id: "".concat(t, "-code"), name: "signup-code", type: "text", placeholder: "Enter your code", value: M, $invalid: false, onChange: function(e2) {
    return L(e2.target.value);
  } })) : q.createElement(oe, { type: "button", onClick: function() {
    Ue(Q.zk.CTA_CLICKED, { source: "have_a_code" }), J(true);
  } }, "Have a code?")))), q.createElement(ue, { $stickySubmit: h }, Te && q.createElement(be, { role: "alert" }, Te), q.createElement(Ae, { type: "submit", disabled: Se }, Se ? q.createElement(he, { "aria-hidden": true }) : g ? "Log in" : "Create my account"), !g && q.createElement(ge, null, "Free to start \xB7 No credit card \xB7 Unsubscribe anytime. We\u2019ll only email you about your training."))));
}
