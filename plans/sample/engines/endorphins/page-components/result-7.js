// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 676816..681496
// This is a fragment of the vendor bundle, not an independently runnable engine.
function Ze() {
  var e = (0, N.w)(0.2), t = e.ref, n = e.revealed, r = (0, R.E9)((function(e2) {
    return e2.training.getPublicPlanPreview;
  })), o = (0, O.useState)(Xe.distance), i = (0, D.A)(o, 2), a = i[0], l = i[1], s = (0, O.useState)(Xe.unit), c = (0, D.A)(s, 2), u = c[0], d = c[1], p = (0, O.useState)(Xe.weeks), f = (0, D.A)(p, 2), m = f[0], A = f[1], h = (0, O.useState)(Xe.startMileage), g = (0, D.A)(h, 2), b = g[0], v = g[1], y = (0, O.useState)(Xe.peakMileage), x = (0, D.A)(y, 2), E = x[0], w = x[1], C = (0, O.useState)(Xe.gradualStart), k = (0, D.A)(C, 2), B = k[0], S = k[1], P = (0, O.useState)(null), M = (0, D.A)(P, 2), F = M[0], j = M[1], z = (0, O.useState)(false), U = (0, D.A)(z, 2), H = U[0], W = U[1], Y = (0, O.useState)(0), Q = (0, D.A)(Y, 2), G = Q[0], K = Q[1], J = (0, O.useRef)(null), X = (0, O.useRef)(false), Z = (0, O.useRef)(0), _ = "mi" === u ? Ke : Math.round(1.60934 * Ke), $ = "mi" === u ? Je : Math.round(1.60934 * Je), ee = (0, O.useCallback)((function(e2) {
    l(e2);
    var t2 = Qe.find((function(t3) {
      return t3.key === e2;
    }));
    t2 && A(t2.defaultWeeks);
  }), []), te = (0, O.useCallback)((function(e2) {
    v(e2), w((function(t2) {
      return Math.max(t2, e2 + 5);
    }));
  }), []), ne = (0, O.useCallback)((function(e2) {
    w(e2), v((function(t2) {
      return Math.min(t2, e2 - 5);
    }));
  }), []), re = (0, O.useCallback)((function(e2) {
    d((function(t2) {
      if (e2 === t2) return t2;
      var n2 = "km" === e2 ? 1.60934 : 1 / 1.60934;
      return v((function(e3) {
        return Math.max(5, Math.round(e3 * n2));
      })), w((function(e3) {
        return Math.max(10, Math.round(e3 * n2));
      })), e2;
    }));
  }), []);
  (0, O.useEffect)((function() {
    return J.current && clearTimeout(J.current), W(false), J.current = setTimeout((0, I.A)(T().mark((function e2() {
      var t2, n2;
      return T().wrap((function(e3) {
        for (; ; ) switch (e3.prev = e3.next) {
          case 0:
            return t2 = ++Z.current, e3.next = 3, r({ startMileage: b, peakMileage: E, weeks: m, unit: u, gradualStart: B });
          case 3:
            if (n2 = e3.sent, t2 === Z.current) {
              e3.next = 6;
              break;
            }
            return e3.abrupt("return");
          case 6:
            n2 ? (j(n2), X.current || (X.current = true, (0, Ye.J4)("LandingPlanBuilderUsed", { distance: a, weeks: m }))) : W(true);
          case 7:
          case "end":
            return e3.stop();
        }
      }), e2);
    }))), Ge), function() {
      J.current && clearTimeout(J.current);
    };
  }), [b, E, m, u, B, a, G, r]);
  var oe = (0, O.useMemo)((function() {
    return (b - $) / (_ - $) * 100;
  }), [b, $, _]), ie = (0, O.useMemo)((function() {
    return (E - $) / (_ - $) * 100;
  }), [E, $, _]);
  return O.createElement(L.wn, null, O.createElement(L.Rp, null, O.createElement(L.gN, { ref: t, $revealed: n }, O.createElement(L.YN, null, "Build the perfect plan"), O.createElement(L.pk, null, "Watch your plan take shape."), O.createElement(L.hj, null, "Drag the sliders and watch the same engine that powers your in-app plan lay down a periodized build with foundation, build blocks, recovery weeks, and a race-week taper."), O.createElement($e, null, O.createElement(et, null, O.createElement(tt, null, O.createElement(rt, null, "Goal race"), O.createElement(mt, null, Qe.map((function(e2) {
    return O.createElement(ht, { key: e2.key, type: "button", $active: a === e2.key, "aria-pressed": a === e2.key, onClick: function() {
      return ee(e2.key);
    } }, e2.label);
  })))), O.createElement(tt, null, O.createElement(nt, null, O.createElement(rt, null, "Weekly distance"), O.createElement(At, { role: "group", "aria-label": "Distance unit" }, ["mi", "km"].map((function(e2) {
    return O.createElement(gt, { key: e2, type: "button", $active: u === e2, "aria-pressed": u === e2, onClick: function() {
      return re(e2);
    } }, e2);
  })))), O.createElement(lt, null, O.createElement(st, null, O.createElement(ct, { style: { left: "".concat(oe, "%") } }, b, " ", u), O.createElement(ct, { style: { left: "".concat(ie, "%") } }, E, " ", u)), O.createElement(ut, null, O.createElement(dt, { style: { left: "".concat(oe, "%"), width: "".concat(ie - oe, "%") } }), O.createElement(pt, { type: "range", min: $, max: _, step: 1, value: b, onChange: function(e2) {
    return te(Number(e2.target.value));
  }, "aria-label": "Starting weekly distance" }), O.createElement(pt, { type: "range", min: $, max: _, step: 1, value: E, onChange: function(e2) {
    return ne(Number(e2.target.value));
  }, "aria-label": "Peak weekly distance" })), O.createElement(ft, null, O.createElement("span", null, $, " ", u), O.createElement("span", null, _, " ", u)))), O.createElement(tt, null, O.createElement(nt, null, O.createElement(rt, null, "Plan length"), O.createElement(ot, null, m, " weeks")), O.createElement(_e, { min: 8, max: 24, step: 1, value: m, onChange: A, ariaLabel: "Plan length in weeks", format: function(e2) {
    return "".concat(e2, " weeks");
  } })), O.createElement(bt, null, O.createElement(vt, null, O.createElement(yt, null, "Gradual start"), O.createElement(xt, null, "Eases the first weeks so you ramp in gently.")), O.createElement(Et, { type: "button", role: "switch", "aria-checked": B, $active: B, onClick: function() {
    return S((function(e2) {
      return !e2;
    }));
  } }, O.createElement(wt, { $active: B }))), O.createElement(Ct, null, O.createElement(q.A, { source: "plan_builder" }, "Start training free"))), O.createElement(kt, null, F ? O.createElement(V, { preview: F, revealed: n }) : H ? O.createElement(It, null, O.createElement("p", null, "We couldn\u2019t build your preview."), O.createElement(Dt, { type: "button", onClick: function() {
    return K((function(e2) {
      return e2 + 1;
    }));
  } }, "Try again")) : O.createElement(St, { "aria-hidden": true }))))));
}
