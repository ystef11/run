// Extracted from bundle.58b8cfd182ed54451183.js
// Source SHA256 9f62d2581fb6bfe0ebb573e02848df33dd8e0747c141370c3cd68d65b237a391
// Byte offsets (UTF-16): 516166..587467
// This is a fragment of the vendor bundle, not an independently runnable engine.
((e, t, n) => {
  "use strict";
  n.d(t, { SZ: () => r, Wj: () => i, X3: () => s, XJ: () => c, fw: () => o, yd: () => u });
  var r = "https://endorphinsrunning.com", o = [{ name: "read:profile", family: "read", grants: "Profile details (bio, preferences)" }, { name: "read:training", family: "read", grants: "Training plan, paces, scheduled workouts, goals" }, { name: "read:workouts", family: "read", grants: "Activities, workout history, charts, personal records" }, { name: "read:health", family: "read", grants: "Wellness data (heart rate, sleep, recovery, injury status)" }, { name: "write:training", family: "write", grants: "Propose plan adjustments (the athlete approves each one; available to dynamically-registered clients, always behind the consent screen)" }, { name: "write:activities", family: "write", grants: "Record completed partner workouts (partner clients only, granted through the portal; never via Dynamic Client Registration)" }, { name: "openid", family: "identity", grants: "Sign in with Endorphins (issues an id_token)" }, { name: "email", family: "identity", grants: "The user\u2019s email address" }, { name: "profile", family: "identity", grants: "Name and profile photo" }], i = o.map((function(e2) {
    return e2.name;
  })), a = "[\n    ".concat(i.map((function(e2) {
    return '"'.concat(e2, '"');
  })).join(",\n    "), "\n  ]"), l = "Authorization: Bearer ACCESS_TOKEN", s = [{ id: "oauth", title: "OAuth 2.0 & OpenID Connect", intro: "Endorphins is a standard OAuth 2.0 + OpenID Connect provider. Use the Authorization Code flow with PKCE. All endpoints below live at the same origin.", endpoints: [{ id: "well-known", method: "GET", path: "/.well-known/openid-configuration", title: "Discovery document", description: "OpenID Connect discovery metadata. Advertises the authorization, token, userinfo, revocation, and JWKS endpoints, the supported scopes, and the claims we issue. Point any off-the-shelf OIDC client library at this URL and it auto-configures. id_tokens are signed with RS256 \u2014 verify them against the published JWKS.", request: "GET ".concat(r, "/.well-known/openid-configuration"), response: '{\n  "issuer": "'.concat(r, '",\n  "authorization_endpoint": "').concat(r, '/oauth/authorize",\n  "token_endpoint": "').concat(r, '/oauth/token",\n  "userinfo_endpoint": "').concat(r, '/oauth/userinfo",\n  "revocation_endpoint": "').concat(r, '/oauth/revoke",\n  "jwks_uri": "').concat(r, '/.well-known/jwks.json",\n  "response_types_supported": ["code"],\n  "grant_types_supported": ["authorization_code", "refresh_token"],\n  "code_challenge_methods_supported": ["S256"],\n  "id_token_signing_alg_values_supported": ["RS256"],\n  "scopes_supported": ').concat(a, "\n}") }, { id: "oauth-authorize", method: "GET", path: "/oauth/authorize", title: "Authorization", description: "Start the Authorization Code + PKCE flow. Redirect the user here; they sign in and approve the requested scopes on the Endorphins consent screen, and we redirect back to your registered redirect_uri with a one-time code and your state. PKCE (S256) is required for public clients and recommended for all. Authorization codes expire after 5 minutes.", params: [{ name: "response_type", location: "query", required: true, description: 'Must be "code".' }, { name: "client_id", location: "query", required: true, description: "Your app\u2019s client_id." }, { name: "redirect_uri", location: "query", required: true, description: "Must exactly match one of your registered redirect URIs." }, { name: "scope", location: "query", required: true, description: 'Space-separated scopes, e.g. "openid email profile read:training".' }, { name: "state", location: "query", required: true, description: "Opaque CSRF token you generate and later verify." }, { name: "code_challenge", location: "query", required: false, description: "PKCE challenge = BASE64URL(SHA256(verifier)). Required for public clients." }, { name: "code_challenge_method", location: "query", required: false, description: 'Must be "S256" when code_challenge is present.' }, { name: "nonce", location: "query", required: false, description: "OIDC nonce echoed into the id_token; verify it on return." }], request: "GET ".concat(r, "/oauth/authorize\n  ?response_type=code\n  &client_id=YOUR_CLIENT_ID\n  &redirect_uri=https://your-app.com/callback\n  &scope=openid%20email%20profile%20read:training\n  &state=RANDOM\n  &code_challenge=BASE64URL(SHA256(verifier))\n  &code_challenge_method=S256\n  &nonce=RANDOM"), response: "302 Found\nLocation: https://your-app.com/callback?code=THE_CODE&state=RANDOM" }, { id: "oauth-token", method: "POST", path: "/oauth/token", title: "Token exchange & refresh", description: "Exchange an authorization code for tokens, or use grant_type=refresh_token to get a fresh access token. Supported grants: authorization_code and refresh_token only. Confidential apps authenticate with HTTP Basic (client_id:client_secret) or client_secret in the body; public apps send only the PKCE code_verifier. Access tokens live 15 minutes, refresh tokens 30 days, and refresh tokens rotate on every use.", params: [{ name: "grant_type", location: "body", required: true, description: '"authorization_code" or "refresh_token".' }, { name: "code", location: "body", required: false, description: "The authorization code (authorization_code grant)." }, { name: "code_verifier", location: "body", required: false, description: "The PKCE verifier (required if a code_challenge was sent)." }, { name: "refresh_token", location: "body", required: false, description: "The refresh token (refresh_token grant)." }, { name: "client_id", location: "body", required: true, description: "Your app\u2019s client_id." }, { name: "redirect_uri", location: "body", required: false, description: "The same redirect_uri used to obtain the code." }], request: "POST ".concat(r, "/oauth/token\nContent-Type: application/x-www-form-urlencoded\n\ngrant_type=authorization_code\n&code=THE_CODE\n&redirect_uri=https://your-app.com/callback\n&client_id=YOUR_CLIENT_ID\n&code_verifier=THE_VERIFIER"), response: '{\n  "access_token": "eyJhbGciOiJ...",\n  "token_type": "Bearer",\n  "expires_in": 900,\n  "refresh_token": "def502...",\n  "scope": "openid email profile read:training",\n  "id_token": "eyJhbGciOiJSUzI1NiIs..."  // only when the openid scope was granted\n}' }, { id: "oauth-userinfo", method: "GET", path: "/oauth/userinfo", title: "UserInfo", description: "The OpenID Connect UserInfo endpoint. Call it with the access token to read the signed-in user\u2019s identity. Which claims are returned depends on the granted identity scopes (email, profile). Requires the openid scope.", request: "GET ".concat(r, "/oauth/userinfo\n").concat(l), response: '{\n  "sub": "66a1f0c3d4e5f60011223344",\n  "email": "runner@example.com",\n  "email_verified": true,\n  "name": "Alex Rivera",\n  "given_name": "Alex",\n  "family_name": "Rivera",\n  "picture": "https://cdn.endorphinsrunning.com/u/66a1f0.jpg"\n}' }, { id: "oauth-revoke", method: "POST", path: "/oauth/revoke", title: "Revoke", description: "Revoke a refresh or access token (RFC 7009). Always returns 200, even for an unknown token, so it\u2019s safe to call idempotently. Users can also revoke your app at any time from their Endorphins account settings.", params: [{ name: "token", location: "body", required: true, description: "The access or refresh token to revoke." }, { name: "client_id", location: "body", required: true, description: "Your app\u2019s client_id." }], request: "POST ".concat(r, "/oauth/revoke\nContent-Type: application/x-www-form-urlencoded\n\ntoken=def502...&client_id=YOUR_CLIENT_ID"), response: "200 OK" }] }, { id: "profile-data", title: "Profile data \xB7 read:profile", endpoints: [{ id: "gpt-me", method: "GET", path: "/gpt/me", title: "Profile", scope: "read:profile", mcpTool: "gpt_get_me", description: "The signed-in runner\u2019s safe profile fields. Email and other sensitive account data are never returned here \u2014 use /oauth/userinfo (with the email scope) for identity.", request: "GET ".concat(r, "/gpt/me\n").concat(l), response: '{\n  "user": {\n    "_id": "66a1f0c3d4e5f60011223344",\n    "firstName": "Alex",\n    "lastName": "Rivera",\n    "profilePicture": "https://cdn.endorphinsrunning.com/u/66a1f0.jpg",\n    "bio": "Chasing a sub-3 marathon.",\n    "instagram": "alex.runs",\n    "preferredUnit": "MILES",\n    "preferredTemperatureUnit": "FAHRENHEIT",\n    "sex": "MALE",\n    "birthdate": "1992-04-18T00:00:00.000Z",\n    "tags": ["marathon", "boston-hopeful"],\n    "dateAdded": "2024-11-02T15:22:10.000Z",\n    "onboardingComplete": true\n  }\n}' }] }, { id: "training-data", title: "Training data \xB7 read:training", endpoints: [{ id: "gpt-briefing", method: "GET", path: "/gpt/briefing", title: "Coaching briefing", scope: "read:training", mcpTool: "gpt_get_briefing", description: 'One compact read (a few KB) of everything an assistant needs before coaching the runner, so it is the call to make first in a conversation. It carries who they are and whether they subscribe, the plan header (goal, race, days to race, current week), today\u2019s workout, the next seven days, the last seven days of activity, training load, a recovery snapshot (latest HRV, resting heart rate and sleep against their baselines) and injury status, pending plan-change proposals, which kinds of plan change can be proposed right now, the coach\u2019s top memories and the runner\u2019s goals. Scopes: recovery and injury need read:health and lastSevenDays and trainingLoad need read:workouts; a section the token\u2019s scopes do not cover is absent from the response, and everything else comes with read:training, except the athlete\u2019s first name, which needs read:profile (null without it; the subscription state is always present). Empty values: the plan sections (plan, today, nextSevenDays, eligibility) are null without a plan, nextSevenDays is also null when the window holds no workouts, lists are [] when empty, and a section whose read failed is null with an entry in warnings naming it and the reason ("unavailable" for an internal failure), so one broken read never fails the briefing. The four plan sections share one plan read: when that read fails, all four are null and warnings carries a single "planRead" entry. Each section mirrors its own endpoint (the plan header is /gpt/plan?view=summary\u2019s header, today is /gpt/today?view=compact\u2019s row, nextSevenDays is the first part of /gpt/current-week\u2019s rows, cut off at today plus 7 days), so a follow-up call to that endpoint returns the same workouts. Each eligibility row carries a reason, one plain-English line on why this kind of change is or is not allowed right now, and viaMcp, true only for the kinds an MCP tool can act on today (plan parameters and pace, through gpt_propose_plan_adjustment); offer the others in the Endorphins app. No parameters.', request: "GET ".concat(r, "/gpt/briefing\n").concat(l), response: `{
  "generatedAt": "2026-07-18T12:04:11.000Z",
  "unit": "mi",                                    // the plan's unit, else the profile preference ("mi" or "km")
  "athlete": { "firstName": "Alex", "subscription": "active" },   // firstName only with read:profile (null without it); subscription ("active" | "free") always
  "plan": {                                        // the /gpt/plan?view=summary header; an ONBOARDING draft returns its header with status "ONBOARDING"; null with no plan
    "id": "66b2a1...",
    "status": "LIVE",
    "goal": "RACE",
    "race": { "name": "Chicago Marathon", "distance": "FULL", "date": "2026-10-11", "daysToRace": 85 },
    "startDate": "2026-06-01", "endDate": "2026-10-11",
    "currentWeek": 7, "totalWeeks": 19,
    "preferredUnit": "mi", "prescriptionUnit": "DISTANCE"
    // ...the remaining header fields, as in /gpt/plan?view=summary
  },
  "today": {                                       // the /gpt/today?view=compact row; null on a rest day or with no plan
    "_id": "66a2...", "day": "SATURDAY", "date": "2026-07-18", "type": "TEMPO", "label": "Tempo",
    "distance": 7.5, "unit": "mi", "pace": { "zone": "TEMPO", "low": "6:45", "high": "6:55", "unit": "mi" },
    "structure": "2 mi warm-up, 4 x 1 mi at 6:45-6:55 with 90s jog, 1 mi cool-down",
    "isComplete": false, "deepLink": "https://app.endorphinsrunning.com/linkd/training-plan/day/66a2..."
    // ...the remaining compact fields
  },
  "nextSevenDays": [                               // the first part of /gpt/current-week's rows: the plan week so far (from its start, never later than yesterday), cut off at today plus 7 days; null with no plan or no workouts in the window
    { "day": "SATURDAY", "date": "2026-07-18", "type": "TEMPO", "label": "Tempo", "distance": 7.5, "unit": "mi", "estimatedDurationMinutes": 60, "isComplete": false, "isSkipped": false, "deepLink": "https://app.endorphinsrunning.com/linkd/training-plan/day/66a2..." /* ...remaining fields (distanceMi, colorHex, provider) */ }
    // ...one row per scheduled workout
  ],
  "lastSevenDays": { "activities": 5, "runs": 4, "distance": 26.3, "longestDistance": 12.1, "averageHeartRate": 148 },   // only with read:workouts; activities of any type, then runs only; distances in "unit"; the sums are null with no runs
  "trainingLoad": {                                // only with read:workouts; the /gpt/training-load shape
    "summary": "**Acute:Chronic (ACWR): 1.08** ...",
    "highlight": "Load is balanced; you can hold this shape another week.",
    "structured": { "acwr": 1.08, "acwrBand": "sweet" /* ...as in /gpt/training-load */ }
  },
  "recovery": {                                    // only with read:health; a compact snapshot (no body composition, menstrual cycle or blood pressure: those stay on /gpt/recovery)
    "asOf": "2026-07-18",
    "latest": { "hrvMs": 68, "hrvDate": "2026-07-18", "restingHrBpm": 48, "restingHrDate": "2026-07-18", "sleepHours": 7.4, "sleepDate": "2026-07-18" },
    "baselines": { "hrvMs": 62, "restingHrBpm": 50, "sleepHours": 7.2 }   // trailing-window medians; each value null when the device does not report it
  },
  "injury": { "isInInjuryState": false, "isInjured": false, "isInActiveRamp": false, "reason": null },             // only with read:health; absent otherwise
  "pendingProposals": [                            // PENDING plan-change proposals ([] when none; null when the read failed)
    { "proposalId": "66e5f4...", "description": "Raise week 8 volume to 45 mi.", "origin": "MCP", "expiresAt": "2026-07-24T12:00:00.000Z" }   // only an "MCP" proposal is resolvable with gpt_confirm_plan_adjustment; others in the app
  ],
  "eligibility": [                                 // one row per kind of plan change; null unless the plan is LIVE, or when the read failed
    // reason: one plain-English line on why this kind is or is not allowed right now (null when none)
    // viaMcp: true only for the kinds an MCP tool can act on today (plan params and pace, via gpt_propose_plan_adjustment)
    { "kind": "proposePlanParamsChange", "eligible": true, "reason": "Recent weeks were completed at target.", "viaMcp": true },
    { "kind": "proposeRaceDateChange", "eligible": false, "reason": "The plan is in its taper.", "viaMcp": false }
    // ...one row per kind
  ],
  "memories": [                                    // top 5 coach memories by importance ([] when none; null when the read failed)
    { "category": "CONSTRAINTS", "text": "Can only do long runs on Sundays.", "importance": 0.8 }
  ],
  "goals": { "FULL": { "hours": "2", "minutes": "59", "seconds": "00", "type": "RACE" } },   // the goals map /gpt/goals wraps in "goals"; {} when none are set
  "warnings": [                                    // one entry per section whose read failed; [] when every read succeeded
    { "section": "recovery", "reason": "unavailable" }   // a known error's message, or "unavailable" for an internal failure; a failed plan read is one "planRead" entry (plan, today, nextSevenDays and eligibility all null)
  ]
}` }, { id: "gpt-plan", method: "GET", path: "/gpt/plan", title: "Current training plan", scope: "read:training", mcpTool: "gpt_get_plan", description: 'The runner\u2019s current training plan bundle: week-by-week scheduled workouts, pace/HR zones, race predictions, and status. Returns { "plan": null } when the runner has no active plan. The full bundle is large \u2014 the sample below is abbreviated. Pass view=summary for a few-KB plan header plus one row per week and this week\u2019s compact workout rows, or view=weeks with weekFrom/weekTo for a window of compact rows; the gpt_get_plan tool defaults to summary.', params: [{ name: "view", location: "query", required: false, description: '"summary", "weeks" or "full". Default full over REST; the `gpt_get_plan` tool defaults to summary. Any other value is a 400 naming the valid values.' }, { name: "weekFrom", location: "query", required: false, description: "First plan week to return (integer). Only with view=weeks. One bound alone pins a single week (weekFrom defaults to weekTo, and both default to the anchor week: the current week, the last week once the plan has ended, week 1 before it starts). A non-integer or a value below 1 is a 400; weekTo before weekFrom or a span over 4 weeks is a 400." }, { name: "weekTo", location: "query", required: false, description: "Last plan week to return (integer). Only with view=weeks. One bound alone pins a single week (weekTo defaults to weekFrom, and both default to the anchor week: the current week, the last week once the plan has ended, week 1 before it starts). A non-integer or a value below 1 is a 400; weekTo before weekFrom or a span over 4 weeks is a 400." }], request: "GET ".concat(r, "/gpt/plan\n").concat(l), response: `// view=full (the REST default), abbreviated:
{
  "plan": {
    "_id": "66b2a1...",
    "race": {                                       // null/absent for general plans
      "_id": "65f0c2...",
      "name": "Chicago Marathon",
      "distance": "FULL",
      "date": "2026-10-11T00:00:00.000Z"
    },
    "status": "LIVE",
    "currentWeek": 7,
    "preferredUnit": "MILES",
    "plan": [
      {
        "week": 7,
        "workouts": [
          {
            "day": "MONDAY",
            "date": "2026-07-20T00:00:00.000Z",   // calendar date, UTC midnight
            "type": "EASY_RUN",
            "description": "Easy 6 mi, conversational",
            "totalDistance": { "value": "6", "unit": "MILES" }, // unit is "MINUTE" (or "SECONDS") on time-based plans
            "estimatedDurationMinutes": 56,         // whole minutes; null for rest/strength/cross/free or when it can't be derived
            "segments": [
              {
                "type": "EASY_RUN",
                "setTotalDistanceOrTime": { "value": "6", "unit": "MILES" },
                "pace": { "low": { "value": "9:00", "unit": "MILES" }, "high": { "value": "9:30", "unit": "MILES" } },
                "reps": []
              }
            ]
          }
          // ...more workouts
        ]
      }
      // ...more weeks
    ],
    "trainingZonesV2": { /* pace + HR zones, shape abbreviated */ },
    "predictions": { /* race-time predictions, shape abbreviated */ }
  }
}

// view=summary (the gpt_get_plan tool default), abbreviated. Every value is in
// the plan's unit ("mi" or "km"); time-based plans report minutes ("min").
// { "view": "summary", "plan": null } with no active plan.
{
  "view": "summary",
  "plan": {
    "plan": {
      "id": "66b2a1...",
      "status": "LIVE",
      "goal": "RACE",
      "goalType": null,
      "race": { "name": "Chicago Marathon", "distance": "FULL", "date": "2026-10-11", "daysToRace": 83 },
      "bRaces": [],
      "startDate": "2026-06-01",
      "endDate": "2026-10-11",
      "currentWeek": 7,                        // derived from today's UTC date
      "totalWeeks": 19,
      "preferredUnit": "mi",
      "prescriptionUnit": "DISTANCE",
      "params": { "unit": "mi", "startMileage": 30, "peakMileage": 52, "workoutsPerWeek": 5, "minLongRunDistance": 10, "maxLongRunDistance": 20, "intenseWorkouts": 2, "longRunWorkouts": true, "gradualStart": false, "prescriptionUnit": "DISTANCE", "calibrationTimeTrial": false },
      "strength": null,
      "qualityPacesProvisional": false,
      "lastUpdated": "2026-07-12T09:14:00.000Z"
    },
    "weeks": [
      {
        "week": 7,
        "startDate": "2026-07-13",
        "endDate": "2026-07-19",
        "isCurrent": true,
        "target": { "value": 42, "unit": "mi" },
        "completed": { "value": 18.5, "unit": "mi" },
        "plannedWorkouts": 5, "completeWorkouts": 2, "skippedWorkouts": 0,
        "keyWorkouts": ["Tempo", "Long run"],
        "blockType": "BUILD", "stage": "MID", "isTaper": false, "isRecoveryWeek": false   // absent on older plans
      }
      // ...one row per week
    ],
    "currentWeekWorkouts": [
      {
        "_id": "66a2...",
        "day": "SATURDAY",
        "date": "2026-07-18",
        "type": "TEMPO",
        "label": "Tempo",
        "colorHex": "#F97316",
        "deepLink": "https://app.endorphinsrunning.com/linkd/training-plan/day/66a2...",
        "distance": 7.5, "unit": "mi",
        "durationMinutes": null,               // prescribed minutes on time-based plans; distance is null there
        "pace": { "zone": "TEMPO", "low": "6:45", "high": "6:55", "unit": "mi" },   // null on effort-guided plans
        "effortGuided": false,
        "structure": "2 mi warm-up, 4 x 1 mi at 6:45-6:55 with 90s jog, 1 mi cool-down",
        "estimatedDurationMinutes": 60,
        "isKeyWorkout": true, "keyWorkoutKind": "TEMPO",
        "isComplete": false, "isSkipped": false, "isLocked": false,
        "isAccessible": true,                  // false on a free user's paywalled row: every key is present, the content fields (distance, pace, structure, description, ...) are null, isKeyWorkout stays
        "activityId": null, "performanceScore": null,
        "description": "Settle into tempo by the second rep..."   // at most 300 chars
      }
      // ...this week's remaining rows, sorted by date
    ],
    "pendingProposalCount": 0
  }
}

// view=weeks&weekFrom=7&weekTo=8 (compact rows per week in the window; { "view": "weeks", "weeks": null } with no plan):
{
  "view": "weeks",
  "unit": "mi",
  "currentWeek": 7,
  "totalWeeks": 19,
  "weekFrom": 7,
  "weekTo": 8,
  "weeks": [
    {
      "week": 7, "startDate": "2026-07-13", "endDate": "2026-07-19", "isCurrent": true,
      "target": { "value": 42, "unit": "mi" }, "completed": { "value": 18.5, "unit": "mi" },
      "plannedWorkouts": 5, "completeWorkouts": 2, "skippedWorkouts": 0, "keyWorkouts": ["Tempo", "Long run"],
      "workouts": [ /* compact rows as in currentWeekWorkouts above */ ]
    }
    // ...week 8
  ]
}` }, { id: "gpt-today", method: "GET", path: "/gpt/today", title: "Today\u2019s workout", scope: "read:training", mcpTool: "gpt_get_today", description: 'Today\u2019s scheduled workout from the current plan (matched on the UTC calendar date). Returns { "workout": null } on a rest day or when there\u2019s no active plan. Over REST the default is the raw workout subdocument, unchanged; pass view=compact for the compact row /gpt/plan?view=summary uses plus the full description, the structure and the coach\u2019s note, which is what the gpt_get_today tool returns.', params: [{ name: "view", location: "query", required: false, description: '"full" or "compact". Default full (the raw workout) over REST; the `gpt_get_today` tool defaults to compact. Any other value is a 400 naming the valid values.' }], request: "GET ".concat(r, "/gpt/today\n").concat(l), response: `// view=full (the REST default):
{
  "workout": {
    "day": "SATURDAY",
    "date": "2026-07-18T00:00:00.000Z",
    "type": "TEMPO",
    "description": "2 mi WU \xB7 4 x 1 mi @ tempo w/ 90s jog \xB7 1 mi CD",
    "totalDistance": { "value": "7.5", "unit": "MILES" }, // unit is "MINUTE" (or "SECONDS") on time-based plans
    "estimatedDurationMinutes": 60,                       // whole minutes; null for rest/strength/cross/free or when it can't be derived
    "segments": [
      {
        "type": "WARMUP",
        "setTotalDistanceOrTime": { "value": "2", "unit": "MILES" },
        "pace": { "low": { "value": "9:00", "unit": "MILES" }, "high": { "value": "9:30", "unit": "MILES" } },
        "reps": []
      },
      {
        "type": "TEMPO",
        "setTotalDistanceOrTime": { "value": "4", "unit": "MILES" },
        "pace": { "low": { "value": "6:45", "unit": "MILES" }, "high": { "value": "6:55", "unit": "MILES" } },
        "reps": [
          {
            "type": "TEMPO",
            "repCount": 4,
            "distanceOrTime": { "value": "1", "unit": "MILES" },
            "repUnitType": "DISTANCE",
            "pace": { "low": { "value": "6:45", "unit": "MILES" }, "high": { "value": "6:55", "unit": "MILES" } },
            "rest": { "active": true, "time": { "value": "90", "unit": "SECONDS" } }
          }
        ]
      },
      {
        "type": "COOLDOWN",
        "setTotalDistanceOrTime": { "value": "1", "unit": "MILES" },
        "pace": { "low": { "value": "9:00", "unit": "MILES" }, "high": { "value": "9:30", "unit": "MILES" } },
        "reps": []
      }
    ]
  },
  "trainingPlanId": "66b2a1...",
  "week": 7,
  "workoutIndex": 2
}

// view=compact (the gpt_get_today tool shape):
{
  "workout": {
    "_id": "66a2...",
    "day": "SATURDAY",
    "date": "2026-07-18",                     // YYYY-MM-DD calendar date
    "type": "TEMPO",
    "label": "Tempo",
    "colorHex": "#F97316",
    "deepLink": "https://app.endorphinsrunning.com/linkd/training-plan/day/66a2...",
    "distance": 7.5, "unit": "mi",            // the plan's unit; durationMinutes carries minutes on time-based plans
    "durationMinutes": null,
    "pace": { "zone": "TEMPO", "low": "6:45", "high": "6:55", "unit": "mi" },   // null on effort-guided plans
    "effortGuided": false,
    "structure": "2 mi warm-up, 4 x 1 mi at 6:45-6:55 with 90s jog, 1 mi cool-down",
    "estimatedDurationMinutes": 60,           // whole minutes; null for rest/strength/cross/free or when it can't be derived
    "isKeyWorkout": true, "keyWorkoutKind": "TEMPO",
    "isComplete": false, "isSkipped": false, "isLocked": false,
    "isAccessible": true,
    "activityId": null, "performanceScore": null,
    "description": "Settle into tempo by the second rep. Hold the first one back; the last two should feel like the work.",   // full text here; only plan rows truncate to 300 chars
    "coachNote": "You handled last week's tempo well, so this one adds a rep."   // null when the coach left none
  },
  "trainingPlanId": "66b2a1...",
  "week": 7,
  "workoutIndex": 2
}` }, { id: "gpt-current-week", method: "GET", path: "/gpt/current-week", title: "Upcoming workouts", scope: "read:training", mcpTool: "gpt_get_current_week", description: 'The runner\u2019s upcoming plan workouts as compact partner-friendly rows (day, date, type, label, distance, estimated duration, completion, theme color, deep link, provider). Over REST the window runs from the start of the plan week containing today (never later than yesterday) through today plus 13 days, crossing plan-week boundaries: a partner can render the current week as a checklist with the days already behind the runner marked done, and the upcoming list never empties on the last day of a plan week. Today is the server\u2019s UTC date, so the window always opens at least a day early and the client trims past days against its own local date. The gpt_get_current_week tool returns the calendar plan week containing today instead. Returns { "week": null } with no active plan or an empty window.', request: "GET ".concat(r, "/gpt/current-week\n").concat(l), response: `{
  "week": {
    "startDate": "2026-07-13",                // the plan week containing today (2026-07-18) starts Monday 07-13
    "endDate": "2026-07-31",                  // today plus 13 days
    "workouts": [
      {
        "day": "SATURDAY",
        "date": "2026-07-18",                 // YYYY-MM-DD calendar date
        "type": "TEMPO",
        "label": "Tempo",
        "distanceMi": 7.5,                    // null for rest/strength and time-based plans
        "distance": 7.5, "unit": "mi",        // same value in the plan's unit ("mi" or "km")
        "estimatedDurationMinutes": 60,       // whole minutes; null when it can't be derived
        "isComplete": false,
        "isSkipped": false,
        "colorHex": "#F97316",
        "deepLink": "https://app.endorphinsrunning.com/linkd/training-plan/day/66a2...",
        "provider": "ENDORPHINS"              // or "MADABOLIC" for a partner-delivered strength day
      }
    ]
  }
}` }, { id: "gpt-pace", method: "GET", path: "/gpt/pace", title: "Pace zones & predictions", scope: "read:training", mcpTool: "gpt_get_pace", description: 'The runner\u2019s pace/training zones, preferred unit, and race-time predictions. With no active plan REST returns { "paceZones": null } alone and the gpt_get_pace tool returns all three keys null. Over REST the response is the full zone and prediction bundle, unchanged and abbreviated below; the gpt_get_pace tool returns the compact shape in the second sample (one row per sub-zone with its label, pace band in the plan\u2019s unit and effort band, and one row per predicted distance with the athlete-facing prediction fields only; the internal generation and aiPrediction blocks are never sent). The tool never includes heart-rate zones (see /gpt/heart-rate-zones); the REST bundle still carries the plan\u2019s placeholder heartRateZone per sub-zone, which is not the athlete\u2019s configured HR.', request: "GET ".concat(r, "/gpt/pace\n").concat(l), response: `// REST (unchanged), abbreviated:
{
  "paceZones": { /* trainingZonesV2 bundle, shape abbreviated */ },
  "preferredUnit": "MILES",
  "predictions": { /* race-time predictions, shape abbreviated */ }
}

// gpt_get_pace tool (one row per sub-zone and per predicted distance, in the plan's unit;
// all three keys are null with no active plan):
{
  "preferredUnit": "mi",
  "paceZones": [
    { "zone": "UT2", "parentZone": "ZONE_2", "label": "Easy", "pace": { "low": "9:00", "high": "9:30", "unit": "mi" }, "effort": { "low": 3, "high": 4 }, "effortGuided": false },
    { "zone": "AT", "parentZone": "ZONE_4", "label": "Threshold", "pace": { "low": "6:30", "high": "6:40", "unit": "mi" }, "effort": { "low": 7, "high": 8 }, "effortGuided": false }
    // ...UT3, UT1, TR, AC, AP; pace is null (effort only) on an effort-guided zone
  ],
  "predictions": [
    {
      "distance": "FIVEK",
      "predictedRaceTime": "19:48",
      "predictedRaceTimeRange": { "low": "19:30", "high": "20:10" },
      "racePace": { "value": "6:22", "unit": "MILES" },
      "suppressed": false,
      "suppressedReason": null,
      "asOf": "2026-07-15T06:00:00.000Z"
    }
    // ...TENK, HALF, FULL
  ]
}` }, { id: "gpt-goals", method: "GET", path: "/gpt/goals", title: "Goals", scope: "read:training", mcpTool: "gpt_get_goals", description: 'The runner\u2019s stated goals: per-distance race-time targets (keyed by race type such as FIVEK, HALF, FULL) and period volume/time goals (WEEKLY, MONTHLY, YEARLY). Returns { "goals": {} } when none are set.', request: "GET ".concat(r, "/gpt/goals\n").concat(l), response: '{\n  "goals": {\n    "FULL": {\n      "hours": "2",\n      "minutes": "59",\n      "seconds": "00",\n      "type": "RACE",\n      "dateAdded": "2026-01-04T18:00:00.000Z"\n    },\n    "WEEKLY": {\n      "DISTANCE": {\n        "value": "40",\n        "unit": "miles",\n        "type": "DISTANCE",\n        "dateAdded": "2026-01-04T18:00:00.000Z"\n      }\n    }\n  }\n}' }, { id: "gpt-coach-memory", method: "GET", path: "/gpt/coach-memory", title: "Coach memory", scope: "read:training", mcpTool: "gpt_get_coach_memory", description: "The coach\u2019s durable memories about the runner (preferences, constraints, injury history, goals, quirks). Internal provenance (source messages, quotes) is stripped \u2014 only athlete-meaningful fields are returned.", request: "GET ".concat(r, "/gpt/coach-memory\n").concat(l), response: '{\n  "memories": [\n    {\n      "category": "CONSTRAINTS",\n      "text": "Can only do long runs on Sundays.",\n      "importance": 0.8,\n      "expiresAt": null\n    },\n    {\n      "category": "INJURY_HISTORY",\n      "text": "History of left IT band irritation on high-volume weeks.",\n      "importance": 0.9,\n      "expiresAt": null\n    }\n  ]\n}' }, { id: "gpt-plan-adjustments-get", method: "GET", path: "/gpt/plan-adjustments", title: "Recent plan adjustments", scope: "read:training", mcpTool: "gpt_get_plan_adjustments", description: "Recent adjustments to the current plan (last 8 weeks, up to 25), with a human-readable description and status. Internal prompts and reasoning are excluded; admin-only states (FAILED, SKIPPED_INELIGIBLE) are omitted.", request: "GET ".concat(r, "/gpt/plan-adjustments\n").concat(l), response: '{\n  "adjustments": [\n    {\n      "adjustmentId": "66c3d2...",\n      "modificationType": "VOLUME",\n      "description": "Reduced next week\u2019s volume by 12% for recovery.",\n      "status": "ACCEPTED",\n      "origin": "APP",\n      "createdAt": "2026-07-10T13:05:00.000Z"\n    }\n  ]\n}' }, { id: "gpt-plan-history", method: "GET", path: "/gpt/plan-history", title: "Plan history", scope: "read:training", mcpTool: "gpt_get_plan_history", description: "The runner\u2019s past (completed or abandoned) training plans with completion stats. Useful for historical context. Shape abbreviated below.", request: "GET ".concat(r, "/gpt/plan-history\n").concat(l), response: '{\n  "plans": [\n    {\n      "_id": "66a0b1...",\n      "name": "Spring Half Build",\n      "raceDate": "2026-04-05T00:00:00.000Z",\n      "status": "COMPLETED",\n      "stats": {\n        "totalVolume": 412,\n        "completionPercentage": 88\n      }\n      // ...additional fields\n    }\n  ]\n}' }, { id: "gpt-heart-rate-zones", method: "GET", path: "/gpt/heart-rate-zones", title: "Heart-rate zones", scope: "read:training", mcpTool: "gpt_get_heart_rate_zones", description: "The runner\u2019s 5-zone BPM bounds plus the canonical 7 sub-zone (UT3\u2026AP) ranges derived from them.", request: "GET ".concat(r, "/gpt/heart-rate-zones\n").concat(l), response: '{\n  "zones": {\n    "zone1": { "low": 0, "high": 120 },\n    "zone2": { "low": 120, "high": 140 },\n    "zone3": { "low": 140, "high": 160 },\n    "zone4": { "low": 160, "high": 178 },\n    "zone5": { "low": 178, "high": 200 }\n  },\n  "subZones": [\n    { "subZone": "UT3", "low": 0, "high": 120 },\n    { "subZone": "UT2", "low": 120, "high": 140 },\n    { "subZone": "UT1", "low": 140, "high": 160 },\n    { "subZone": "AT", "low": 160, "high": 171 },\n    { "subZone": "TR", "low": 172, "high": 178 },\n    { "subZone": "AC", "low": 178, "high": 189 },\n    { "subZone": "AP", "low": 190, "high": 200 }\n  ]\n}' }] }, { id: "workout-data", title: "Workout data \xB7 read:workouts", endpoints: [{ id: "gpt-activities", method: "GET", path: "/gpt/activities", title: "Activities", scope: "read:workouts", mcpTool: "gpt_get_activities", description: "The runner\u2019s recent activities, newest first. Which fields are present depends on the data source (Strava, Garmin, Apple Health, COROS, Oura). GPS map data and precise location fields are stripped for privacy. Over REST the defaults are unchanged (120 days, every field); the gpt_get_activities tool defaults to 30 days, 50 rows and the compact row shown in the second sample.", params: [{ name: "days", location: "query", required: false, description: "Look-back window in days, clamped 1-365. Default 120 over REST; the `gpt_get_activities` tool defaults to 30." }, { name: "sinceDate", location: "query", required: false, description: "ISO 8601 date; takes precedence over days when valid." }, { name: "limit", location: "query", required: false, description: "Maximum number of activities, newest first (integer, applied in the query). No limit over REST unless passed; the tool defaults to 50. A non-integer or a value below 1 is a 400; larger values clamp to 200." }, { name: "fields", location: "query", required: false, description: '"full" or "compact". Default full over REST; the tool defaults to compact. Compact rows carry _id, name, type, start_date_local, distance + unit ("mi" or "km"), moving_time, pace per that unit, average_heartrate, total_elevation_gain, activitySource, workoutId, withEndorphins and the top 3 bestEfforts. Any other value is a 400 naming the valid values.' }], request: "GET ".concat(r, "/gpt/activities?days=30\n").concat(l), response: `// fields=full (the REST default):
{
  "activities": [
    {
      "_id": "66a1f0...",
      "name": "Morning Run",
      "type": "Run",
      "start_date": "2026-06-20T11:03:00.000Z",       // UTC
      "start_date_local": "2026-06-20T07:03:00.000Z", // user local time
      "distance": 8046.7,            // meters
      "distance_miles": 5.0,
      "distance_kilometers": 8.05,
      "moving_time": 2400,           // seconds
      "elapsed_time": 2500,          // seconds
      "elapsed_time_string": "41:40",
      "average_pace_per_mile": "8:00",
      "average_pace_per_km": "4:58",
      "average_heartrate": 152,
      "calories": 612,               // active kcal, if the source reported it
      "total_elevation_gain": 42.3,  // meters
      "trainingLoad": 61,
      "activitySource": "STRAVA",
      "workoutId": "66a2...",        // linked plan workout, if any
      "withEndorphins": false,
      "bestEfforts": [
        { "distance": "5K", "time": "24:12", "pacePerMile": "7:47", "pacePerKm": "4:50" }
      ]
    }
  ]
}

// fields=compact (the gpt_get_activities tool default):
{
  "fields": "compact",
  "unit": "mi",                                       // the plan's unit, else the profile preference ("mi" or "km")
  "activities": [
    {
      "_id": "66a1f0...",
      "name": "Morning Run",
      "type": "Run",
      "start_date_local": "2026-06-20T07:03:00.000Z", // user local time
      "distance": 5.0, "unit": "mi",
      "moving_time": 2400,                            // seconds
      "pace": "8:00",                                 // per unit above
      "average_heartrate": 152,
      "total_elevation_gain": 42.3,                   // meters
      "activitySource": "STRAVA",
      "workoutId": "66a2...",
      "withEndorphins": false,
      "bestEfforts": [                                // top 3, longest first
        { "distance": "5K", "time": "24:12", "pace": "7:47" }
      ]
    }
  ]
}` }, { id: "gpt-activity-detail", method: "GET", path: "/gpt/activity-detail/:activityId", title: "Activity detail", scope: "read:workouts", mcpTool: "gpt_get_activity_detail", description: "Full detail for one of the runner\u2019s own activities: splits, laps, per-zone HR seconds, performance score, and race prediction. Self-only \u2014 never returns another user\u2019s activity. Geo/map fields, raw per-sample streams, and the deprecated efficiency score are stripped.", params: [{ name: "activityId", location: "path", required: true, description: "The activity\u2019s _id (must belong to the caller)." }], request: "GET ".concat(r, "/gpt/activity-detail/66a1f0c3d4e5f60011223344\n").concat(l), response: '{\n  "activity": {\n    "_id": "66a1f0...",\n    "name": "Threshold Session",\n    "type": "Run",\n    "distance": 14484,             // meters\n    "moving_time": 3600,\n    "elapsed_time": 3720,\n    "average_pace_per_mile": "6:40",\n    "average_heartrate": 168,\n    "max_heartrate": 182,\n    "start_date": "2026-06-18T10:30:00.000Z",\n    "start_date_local": "2026-06-18T06:30:00.000Z",\n    "splits_standard": [\n      { "distance": 1609, "elapsed_time": 400, "pace": "6:40" }\n    ],\n    "laps": [ /* ... */ ],\n    "heart_rate_zones": { "zone1": 120, "zone2": 640, "zone3": 900, "zone4": 1500, "zone5": 440 },\n    "performanceScore": { "overall": 84, "lapBreakdown": [ /* ... */ ] },\n    "workoutId": "66a2...",\n    "trainingLoad": 92\n  }\n}' }, { id: "gpt-week-summaries", method: "GET", path: "/gpt/week-summaries", title: "Week summaries", scope: "read:workouts", mcpTool: "gpt_get_week_summaries", description: "Persisted week-by-week summaries for the current plan (prescribed vs. actual volume, zone distribution, linked vs. unlinked activities). Read-only \u2014 does not regenerate. The deprecated per-week efficiency aggregate is stripped. Over REST without weeks the response is every week in the legacy shape, unchanged; with weeks=N (and on the gpt_get_week_summaries tool, default 4) it is the compact shape in the second sample: the N most recent weeks, newest first, distances in the plan\u2019s unit, whole minutes, with the efficiency, training-time, training-location and per-zone heart-rate sub-documents stripped.", params: [{ name: "weeks", location: "query", required: false, description: "Number of most recent plan weeks to return (integer, never more than the plan has). Passing it switches to the compact shape. Every week in the legacy shape over REST unless passed; the `gpt_get_week_summaries` tool defaults to 4. A non-integer or a value below 1 is a 400; larger values clamp to 26." }], request: "GET ".concat(r, "/gpt/week-summaries\n").concat(l), response: '// no weeks (the REST default, legacy shape):\n{\n  "weekSummaries": [\n    {\n      "trainingId": "66b2a1...",\n      "weekNumber": 6,\n      "prescribedWorkoutSummary": { "totalVolume": 42, "numWorkouts": 6 },\n      "linkedActivitySummary": { "totalVolume": 39.5, "numActivities": 5 },\n      "unlinkedActivitySummary": { "totalVolume": 3.1, "numActivities": 1 }\n    }\n  ]\n}\n\n// weeks=4 (and the gpt_get_week_summaries tool), newest first:\n{\n  "unit": "mi",\n  "weeks": 4,\n  "weekSummaries": [\n    {\n      "week": 6,\n      "unit": "mi",\n      "prescribed": {\n        "countSummary": { "totalRuns": 5, "intervalRuns": 1, "tempoRuns": 1, "easyRuns": 2, "longRuns": 1, "totalCrossTrain": 0, "totalStrength": 1 },   // stored keys, passed through\n        "distanceSummary": { "totalRun": 42, "interval": 5, "tempo": 7, "easy": 16, "long": 14 },\n        "timeSummary": { "totalRun": 350, "interval": 40, "tempo": 50, "easy": 150, "long": 110, "crossTrain": 0, "strength": 30 }   // whole minutes\n      },\n      "actual": {\n        "countSummary": { "totalRuns": 5, "intervalRuns": 1, "tempoRuns": 1, "easyRuns": 2, "longRuns": 1, "totalCrossTrain": 0, "totalStrength": 1 },\n        "distanceSummary": { "totalRun": 39.5, "interval": 5, "tempo": 7, "easy": 13.4, "long": 14.1 },\n        "timeSummary": { /* same keys */ },\n        "byType": { "easyRuns": { "distance": 13.4, "averageHeartRate": 141, "averagePace": "9:12", "averageCadence": 172, "dataQuality": { "percentWithHR": 100, "treadmillDistance": 0, "outdoorDistance": 13.4 } } /* ...tempoRuns, intervalRuns, longRuns; null with no data */ }\n      },\n      "missedWorkouts": [ { "type": "EASY_RUN", "date": "2026-07-09", "description": "Easy 4 mi" } ],\n      "updatedAt": "2026-07-13T02:10:00.000Z"\n    }\n    // ...3 older weeks\n  ]\n}' }, { id: "gpt-profile-charts", method: "GET", path: "/gpt/profile-charts", title: "Profile charts", scope: "read:workouts", mcpTool: "gpt_get_profile_charts", description: "The full profile-screen chart bundle: mileage trends, fitness/fatigue, training focus, HR-zone distribution, and race predictions \u2014 the same data the in-app profile charts render. The deprecated efficiency score is excluded. Bundle is large; shape abbreviated. Over REST the default is unchanged (every period, every chart); the gpt_get_profile_charts tool defaults to the last-12-weeks period and the six charts below, and never returns the activity heatmap or per-activity arrays.", params: [{ name: "preferredUnit", location: "query", required: false, description: '"MILES" (default) or "KILOMETERS" over REST; when absent, the `gpt_get_profile_charts` tool defaults to the plan\u2019s unit.' }, { name: "period", location: "query", required: false, description: 'One chart period: "last-7-days", "last-1-month", "last-12-weeks", "last-6-months", "year-to-date" or "last-12-months". Every period over REST unless passed; the `gpt_get_profile_charts` tool defaults to last-12-weeks. Any other value is a 400 naming the valid values.' }, { name: "charts", location: "query", required: false, description: 'Comma-separated subset of "mileage", "fitness", "predictedTimes", "trainingFocus", "hrZones", "monthlyComparison" (an array on the MCP tool). Every chart over REST unless passed; the tool defaults to all six. Passing period or charts switches to the compact shape. An unknown name is a 400 naming the valid values.' }], request: "GET ".concat(r, "/gpt/profile-charts?preferredUnit=MILES\n").concat(l), response: `// no period / charts (the REST default, unchanged), abbreviated:
{
  "charts": {
    "mileage": { "last-12-weeks": [ /* weekly points */ ] /* ...one key per period */ },
    "mileageByType": { /* per activity type, shape abbreviated */ },
    "fitness": { /* fitness vs. fatigue series per period, shape abbreviated */ },
    "predictedTimes": { /* race-time predictions per period, shape abbreviated */ },
    "trainingFocus": { /* intensity split per period, shape abbreviated */ },
    "hrZones": { /* zone distribution per period, shape abbreviated */ },
    "hrZoneBounds": { "z1": { "low": 0, "high": 120 } /* ...z5 */ },
    "monthlyComparison": { /* shape abbreviated */ },
    "heatmap": { /* never sent to the gpt_get_profile_charts tool */ }
  }
}

// period=last-12-weeks (the gpt_get_profile_charts tool default; one period, the requested charts):
{
  "charts": {
    "period": "last-12-weeks",
    "unit": "mi",                        // "mi" or "km"; the plan's unit unless preferredUnit was passed
    "mileage": [ /* weekly points for the period */ ],
    "fitness": [ { "date": "2026-07-16", "dailyLoad": 61, "fitness": 48.2, "fatigue": 55.7 } ],
    "predictedTimes": {
      "FIVEK": { "current": 1188, "suppressed": false, "readiness": null, "series": [ { "date": "2026-07-16", "label": "Jul 16", "value": 1188 } ] }
      // ...per distance; seconds. readiness is { state, penaltyPct, longestRunMiles, weeklyMiles } when the distance is under-prepared; suppressionReason only when suppressed
    },
    "trainingFocus": { /* intensity split for the period */ },
    "hrZones": { "byCategory": { /* per activity category */ }, "bounds": { "z1": { "low": 0, "high": 120 } /* ...z5 */ } },
    "monthlyComparison": {
      "currentPeriod": { /* totals */ }, "previousPeriod": { /* totals */ },
      "chartData": [ { "date": "2026-07-16", "label": "Jul 16", "value": 118.4, "secondaryValue": 102.9 } ]
    }
  }
}` }, { id: "gpt-training-load", method: "GET", path: "/gpt/training-load", title: "Training load", scope: "read:workouts", mcpTool: "gpt_get_training_load", description: "A training-load summary (acute/chronic load, intensity split, ACWR with injury-risk bands) as a ready-to-render Markdown string plus an optional one-line highlight \u2014 the same computation the in-app coach uses. The structured block carries the same numbers unparsed (ACWR and its band, acute and chronic load per day, and the 7, 30 and 90-day windows).", request: "GET ".concat(r, "/gpt/training-load\n").concat(l), response: '{\n  "summary": "**Acute:Chronic (ACWR): 1.08** \u2014 in the sweet spot...\\n\\n- Easy: 78%\\n- Threshold: 14%\\n- VO2: 8%",\n  "highlight": "Load is balanced; you can hold this shape another week.",\n  "structured": {                       // the same numbers as the summary, unparsed\n    "acwr": 1.08,\n    "acwrBand": "sweet",                // "detraining" | "sweet" | "amber" | "red"; null without enough history\n    "acuteAvgTlPerDay": 61.2,\n    "chronicAvgTlPerDay": 56.7,\n    "windows": [\n      { "key": "7D", "totalImpact": 428, "activityCount": 6, "avgPerActivity": 71, "aerobicPct": 78, "highAerobicPct": 14, "anaerobicPct": 8, "shape": "balanced" }\n      // ...30D, 90D\n    ]\n  }\n}' }, { id: "gpt-personal-records", method: "GET", path: "/gpt/personal-records", title: "Personal records", scope: "read:workouts", mcpTool: "gpt_get_personal_records", description: "The runner\u2019s current personal records (one per distance). Optionally filter to a single distance.", params: [{ name: "distance", location: "query", required: false, description: "One distance, e.g. FIVEK, TENK, HALF, FULL. Omit for all." }], request: "GET ".concat(r, "/gpt/personal-records\n").concat(l), response: '{\n  "personalRecords": [\n    {\n      "_id": "66d4e3...",\n      "distance": "FIVEK",\n      "distanceMeters": 5000,\n      "elapsedTimeSeconds": 1149,\n      "averagePacePerMile": "6:10",\n      "averagePacePerKm": "3:50",\n      "startDate": "2026-05-30T12:10:00.000Z",\n      "isCurrentPersonalRecord": true\n    }\n  ]\n}' }] }, { id: "health-data", title: "Health data \xB7 read:health", endpoints: [{ id: "gpt-recovery", method: "GET", path: "/gpt/recovery", title: "Recovery & wellness", scope: "read:health", mcpTool: "gpt_get_recovery", description: "Device wellness/recovery data \u2014 HRV, sleep, resting HR, stress, body battery, VO2max, SpO2, respiration (each with a baseline + trend) \u2014 plus latest body composition, menstrual cycle, and blood pressure. Coverage varies by device; unavailable metrics come back null. Sensitive health data, gated behind read:health.", params: [{ name: "days", location: "query", required: false, description: "Look-back window in days. Default 30, clamped 1\u2013365." }], request: "GET ".concat(r, "/gpt/recovery?days=30\n").concat(l), response: '{\n  "summary": {\n    "hrv": { "value": 68, "trend": "UP", "baseline": 62 },\n    "sleep": { "value": 7.4, "trend": "STABLE", "baseline": 7.2 },\n    "restingHeartRate": { "value": 48, "trend": "DOWN", "baseline": 50 }\n    // ...stress, bodyBattery, vo2Max, spO2, respiration\n  },\n  "source": "GARMIN",\n  "availability": { "hrv": true, "sleep": true, "restingHeartRate": true },\n  "bodyComposition": null,\n  "menstrualCycle": null,\n  "bloodPressure": null\n}' }, { id: "gpt-recovery-series", method: "GET", path: "/gpt/recovery-series", title: "Recovery time-series", scope: "read:health", mcpTool: "gpt_get_recovery_series", description: "Per-day recovery series (resting HR, HRV, sleep duration and score, sleep stages, stress, body battery, VO2max, respiration, SpO2, steps) over a look-back window: the dense daily arrays behind /gpt/recovery\u2019s snapshot, for charting recovery over time. A metric the device does not report comes back as an empty array and availability says which ones are present. Sensitive health data, gated behind read:health.", params: [{ name: "days", location: "query", required: false, description: "Look-back window in days. Default 30, clamped 1-365." }], request: "GET ".concat(r, "/gpt/recovery-series?days=30\n").concat(l), response: '{\n  "availability": { "hasAnyWellness": true, "hasRestingHr": true, "hasHrv": true, "hasSleepDuration": true /* ...per metric */ },\n  "series": {\n    "restingHr": [ { "calendarDate": "2026-07-16", "value": 48, "source": "GARMIN" } ],\n    "hrv": [ { "calendarDate": "2026-07-16", "value": 68, "source": "GARMIN" } ],\n    "sleepDuration": [ { "calendarDate": "2026-07-16", "value": 7.4, "source": "GARMIN" } ],\n    "sleepScore": [ /* same point shape */ ],\n    "sleepStages": [ { "calendarDate": "2026-07-16", "deepSeconds": 5400, "lightSeconds": 12600, "remSeconds": 6300, "awakeSeconds": 900, "totalSeconds": 25200, "source": "GARMIN" } ],\n    "stress": [ { "calendarDate": "2026-07-16", "value": 31, "category": "LOW", "restSeconds": 28800, "lowSeconds": 21600, "mediumSeconds": 5400, "highSeconds": 600, "source": "GARMIN" } ],\n    "bodyBattery": [ { "calendarDate": "2026-07-16", "high": 92, "low": 24, "charged": 70, "drained": 68, "source": "GARMIN" } ],\n    "vo2Max": [ /* same point shape */ ],\n    "fitnessAge": [], "respiration": [], "spo2": [],\n    "steps": [ { "calendarDate": "2026-07-16", "value": 11423, "source": "GARMIN" } ]\n  },\n  "window": { "startCalendarDate": "2026-06-17", "endCalendarDate": "2026-07-16", "days": 30 }\n}' }, { id: "gpt-daily-energy", method: "GET", path: "/gpt/daily-energy", title: "Daily energy", scope: "read:health", mcpTool: "gpt_get_daily_energy", description: "Daily total energy expenditure (active + resting/BMR kcal, plus steps) so you can compute a true calorie deficit \u2014 full daily burn, not just per-workout burn. Newest first. totalKilocalories is present only when the source reported both active and BMR; a missing value is omitted (never sent as 0), so handle absent fields gracefully.", params: [{ name: "days", location: "query", required: false, description: "Look-back window in days. Default 30, clamped 1\u2013365." }, { name: "sinceDate", location: "query", required: false, description: "ISO 8601 date; alternative to days." }], request: "GET ".concat(r, "/gpt/daily-energy?days=30\n").concat(l), response: '{\n  "days": [\n    {\n      "date": "2026-07-16",           // YYYY-MM-DD calendar date\n      "activeKilocalories": 820,      // active burn (all activity, not just runs)\n      "bmrKilocalories": 1750,        // basal / resting burn\n      "totalKilocalories": 2570,      // active + BMR, only when BOTH are reported\n      "steps": 11423,\n      "source": "GARMIN"\n    }\n  ]\n}' }, { id: "gpt-injury-status", method: "GET", path: "/gpt/injury-status", title: "Injury status", scope: "read:health", mcpTool: "gpt_get_injury_status", description: "Whether the runner is currently injured or in an injury-return ramp, with a short reason. Sensitive \u2014 gated behind read:health.", request: "GET ".concat(r, "/gpt/injury-status\n").concat(l), response: '{\n  "isInInjuryState": false,\n  "isInjured": false,\n  "isInActiveRamp": false,\n  "reason": null\n}' }] }, { id: "write-data", title: "Writes \xB7 write:training (propose-only)", intro: "Write endpoints never change a plan directly \u2014 they create a proposal the athlete approves in-app. write:training is never granted by default: a portal app or a dynamically-registered client must request it explicitly, and the athlete always sees the consent screen before it is granted. Calling these endpoints requires an active subscription.", endpoints: [{ id: "gpt-plan-adjustments-post", method: "POST", path: "/gpt/plan-adjustments", title: "Propose a plan adjustment", scope: "write:training", mcpTool: "gpt_propose_plan_adjustment", gate: "active subscription required", description: "Propose a change to the runner\u2019s plan (e.g. weekly volume or target pace). This is PROPOSE-ONLY: it creates a PENDING proposal the athlete must approve in-app \u2014 nothing on the live plan changes until they do. Identical proposals are idempotent (a retry returns the existing pending one). A dynamically-registered client may request write:training; because it is propose-only it is grantable, but the athlete always sees the consent screen before any write scope reaches a token.", params: [{ name: "changes", location: "body", required: true, description: "Array of { field, value, weekNumber? } adjustments." }, { name: "cascadeVolume", location: "body", required: false, description: "When true, cascade a volume change across subsequent weeks." }], request: "POST ".concat(r, "/gpt/plan-adjustments\n").concat(l, '\nContent-Type: application/json\n\n{\n  "changes": [\n    { "field": "targetVolume", "value": 45, "weekNumber": 8 }\n  ],\n  "cascadeVolume": true\n}'), response: '{\n  "status": "PENDING_ATHLETE_APPROVAL",\n  "proposalId": "66e5f4...",\n  "adjustments": [\n    {\n      "field": "targetVolume",\n      "label": "Week 8 volume",\n      "currentValue": "40 mi",\n      "proposedValue": "45 mi",\n      "reasoning": "Load has been well tolerated; a modest step-up is safe."\n    }\n  ],\n  "preview": {\n    "nextWeekNumber": 8,\n    "currentNextWeekMileage": 40,\n    "modifiedNextWeekMileage": 45\n  },\n  "expiresInDays": 6,\n  "alreadyPending": false,\n  "note": "Nothing has been changed yet. The athlete must confirm in the Endorphins app."\n}' }, { id: "gpt-plan-adjustments-resolve", method: "POST", path: "/gpt/plan-adjustments/:proposalId/resolve", title: "Resolve a proposal", scope: "write:training", mcpTool: "gpt_confirm_plan_adjustment", gate: "active subscription required", description: "Accept or decline a proposal your app previously created (only your own proposals are resolvable). Accepting regenerates the live plan immediately; declining discards the proposal.", params: [{ name: "proposalId", location: "path", required: true, description: "The proposalId returned when you created the proposal." }, { name: "accept", location: "body", required: true, description: "true to apply, false to decline." }], request: "POST ".concat(r, "/gpt/plan-adjustments/66e5f4.../resolve\n").concat(l, '\nContent-Type: application/json\n\n{ "accept": true }'), response: '{\n  "status": "APPLIED",\n  "proposalId": "66e5f4...",\n  "note": "The training plan has been updated. The athlete can undo this from the app for a short window."\n}' }] }, { id: "mcp-tools", title: "MCP-only tools \xB7 plan setup and capability requests", intro: 'The same handlers are also tools on the Endorphins MCP server, so an AI assistant can call them in conversation. Every gpt endpoint above carries a pill naming its tool. A tool returns the same data as its endpoint; where the tool\u2019s default view differs, the entry says so. The tools below exist only as tools and have no REST mirror: two build a first plan by conversation (write:training; unlike the propose-only writes they need no subscription), and gpt_request_capability records something the athlete asked for that no tool covers (read:profile). A tool result is the JSON the matching endpoint returns. Every tool also accepts two optional arguments that never change its result: context, one sentence on what the athlete asked (ideally under 300 characters; longer text is trimmed to 300), in the assistant\u2019s own words with no names or health values, logged for product analytics after scrubbing (dropped entirely if it contains an email address or phone number, digit runs replaced with #; this logging can be switched off on our side); and conversation_id, the handle from an earlier result in the same conversation. Every successful result ends with an extra text block { "conversation_id": "mcpc_<24 hex characters>" }: pass it back on the next call so the calls of one conversation group together. A handle is bound to the athlete it was issued for: a missing or malformed handle, or one issued to a different athlete, gets a new one. A failed call returns an error result (isError: true) whose text is { "error": <code>, "message", "hint" }: the hint, present for the common codes, says what to do next (for TRAINING_PLAN_NOT_FOUND, build one with gpt_update_plan_setup when the session holds write:training, otherwise build one in the Endorphins app), and SUBSCRIPTION_REQUIRED also carries "upgradeUrl" (https://app.endorphinsrunning.com/training-purchase?source=mcp_<tool>), the paywall link to offer the runner once instead of a dead end. A failure on our side, on a read or a write, returns the same shape with { "error": "INTERNAL_ERROR", "message": "This request failed on our side; try again or use another tool." }.', endpoints: [{ id: "mcp-update-plan-setup", method: "POST", path: "gpt_update_plan_setup", title: "Update plan setup", scope: "write:training", description: 'Record one or more setup fields for a new training plan while building it by conversation (the draft is created when a goal is provided). Only for a runner with no active plan: with a LIVE plan the result is { "status": "LIVE_PLAN_EXISTS" } and a note pointing to gpt_propose_plan_adjustment. Pass every fact the runner states in one call; the result carries an internal readiness report with a NEXT directive the assistant follows (one question per turn, never re-asking a collected field, never shown verbatim). Free: no subscription is required, matching in-app onboarding.', params: [{ name: "goal", location: "body", required: false, description: '"RACE", "GENERAL" or "INTRO_TO_RUNNING". Creates the draft when first given.' }, { name: "subGoal", location: "body", required: false, description: 'For GENERAL plans: "GET_FASTER", "GET_BACK_INTO", "BUILD_BASE" or "STAY_HEALTHY", inferred from the runner\u2019s words.' }, { name: "raceId", location: "body", required: false, description: "A catalog race id; fills raceDistance and raceDate for that distance. Explicit raceDistance / raceDate win when both are passed." }, { name: "raceDistance", location: "body", required: false, description: "The race distance (FIVEK, TENK, HALF, FULL, ...)." }, { name: "raceDate", location: "body", required: false, description: "Race date as YYYY-MM-DD." }, { name: "raceGoal", location: "body", required: false, description: '"SET_PR", "RUN_SPECIFIC_TIME", "COMPLETE_RACE" or "HAVE_FUN". The first two also take goalRaceTime (H:MM:SS or MM:SS).' }, { name: "goalRaceTime", location: "body", required: false, description: "Goal finish time as H:MM:SS or MM:SS; with SET_PR or RUN_SPECIFIC_TIME." }, { name: "recentPR", location: "body", required: false, description: '{ status: "STATED" | "NONE" | "CONFIRMED", distance?, time? }: a recent race time that anchors paces without overwriting the goal time.' }, { name: "level", location: "body", required: false, description: "Training level, inferred and set silently (never asked as a tier)." }, { name: "availabilityDays", location: "body", required: false, description: "Full day names the runner can run (MONDAY ... SUNDAY)." }, { name: "longRunDay", location: "body", required: false, description: "The day for the weekly long run." }, { name: "startDate", location: "body", required: false, description: "Plan start date as YYYY-MM-DD." }, { name: "workoutsPerWeek", location: "body", required: false, description: "Runs per week (2 to 7), only when the runner stated a count." }, { name: "intenseWorkouts", location: "body", required: false, description: "Speed or quality workouts per week (0 to 2)." }, { name: "monthlyMiles, startMileage, peakMileage, minLongRunDistance, maxLongRunDistance", location: "body", required: false, description: "Volume numbers in miles: recent monthly volume, starting and peak weekly mileage, long-run bounds." }, { name: "terrainProfile, prescriptionUnit, gradualStart", location: "body", required: false, description: "Terrain (FLAT, ROLLING, HILLY, MOUNTAINOUS); whether workouts are prescribed by DISTANCE or TIME; whether to ease into the first weeks." }], request: 'tools/call gpt_update_plan_setup\n{\n  "goal": "RACE",\n  "raceDistance": "FULL",\n  "raceDate": "2026-10-11",\n  "workoutsPerWeek": 5,\n  "longRunDay": "SATURDAY"\n}', response: '{\n  "status": "RECORDED",                 // or "NEEDS_MORE_INFO" (with a directive), "FAILED" (with a message), "LIVE_PLAN_EXISTS"\n  "report": "...readiness report with a NEXT directive; never shown to the runner verbatim...",\n  "note": "Follow the NEXT directive in the report: acknowledge naturally, ask ONE question per turn, and never re-ask anything already collected."\n}' }, { id: "mcp-propose-plan-generation", method: "POST", path: "gpt_propose_plan_generation", title: "Generate the plan", scope: "write:training", description: 'Generate and activate the plan assembled with gpt_update_plan_setup, live and ready to train, with no separate confirm step. Only once the readiness report says everything is collected and the runner has explicitly asked to build it; anything still missing returns { "status": "NOT_READY" } with a directive naming what to collect. With a LIVE plan the result is { "status": "LIVE_PLAN_EXISTS" }. Free: no subscription is required. No parameters.', request: "tools/call gpt_propose_plan_generation\n{}", response: `{
  "status": "PLAN_GENERATED",            // or "NOT_READY" (with a directive), "FAILED" (with a message), "LIVE_PLAN_EXISTS"
  "report": "...the plan's real numbers (weeks, workouts, days per week)...",
  "note": "The plan is generated and LIVE. Announce it warmly with the real numbers from the report and point the athlete to the Training tab in the Endorphins app."
}` }, { id: "mcp-request-capability", method: "POST", path: "gpt_request_capability", title: "Request a capability", scope: "read:profile", description: "Report something the athlete asked for that no Endorphins tool can do yet. The request is recorded for the product team and changes nothing on the athlete\u2019s account; the result tells the assistant to say plainly that it is not available yet and to offer the closest thing it can do. Call it once per request, with a short description in your own words: no names and no health values.", params: [{ name: "capability", location: "body", required: true, description: 'A short description of what the athlete asked for (3 to 200 characters; longer text is rejected), e.g. "export the plan to a calendar".' }], request: 'tools/call gpt_request_capability\n{\n  "capability": "export the plan to a calendar"\n}', response: '{\n  "recorded": true,\n  "note": "Tell the athlete this is not available yet and offer the closest thing you can do."\n}' }] }, { id: "partner-write-data", title: "Partner writes \xB7 write:activities", intro: "write:activities records completed partner workouts on the runner\u2019s account. It is a partner-only scope granted through the developer portal to the partner client, never via Dynamic Client Registration.", endpoints: [{ id: "gpt-activities-post", method: "POST", path: "/gpt/activities", title: "Record a partner activity", scope: "write:activities", gate: "partner clients only", description: "Record a completed partner studio session (a signed-in MADabolic class) as an activity on the runner\u2019s account. This records a fact about the past, not a plan change: the activity runs through the same dedup and auto-link path as a watch recording, which marks a matching strength day on the plan complete. Idempotent per visitId (a re-push updates the same activity). Only the partner client holding write:activities can call it; any other client gets a 403 even with the scope.", params: [{ name: "visitId", location: "body", required: true, description: "The partner\u2019s visit id (string or number); the idempotency key per runner." }, { name: "siteId", location: "body", required: true, description: "The partner\u2019s numeric studio id." }, { name: "siteTimeZone", location: "body", required: true, description: 'IANA time zone of the studio (e.g. "America/New_York"); the class\u2019s local date comes from this.' }, { name: "startAt", location: "body", required: true, description: "ISO 8601 class start. May not be more than an hour in the future." }, { name: "endAt", location: "body", required: true, description: "ISO 8601 class end; after startAt and within 6 hours of it." }, { name: "studioName", location: "body", required: false, description: "Display name of the studio (up to 128 characters)." }, { name: "className", location: "body", required: false, description: "Class name, used to name one-off classes (up to 128 characters)." }, { name: "programType", location: "body", required: false, description: "Program badge (e.g. ANAEROBIC, DURABILITY); names the activity when present (up to 64 characters)." }, { name: "signedInAt", location: "body", required: false, description: "ISO 8601 time the runner signed in to the class." }], request: "POST ".concat(r, "/gpt/activities\n").concat(l, '\nContent-Type: application/json\n\n{\n  "visitId": "v_8821",\n  "siteId": 12,\n  "siteTimeZone": "America/New_York",\n  "studioName": "MADabolic Brooklyn",\n  "className": "WORK. REST. REPEAT.",\n  "programType": "DURABILITY",\n  "startAt": "2026-07-16T10:00:00.000Z",\n  "endAt": "2026-07-16T10:50:00.000Z"\n}'), response: '{\n  "activityId": "madabolic:v_8821",   // the idempotency key (madabolic:<visitId>), not the _id GET /gpt/activity-detail takes\n  "linkedWorkout": true                // a same-day STRENGTH plan workout was marked complete\n}' }] }], c = s.flatMap((function(e2) {
    return e2.endpoints;
  })), u = `You are helping me integrate the Endorphins running API into my app. Endorphins is a standard OAuth 2.0 + OpenID Connect provider ("Log in with Endorphins") that lets a runner authorize my app to read their training data.

Please implement the integration end to end. Use my stack's conventions and idiomatic libraries; ask me for my language/framework if I haven't said.

## Auth (OAuth 2.0 Authorization Code + PKCE)
- Base origin: `.concat(r, "\n- Discovery document (auto-configure endpoints from this): ").concat(r, "/.well-known/openid-configuration\n- Flow: redirect the user to /oauth/authorize with response_type=code, my client_id, a registered redirect_uri, the scopes I need, a random state, and a PKCE code_challenge (S256) + code_challenge_method=S256. On return, verify state, then exchange the code at /oauth/token with the code_verifier.\n- redirect_uri is MY app's own callback URL (e.g. https://my-app.com/api/integrations/endorphins/callback). Endorphins doesn't dictate the path \u2014 but the value I send must EXACTLY match one I registered in the developer portal (character-for-character, no wildcards, no trailing-slash differences). It must be https (http only for localhost) with no URL fragment. Build a callback route at whatever path I choose and register that exact URL.\n- Tokens: access_token lives 15 minutes; refresh_token lives 30 days and rotates on every use (grant_type=refresh_token at /oauth/token). Handle 401s by refreshing, then re-authorizing if refresh fails.\n- Public (browser/mobile) clients: PKCE only, never embed a client_secret. Confidential (server) clients: authenticate with HTTP Basic or client_secret in the body.\n- Identity: call /oauth/userinfo with the access token (requires the openid scope), or verify and decode the id_token (RS256, verify against the JWKS in the discovery doc; check iss and aud).\n\n## Scopes (request only what's needed; all read scopes are read-only)\n- openid, email, profile \u2014 identity\n- read:profile \u2014 profile fields\n- read:training \u2014 plan, paces, goals, scheduled workouts\n- read:workouts \u2014 activities, history, charts, personal records\n- read:health \u2014 recovery, daily energy, injury status (sensitive)\n- write:training \u2014 propose plan adjustments (propose-only; the athlete approves each one). Never granted by default: request it explicitly, and the athlete always sees the consent screen before it is granted.\n- write:activities \u2014 partner-only (records partner studio workouts); not available to my app unless Endorphins provisions it in the portal.\n\n## Resource endpoints (send Authorization: Bearer ACCESS_TOKEN; a token missing the scope gets 403)\n").concat(c.filter((function(e2) {
    return e2.scope && e2.path.startsWith("/");
  })).map((function(e2) {
    var t2 = e2.scope ? " (".concat(e2.scope, ")") : "", n2 = e2.description.split(". ")[0].replace(/\.$/, "");
    return "- ".concat(e2.method, " ").concat(e2.path).concat(t2, " \u2014 ").concat(n2);
  })).join("\n"), "\n\n## Important behaviors\n- GET /gpt/activities: newest first; accepts days (default 120, max 365), sinceDate (ISO 8601), limit (max 200; no limit unless passed) and fields=full|compact (default full). GPS/map and precise-location fields are stripped for privacy.\n- GET /gpt/plan: default is the full bundle; view=summary returns a few-KB plan header plus one row per week, and view=weeks with weekFrom/weekTo (span at most 4) returns compact workout rows for that window.\n- GET /gpt/today: default is the raw workout; view=compact returns the compact row plus description, structure and coachNote.\n- GET /gpt/profile-charts and GET /gpt/week-summaries return everything in the legacy shape by default; passing period/charts or weeks switches to the compact shape for one period / the N most recent weeks.\n- GET /gpt/daily-energy: totalKilocalories is present only when the source reported both active and BMR; missing fields are omitted, never 0 \u2014 handle absent fields gracefully.\n- Writes are PROPOSE-ONLY: POST /gpt/plan-adjustments creates a pending proposal the athlete must approve in-app; nothing changes on the live plan until they do.\n\n## What I want you to build\n1. The OAuth login + callback (with PKCE, state, and secure token storage appropriate to my client type).\n2. A small typed client wrapping the resource endpoints above, with automatic token refresh on 401.\n3. A working example that logs the user in and fetches their recent activities and current plan.\n\nRead the full reference (with sample request/response bodies) at ").concat(r, "/developer/docs. Ask me any clarifying questions before you start.");
});
