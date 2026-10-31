// Extracted from bundle.56cdff646092261b85f8.js
// Source SHA256 e15e895c8c785e4861ad4cb5b31631207201af7cb8c4bf5b2cb8c9371621c093
// Byte offsets (UTF-16): 9078..9522
// This is a fragment of the vendor bundle, not an independently runnable engine.
(function() {
  return (0, X.Q5)(Z.zk.AGE_GENDER_CONTINUE_CLICKED), F(""), i ? Q ? W ? (C(true), void a({ birthdate: i.toISOString(), sex: "MALE" === b ? "M" : "F", preferredUnit: w, onSuccess: function() {
    (0, X.Q5)(Z.zk.AGE_GENDER_SUBMITTED, { sex: "MALE" === b ? "M" : "F", preferred_unit: w }), C(false), n();
  }, onFailure: function() {
    (0, X.Q5)(Z.zk.AGE_GENDER_SUBMISSION_FAILED), C(false), n();
  } })) : F("Please select a gender.") : F("Age must be between 13-100 years.") : F("Please select your birthdate.");
});
