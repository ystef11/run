// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8776341..8781615
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  var t = e.condition, n = e.onChange, o = e.onRemove, i = (0, m.O$)((function(e2) {
    return e2.adminPushBlast;
  })), a = i.cityOptions, l = i.groupOptions, s = i.raceOptions, c = i.featureFlagOptions, u = i.optionsLoading, d = (0, m.E9)((function(e2) {
    return e2.adminPushBlast;
  })), p = d.fetchCityOptions, f = d.fetchGroupOptions, A = d.fetchRaceOptions, h = d.fetchFeatureFlagOptions;
  return (0, r.useEffect)((function() {
    "city" === t.field && 0 === a.length ? p(void 0) : "group" === t.field && 0 === l.length ? f(void 0) : "race" === t.field && "raceIn" === t.op && 0 === s.length ? A(void 0) : "featureFlag" === t.field && 0 === c.length && h();
  }), [t.field, t.op]), r.createElement(W2e, null, r.createElement(V2e, { value: t.field, onChange: function(e2) {
    return t2 = e2.target.value, void n(C2e(t2));
    var t2;
  } }, w2e.map((function(e2) {
    return r.createElement("option", { key: e2.value, value: e2.value }, e2.label);
  }))), "premium" === t.field && r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n({ field: "premium", op: e2.target.value });
  } }, r.createElement("option", { value: "is" }, "is premium"), r.createElement("option", { value: "isNot" }, "is not premium")), ("totalSessions" === t.field || "totalWorkoutsCompleted" === t.field || "followingCount" === t.field || "followerCount" === t.field) && r.createElement(r.Fragment, null, r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { op: e2.target.value }));
  } }, r.createElement("option", { value: "gte" }, "at least"), r.createElement("option", { value: "lte" }, "at most"), r.createElement("option", { value: "eq" }, "equals")), r.createElement(Y2e, { type: "number", min: 0, value: Number.isFinite(t.value) ? t.value : 0, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { value: parseInt(e2.target.value, 10) || 0 }));
  } })), "city" === t.field && r.createElement(r.Fragment, null, r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { op: e2.target.value }));
  } }, r.createElement("option", { value: "in" }, "in cities"), r.createElement("option", { value: "notIn" }, "not in cities")), r.createElement(F2e, { selectedIds: t.cityIds, options: a, loading: u.cities, placeholder: "Search cities\u2026", onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { cityIds: e2 }));
  }, onSearch: function(e2) {
    return p(e2);
  } })), "group" === t.field && r.createElement(r.Fragment, null, r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { op: e2.target.value }));
  } }, r.createElement("option", { value: "in" }, "in groups"), r.createElement("option", { value: "notIn" }, "not in groups")), r.createElement(F2e, { selectedIds: t.groupIds, options: l, loading: u.groups, placeholder: "Search groups\u2026", onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { groupIds: e2 }));
  }, onSearch: function(e2) {
    return f(e2);
  } })), "race" === t.field && r.createElement(r.Fragment, null, r.createElement(V2e, { value: t.op, onChange: function(e2) {
    var t2 = e2.target.value;
    n("distanceIn" === t2 ? { field: "race", op: t2, raceDistances: [] } : "raceIn" === t2 ? { field: "race", op: t2, raceIds: [] } : { field: "race", op: t2 });
  } }, r.createElement("option", { value: "hasActivePlan" }, "has any active plan"), r.createElement("option", { value: "distanceIn" }, "training for distance"), r.createElement("option", { value: "raceIn" }, "training for specific race")), "distanceIn" === t.op && r.createElement(F2e, { selectedIds: t.raceDistances || [], options: E2e.map((function(e2) {
    return { id: e2.value, label: e2.label };
  })), placeholder: "Pick distances\u2026", onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { raceDistances: e2 }));
  }, onSearch: function() {
  } }), "raceIn" === t.op && r.createElement(F2e, { selectedIds: t.raceIds || [], options: s, loading: u.races, placeholder: "Search races\u2026", onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { raceIds: e2 }));
  }, onSearch: function(e2) {
    return A(e2);
  } })), "featureFlag" === t.field && r.createElement(r.Fragment, null, r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { op: e2.target.value }));
  } }, r.createElement("option", { value: "has" }, "has flag"), r.createElement("option", { value: "doesNotHave" }, "does not have flag")), r.createElement(F2e, { selectedIds: t.flags, options: c, loading: u.featureFlags, placeholder: "Pick feature flags\u2026", closeOnSelect: true, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { flags: e2 }));
  }, onSearch: function() {
  } })), "lastSessionDate" === t.field && r.createElement(r.Fragment, null, r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { op: e2.target.value }));
  } }, r.createElement("option", { value: "after" }, "after date"), r.createElement("option", { value: "before" }, "before date")), r.createElement(Q2e, { type: "date", value: t.dateValue, onChange: function(e2) {
    return n(H2e(H2e({}, t), {}, { dateValue: e2.target.value }));
  } })), "hasVerifiedPhone" === t.field && r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n({ field: "hasVerifiedPhone", op: e2.target.value });
  } }, r.createElement("option", { value: "is" }, "has verified phone"), r.createElement("option", { value: "isNot" }, "has NOT verified phone")), "hasSyncedContacts" === t.field && r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n({ field: "hasSyncedContacts", op: e2.target.value });
  } }, r.createElement("option", { value: "is" }, "has synced contacts"), r.createElement("option", { value: "isNot" }, "has NOT synced contacts")), "isAnyGroupLead" === t.field && r.createElement(V2e, { value: t.op, onChange: function(e2) {
    return n({ field: "isAnyGroupLead", op: e2.target.value });
  } }, r.createElement("option", { value: "is" }, "is a group/city lead"), r.createElement("option", { value: "isNot" }, "is NOT a group/city lead")), r.createElement(G2e, { type: "button", onClick: o, "aria-label": "Remove condition" }, "Remove"));
});
