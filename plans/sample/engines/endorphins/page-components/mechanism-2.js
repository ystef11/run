// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 612208..626600
// This is a fragment of the vendor bundle, not an independently runnable engine.
((e, t, n) => {
  "use strict";
  n.d(t, { A: () => re });
  var r, o, i, a, l, s, c, u, d, p, f, m, A, h, g, b, v, y, x, E, w, C, k, B, S, I, D, P, T, O, M, R, F, j, L, N, q = n(57528), z = n(5544), U = n(96540), H = n(27581), W = n(56347), V = n(3), Y = n(28751), Q = n(37316), G = n(4991), K = n(27696), J = n(75079), X = "https://media.endorphinsrunning.com/assets/logo_small.png", Z = [{ label: "Events", href: "/events" }, { label: "Features", href: "/features", menu: "features" }, { label: "Pricing", href: "/pricing" }, { label: "Community", href: "/community" }, { label: "About", href: "/about" }], _ = [{ label: "Events", href: "/events" }, { label: "Pricing", href: "/pricing" }, { label: "How it works", href: null }, { label: "Community", href: "/community" }, { label: "About", href: "/about" }], $ = [{ title: "Training", items: [{ icon: V.wIk, label: "Adaptive plans", desc: "Training plans that adjust to how you actually run.", href: "/features/plans" }, { icon: V.z1n, label: "Track your run", desc: "Live pace, distance, and route, every mile logged.", href: "/features/tracking" }, { icon: V.ARf, label: "Race predictions", desc: "Coach-grade finish-time projections from your fitness.", href: "/features/predictions" }, { icon: V.XyP, label: "Weather-adjusted pacing", desc: "Paces that adapt to heat, humidity, and wind.", href: "/features/weather-pacing" }] }, { title: "Community", items: [{ icon: V.QsL, label: "Host a run", desc: "Organize group runs and events your community loves.", href: "/features/host" }, { icon: V.oUk, label: "Create a route", desc: "Draw and snap running routes to the road on a map.", href: "/routes/create", external: true }] }, { title: "Integrations", items: [{ icon: V.X6_, label: "Proactive coach", desc: "A coach that reads your devices and texts you first.", href: "/features/proactive-coach" }, { icon: V.ayE, label: "Integrations", desc: "Sync Garmin, COROS, Apple Health, and more.", href: "/features/integrations" }, { icon: V.Ojn, label: "Claude integration", desc: "Ask Claude about your training, connected to your data.", href: "/claude" }, { icon: V.PjK, label: "Developer API", desc: "Build on the Endorphins API with OAuth 2.0.", href: "/developer" }] }], ee = ["/terms-of-service", "/privacy-policy", "/refund-policy"], te = 24, ne = 120;
  function re(e2) {
    var t2 = e2.onRegister, n2 = e2.onLogin, r2 = e2.onMobileLogin, o2 = void 0 === r2 ? n2 : r2, i2 = e2.howItWorksId, a2 = void 0 === i2 ? "why" : i2, l2 = (0, U.useState)(false), s2 = (0, z.A)(l2, 2), c2 = s2[0], u2 = s2[1], d2 = (0, U.useState)(false), p2 = (0, z.A)(d2, 2), f2 = p2[0], m2 = p2[1], A2 = (0, U.useState)(false), h2 = (0, z.A)(A2, 2), g2 = h2[0], b2 = h2[1], v2 = (0, U.useRef)(null), y2 = (0, W.W6)(), x2 = (0, W.zy)(), E2 = "/" === x2.pathname, w2 = "web" === (0, K.f)() && !ee.includes(x2.pathname), C2 = function() {
      v2.current && clearTimeout(v2.current), b2(true);
    }, k2 = function() {
      v2.current && clearTimeout(v2.current), v2.current = setTimeout((function() {
        return b2(false);
      }), ne);
    };
    (0, U.useEffect)((function() {
      return function() {
        v2.current && clearTimeout(v2.current);
      };
    }), []), (0, U.useEffect)((function() {
      var e3 = function() {
        return u2(window.scrollY > te);
      };
      return e3(), window.addEventListener("scroll", e3, { passive: true }), function() {
        return window.removeEventListener("scroll", e3);
      };
    }), []), (0, U.useEffect)((function() {
      if (f2) {
        var e3 = document.body.style.overflow;
        return document.body.style.overflow = "hidden", function() {
          document.body.style.overflow = e3;
        };
      }
    }), [f2]);
    var B2 = function(e3) {
      if (m2(false), b2(false), e3.startsWith("#")) if (E2) {
        var t3 = document.querySelector(e3);
        t3 && t3.scrollIntoView({ behavior: "smooth", block: "start" });
      } else y2.push("/".concat(e3));
      else y2.push(e3);
    }, S2 = function(e3) {
      if (e3.external) return m2(false), b2(false), void window.open(e3.href, "_blank", "noopener,noreferrer");
      B2(e3.href);
    };
    return U.createElement(U.Fragment, null, w2 && U.createElement(U.Fragment, null, U.createElement(G.A, { layer: "landing" }), U.createElement(oe, { "aria-hidden": "true" })), U.createElement(ie, { $scrolled: c2, $hasBanner: w2 }, U.createElement(ae, null, U.createElement(le, { "aria-label": "Endorphins Running", onClick: function() {
      return y2.push("/");
    } }, U.createElement(se, { src: X, alt: "Endorphins Running" })), U.createElement(ce, null, Z.map((function(e3) {
      return "features" === e3.menu ? U.createElement(pe, { key: e3.label, onMouseEnter: C2, onMouseLeave: k2 }, U.createElement(ue, { $open: g2, "aria-haspopup": "true", "aria-expanded": g2, onClick: function() {
        return B2(e3.href);
      } }, e3.label, U.createElement(de, { $open: g2 }, U.createElement(V.fK4, { size: 16 }))), U.createElement(fe, { $open: g2, onMouseEnter: C2, onMouseLeave: k2 }, U.createElement(me, null, U.createElement(Ae, null, U.createElement(he, null, $.map((function(e4) {
        return U.createElement(ge, { key: e4.title }, U.createElement(be, null, e4.title), e4.items.map((function(e5) {
          var t3 = e5.icon;
          return U.createElement(ve, { key: e5.label, onClick: function() {
            return S2(e5);
          } }, U.createElement(ye, null, U.createElement(t3, { size: 20 })), U.createElement(xe, null, U.createElement(Ee, null, e5.label), U.createElement(we, null, e5.desc)));
        })));
      })))), U.createElement(Ce, { onClick: function() {
        return B2("/features");
      } }, "Explore all features \u2192")))) : U.createElement(ue, { key: e3.label, onClick: function() {
        return B2(e3.href);
      } }, e3.label);
    }))), U.createElement(ke, null, U.createElement(Be, { onClick: n2 }, "Log in"), U.createElement(Se, { onClick: t2 }, "Start training free")), U.createElement(Ie, null, U.createElement(De, { onClick: function() {
      m2(false), o2();
    } }, "Log in"), U.createElement(Pe, { "aria-label": "Toggle menu", "aria-expanded": f2, onClick: function() {
      return m2((function(e3) {
        return !e3;
      }));
    } }, f2 ? U.createElement(V.yGN, { size: 26 }) : U.createElement(V.ND1, { size: 26 }))))), f2 && U.createElement(Te, { $hasBanner: w2 }, _.map((function(e3) {
      return U.createElement(Oe, { key: e3.label, onClick: function() {
        var t3;
        return B2(null !== (t3 = e3.href) && void 0 !== t3 ? t3 : "#".concat(a2));
      } }, e3.label);
    })), U.createElement(Oe, { onClick: function() {
      return B2("/features");
    } }, "Features"), U.createElement(Me, { "aria-label": "Features" }, $.map((function(e3) {
      return e3.items.map((function(e4) {
        return U.createElement("li", { key: e4.label }, U.createElement(Re, { onClick: function() {
          return S2(e4);
        } }, e4.label));
      }));
    }))), U.createElement(Fe, null), U.createElement(je, { onClick: function() {
      m2(false), n2();
    } }, "Log in"), U.createElement(Le, { onClick: function() {
      m2(false), t2();
    } }, "Start training free")));
  }
  var oe = H.Ay.div(r || (r = (0, q.A)(["\n  height: ", "px;\n  flex-shrink: 0;\n"])), Q.C), ie = H.Ay.header(o || (o = (0, q.A)(["\n  position: fixed;\n  top: ", "px;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  transition: all 240ms ", ";\n  ", ";\n"])), (function(e2) {
    return e2.$hasBanner ? Q.C : 0;
  }), J.ku, (function(e2) {
    return e2.$scrolled ? (0, H.AH)(i || (i = (0, q.A)(["\n          background: rgba(8, 10, 14, 0.78);\n          backdrop-filter: saturate(180%) blur(18px);\n          -webkit-backdrop-filter: saturate(180%) blur(18px);\n          border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n        "]))) : (0, H.AH)(a || (a = (0, q.A)(["\n          background: transparent;\n          border-bottom: 1px solid transparent;\n        "])));
  })), ae = H.Ay.div(l || (l = (0, q.A)(["\n  max-width: ", "px;\n  margin: 0 auto;\n  padding: 18px 32px;\n  display: flex;\n  align-items: center;\n  gap: 32px;\n\n  @media (max-width: 640px) {\n    padding: 14px 18px;\n  }\n"])), J.cG), le = H.Ay.button(s || (s = (0, q.A)(["\n  background: none;\n  border: 0;\n  padding: 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n"]))), se = H.Ay.img(c || (c = (0, q.A)(["\n  height: 30px;\n  display: block;\n"]))), ce = H.Ay.nav(u || (u = (0, q.A)(["\n  display: flex;\n  align-items: center;\n  gap: 36px;\n  margin-left: 24px;\n\n  @media (max-width: 960px) {\n    display: none;\n  }\n"]))), ue = H.Ay.button(d || (d = (0, q.A)(["\n  background: none;\n  border: 0;\n  padding: 6px 0;\n  color: ", ";\n  font-family: ", ";\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  transition: color 160ms ", ";\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: ", ";\n    bottom: 0;\n    height: 2px;\n    background: ", ";\n    transition: right 200ms ", ";\n  }\n\n  &:hover {\n    color: ", ";\n    &::after {\n      right: 0;\n    }\n  }\n"])), (function(e2) {
    return e2.$open ? J.qy.white : "rgba(255, 255, 255, 0.85)";
  }), Y.Il.fontFamily.body, J.ku, (function(e2) {
    return e2.$open ? "0" : "100%";
  }), J.qy.brandBlue, J.ku, J.qy.white), de = H.Ay.span(p || (p = (0, q.A)(["\n  display: inline-flex;\n  transition: transform 200ms ", ";\n  transform: rotate(", ");\n"])), J.ku, (function(e2) {
    return e2.$open ? "180deg" : "0deg";
  })), pe = H.Ay.div(f || (f = (0, q.A)(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n"]))), fe = H.Ay.div(m || (m = (0, q.A)(["\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%) translateY(", ");\n  width: min(1040px, calc(100vw - 48px));\n  opacity: ", ";\n  visibility: ", ";\n  pointer-events: ", ";\n  transition:\n    opacity 200ms ", ",\n    transform 200ms ", ",\n    visibility 200ms ", ";\n  z-index: 60;\n"])), (function(e2) {
    return e2.$open ? "12px" : "4px";
  }), (function(e2) {
    return e2.$open ? 1 : 0;
  }), (function(e2) {
    return e2.$open ? "visible" : "hidden";
  }), (function(e2) {
    return e2.$open ? "auto" : "none";
  }), J.ku, J.ku, J.ku), me = H.Ay.div(A || (A = (0, q.A)(["\n  background: rgba(14, 17, 23, 0.92);\n  backdrop-filter: saturate(180%) blur(20px);\n  -webkit-backdrop-filter: saturate(180%) blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 18px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);\n  padding: 16px;\n"]))), Ae = H.Ay.div(h || (h = (0, q.A)(["\n  display: grid;\n  grid-template-columns: 1fr;\n"]))), he = H.Ay.div(g || (g = (0, q.A)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 8px;\n\n  @media (max-width: 760px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]))), ge = H.Ay.div(b || (b = (0, q.A)(["\n  display: flex;\n  flex-direction: column;\n"]))), be = H.Ay.div(v || (v = (0, q.A)(["\n  padding: 8px 14px;\n  color: rgba(255, 255, 255, 0.4);\n  font-family: ", ";\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n"])), Y.Il.fontFamily.body), ve = H.Ay.button(y || (y = (0, q.A)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  text-align: left;\n  background: none;\n  border: 0;\n  border-radius: 12px;\n  padding: 14px;\n  cursor: pointer;\n  transition: background 160ms ", ";\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.06);\n  }\n"])), J.ku), ye = H.Ay.span(x || (x = (0, q.A)(["\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  color: ", ";\n  background: rgba(75, 158, 255, 0.12);\n"])), J.qy.brandBlue), xe = H.Ay.span(E || (E = (0, q.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n"]))), Ee = H.Ay.span(w || (w = (0, q.A)(["\n  color: ", ";\n  font-family: ", ";\n  font-size: 15px;\n  font-weight: 600;\n"])), J.qy.white, Y.Il.fontFamily.body), we = H.Ay.span(C || (C = (0, q.A)(["\n  color: rgba(255, 255, 255, 0.55);\n  font-family: ", ";\n  font-size: 13px;\n  line-height: 1.4;\n"])), Y.Il.fontFamily.body), Ce = H.Ay.button(k || (k = (0, q.A)(["\n  width: 100%;\n  margin-top: 8px;\n  background: none;\n  border: 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 14px 14px 6px;\n  text-align: left;\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: color 160ms ", ";\n\n  &:hover {\n    color: ", ";\n  }\n"])), J.qy.brandBlue, Y.Il.fontFamily.body, J.ku, J.qy.white), ke = H.Ay.div(B || (B = (0, q.A)(["\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n\n  @media (max-width: 960px) {\n    display: none;\n  }\n"]))), Be = H.Ay.button(S || (S = (0, q.A)(["\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 18px;\n  border-radius: 999px;\n  cursor: pointer;\n  transition: all 160ms ", ";\n\n  &:hover {\n    border-color: rgba(255, 255, 255, 0.4);\n    background: rgba(255, 255, 255, 0.05);\n  }\n"])), J.qy.white, Y.Il.fontFamily.body, J.ku), Se = H.Ay.button(I || (I = (0, q.A)(["\n  background: ", ";\n  border: 0;\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n  font-weight: 700;\n  padding: 11px 22px;\n  border-radius: 999px;\n  cursor: pointer;\n  box-shadow: 0 8px 24px rgba(75, 158, 255, 0.32);\n  transition: all 200ms ", ";\n\n  &:hover {\n    transform: translateY(-1px);\n    background: ", ";\n    box-shadow: 0 12px 32px rgba(75, 158, 255, 0.4);\n  }\n"])), J.qy.brandBlue, J.qy.white, Y.Il.fontFamily.body, J.ku, J.qy.brandBlueDark), Ie = H.Ay.div(D || (D = (0, q.A)(["\n  display: none;\n  margin-left: auto;\n  align-items: center;\n  gap: 10px;\n\n  @media (max-width: 960px) {\n    display: flex;\n  }\n"]))), De = (0, H.Ay)(Be)(P || (P = (0, q.A)(["\n  font-size: 13px;\n  padding: 8px 14px;\n"]))), Pe = H.Ay.button(T || (T = (0, q.A)(["\n  display: inline-flex;\n  background: none;\n  border: 0;\n  color: ", ";\n  padding: 6px;\n  cursor: pointer;\n"])), J.qy.white), Te = H.Ay.div(O || (O = (0, q.A)(["\n  position: fixed;\n  inset: ", "px 0 0 0;\n  z-index: 49;\n  background: rgba(8, 10, 14, 0.96);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 40px 24px 64px;\n  gap: 4px;\n  overflow-y: auto;\n"])), (function(e2) {
    return e2.$hasBanner ? 64 + Q.C : 64;
  })), Oe = H.Ay.button(M || (M = (0, q.A)(["\n  background: none;\n  border: 0;\n  width: 100%;\n  text-align: left;\n  color: ", ";\n  font-family: ", ";\n  font-size: 24px;\n  font-weight: 700;\n  padding: 14px 0;\n  cursor: pointer;\n"])), J.qy.white, Y.Il.fontFamily.primary), Me = H.Ay.ul(R || (R = (0, q.A)(["\n  list-style: none;\n  margin: 0;\n  padding: 0 0 8px;\n  width: 100%;\n"]))), Re = H.Ay.button(F || (F = (0, q.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  background: none;\n  border: 0;\n  width: 100%;\n  text-align: left;\n  color: rgba(255, 255, 255, 0.7);\n  font-family: ", ";\n  font-size: 17px;\n  font-weight: 500;\n  padding: 10px 0;\n  cursor: pointer;\n"])), Y.Il.fontFamily.body), Fe = H.Ay.div(j || (j = (0, q.A)(["\n  width: 60%;\n  height: 1px;\n  background: rgba(255, 255, 255, 0.1);\n  margin: 18px 0;\n"]))), je = H.Ay.button(L || (L = (0, q.A)(["\n  width: 100%;\n  max-width: 320px;\n  background: transparent;\n  color: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  padding: 14px 0;\n  font-family: ", ";\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  margin-bottom: 12px;\n"])), J.qy.white, Y.Il.fontFamily.body), Le = H.Ay.button(N || (N = (0, q.A)(["\n  width: 100%;\n  max-width: 320px;\n  background: ", ";\n  color: ", ";\n  border: 0;\n  border-radius: 12px;\n  padding: 14px 0;\n  font-family: ", ";\n  font-weight: 700;\n  font-size: 16px;\n  cursor: pointer;\n  box-shadow: 0 12px 32px rgba(75, 158, 255, 0.35);\n"])), J.qy.brandBlue, J.qy.white, Y.Il.fontFamily.body);
});
