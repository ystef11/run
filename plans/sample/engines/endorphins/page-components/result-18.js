// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 7530186..7539067
// This is a fragment of the vendor bundle, not an independently runnable engine.
function tL(e) {
  var t = e.variant, n = void 0 === t ? "register" : t, o = e.layout, i = void 0 === o ? "current" : o, l = e.layoutResolvedBeforeRender, c = void 0 === l || l, u = e.layoutResolved, d = void 0 === u || u, p = "home" === n, f = "story" === i, A = f ? "how" : "why", g = "undefined" != typeof window ? new URLSearchParams(window.location.search) : null, b = "true" === (null == g ? void 0 : g.get("login")), y = "true" === (null == g ? void 0 : g.get("signup")), x = (0, r.useState)((function() {
    return b;
  })), E = (0, v.A)(x, 2), w = E[0], C = E[1], k = (0, r.useState)((function() {
    return y || b;
  })), B = (0, v.A)(k, 2), S = B[0], I = B[1], D = (0, r.useState)(null), P = (0, v.A)(D, 2), T = P[0], O = P[1], M = (0, r.useState)(false), R = (0, v.A)(M, 2), F = R[0], j = R[1], L = (0, r.useState)((function() {
    var e2;
    return null !== (e2 = null == g ? void 0 : g.get("email")) && void 0 !== e2 ? e2 : "";
  })), N = (0, v.A)(L, 2), q = N[0], z = N[1], U = (0, m.E9)((function(e2) {
    return e2.race;
  })).getRaceById, H = (0, m.E9)((function(e2) {
    return e2.partner.getPartnerById;
  })), W = (0, m.E9)((function(e2) {
    return e2.app;
  })).setHideNavigationButtons, V = (0, m.O$)((function(e2) {
    return e2.user.data;
  })), Y = (0, r.useState)((function() {
    if ("undefined" == typeof window) return (0, vj.lS)();
    var e2 = (0, vj.cM)(window.location.search), t2 = e2.intentCaptured, n2 = e2.cleanedSearch;
    return t2 && window.history.replaceState({}, "", window.location.pathname + n2), (0, vj.lS)();
  })), Q = (0, v.A)(Y, 1)[0], G = (0, h.W6)(), K = (0, h.zy)(), J = K.search.includes("verify-email"), X = "/chat-gpt/login" === window.location.pathname, Z = "/claude/login" === window.location.pathname, _ = X ? "chatgpt" : Z ? "claude" : null, $ = (0, yj.b)().utmParams, ee = (0, Qf.i)().trackEvent, te = (0, r.useMemo)((function() {
    var e2 = new URLSearchParams(K.search);
    return (function(e3, t2) {
      if (!e3) return null;
      var n2 = e3.toUpperCase();
      if (!(n2 in wj)) return null;
      var r2 = wj[n2];
      return r2[t2 ? t2.toUpperCase() : ""] || r2.default || null;
    })(e2.get("variant"), e2.get("description"));
  }), [K.search]), ne = (0, r.useMemo)((function() {
    return te ? -1 === (t2 = (e2 = te.title.trim()).lastIndexOf(" ")) ? { lead: "", tail: e2 } : { lead: e2.slice(0, t2), tail: e2.slice(t2 + 1) } : null;
    var e2, t2;
  }), [te]);
  (0, r.useEffect)((function() {
    if (p) {
      var e2 = window.location.hash;
      if (e2) {
        var t2 = "#how" === e2 || "#why" === e2 ? "#".concat(A) : e2, n2 = requestAnimationFrame((function() {
          var e3;
          null === (e3 = document.querySelector(t2)) || void 0 === e3 || e3.scrollIntoView({ behavior: "smooth", block: "start" });
        }));
        return function() {
          return cancelAnimationFrame(n2);
        };
      }
    }
  }), []);
  var re = (0, r.useRef)(false);
  (0, r.useEffect)((function() {
    re.current || !p || "/" !== K.pathname || Q || d && (re.current = true, ee(kl.zk.LANDING_LAYOUT_ASSIGNED, { layout: i, resolved_before_render: c }));
  }), [d]), (0, r.useEffect)((function() {
    var e2 = document.body.style.background, t2 = document.body.style.backgroundImage, n2 = document.body.style.minHeight;
    document.body.style.background = vA.qy.ink, document.body.style.backgroundImage = "none", document.body.style.minHeight = "100vh", document.documentElement.style.background = vA.qy.ink;
    var r2 = Object.keys($).length > 0;
    return r2 && W(true), function() {
      document.body.style.background = e2, document.body.style.backgroundImage = t2, document.body.style.minHeight = n2, document.documentElement.style.background = "", r2 && W(false);
    };
  }), [$, W]), (0, r.useEffect)((function() {
    if (!f && V._id && !J) {
      var e2 = (0, Ef.qY)() ? (0, Ef.kU)() : null;
      if (e2) return void (e2.startsWith("http://") || e2.startsWith("https://") ? window.location.assign(e2) : G.replace(e2));
      if (V.onboardingComplete) return void G.replace("/");
      var t2 = new URLSearchParams(K.search);
      if ("assistant" === t2.get("flow")) return t2.set("step", "welcome"), void G.replace("/onboarding/assistant?".concat(t2.toString()));
      t2.set("step", "welcome"), G.replace("/onboarding?".concat(t2.toString()));
    }
  }), [f, V._id, V.onboardingComplete, J, K.search, G]), (0, r.useEffect)((function() {
    var e2 = (function() {
      var e3 = (0, a.A)(s().mark((function e4() {
        var t2, n2;
        return s().wrap((function(e5) {
          for (; ; ) switch (e5.prev = e5.next) {
            case 0:
              if (j(true), e5.prev = 1, t2 = null, n2 = null, !$.partnerId) {
                e5.next = 14;
                break;
              }
              return e5.prev = 5, e5.next = 8, H($.partnerId);
            case 8:
              n2 = e5.sent, e5.next = 14;
              break;
            case 11:
              e5.prev = 11, e5.t0 = e5.catch(5), console.error("Error loading partner:", e5.t0);
            case 14:
              if (!$.race) {
                e5.next = 28;
                break;
              }
              return e5.prev = 15, e5.next = 18, U($.race);
            case 18:
              (t2 = e5.sent) && n2 && (t2.partnerInfo = n2), e5.next = 26;
              break;
            case 22:
              e5.prev = 22, e5.t1 = e5.catch(15), console.error("Error loading race:", e5.t1), n2 && (t2 = { _id: $.partnerId, name: n2.name || n2.companyName || "Partner Program", date: "", distance: "CUSTOM", location: "", partnerInfo: n2 });
            case 26:
              e5.next = 29;
              break;
            case 28:
              n2 && (t2 = { _id: $.partnerId, name: n2.name || n2.companyName || "Partner Program", date: "", distance: "CUSTOM", location: "", partnerInfo: n2 });
            case 29:
              O(t2);
            case 30:
              return e5.prev = 30, j(false), e5.finish(30);
            case 33:
            case "end":
              return e5.stop();
          }
        }), e4, null, [[1, , 30, 33], [5, 11], [15, 22]]);
      })));
      return function() {
        return e3.apply(this, arguments);
      };
    })();
    ($.race || $.partnerId) && e2();
  }), [$.race, $.partnerId, U, H]), (0, r.useEffect)((function() {
    var e2 = window.location.pathname;
    C("/login" === e2 || "/chat-gpt/login" === e2 || "/claude/login" === e2);
  }), [K.pathname]);
  var oe = function(e2) {
    var t2 = null != e2 ? e2 : V, n2 = (0, Ef.kU)();
    if (n2) n2.startsWith("http://") || n2.startsWith("https://") ? window.location.assign(n2) : G.push(n2);
    else if (t2.onboardingComplete) G.push("/");
    else {
      var r2 = new URLSearchParams(K.search);
      if (r2.delete("verify-email"), "assistant" === r2.get("flow")) return r2.set("step", "welcome"), void G.push("/onboarding/assistant?".concat(r2.toString()));
      r2.set("step", "welcome"), G.push("/onboarding?".concat(r2.toString()));
    }
  };
  if (Q) return r.createElement(bj.A, { intent: Q });
  var ie = !!$.race && !!T && "CUSTOM" !== T.distance, ae = J || !!_ || !!$.race || !!$.partnerId || !!te, le = function(e2) {
    var t2 = new URLSearchParams(K.search);
    t2.delete("signup"), t2.delete("login"), e2 && t2.set(e2, "true");
    var n2 = t2.toString();
    G.replace("".concat(K.pathname).concat(n2 ? "?".concat(n2) : ""));
  }, se = function(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "unknown", n2 = "login" === e2;
    e2 && C(n2), I(true), le(n2 ? "login" : "signup"), ee(kl.zk.AUTH_MODAL_OPENED, { source: t2, mode: n2 ? "login" : "register", layout: i });
  }, ce = function() {
    I(false), le(null);
  }, ue = J ? r.createElement(gj.A, { email: q, redirectAfterAuth: oe }) : r.createElement(wg.A, { instanceId: "register", mode: w ? "login" : "register", showSignupCodeOption: !w, showAuthToggle: true, surface: "plain", stickySubmit: true, onToggleMode: function() {
    var e2 = !w;
    C(e2), le(e2 ? "login" : "signup");
  }, header: r.createElement(kg, { isLogin: w, isLoadingRace: F, raceData: T, isActualRace: ie, variantCopy: te, connectorBrand: _ }), onSuccess: function(e2) {
    var t2 = e2.user, n2 = e2.email;
    t2 ? oe(t2) : (function(e3) {
      z(e3);
      var t3 = new URLSearchParams(K.search);
      t3.set("verify-email", ""), G.push("?".concat(t3.toString()));
    })(null != n2 ? n2 : "");
  } });
  return r.createElement(Wg.q, { value: { open: se } }, r.createElement(lL, null, r.createElement(Ch, null), p ? r.createElement(hA.A, { onRegister: function() {
    return se("register", "root_nav");
  }, onLogin: function() {
    return se("login", "root_nav");
  }, onMobileLogin: function() {
    return se("login", "mobile_header_login");
  }, howItWorksId: A }) : r.createElement(sL, null, r.createElement(cL, null, r.createElement(uL, { type: "button", onClick: function() {
    ee(kl.zk.CTA_CLICKED, { source: "header_brand_logo" }), G.push("/");
  }, "aria-label": "Endorphins Running" }, r.createElement("img", { src: "https://media.endorphinsrunning.com/assets/logo_small.png", alt: "Endorphins Running", height: 28 })), r.createElement(dL, { type: "button", onClick: function() {
    return se("login", "header_login");
  } }, "Log in"))), r.createElement(pL, { $offsetForFixedNav: p }, r.createElement(fL, null, r.createElement(mL, null, r.createElement(AL, { "aria-hidden": true }), "Personalized run coaching"), te && ne ? r.createElement(r.Fragment, null, r.createElement(hL, null, ne.lead, ne.lead && " ", r.createElement(gL, null, ne.tail)), r.createElement(bL, null, te.subtitle, ". Free to start, cancel anytime.")) : f ? r.createElement(r.Fragment, null, r.createElement(hL, null, rv.Dv.lead, " ", r.createElement(gL, null, rv.Dv.tail)), r.createElement(bL, null, rv.Dv.subhead)) : r.createElement(yL, null), r.createElement(xL, null, r.createElement(EL, { type: "button", onClick: function() {
    return se("register", "hero_primary");
  } }, "Start training free"), r.createElement(wL, { type: "button", onClick: function() {
    var e2;
    ee(kl.zk.CTA_CLICKED, { source: "hero_secondary" }), null === (e2 = document.getElementById(A)) || void 0 === e2 || e2.scrollIntoView({ behavior: "smooth", block: "start" });
  } }, "See how it works")), r.createElement(CL, null, "Free to start, no card needed \xB7 Premium $9.99/mo billed yearly \xB7 Cancel anytime"), r.createElement(kL, null, r.createElement(BL, { "aria-hidden": true }, "\u2605\u2605\u2605\u2605\u2605"), r.createElement(SL, null, f ? rv.Dv.proof : r.createElement(r.Fragment, null, r.createElement("strong", null, yA.Qe), " on the App Store \xB7 Loved by", " ", r.createElement("strong", null, yA.rm), " runners")))), r.createElement(IL, null, r.createElement(DL, null, r.createElement(Vh, null)), r.createElement(PL, null, r.createElement(ig, null)))), r.createElement(FL, null, f ? r.createElement(hj, null) : r.createElement(yO, { isHome: p })), r.createElement(Vg, { onStart: function() {
    return se("register", "sticky_mobile");
  } }), r.createElement(TL, { visible: S, onDismiss: ce, animationType: "fade", presentationStyle: "center" }, r.createElement(OL, { $fillHeight: !J }, r.createElement(RL, { type: "button", onClick: ce, "aria-label": "Close" }, "\xD7"), r.createElement(ML, { $fillHeight: !J }, ue)))), r.createElement(nL, { shouldOpen: ae, openModal: function() {
    return se(w ? "login" : "register", "deep_link");
  } }));
}
