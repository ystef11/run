// Extracted from bundle.476ba606abf9b3150048.js
// Source SHA256 602ab4f2fe7a7265fb9a5d75c922f39aabe2e94bcecd5a171d31d6c4875dd8bd
// Byte offsets (UTF-16): 15523..16151
// This is a fragment of the vendor bundle, not an independently runnable engine.
function j(i, e) {
  var t = [], o = i.peakMileage - i.startMileage;
  if (o > 30) {
    var y = e.isKilometers ? Math.round((0, R.eS)(30)) : 30, x = e.isKilometers ? Math.round((0, R.eS)(o)) : Math.round(o);
    t.push("Distance range can't exceed ".concat(y, " ").concat(e.unitLabel, " (current: ").concat(x, " ").concat(e.unitLabel, ")."));
  }
  i.workoutsPerWeek > e.availableDays && t.push("Can't schedule ".concat(i.workoutsPerWeek, " runs/week with only ").concat(e.availableDays, " available day").concat(1 === e.availableDays ? "" : "s", ". Reduce runs per week or add days."));
  var s = (0, R.$)(i.minLongRunDistance, i.maxLongRunDistance, e.longRunLimits).errorMessage;
  return s && t.push(s), t;
}
