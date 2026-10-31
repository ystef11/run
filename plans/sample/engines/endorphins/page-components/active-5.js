// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 9389911..9391920
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function(e) {
  for (; ; ) switch (e.prev = e.next) {
    case 0:
      return e.prev = 0, e.next = 3, (0, fq.c)({ endpoint: "city/".concat(t, "/members/details?page=1&limit=1000"), method: "get" });
    case 3:
      if (r = e.sent, 0 !== (o = (null === (n = r.data) || void 0 === n ? void 0 : n.members) || []).length) {
        e.next = 8;
        break;
      }
      return alert("No data to export"), e.abrupt("return");
    case 8:
      i = [["Name", "Email", "Subscription Status", "Subscription Type", "Subscription End Date", "Has Active Plan", "Race Name", "Race Distance", "Race Date", "Current Week", "Plan Duration", "Completed Workouts", "Total Workouts", "Plan Progress", "Completed Distance (mi)", "Total Distance (mi)", "Total Miles (All Time)", "Total Miles (This Week)", "Total Runs (All Time)", "Total Runs (This Week)", "Average Flash Score", "Date Joined"].join(",")].concat((0, Pc.A)(o.map((function(e2) {
        return ['"'.concat(e2.firstName, " ").concat(e2.lastName, '"'), '"'.concat(e2.email, '"'), '"'.concat(e2.subscriptionStatus, '"'), '"'.concat(e2.subscriptionType, '"'), '"'.concat(e2.subscriptionEndDate ? x()(e2.subscriptionEndDate).format("MM/DD/YYYY") : "", '"'), e2.hasActivePlan ? "Yes" : "No", '"'.concat(e2.raceName, '"'), '"'.concat(e2.raceDistance, '"'), '"'.concat(e2.raceDate ? x()(e2.raceDate).format("MM/DD/YYYY") : "", '"'), e2.currentWeek, e2.planDuration, e2.completedWorkouts, e2.totalWorkouts, '"'.concat(V(e2.completedWorkouts, e2.totalWorkouts), '"'), e2.completedDistance, e2.totalDistance, e2.totalMiles, e2.totalMilesThisWeek, e2.totalRuns, e2.totalRunsThisWeek, e2.avgFlashScore.toFixed(1), '"'.concat(x()(e2.dateJoined).format("MM/DD/YYYY"), '"')].join(",");
      })))).join("\n"), a = new Blob([i], { type: "text/csv;charset=utf-8;" }), l = document.createElement("a"), c = URL.createObjectURL(a), l.setAttribute("href", c), l.setAttribute("download", "group-member-details-".concat(x()().format("YYYY-MM-DD"), ".csv")), l.style.visibility = "hidden", document.body.appendChild(l), l.click(), document.body.removeChild(l), e.next = 25;
      break;
    case 21:
      e.prev = 21, e.t0 = e.catch(0), console.error("Error downloading CSV:", e.t0), alert("Failed to download CSV. Please try again.");
    case 25:
    case "end":
      return e.stop();
  }
});
