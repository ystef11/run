// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 7376054..7380089
// This is a fragment of the vendor bundle, not an independently runnable engine.
function sv() {
  var e = (0, ev.w)(0.2), t = e.ref, n = e.revealed, o = (0, Nh.a)(7), i = (0, r.useState)(0), a = (0, v.A)(i, 2), l = a[0], s = a[1], c = (0, r.useState)(false), u = (0, v.A)(c, 2), d = u[0], p = u[1], f = (0, r.useState)(0), m = (0, v.A)(f, 2), A = m[0], h = m[1];
  return (0, r.useEffect)((function() {
    if (!d && n) {
      var e2 = setTimeout((function() {
        return s((function(e3) {
          return (e3 + 1) % ov.length;
        }));
      }), 4200);
      return function() {
        return clearTimeout(e2);
      };
    }
  }), [l, d, n]), (0, r.useEffect)((function() {
    if (n) {
      var e2 = setInterval((function() {
        return h((function(e3) {
          return (e3 + 1) % lv.length;
        }));
      }), 3200);
      return function() {
        return clearInterval(e2);
      };
    }
  }), [n]), r.createElement($b.wn, null, r.createElement($b.Rp, null, r.createElement($b.gN, { ref: t, $revealed: n }, r.createElement(jv, null, r.createElement($b.YN, null, "Why Endorphins"), r.createElement($b.pk, null, "Everything you need to reach your goal.")), r.createElement(Lv, null, r.createElement(Nv, null, ov.map((function(e2, t2) {
    return r.createElement(qv, { key: e2.title, type: "button", $active: t2 === l, onClick: function() {
      return (function(e3) {
        p(true), s(e3);
      })(t2);
    }, "aria-pressed": t2 === l }, r.createElement(zv, { $active: t2 === l }, t2 + 1), r.createElement(Uv, null, r.createElement(Hv, null, r.createElement(nv.I, { name: e2.icon, size: 18 }), e2.title), r.createElement(Wv, null, e2.body)));
  })), r.createElement(Vv, null, r.createElement(tv.A, { source: "why_endorphins" }, "Start training free"))), r.createElement(Yv, null, r.createElement(Qv, { "aria-hidden": true }), r.createElement(Gv, { ref: o }, ov.map((function(e2, t2) {
    var n2, o2 = null !== (n2 = e2.shots) && void 0 !== n2 ? n2 : [], i2 = o2.length > 1;
    return r.createElement(Kv, { key: e2.title, $active: t2 === l }, "phones" === e2.scene && o2.map((function(e3, t3) {
      return r.createElement(Jv, { key: e3, $multi: i2, $i: t3, $count: o2.length }, r.createElement(Xv, { src: Lh.M[e3], alt: "", loading: "lazy", onError: jh.mD }));
    })), "phones" === e2.scene && e2.adaptBubbles && r.createElement(r.Fragment, null, r.createElement($v, { $pos: "tl", $delay: 0.2 }, r.createElement(ey, null, "\u2198"), r.createElement(ty, null, r.createElement(ny, null, "\u221212 sec"), r.createElement(ry, null, "pace"))), r.createElement($v, { $pos: "br", $delay: 0.6 }, r.createElement(ey, null, "\u2197"), r.createElement(ty, null, r.createElement(ny, null, "+20%"), r.createElement(ry, null, "volume"))), r.createElement(oy, { $delay: 1 }, r.createElement(iy, { "aria-hidden": true }), "Nice work! I bumped your tempo pace.")), "phones" === e2.scene && e2.buildWidgets && r.createElement(r.Fragment, null, r.createElement(ay, { $pos: "tl", $delay: 0.2 }, r.createElement(ly, null, "Runs / week"), r.createElement(sy, null, "4")), r.createElement(ay, { $pos: "bl", $delay: 0.5 }, r.createElement(ly, null, "Availability"), r.createElement(sy, null, "5 days")), r.createElement(ay, { $pos: "tr", $delay: 0.8, $accent: true }, r.createElement(ly, null, "Get faster"), r.createElement(sy, null, "5K \xB7 \u22120:34")), r.createElement(cy, { $delay: 1.1 }, r.createElement(uy, null, "Goal"), r.createElement(dy, null, "Boston Marathon"), r.createElement(py, null, "Apr 20, 2026 \xB7 sub-3:30"))), "devices" === e2.scene && r.createElement(Ay, null, r.createElement(hy, { $size: 96, $duration: 55, "aria-hidden": true }, av.map((function(e3, t3) {
      return r.createElement(gy, { key: "".concat(e3.name, "-").concat(t3), $angle: 360 / av.length * t3 }, r.createElement(by, { $duration: 55 }, r.createElement(vy, { $angle: 360 / av.length * t3 }, r.createElement(yy, { src: e3.src, alt: e3.name, loading: "lazy", onError: jh.mD }))));
    }))), r.createElement(hy, { $size: 72, $duration: 40, $reverse: true, "aria-hidden": true }, iv.map((function(e3, t3) {
      return r.createElement(gy, { key: "".concat(e3.name, "-").concat(t3), $angle: 360 / iv.length * t3 }, r.createElement(by, { $duration: 40, $reverse: true }, r.createElement(vy, { $angle: 360 / iv.length * t3 }, r.createElement(yy, { src: e3.src, alt: e3.name, loading: "lazy", onError: jh.mD }))));
    }))), r.createElement(xy, null, r.createElement(Xv, { src: Lh.M.charts2, alt: "", loading: "lazy", onError: jh.mD }))), "testimonials" === e2.scene && r.createElement(wy, null, r.createElement(Cy, { "aria-hidden": true }), r.createElement(ky, null, lv.map((function(e3, t3) {
      return r.createElement(By, { key: e3.author, $active: t3 === A }, r.createElement(Sy, { "aria-hidden": true }, (0, rv.Qd)(e3.author)), r.createElement(Iy, { "aria-hidden": true }, "\u2605\u2605\u2605\u2605\u2605"), r.createElement(Dy, null, "\u201C", e3.quote, "\u201D"), r.createElement(Py, null, e3.author), r.createElement(Ty, null, "App Store \xB7 ", e3.date));
    })))));
  }))))))));
}
