// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 7852592..7859541
// This is a fragment of the vendor bundle, not an independently runnable engine.
function Rte() {
  (0, h.W6)();
  var e = (0, r.useState)(false), t = (0, v.A)(e, 2), n = t[0], o = t[1], i = (0, r.useState)({ firstName: "", lastName: "", email: "" }), l = (0, v.A)(i, 2), c = l[0], u = l[1], d = (0, r.useState)({ firstName: "", lastName: "", email: "" }), p = (0, v.A)(d, 2), m = p[0], A = p[1], g = (0, r.useState)(false), b = (0, v.A)(g, 2), y = b[0], x = b[1], E = (0, r.useState)(false), w = (0, v.A)(E, 2), C = w[0], k = w[1], B = (0, r.useState)("desktop"), S = (0, v.A)(B, 2), I = S[0], D = S[1];
  (0, r.useEffect)((function() {
    var e2 = navigator.userAgent.toLowerCase(), t2 = navigator.platform.toLowerCase();
    /iphone|ipad|ipod/.test(e2) || /iphone|ipad|ipod/.test(t2) || "macintel" === t2 && navigator.maxTouchPoints > 0 ? D("ios") : /android/.test(e2) || /android/.test(t2) || /linux armv/.test(t2) ? D("android") : D("desktop");
  }), []);
  var P = function(e2) {
    var t2 = e2.target, n2 = t2.name, r2 = t2.value;
    u((function(e3) {
      return nee(nee({}, e3), {}, (0, Ga.A)({}, n2, r2));
    })), m[n2] && A((function(e3) {
      return nee(nee({}, e3), {}, (0, Ga.A)({}, n2, ""));
    }));
  }, O = (function() {
    var e2 = (0, a.A)(s().mark((function e3(t2) {
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (t2.preventDefault(), n2 = void 0, r2 = void 0, n2 = { firstName: "", lastName: "", email: "" }, r2 = true, c.firstName.trim() || (n2.firstName = "First name is required", r2 = false), c.lastName.trim() || (n2.lastName = "Last name is required", r2 = false), c.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email) || (n2.email = "Please enter a valid email address", r2 = false) : (n2.email = "Email is required", r2 = false), A(n2), r2) {
              e4.next = 3;
              break;
            }
            return e4.abrupt("return");
          case 3:
            return x(true), e4.prev = 4, e4.next = 7, X9.A.post("/api/user/create-or-update-account-for-promo", { email: c.email.trim(), firstName: c.firstName.trim(), lastName: c.lastName.trim(), promoCode: "BOSTON2025" });
          case 7:
            e4.sent, f.oR.success("Thanks for signing up! Download the app to get started."), o(false), k(true), window.scrollTo({ top: 0, behavior: "smooth" }), e4.next = 17;
            break;
          case 14:
            e4.prev = 14, e4.t0 = e4.catch(4), f.oR.error("Something went wrong. Please try again.");
          case 17:
            return e4.prev = 17, x(false), e4.finish(17);
          case 20:
          case "end":
            return e4.stop();
        }
        var n2, r2;
      }), e3, null, [[4, 14, 17, 20]]);
    })));
    return function(t2) {
      return e2.apply(this, arguments);
    };
  })();
  return C ? r.createElement(sr.A, { fluid: true, className: "min-vh-100" }, r.createElement(T, { className: "justify-content-center align-items-center min-vh-100" }, r.createElement(R.A, { xs: 12, md: 8, lg: 6, className: "text-center" }, r.createElement(_9, { className: "mb-2" }, "Welcome to Endorphins!"), r.createElement("div", null, r.createElement(eee, { className: "mb-5 lead" }, "Download our app to access your exclusive benefits and start your training journey.")), r.createElement("style", null, "\n                .store-logos {\n                  display: flex;\n                  justify-content: center;\n                  gap: 10px;\n                  margin-top: 20px;\n                }\n                .store-logos img {\n                  height: 40px;\n                  cursor: pointer;\n                }\n              "), r.createElement("div", { className: "store-logos" }, (function() {
    var e2 = r.createElement("a", { href: "https://apps.apple.com/us/app/id6736627957", target: "_blank", rel: "noopener noreferrer" }, r.createElement("img", { src: "https://i.imgur.com/vaGUZzb.png", alt: "Apple App Store" })), t2 = r.createElement("a", { href: "https://play.google.com/store/apps/details?id=com.endorphinsrunning.endorphinsmobile", target: "_blank", rel: "noopener noreferrer" }, r.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg", alt: "Google Play Store" }));
    switch (I) {
      case "ios":
        return e2;
      case "android":
        return t2;
      default:
        return r.createElement(r.Fragment, null, t2, e2);
    }
  })())))) : r.createElement(sr.A, { fluid: true, className: "min-vh-100 text-white py-4" }, r.createElement(T, { className: "justify-content-center" }, r.createElement(R.A, { xs: 12, md: 8, lg: 6 }, r.createElement("div", { className: "text-center mb-4" }, r.createElement(_9, null, "Boston Marathon 2025"), r.createElement("div", { className: "mb-1" }, r.createElement(eee, null, "Enter the Endorphins Boston 2025 Experience"), r.createElement("div", null, r.createElement(eee, null, "Join us for 4 weeks of training and exclusive giveaways")))), r.createElement("div", { className: "benefits-container" }, Mte.map((function(e2) {
    var t2;
    if (e2.isPartnerLogo) t2 = r.createElement("img", { src: e2.logoUrl, alt: e2.title, className: "partner-logo me-3", style: { width: "24px", height: "24px", objectFit: "contain" } });
    else if (e2.icon) {
      var n2 = e2.icon;
      t2 = r.createElement(n2, { size: 24, className: "text-white me-3" });
    }
    return r.createElement("div", { key: e2.id, className: "benefit-row p-4 mb-3 rounded", style: { backgroundColor: "rgba(255, 255, 255, 1)" } }, r.createElement("div", { className: "d-flex align-items-center" }, t2, r.createElement("div", null, r.createElement($9, null, e2.title), r.createElement("div", null, r.createElement(eee, null, e2.description)))));
  }))), r.createElement("div", { className: "text-center mt-2" }, r.createElement(U, { onClick: function() {
    return o(true);
  }, style: { borderRadius: "12px" }, variant: "primary", width: "100%" }, "Enter")))), r.createElement(j.A, { show: n, onHide: function() {
    return o(false);
  }, centered: true, fullscreen: "md-down" }, r.createElement(j.A.Header, { style: { display: "flex", justifyContent: "center", background: L.A.primary } }, r.createElement(j.A.Title, null, r.createElement("img", { src: "https://i.imgur.com/uiKcj3J.png", alt: "Endorphins", style: { width: "auto", height: "30px", objectFit: "contain" } })), r.createElement("button", { type: "button", className: "btn-close-custom", onClick: function() {
    return o(false);
  }, "aria-label": "Close" }, r.createElement("span", { "aria-hidden": "true", style: { color: "white", fontSize: "24px" } }, "\xD7"))), r.createElement("style", null, "\n            .btn-close-custom {\n              background: transparent;\n              border: none;\n              position: absolute;\n              right: 15px;\n              top: 15px;\n              font-size: 24px;\n              cursor: pointer;\n            }\n          "), r.createElement(j.A.Body, { className: "" }, r.createElement("div", { style: { marginBottom: 20 } }, r.createElement("p", null, "Enter your email to register to get access to the Endorphins App along with benefits from partners.")), r.createElement(J9.A, { onSubmit: O, noValidate: true, style: { marginTop: 10 } }, r.createElement(J9.A.Group, { className: "mb-3" }, r.createElement(J9.A.Control, { type: "text", name: "firstName", placeholder: "First Name", value: c.firstName, onChange: P, isInvalid: !!m.firstName, required: true }), r.createElement(J9.A.Control.Feedback, { type: "invalid" }, m.firstName)), r.createElement(J9.A.Group, { className: "mb-3" }, r.createElement(J9.A.Control, { type: "text", name: "lastName", placeholder: "Last Name", value: c.lastName, onChange: P, isInvalid: !!m.lastName, required: true }), r.createElement(J9.A.Control.Feedback, { type: "invalid" }, m.lastName)), r.createElement(J9.A.Group, { className: "mb-3" }, r.createElement(J9.A.Control, { type: "email", name: "email", placeholder: "Email Address", value: c.email, onChange: P, isInvalid: !!m.email, required: true }), r.createElement(J9.A.Control.Feedback, { type: "invalid" }, m.email)), r.createElement("div", { className: "text-center mt-4" }, r.createElement(U, { type: "submit", style: { borderRadius: "12px" }, disabled: y, width: "100%" }, y ? "Processing..." : "Continue"))))));
}
