// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 8658645..8684330
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  var e = (0, h.W6)(), t = (0, m.O$)((function(e2) {
    return e2.teamCreator.loading;
  })), n = (0, m.O$)((function(e2) {
    return e2.teamCreator.error;
  })), o = (0, m.O$)((function(e2) {
    return e2.teamCreator.teamMembers;
  })), i = (0, m.O$)((function(e2) {
    return e2.teamCreator.monthlyPerformance;
  })), l = (0, m.O$)((function(e2) {
    return e2.teamCreator.pagination;
  })), c = (0, m.O$)((function(e2) {
    return e2.teamCreator.searchResults;
  })), u = (0, m.O$)((function(e2) {
    return e2.race.races;
  })), d = (0, m.E9)((function(e2) {
    return e2.teamCreator.fetchTeamMembers;
  })), p = (0, m.E9)((function(e2) {
    return e2.teamCreator.fetchMonthlyPerformance;
  })), A = (0, m.E9)((function(e2) {
    return e2.teamCreator.addUserToTeam;
  })), g = (0, m.E9)((function(e2) {
    return e2.teamCreator.updateTeamMember;
  })), b = (0, m.E9)((function(e2) {
    return e2.teamCreator.resendInvites;
  })), y = (0, m.E9)((function(e2) {
    return e2.teamCreator.sendMinimumWarnings;
  })), E = (0, m.E9)((function(e2) {
    return e2.teamCreator.terminateMembers;
  })), w = (0, m.E9)((function(e2) {
    return e2.teamCreator.searchUsers;
  })), C = (0, m.E9)((function(e2) {
    return e2.race.getAllRaces;
  })), k = (0, r.useState)("members"), B = (0, v.A)(k, 2), S = B[0], I = B[1], D = (0, r.useState)(""), P = (0, v.A)(D, 2), O = P[0], M = P[1], L = (0, r.useState)(""), N = (0, v.A)(L, 2), q = N[0], z = N[1], U = (0, r.useState)("addedAt"), H = (0, v.A)(U, 2), W = H[0], V = H[1], Y = (0, r.useState)("desc"), G = (0, v.A)(Y, 2), K = G[0], J = G[1], X = (0, r.useState)(1), Z = (0, v.A)(X, 2), _ = Z[0], $ = Z[1], ee = (0, r.useState)(25), te = (0, v.A)(ee, 2), ne = te[0], re = te[1], oe = (0, r.useState)("all"), ie = (0, v.A)(oe, 2), ae = ie[0], le = ie[1], se = (0, r.useState)(""), ce = (0, v.A)(se, 2), ue = ce[0], de = ce[1], pe = (0, r.useState)(""), fe = (0, v.A)(pe, 2), me = fe[0], Ae = fe[1], he = (0, r.useState)([]), ge = (0, v.A)(he, 2), be = ge[0], ve = ge[1], ye = (0, r.useState)([]), xe = (0, v.A)(ye, 2), Ee = xe[0], we = xe[1], Ce = (0, r.useState)("all"), ke = (0, v.A)(Ce, 2), Be = ke[0], Se = ke[1], Ie = (0, r.useState)(false), De = (0, v.A)(Ie, 2), Pe = De[0], Te = De[1], Oe = (0, r.useState)(""), Me = (0, v.A)(Oe, 2), Re = Me[0], Fe = Me[1], je = (0, r.useState)(x()().month() + 1), Le = (0, v.A)(je, 2), Ne = Le[0], qe = Le[1], ze = (0, r.useState)(x()().year()), Ue = (0, v.A)(ze, 2), He = Ue[0], We = Ue[1], Ve = (0, r.useState)(false), Ye = (0, v.A)(Ve, 2), Qe = Ye[0], Ge = Ye[1], Ke = (0, r.useState)("add"), Je = (0, v.A)(Ke, 2), Xe = Je[0], Ze = Je[1], _e = (0, r.useState)(null), $e = (0, v.A)(_e, 2), et = $e[0], tt = $e[1], nt = (0, r.useState)(null), rt = (0, v.A)(nt, 2), ot = rt[0], it = rt[1], at = (0, r.useState)([]), lt = (0, v.A)(at, 2), st = lt[0], ct = lt[1], ut = (0, r.useState)(""), dt = (0, v.A)(ut, 2), pt = dt[0], ft = dt[1], mt = (0, r.useCallback)((function() {
    return d({ page: _, limit: ne, status: q || void 0, sortColumn: W, sortDirection: K });
  }), [d, _, ne, q, W, K]), At = (0, r.useCallback)((function() {
    return p({ month: Ne, year: He });
  }), [p, Ne, He]);
  (0, r.useEffect)((function() {
    "members" === S && mt();
  }), [S, mt]), (0, r.useEffect)((function() {
    "monthly" === S && At();
  }), [S, At]);
  var ht = (null == i ? void 0 : i.members) || [], gt = (null == i ? void 0 : i.warningCandidates) || [], bt = (null == i ? void 0 : i.terminateCandidates) || [], vt = (0, r.useMemo)((function() {
    return ht.filter((function(e2) {
      return !e2.metMinimum;
    }));
  }), [ht]), yt = (0, r.useMemo)((function() {
    return ht.filter((function(e2) {
      return e2.metMinimum;
    }));
  }), [ht]), xt = (0, r.useMemo)((function() {
    return "notMet" === Be ? vt : "met" === Be ? yt : ht;
  }), [Be, ht, vt, yt]), Et = (0, r.useMemo)((function() {
    var e2 = x()(), t2 = ue.trim().toLowerCase(), n2 = me ? x()("".concat(me, "-01")) : null;
    return o.filter((function(r2) {
      var o2 = r2.races || [], i2 = "all" === ae || o2.some((function(t3) {
        var n3 = x()(t3.date);
        return n3.month() === e2.month() && n3.year() === e2.year();
      })), a2 = !t2 || o2.some((function(e3) {
        var n3;
        return null === (n3 = e3.name) || void 0 === n3 ? void 0 : n3.toLowerCase().includes(t2);
      })), l2 = !n2 || o2.some((function(e3) {
        return x()(e3.date).isSame(n2, "month");
      }));
      return i2 && a2 && l2;
    }));
  }), [ae, ue, me, o]), wt = (0, r.useMemo)((function() {
    return Et.map((function(e2) {
      return e2._id;
    }));
  }), [Et]), Ct = (0, r.useMemo)((function() {
    var e2 = pt.trim().toLowerCase();
    return e2.length < 2 ? [] : u.filter((function(e3) {
      return !st.includes(e3._id);
    })).filter((function(t2) {
      var n2, r2, o2 = "".concat((null === (n2 = t2.location) || void 0 === n2 ? void 0 : n2.city) || "", " ").concat((null === (r2 = t2.location) || void 0 === r2 ? void 0 : r2.country) || "").toLowerCase();
      return t2.name.toLowerCase().includes(e2) || t2.distance.toLowerCase().includes(e2) || o2.includes(e2);
    })).slice(0, 30);
  }), [pt, u, st]), kt = (0, r.useMemo)((function() {
    return u.filter((function(e2) {
      return st.includes(e2._id);
    }));
  }), [u, st]), Bt = (0, r.useMemo)((function() {
    var e2 = /* @__PURE__ */ new Set();
    return u.forEach((function(t2) {
      var n2 = x()(t2.date).format("YYYY-MM");
      e2.add(n2);
    })), Array.from(e2).sort((function(e3, t2) {
      return e3.localeCompare(t2);
    }));
  }), [u]), St = (0, r.useMemo)((function() {
    return xt.map((function(e2) {
      return e2._id;
    }));
  }), [xt]), It = "monthly" === S ? Ee : be, Dt = (0, r.useMemo)((function() {
    return o.filter((function(e2) {
      return be.includes(e2._id) && "PENDING" === e2.status;
    })).map((function(e2) {
      return e2._id;
    }));
  }), [o, be]), Pt = (0, r.useMemo)((function() {
    return gt.filter((function(e2) {
      return Ee.includes(e2._id);
    })).map((function(e2) {
      return e2._id;
    }));
  }), [gt, Ee]), Tt = (0, r.useMemo)((function() {
    return bt.filter((function(e2) {
      return Ee.includes(e2._id);
    })).map((function(e2) {
      return e2._id;
    }));
  }), [bt, Ee]), Ot = (0, r.useMemo)((function() {
    return "monthly" === S ? ht.filter((function(e2) {
      return Tt.includes(e2._id);
    })) : o.filter((function(e2) {
      return be.includes(e2._id);
    }));
  }), [S, ht, Tt, o, be]), Mt = (0, r.useMemo)((function() {
    return "monthly" === S ? St.length > 0 && St.every((function(e2) {
      return Ee.includes(e2);
    })) : wt.length > 0 && wt.every((function(e2) {
      return be.includes(e2);
    }));
  }), [S, St, wt, Ee, be]), Rt = function(e2) {
    W === e2 ? J("asc" === K ? "desc" : "asc") : (V(e2), J("desc")), $(1);
  };
  (0, r.useEffect)((function() {
    var e2 = setTimeout((function() {
      w(O);
    }), 300);
    return function() {
      return clearTimeout(e2);
    };
  }), [O, w]), (0, r.useEffect)((function() {
    C();
  }), [C]);
  var Ft = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if ("add" !== Xe || !et) {
              e4.next = 8;
              break;
            }
            return e4.next = 3, A({ userId: et.userId, raceIds: st });
          case 3:
            return Ge(false), tt(null), e4.next = 7, mt();
          case 7:
            return e4.abrupt("return");
          case 8:
            if ("edit" !== Xe || !ot) {
              e4.next = 19;
              break;
            }
            return e4.next = 11, g({ teamCreatorId: ot, raceIds: st });
          case 11:
            return Ge(false), it(null), tt(null), e4.next = 16, mt();
          case 16:
            if ("monthly" !== S) {
              e4.next = 19;
              break;
            }
            return e4.next = 19, At();
          case 19:
          case "end":
            return e4.stop();
        }
      }), e3);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })(), jt = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      var t2;
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            return t2 = "monthly" === S ? Tt : It, e4.next = 3, E({ memberIds: t2, reason: Re || void 0 });
          case 3:
            if (Te(false), ve([]), we([]), Fe(""), "monthly" !== S) {
              e4.next = 13;
              break;
            }
            return e4.next = 10, At();
          case 10:
            return e4.next = 12, mt();
          case 12:
            return e4.abrupt("return");
          case 13:
            return e4.next = 15, mt();
          case 15:
          case "end":
            return e4.stop();
        }
      }), e3);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })(), Lt = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      var t2;
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (0 !== Dt.length) {
              e4.next = 2;
              break;
            }
            return e4.abrupt("return");
          case 2:
            return e4.next = 4, b({ memberIds: Dt });
          case 4:
            (t2 = e4.sent) && window.alert("Resent ".concat(t2.resentCount, " invite").concat(1 === t2.resentCount ? "" : "s", "."));
          case 6:
          case "end":
            return e4.stop();
        }
      }), e3);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })(), Nt = (0, r.useCallback)((function(e2) {
    var t2, n2 = "".concat(window.location.origin, "/linkd/team-creator/agreement?token=").concat(encodeURIComponent(e2));
    null !== (t2 = navigator.clipboard) && void 0 !== t2 && t2.writeText ? navigator.clipboard.writeText(n2).then((function() {
      return f.oR.success("Agreement link copied");
    })).catch((function() {
      return f.oR.error("Failed to copy link");
    })) : f.oR.error("Clipboard not available in this browser");
  }), []), qt = function() {
    "monthly" !== S ? ve(Mt ? [] : wt) : we(Mt ? [] : St);
  }, zt = (function() {
    var e2 = (0, a.A)(s().mark((function e3() {
      var t2;
      return s().wrap((function(e4) {
        for (; ; ) switch (e4.prev = e4.next) {
          case 0:
            if (0 !== Pt.length) {
              e4.next = 2;
              break;
            }
            return e4.abrupt("return");
          case 2:
            return e4.next = 4, y({ memberIds: Pt, month: Ne, year: He });
          case 4:
            if (!(t2 = e4.sent)) {
              e4.next = 9;
              break;
            }
            return window.alert("Sent ".concat(t2.warnedCount, " warning email").concat(1 === t2.warnedCount ? "" : "s", ".")), e4.next = 9, At();
          case 9:
          case "end":
            return e4.stop();
        }
      }), e3);
    })));
    return function() {
      return e2.apply(this, arguments);
    };
  })();
  return r.createElement(GXe, null, r.createElement(KXe, null, r.createElement("h2", null, "Team Creators"), r.createElement(_Xe, null, r.createElement(F.A, { variant: "members" === S ? "primary" : "outline-primary", onClick: function() {
    return I("members");
  } }, "Manage Team"), r.createElement(F.A, { variant: "monthly" === S ? "primary" : "outline-primary", onClick: function() {
    return I("monthly");
  } }, "Monthly Performance"))), n && r.createElement(vQe.A, { variant: "danger" }, n), "members" === S && r.createElement(r.Fragment, null, r.createElement(Q.A, { className: "mb-3" }, r.createElement(Q.A.Header, null, "Add Team Member"), r.createElement(Q.A.Body, null, r.createElement(J9.A.Control, { type: "text", value: O, placeholder: "Search users by name or email", onChange: function(e2) {
    return M(e2.target.value);
  }, className: "mb-2" }), r.createElement(JXe, null, c.length > 0 ? c.map((function(t2) {
    var n2, i2 = String(t2._id), a2 = ((null === (n2 = t2.partnerPromoCodes) || void 0 === n2 ? void 0 : n2.length) || 0) > 0, l2 = o.some((function(e2) {
      return String(e2.userId) === i2 && "TERMINATED" !== e2.status;
    }));
    return r.createElement(XXe, { key: i2 }, r.createElement("div", null, t2.firstName, " ", t2.lastName, " (", t2.email, ")", r.createElement("div", { className: "text-muted small" }, "Partner code: ", a2 ? "Yes" : "No")), a2 ? r.createElement(F.A, { size: "sm", disabled: l2, onClick: function() {
      return (function(e2) {
        Ze("add"), tt({ userId: e2._id, firstName: e2.firstName, lastName: e2.lastName, email: e2.email }), it(null), ct([]), ft(""), Ge(true);
      })({ _id: i2, firstName: t2.firstName, lastName: t2.lastName, email: t2.email });
    } }, l2 ? "Already on Team" : "Add to Team + Races") : r.createElement(F.A, { size: "sm", variant: "outline-primary", onClick: function() {
      var n3 = new URLSearchParams({ userId: i2, firstName: t2.firstName || "", lastName: t2.lastName || "", email: t2.email || "" });
      e.push("/profile/partner-codes/create?".concat(n3.toString()));
    } }, "Create Partner Code"));
  })) : O.trim().length > 0 ? r.createElement(XXe, null, "No users found") : null))), r.createElement(Q.A, null, r.createElement(Q.A.Header, null, r.createElement(T, null, r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: q, onChange: function(e2) {
    z(e2.target.value), $(1);
  } }, r.createElement("option", { value: "" }, "All Statuses"), r.createElement("option", { value: "PENDING" }, "Pending"), r.createElement("option", { value: "APPROVED" }, "Approved"), r.createElement("option", { value: "TERMINATED" }, "Terminated"))), r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: ne, onChange: function(e2) {
    return re(Number(e2.target.value));
  } }, r.createElement("option", { value: 25 }, "25 per page"), r.createElement("option", { value: 50 }, "50 per page"), r.createElement("option", { value: 100 }, "100 per page"))), r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Control, { type: "text", value: ue, onChange: function(e2) {
    return de(e2.target.value);
  }, placeholder: "Filter by race name" }))), r.createElement(T, { className: "mt-2" }, r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: ae, onChange: function(e2) {
    return le(e2.target.value);
  } }, r.createElement("option", { value: "all" }, "All Members"), r.createElement("option", { value: "currentMonth" }, "Has race this month"))), r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: me, onChange: function(e2) {
    return Ae(e2.target.value);
  } }, r.createElement("option", { value: "" }, "All race months"), Bt.map((function(e2) {
    return r.createElement("option", { key: e2, value: e2 }, x()("".concat(e2, "-01")).format("MMMM YYYY"));
  }))))), r.createElement(T, { className: "mt-2" }, r.createElement(R.A, { className: "text-end" }, r.createElement(F.A, { variant: "outline-secondary", className: "me-2", disabled: 0 === wt.length, onClick: qt }, Mt ? "Clear Selection" : "Select All"), r.createElement(F.A, { variant: "outline-primary", className: "me-2", disabled: 0 === Dt.length, onClick: Lt }, "Resend Invite", Dt.length > 1 ? "s" : ""), r.createElement(F.A, { variant: "danger", disabled: 0 === be.length, onClick: function() {
    return Te(true);
  } }, "Terminate Selected")))), r.createElement(Q.A.Body, null, t && r.createElement(ba.A, { animation: "border" }), r.createElement(nZe, null, r.createElement(CQe.A, { hover: true, style: { minWidth: "1650px" } }, r.createElement("thead", null, r.createElement("tr", null, r.createElement(eZe, null), r.createElement(rZe, { onClick: function() {
    return Rt("name");
  } }, "Name"), r.createElement("th", { onClick: function() {
    return Rt("email");
  } }, "Email"), r.createElement("th", null, "Last Login"), r.createElement("th", null, "Active Plan"), r.createElement("th", null, "Plan Week"), r.createElement("th", { onClick: function() {
    return Rt("status");
  } }, "Status"), r.createElement("th", { onClick: function() {
    return Rt("addedAt");
  } }, "Date Added"), r.createElement("th", null, "Total Workouts"), r.createElement("th", null, "Last Workout"), r.createElement("th", null, "Promo Code"), r.createElement("th", { onClick: function() {
    return Rt("totalSignups");
  } }, "Signups"), r.createElement("th", { onClick: function() {
    return Rt("trialsStarted");
  } }, "Trials"), r.createElement("th", { onClick: function() {
    return Rt("conversions");
  } }, "Conversions"), r.createElement("th", { onClick: function() {
    return Rt("monthlyMinimum");
  } }, "Monthly Minimum"), r.createElement("th", null, "Races"), r.createElement(iZe, null, "Actions"))), r.createElement("tbody", null, Et.map((function(e2) {
    var t2, n2;
    return r.createElement("tr", { key: e2._id }, r.createElement($Xe, null, r.createElement(tZe, { type: "checkbox", checked: be.includes(e2._id), onChange: function(t3) {
      var n3 = t3.target.checked;
      ve(n3 ? [].concat((0, Pc.A)(be), [e2._id]) : be.filter((function(t4) {
        return t4 !== e2._id;
      })));
    } })), r.createElement(oZe, null, e2.firstName, " ", e2.lastName), r.createElement("td", null, e2.email), r.createElement("td", null, e2.lastAppLoginDate ? x()(e2.lastAppLoginDate).format("MMM D, YYYY") : "-"), r.createElement("td", null, r.createElement(wQe.A, { bg: e2.hasActivePlan ? "success" : "secondary" }, e2.hasActivePlan ? "Yes" : "No")), r.createElement("td", null, e2.hasActivePlan && e2.currentPlanWeek ? e2.currentPlanWeek : "-"), r.createElement("td", null, "APPROVED" === (n2 = e2.status) ? r.createElement(wQe.A, { bg: "success" }, "APPROVED") : "TERMINATED" === n2 ? r.createElement(wQe.A, { bg: "danger" }, "TERMINATED") : r.createElement(wQe.A, { bg: "warning" }, "PENDING")), r.createElement("td", null, x()(e2.addedAt).format("MMM D, YYYY")), r.createElement("td", null, null !== (t2 = e2.totalWorkoutsCompleted) && void 0 !== t2 ? t2 : 0), r.createElement("td", null, e2.lastWorkoutCompletedDate ? x()(e2.lastWorkoutCompletedDate).format("MMM D, YYYY") : "-"), r.createElement("td", null, e2.promoCode), r.createElement("td", null, e2.metrics.totalSignups), r.createElement("td", null, e2.metrics.trialsStarted), r.createElement("td", null, e2.metrics.conversions), r.createElement("td", null, e2.monthlyMinimum), r.createElement("td", null, e2.races && e2.races.length > 0 ? r.createElement("div", { className: "small text-nowrap" }, e2.races.map((function(e3, t3) {
      var n3 = x()(e3.date), o2 = n3.month() === x()().month() && n3.year() === x()().year();
      return r.createElement("span", { key: e3._id }, t3 > 0 ? " | " : "", e3.name, " (", n3.format("MMM D"), ")", o2 && r.createElement(wQe.A, { bg: "info", className: "ms-1" }, "This month"));
    }))) : r.createElement("span", { className: "text-muted" }, "-")), r.createElement(aZe, null, "PENDING" === e2.status && e2.inviteToken && r.createElement(F.A, { size: "sm", variant: "outline-info", className: "me-2", onClick: function() {
      return Nt(e2.inviteToken);
    } }, "Copy Link"), r.createElement(F.A, { size: "sm", variant: "outline-secondary", onClick: function() {
      return (function(e3) {
        var t3 = o.find((function(t4) {
          return t4._id === e3;
        }));
        t3 && (Ze("edit"), tt({ userId: t3.userId, firstName: t3.firstName, lastName: t3.lastName, email: t3.email }), it(t3._id), ct(t3.raceIds || []), ft(""), Ge(true));
      })(e2._id);
    } }, "Edit")));
  }))))), r.createElement("div", { className: "d-flex justify-content-between" }, r.createElement(F.A, { disabled: _ <= 1, onClick: function() {
    return $(_ - 1);
  } }, "Previous"), r.createElement("div", null, "Page ", l.page, " of ", l.totalPages || 1), r.createElement(F.A, { disabled: _ >= l.totalPages, onClick: function() {
    return $(_ + 1);
  } }, "Next"))))), "monthly" === S && r.createElement(Q.A, null, r.createElement(Q.A.Header, null, r.createElement(T, null, r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: Ne, onChange: function(e2) {
    return qe(Number(e2.target.value));
  } }, Array.from({ length: 12 }).map((function(e2, t2) {
    return r.createElement("option", { key: t2 + 1, value: t2 + 1 }, x()().month(t2).format("MMMM"));
  })))), r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: He, onChange: function(e2) {
    return We(Number(e2.target.value));
  } }, Array.from({ length: 3 }).map((function(e2, t2) {
    var n2 = x()().year() - t2;
    return r.createElement("option", { key: n2, value: n2 }, n2);
  })))), r.createElement(R.A, { md: 3 }, r.createElement(J9.A.Select, { value: Be, onChange: function(e2) {
    return Se(e2.target.value);
  } }, r.createElement("option", { value: "all" }, "Show All Members"), r.createElement("option", { value: "notMet" }, "Only Not Meeting Goal"), r.createElement("option", { value: "met" }, "Only Meeting Goal")))), r.createElement(T, { className: "mt-2" }, r.createElement(R.A, { className: "d-flex flex-nowrap justify-content-end align-items-center gap-2" }, r.createElement(F.A, { variant: "outline-secondary", size: "sm", disabled: 0 === St.length, onClick: qt }, Mt ? "Clear Selection" : "Select All"), r.createElement(F.A, { variant: "outline-warning", size: "sm", disabled: 0 === Pt.length, onClick: zt }, "Send Warning Email", 1 === Pt.length ? "" : "s"), r.createElement(F.A, { variant: "danger", size: "sm", disabled: 0 === Tt.length, onClick: function() {
    return Te(true);
  } }, "Terminate Selected")))), r.createElement(Q.A.Body, null, r.createElement(T, { className: "mb-3" }, r.createElement(R.A, null, r.createElement(ZXe, null, (null == i ? void 0 : i.summary.totalActiveMembers) || 0), r.createElement("div", null, "Active Members")), r.createElement(R.A, null, r.createElement(ZXe, null, (null == i ? void 0 : i.summary.membersMeetingGoal) || 0), r.createElement("div", null, "Meeting Goal")), r.createElement(R.A, null, r.createElement(ZXe, null, (null == i ? void 0 : i.summary.membersNotMeetingGoal) || 0), r.createElement("div", null, "Not Meeting Goal")), r.createElement(R.A, null, r.createElement(ZXe, null, (null == i ? void 0 : i.summary.warningCandidates) || 0), r.createElement("div", null, "Warning Candidates")), r.createElement(R.A, null, r.createElement(ZXe, null, (null == i ? void 0 : i.summary.terminateCandidates) || 0), r.createElement("div", null, "Terminate Candidates"))), ("all" === Be || "notMet" === Be) && r.createElement(r.Fragment, null, r.createElement("h5", { className: "mt-3" }, "Warning Candidates (Missed 1 Month)"), r.createElement(CQe.A, { responsive: true, hover: true }, r.createElement("thead", null, r.createElement("tr", null, r.createElement(eZe, null), r.createElement("th", null, "Name"), r.createElement("th", null, "Email"), r.createElement("th", null, "Signups This Month"), r.createElement("th", null, "Signups Previous Month"), r.createElement("th", null, "Last Warned"), r.createElement("th", null, "Monthly Minimum"), r.createElement("th", null, "Status"), r.createElement("th", null, "Consecutive Missed Months"))), r.createElement("tbody", null, gt.length > 0 ? gt.map((function(e2) {
    return r.createElement("tr", { key: e2._id }, r.createElement($Xe, null, r.createElement(tZe, { type: "checkbox", checked: Ee.includes(e2._id), onChange: function(t2) {
      var n2 = t2.target.checked;
      we(n2 ? [].concat((0, Pc.A)(Ee), [e2._id]) : Ee.filter((function(t3) {
        return t3 !== e2._id;
      })));
    } })), r.createElement("td", null, e2.firstName, " ", e2.lastName), r.createElement("td", null, e2.email), r.createElement("td", null, e2.signupsThisMonth), r.createElement("td", null, e2.previousMonthSignups), r.createElement("td", null, e2.lastMinimumWarningSentAt ? x()(e2.lastMinimumWarningSentAt).format("MMM D, YYYY") : "-"), r.createElement("td", null, e2.monthlyMinimum), r.createElement("td", null, r.createElement(wQe.A, { bg: "warning" }, "Warn")), r.createElement("td", null, e2.consecutiveMonthsMissed));
  })) : r.createElement("tr", null, r.createElement("td", { colSpan: 9 }, "No warning candidates for this month.")))), r.createElement("h5", { className: "mt-4" }, "Terminate Candidates (Missed 2 Consecutive Months)"), r.createElement(CQe.A, { responsive: true, hover: true }, r.createElement("thead", null, r.createElement("tr", null, r.createElement(eZe, null), r.createElement("th", null, "Name"), r.createElement("th", null, "Email"), r.createElement("th", null, "Signups This Month"), r.createElement("th", null, "Signups Previous Month"), r.createElement("th", null, "Last Warned"), r.createElement("th", null, "Monthly Minimum"), r.createElement("th", null, "Status"), r.createElement("th", null, "Consecutive Missed Months"))), r.createElement("tbody", null, bt.length > 0 ? bt.map((function(e2) {
    return r.createElement("tr", { key: e2._id }, r.createElement($Xe, null, r.createElement(tZe, { type: "checkbox", checked: Ee.includes(e2._id), onChange: function(t2) {
      var n2 = t2.target.checked;
      we(n2 ? [].concat((0, Pc.A)(Ee), [e2._id]) : Ee.filter((function(t3) {
        return t3 !== e2._id;
      })));
    } })), r.createElement("td", null, e2.firstName, " ", e2.lastName), r.createElement("td", null, e2.email), r.createElement("td", null, e2.signupsThisMonth), r.createElement("td", null, e2.previousMonthSignups), r.createElement("td", null, e2.lastMinimumWarningSentAt ? x()(e2.lastMinimumWarningSentAt).format("MMM D, YYYY") : "-"), r.createElement("td", null, e2.monthlyMinimum), r.createElement("td", null, r.createElement(wQe.A, { bg: "danger" }, "Terminate")), r.createElement("td", null, e2.consecutiveMonthsMissed));
  })) : r.createElement("tr", null, r.createElement("td", { colSpan: 9 }, "No terminate candidates for this month."))))), ("all" === Be || "met" === Be) && r.createElement(r.Fragment, null, r.createElement("h5", { className: "mt-4" }, "Meeting Monthly Minimum"), r.createElement(CQe.A, { responsive: true, hover: true }, r.createElement("thead", null, r.createElement("tr", null, r.createElement(eZe, null), r.createElement("th", null, "Name"), r.createElement("th", null, "Email"), r.createElement("th", null, "Signups This Month"), r.createElement("th", null, "Monthly Minimum"), r.createElement("th", null, "Status"), r.createElement("th", null, "Total Signups"), r.createElement("th", null, "Trials"), r.createElement("th", null, "Conversions"))), r.createElement("tbody", null, yt.length > 0 ? yt.map((function(e2) {
    return r.createElement("tr", { key: e2._id }, r.createElement($Xe, null, r.createElement(tZe, { type: "checkbox", checked: Ee.includes(e2._id), onChange: function(t2) {
      var n2 = t2.target.checked;
      we(n2 ? [].concat((0, Pc.A)(Ee), [e2._id]) : Ee.filter((function(t3) {
        return t3 !== e2._id;
      })));
    } })), r.createElement("td", null, e2.firstName, " ", e2.lastName), r.createElement("td", null, e2.email), r.createElement("td", null, e2.signupsThisMonth), r.createElement("td", null, e2.monthlyMinimum), r.createElement("td", null, r.createElement(wQe.A, { bg: "success" }, "Met")), r.createElement("td", null, e2.metrics.totalSignups), r.createElement("td", null, e2.metrics.trialsStarted), r.createElement("td", null, e2.metrics.conversions));
  })) : r.createElement("tr", null, r.createElement("td", { colSpan: 9 }, "No members have met minimum for this month."))))))), r.createElement(j.A, { show: Qe, onHide: function() {
    return Ge(false);
  }, size: "lg" }, r.createElement(j.A.Header, { closeButton: true }, r.createElement(j.A.Title, null, "add" === Xe ? "Add Team Member Details" : "Edit Team Member Details")), r.createElement(j.A.Body, null, r.createElement("p", { className: "mb-3" }, r.createElement("strong", null, null == et ? void 0 : et.firstName, " ", null == et ? void 0 : et.lastName), " ", null != et && et.email ? "(".concat(et.email, ")") : ""), r.createElement(J9.A.Group, null, r.createElement(J9.A.Label, null, "Assign Races (multiple allowed)"), r.createElement(J9.A.Control, { type: "text", placeholder: "Type race name, distance, or city", value: pt, onChange: function(e2) {
    return ft(e2.target.value);
  }, className: "mb-2" }), pt.trim().length >= 2 && r.createElement("div", { style: { maxHeight: "220px", overflowY: "auto", border: "1px solid #2d2d2d", borderRadius: 8, padding: 10 } }, Ct.length > 0 ? Ct.map((function(e2) {
    var t2;
    return r.createElement("div", { key: e2._id, className: "d-flex justify-content-between align-items-center mb-2" }, r.createElement("div", { className: "small" }, r.createElement("strong", null, e2.name), " - ", x()(e2.date).format("MMM D, YYYY"), " (", (null === (t2 = e2.location) || void 0 === t2 ? void 0 : t2.city) || "Unknown city", ")"), r.createElement(F.A, { size: "sm", variant: "outline-primary", onClick: function() {
      return ct((function(t3) {
        return [].concat((0, Pc.A)(t3), [e2._id]);
      }));
    } }, "Add"));
  })) : r.createElement("div", { className: "text-muted" }, "No races match your search.")), r.createElement(J9.A.Label, { className: "mt-3" }, "Selected Races"), r.createElement("div", { style: { maxHeight: "220px", overflowY: "auto", border: "1px solid #2d2d2d", borderRadius: 8, padding: 10 } }, kt.length > 0 ? kt.map((function(e2) {
    var t2;
    return r.createElement("div", { key: e2._id, className: "d-flex justify-content-between align-items-center mb-2" }, r.createElement("div", { className: "small" }, r.createElement("strong", null, e2.name), " - ", x()(e2.date).format("MMM D, YYYY"), " (", (null === (t2 = e2.location) || void 0 === t2 ? void 0 : t2.city) || "Unknown city", ")"), r.createElement(F.A, { size: "sm", variant: "outline-danger", onClick: function() {
      return ct((function(t3) {
        return t3.filter((function(t4) {
          return t4 !== e2._id;
        }));
      }));
    } }, "Remove"));
  })) : r.createElement("div", { className: "text-muted" }, "No races selected yet.")))), r.createElement(j.A.Footer, null, r.createElement(F.A, { variant: "secondary", onClick: function() {
    return Ge(false);
  } }, "Cancel"), r.createElement(F.A, { variant: "primary", onClick: Ft }, "add" === Xe ? "Add to Team" : "Save Changes"))), r.createElement(j.A, { show: Pe, onHide: function() {
    return Te(false);
  } }, r.createElement(j.A.Header, { closeButton: true }, r.createElement(j.A.Title, null, "Terminate Selected Team Members")), r.createElement(j.A.Body, null, r.createElement("p", null, "You are about to terminate ", Ot.length, " team member(s)."), r.createElement("p", { className: "mb-2" }, "This action will:"), r.createElement("ul", null, r.createElement("li", null, "Change their Team Endorphins status to Terminated."), r.createElement("li", null, "Record who terminated them and when it happened."), r.createElement("li", null, "Save the optional termination reason to their profile history."), r.createElement("li", null, "Deactivate their linked partner promo code."), r.createElement("li", null, "Send a termination email notification to each selected member.")), r.createElement("ul", null, Ot.map((function(e2) {
    return r.createElement("li", { key: e2._id }, e2.firstName, " ", e2.lastName, " (", e2.email, ")");
  }))), r.createElement(J9.A.Control, { as: "textarea", rows: 3, placeholder: "Optional termination reason", value: Re, onChange: function(e2) {
    return Fe(e2.target.value);
  } })), r.createElement(j.A.Footer, null, r.createElement(F.A, { variant: "secondary", onClick: function() {
    return Te(false);
  } }, "Cancel"), r.createElement(F.A, { variant: "danger", onClick: jt }, "Confirm Termination"))));
});
