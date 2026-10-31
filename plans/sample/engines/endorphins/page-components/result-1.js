// Extracted from bundle.2e6a7f2d76e072e9e527.js
// Source SHA256 3e054067692207921f0b65c1091fd5b04d1eff51731bc834b493470cab4fdd78
// Byte offsets (UTF-16): 4185..8712
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var n, e = (function() {
    var n2 = (0, j.useState)("desktop"), e2 = (0, A.A)(n2, 2), t2 = e2[0], r2 = e2[1];
    return (0, j.useEffect)((function() {
      r2((0, P.li)());
    }), []), t2;
  })(), t = (0, T.W6)(), r = (0, T.zy)(), o = (0, z.O$)((function(n2) {
    return n2.user.data;
  })), a = (0, z.E9)((function(n2) {
    return n2.phoneOptIn.sendAppDownloadLink;
  })), i = (0, z.E9)((function(n2) {
    return n2.subscription.resolveCurrentMeta;
  })), l = (0, D.j)().trackSubscriptionCompleted, p = (0, j.useState)(""), c = (0, A.A)(p, 2), u = c[0], d = c[1], s = (0, j.useState)("ios"), m = (0, A.A)(s, 2), h = m[0], g = m[1], b = (0, j.useState)(false), f = (0, A.A)(b, 2), x = f[0], y = f[1], w = (0, j.useState)(false), k = (0, A.A)(w, 2), C = k[0], G = k[1], nn = (0, j.useMemo)((function() {
    return (0, _.t)(u);
  }), [u]), en = "ios" === e || "android" === e;
  (0, j.useEffect)((function() {
    var n2, e2 = new URLSearchParams(r.search);
    if ("true" === e2.get("success")) if ("amazon" !== (null === (n2 = o.currentSubscription) || void 0 === n2 ? void 0 : n2.source)) {
      var a2 = e2.get("race") || void 0;
      S.oR.success("Payment successful! Your subscription is now active."), (0, v.A)(E().mark((function n3() {
        var e3, t2, r2, o2;
        return E().wrap((function(n4) {
          for (; ; ) switch (n4.prev = n4.next) {
            case 0:
              return n4.next = 2, i();
            case 2:
              o2 = n4.sent, l("web", null !== (e3 = null == o2 ? void 0 : o2.subscriptionType) && void 0 !== e3 ? e3 : "unknown", { race_id: a2 }, null === (t2 = null == o2 ? void 0 : o2.isTrial) || void 0 === t2 || t2, null !== (r2 = null == o2 ? void 0 : o2.metaEventIds) && void 0 !== r2 ? r2 : null);
            case 4:
            case "end":
              return n4.stop();
          }
        }), n3);
      })))(), t.replace("/app-handoff");
    } else t.replace("/app-handoff");
  }), []);
  var tn = "amazon" === (null === (n = o.currentSubscription) || void 0 === n ? void 0 : n.source), rn = tn && false === o.onboardingComplete, on = rn ? "Continue on web" : "View my plan", an = function() {
    return t.push(rn ? "/onboarding" : "/training");
  }, ln = (function() {
    var n2 = (0, v.A)(E().mark((function n3(e2) {
      return E().wrap((function(n4) {
        for (; ; ) switch (n4.prev = n4.next) {
          case 0:
            if (e2.preventDefault(), nn && !x) {
              n4.next = 3;
              break;
            }
            return n4.abrupt("return");
          case 3:
            return y(true), n4.prev = 4, n4.next = 7, a({ phoneNumber: u, platform: h });
          case 7:
            G(true), S.oR.success("Sent! Check your phone for the download link."), n4.next = 14;
            break;
          case 11:
            n4.prev = 11, n4.t0 = n4.catch(4), S.oR.error(n4.t0 instanceof Error ? n4.t0.message : "Could not send the link. Please try again.");
          case 14:
            return n4.prev = 14, y(false), n4.finish(14);
          case 17:
          case "end":
            return n4.stop();
        }
      }), n3, null, [[4, 11, 14, 17]]);
    })));
    return function(e2) {
      return n2.apply(this, arguments);
    };
  })();
  return en ? j.createElement($.A, null, j.createElement(N, null, j.createElement(O, { type: "button", "aria-label": on, onClick: an }, "\xD7"), j.createElement(I, null, j.createElement(W, { src: M, alt: "Endorphins" }), j.createElement(Y, null, "Download the Endorphins app to begin your training plan"), j.createElement(F, null, "Your plan is ready and waiting in the app."), j.createElement(H, { href: (0, P.fv)(e), target: "_blank", rel: "noopener noreferrer", "aria-label": "android" === e ? "Get it on Google Play" : "Download on the App Store" }, j.createElement(J, { src: "android" === e ? "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" : "https://i.imgur.com/vaGUZzb.png", alt: "android" === e ? "Get it on Google Play" : "Download on the App Store" })), j.createElement(X, null, "\u2605 ", B.Qe, " \xB7 ", B.rm, " runners", tn ? "" : " \xB7 Free 7-day trial"), j.createElement(Z, { type: "button", onClick: an }, on)))) : j.createElement($.A, null, j.createElement(N, { as: "form", onSubmit: ln }, j.createElement(O, { type: "button", "aria-label": on, onClick: an }, "\xD7"), j.createElement(I, null, j.createElement(W, { src: M, alt: "Endorphins" }), j.createElement(Y, null, "Download the Endorphins app to begin your training plan"), j.createElement(F, null, "Enter your number and we'll text you a link to download the app and start training."), j.createElement(Q, null, j.createElement(V, { role: "radiogroup", "aria-label": "Phone type" }, j.createElement(q, { type: "button", $active: "ios" === h, "aria-pressed": "ios" === h, onClick: function() {
    return g("ios");
  } }, "iPhone"), j.createElement(q, { type: "button", $active: "android" === h, "aria-pressed": "android" === h, onClick: function() {
    return g("android");
  } }, "Android")), j.createElement(K, { type: "tel", inputMode: "tel", autoComplete: "tel", placeholder: "(555) 555-1234", value: u, onChange: function(n2) {
    return d((0, _.w)(n2.target.value));
  }, "aria-label": "Phone number" })), j.createElement(X, null, "Or download directly:", " ", j.createElement("a", { href: P.od, target: "_blank", rel: "noopener noreferrer" }, "App Store"), " ", "\xB7", " ", j.createElement("a", { href: P.JN, target: "_blank", rel: "noopener noreferrer" }, "Google Play"))), j.createElement(L, null, j.createElement(U, null, j.createElement(R.A, { type: "submit", fullWidth: true, variant: "primary", shimmer: nn, loading: x, disabled: !nn }, C ? "Sent \u2014 Resend link" : "Text me the link"), j.createElement(Z, { type: "button", onClick: an }, on)))));
});
