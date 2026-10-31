// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8203413..8206288
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e = (0, h.W6)(), t = (0, m.O$)((function(e2) {
    return e2.user.data;
  })), n = !(null == t || !t._id), o = (0, Nf._)(t), i = (0, m.O$)((function(e2) {
    return e2.training.data;
  })), l = (0, m.E9)((function(e2) {
    return e2.training.getPlan;
  })), c = (0, m.O$)((function(e2) {
    return e2.training.trainingModificationHistory;
  })), u = (0, m.E9)((function(e2) {
    return e2.training.getTrainingModificationHistory;
  })), d = (0, r.useState)(true), p = (0, v.A)(d, 2), f = p[0], A = p[1], g = (0, r.useState)(false), b = (0, v.A)(g, 2), y = b[0], x = b[1];
  (0, r.useEffect)((function() {
    var e2 = (function() {
      var e3 = (0, a.A)(s().mark((function e4() {
        return s().wrap((function(e5) {
          for (; ; ) switch (e5.prev = e5.next) {
            case 0:
              if (!n) {
                e5.next = 10;
                break;
              }
              return A(true), e5.prev = 2, e5.next = 5, l();
            case 5:
              return e5.prev = 5, A(false), e5.finish(5);
            case 8:
              e5.next = 11;
              break;
            case 10:
              A(false);
            case 11:
            case "end":
              return e5.stop();
          }
        }), e4, null, [[2, , 5, 8]]);
      })));
      return function() {
        return e3.apply(this, arguments);
      };
    })();
    e2();
  }), [l, n]), (0, r.useEffect)((function() {
    var e2 = (function() {
      var e3 = (0, a.A)(s().mark((function e4() {
        return s().wrap((function(e5) {
          for (; ; ) switch (e5.prev = e5.next) {
            case 0:
              if (null != i && i._id && "LIVE" === i.status) {
                e5.next = 2;
                break;
              }
              return e5.abrupt("return");
            case 2:
              return x(true), e5.prev = 3, e5.next = 6, u({ trainingPlanId: i._id });
            case 6:
              return e5.prev = 6, x(false), e5.finish(6);
            case 9:
            case "end":
              return e5.stop();
          }
        }), e4, null, [[3, , 6, 9]]);
      })));
      return function() {
        return e3.apply(this, arguments);
      };
    })();
    e2();
  }), [null == i ? void 0 : i._id, null == i ? void 0 : i.status, u]);
  var E = Boolean(i && "LIVE" === i.status && i._id);
  if (!n || !o && !E && !f) return r.createElement(r.Suspense, { fallback: null }, r.createElement(BCe, null));
  var w = Array.isArray(c) && c.length > 0, C = function(t2) {
    var n2 = t2.modificationType === qf.Dt.PACE ? "/training/coaching/pace/".concat(t2._id) : "/training/coaching/mileage/".concat(t2._id);
    e.push(n2, { tms: t2 });
  };
  return r.createElement(r.Fragment, null, r.createElement(ICe, null), r.createElement(bA.A, { variant: "feed" }, r.createElement(DCe, null, f ? r.createElement(TCe, null, r.createElement(OCe, { $w: "50%", $h: "28px" }), r.createElement(OCe, { $w: "80%", $h: "18px" }), r.createElement(OCe, { $w: "100%", $h: "120px" }), r.createElement(OCe, { $w: "100%", $h: "80px" })) : r.createElement(PCe, null, r.createElement(MCe, null, r.createElement(RCe, null, "Coaching"), r.createElement(FCe, null, "Each week you'll get coaching suggestions to help you train smarter and stay on track.")), !E && r.createElement(jCe, null, r.createElement(LCe, null, "No active training plan"), r.createElement(NCe, null, "Start a training plan to receive personalized weekly coaching suggestions.")), E && r.createElement(qCe, null, r.createElement(zCe, null, "Coaching Suggestions"), y ? r.createElement(TCe, null, r.createElement(OCe, { $w: "100%", $h: "60px" }), r.createElement(OCe, { $w: "100%", $h: "60px" })) : w ? r.createElement(UCe, null, c.map((function(e2) {
    return r.createElement(cCe, { key: e2._id, item: e2, onClick: C });
  }))) : r.createElement(HCe, null, r.createElement(NCe, null, "You will receive coaching suggestions each week based on your plan, recent workouts, and connected data.")))))));
});
