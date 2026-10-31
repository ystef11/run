// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 614232..617901
// This is a fragment of the vendor bundle, not an independently runnable engine.
function re(e) {
  var t = e.onRegister, n = e.onLogin, r = e.onMobileLogin, o = void 0 === r ? n : r, i = e.howItWorksId, a = void 0 === i ? "why" : i, l = (0, U.useState)(false), s = (0, z.A)(l, 2), c = s[0], u = s[1], d = (0, U.useState)(false), p = (0, z.A)(d, 2), f = p[0], m = p[1], A = (0, U.useState)(false), h = (0, z.A)(A, 2), g = h[0], b = h[1], v = (0, U.useRef)(null), y = (0, W.W6)(), x = (0, W.zy)(), E = "/" === x.pathname, w = "web" === (0, K.f)() && !ee.includes(x.pathname), C = function() {
    v.current && clearTimeout(v.current), b(true);
  }, k = function() {
    v.current && clearTimeout(v.current), v.current = setTimeout((function() {
      return b(false);
    }), ne);
  };
  (0, U.useEffect)((function() {
    return function() {
      v.current && clearTimeout(v.current);
    };
  }), []), (0, U.useEffect)((function() {
    var e2 = function() {
      return u(window.scrollY > te);
    };
    return e2(), window.addEventListener("scroll", e2, { passive: true }), function() {
      return window.removeEventListener("scroll", e2);
    };
  }), []), (0, U.useEffect)((function() {
    if (f) {
      var e2 = document.body.style.overflow;
      return document.body.style.overflow = "hidden", function() {
        document.body.style.overflow = e2;
      };
    }
  }), [f]);
  var B = function(e2) {
    if (m(false), b(false), e2.startsWith("#")) if (E) {
      var t2 = document.querySelector(e2);
      t2 && t2.scrollIntoView({ behavior: "smooth", block: "start" });
    } else y.push("/".concat(e2));
    else y.push(e2);
  }, S = function(e2) {
    if (e2.external) return m(false), b(false), void window.open(e2.href, "_blank", "noopener,noreferrer");
    B(e2.href);
  };
  return U.createElement(U.Fragment, null, w && U.createElement(U.Fragment, null, U.createElement(G.A, { layer: "landing" }), U.createElement(oe, { "aria-hidden": "true" })), U.createElement(ie, { $scrolled: c, $hasBanner: w }, U.createElement(ae, null, U.createElement(le, { "aria-label": "Endorphins Running", onClick: function() {
    return y.push("/");
  } }, U.createElement(se, { src: X, alt: "Endorphins Running" })), U.createElement(ce, null, Z.map((function(e2) {
    return "features" === e2.menu ? U.createElement(pe, { key: e2.label, onMouseEnter: C, onMouseLeave: k }, U.createElement(ue, { $open: g, "aria-haspopup": "true", "aria-expanded": g, onClick: function() {
      return B(e2.href);
    } }, e2.label, U.createElement(de, { $open: g }, U.createElement(V.fK4, { size: 16 }))), U.createElement(fe, { $open: g, onMouseEnter: C, onMouseLeave: k }, U.createElement(me, null, U.createElement(Ae, null, U.createElement(he, null, $.map((function(e3) {
      return U.createElement(ge, { key: e3.title }, U.createElement(be, null, e3.title), e3.items.map((function(e4) {
        var t2 = e4.icon;
        return U.createElement(ve, { key: e4.label, onClick: function() {
          return S(e4);
        } }, U.createElement(ye, null, U.createElement(t2, { size: 20 })), U.createElement(xe, null, U.createElement(Ee, null, e4.label), U.createElement(we, null, e4.desc)));
      })));
    })))), U.createElement(Ce, { onClick: function() {
      return B("/features");
    } }, "Explore all features \u2192")))) : U.createElement(ue, { key: e2.label, onClick: function() {
      return B(e2.href);
    } }, e2.label);
  }))), U.createElement(ke, null, U.createElement(Be, { onClick: n }, "Log in"), U.createElement(Se, { onClick: t }, "Start training free")), U.createElement(Ie, null, U.createElement(De, { onClick: function() {
    m(false), o();
  } }, "Log in"), U.createElement(Pe, { "aria-label": "Toggle menu", "aria-expanded": f, onClick: function() {
    return m((function(e2) {
      return !e2;
    }));
  } }, f ? U.createElement(V.yGN, { size: 26 }) : U.createElement(V.ND1, { size: 26 }))))), f && U.createElement(Te, { $hasBanner: w }, _.map((function(e2) {
    return U.createElement(Oe, { key: e2.label, onClick: function() {
      var t2;
      return B(null !== (t2 = e2.href) && void 0 !== t2 ? t2 : "#".concat(a));
    } }, e2.label);
  })), U.createElement(Oe, { onClick: function() {
    return B("/features");
  } }, "Features"), U.createElement(Me, { "aria-label": "Features" }, $.map((function(e2) {
    return e2.items.map((function(e3) {
      return U.createElement("li", { key: e3.label }, U.createElement(Re, { onClick: function() {
        return S(e3);
      } }, e3.label));
    }));
  }))), U.createElement(Fe, null), U.createElement(je, { onClick: function() {
    m(false), n();
  } }, "Log in"), U.createElement(Le, { onClick: function() {
    m(false), t();
  } }, "Start training free")));
}
