# VitalGuard AI v4.7.3 — Security Audit Scope Map

*Line-verified vendor-facing scope for the single-file, zero-runtime-network-dependency offline AI artifact.*

---

## Complete Artifact Structure — Full Code Table of Contents

The following index describes the complete physical structure of `VitalGuard_AI_complete_V47_3.html`. Line references are exact only for the artifact with SHA-256 `b81c067f5523bc68728ae84f2fc93ce05077705ae4cb7e882f1c859885f47615` and physical line count **13,294**.

### A. Document shell, security metadata and static interface

| Physical lines | Section / module | Primary function |
|---:|---|---|
| **1–11** | File header, purpose and licence notice | Project purpose, offline/privacy claims, copyright and Apache-2.0 notice. |
| **12–20** | HTML document and base metadata | Language, encoding, robots, SPDX and third-party licence declarations. |
| **21–24** | CSP security guard | Hash-pinned CSP, zero network connections, blocked workers/frames/forms and Trusted Types requirement. |
| **25–40** | Security, capability and release metadata | Required HTTP headers, disclosed limitations, integrity guidance, capability boundary, v4.7.3 reinforcement and release lineage. |
| **41–132** | First-executable hardening script | Frame blocking, WebRTC/Worker/network/popup/share/form/eval neutralisation, prototype freezing, invariant checks and diagnostic fingerprint API. |
| **133–244** | Base CSS system | Global theme, layout, navigation, cards, pet status, overlays, wizard, SOS, settings and reusable UI components. |
| **245–299** | v4.1 UI feature styles | Language controls, install banner, scan health, pet chips, QR, voice controls and emergency screen styles. |
| **300–310** | v4.2 visual polish | Hero animation and presentation refinements. |
| **311–326** | Secure Prompt modal styles | In-app passphrase/confirmation dialog replacing browser-native prompt input. |
| **327–331** | Accessibility mode styles | Large text, high contrast and reduced-motion modes. |
| **332–350** | v4.7.2 capability and clone-state styles | User-visible capability notice, capability manifest and BLE clone acknowledgment control. |
| **353–394** | Application shell and header | Install banner, application identity, mission/disclaimer text, source/help/about/language controls. |
| **395–508** | Home panel | Capability notice, project overview, feature badges, pet dashboard, monitoring controls and safety coach container. |
| **509–555** | SOS panel | Local BLE finder, manual encrypted hand-off notice, location/message controls, alarm and personal emergency entry. |
| **556–561** | Guide / Tips panel | Container for translated demo guide and field notes. |
| **562–661** | Settings panel | Alerts, performance, voice/audio, emergency mode, registered pets, backup/import/diagnostics/reset and guides. |
| **662–669** | Bottom navigation | Home, SOS, Guide and Settings navigation controls. |
| **670–747** | Registration wizard markup | BLE scan, movement verification, calibration, icon/name selection and save workflow. |
| **748–817** | Overlay containers | Pet detail, Help, Legal, Language, Diagnostics and Emergency configuration overlays. |
| **818–844** | Full-screen emergency displays | SOS alarm screen and personal emergency siren/strobe/QR/contact screen. |
| **845–846** | Static application shell closure | Closes the root application container before the main runtime script. |

### B. Main runtime security and foundation modules

| Physical lines | Section / module | Primary function |
|---:|---|---|
| **847–924** | Main script opening and v4.7.3 changelog | Release provenance, implemented controls, completed/uncompleted tests and status disclaimers. |
| **925–939** | Strict-mode frame check and early network kill-switch | Stops framed execution and re-neutralises fetch, XHR, WebSocket, EventSource and sendBeacon before modules load. |
| **940–956** | Early input sanitizer | Sanitises names, phone numbers, text, icons and identifiers. |
| **957–1,319** | Action policy and dispatcher | Allowlisted `Namespace.method(args)` event execution, two-phase static/runtime parsing and exact argument contracts. |
| **1,321–1,663** | Trusted Types and HTML sanitisation guard | Parser-based DOM reconstruction, tag/attribute/URL policy, sink patches, MutationObserver scrubbing, document.write and OS-share blocking. |
| **1,665–1,709** | Safe HTML and copy-only helpers | Shared `VGHTML.safe()` sink wrapper and local clipboard-only data hand-off. |
| **1,710–1,764** | Configuration | Versions, database names, signal thresholds, leash presets, performance profiles and zone ordering. |
| **1,765–1,816** | Utility functions | Median/clamp/time helpers, rescue/local ID generation, JSON handling and formatting. |
| **1,817–1,831** | Open-source ethical manifest | Frozen licence, purpose, public-interest guidelines and project principles. |
| **1,832–1,895** | Ethical manifest runtime guard | Validates Apache/SPDX declarations, unrestricted field of use and principle-list integrity. |
| **1,896–1,899** | Shared runtime state | Active performance profile and processing throttle state. |
| **1,900–2,014** | Audio engine | Zone alerts, emergency siren, volume control and optional audio keepalive. |
| **2,015–2,034** | Toast notifications | Accessible transient status/error messaging. |
| **2,035–4,175** | Internationalisation | Seven-language dictionaries, Arabic RTL handling, translated panels, UI application and language persistence. |

### C. Core data, signal, BLE and application workflows

| Physical lines | Section / module | Primary function |
|---:|---|---|
| **4,176–4,337** | Storage abstraction | IndexedDB with localStorage fallback for pets, settings, AI state, alerts and audio blobs. |
| **4,338–4,372** | Kalman RSSI filter | Smooths noisy Bluetooth signal measurements. |
| **4,373–4,408** | Distance estimator | Converts filtered RSSI and calibration parameters into approximate proximity distance. |
| **4,409–4,468** | Q-learning Lite | Small on-device reinforcement model for local behaviour tuning. |
| **4,469–4,501** | Behavioural fingerprint | Learns device/pet signal patterns and produces similarity/confidence signals. |
| **4,502–4,512** | Ring buffer | Bounded recent-sample storage. |
| **4,513–4,747** | Pet model | Pet/tag state, RSSI history, zone transitions, thresholds, alerts, ambiguity state, AI state and serialisation. |
| **4,748–5,617** | Embedded Project Nayuki QR generator | Vendored MIT-licensed QR encoding implementation. |
| **5,620–5,671** | Local QR wrapper | Renders locally generated QR payloads to canvas. |
| **5,674–5,748** | Voice Recall | Records, stores and plays a short local voice clip. |
| **5,749–5,784** | Voice announcer | Local text-to-speech for zone changes and alerts. |
| **5,785–5,820** | BLE matching | Scores advertisements against stored tag signatures and ambiguity thresholds. |
| **5,821–6,017** | BLE engine | Capability checks, scan filters, Web Bluetooth permission boundary, advertisement processing, stop/restart and health lifecycle. |
| **6,018–6,439** | Registration wizard logic | Scan candidates, verify signal change, capture calibration, create tag signature and register a pet. |
| **6,440–6,576** | SOS module | Pet selection, directional/advisory display, local location snapshot, alert text and alarm activation. |
| **6,577–6,806** | Personal Emergency mode | Siren, strobe, emergency profile, local QR contact card, shake activation and manual sharing/copy flow. |
| **6,807–7,094** | Pet detail overlay | Detailed signal/zone view, leash presets, thresholds, alerts, AI explanation and pet management. |
| **7,095–7,129** | Navigation | Panel switching and selected-tab state. |
| **7,130–7,287** | Settings controller | Loads/saves preferences, notification permission, performance, volume, registered-pet removal and reset entry. |
| **7,288–7,304** | Data Manager | Export/import entry points and file-input handling. |
| **7,305–7,513** | Help and capability manifest | Multilingual Help content, implemented/not-implemented capability panel and exact capability-drift checks. |
| **7,514–7,530** | About / Legal | Licence, privacy, limitations and project information overlay. |
| **7,531–7,560** | Language menu | Language selection overlay and UI language switching. |
| **7,561–7,669** | Diagnostics | Runtime snapshot, downloadable/copyable diagnostic JSON and system/security status. |
| **7,670–7,741** | Meta-cognitive coach | Local suggestions and one-tap corrective actions based on runtime conditions. |
| **7,742–8,217** | Application core | Initialisation, pet hydration, monitoring/demo lifecycle, scan routing, rendering, zone/alert coordination and timer management. |

### D. Platform services, local AI and feature-extension layers

| Physical lines | Section / module | Primary function |
|---:|---|---|
| **8,218–8,278** | PWA support | In-memory manifest, installation prompt and local app-install flow. |
| **8,279–8,320** | Safe text / secondary sanitizer | Compatibility sanitisation helpers for later modules and injected UI. |
| **8,321–8,389** | Error Shield | Bounded crash/error capture and diagnostic logging. |
| **8,390–8,455** | Capability matrix | Detects browser features and reports local runtime support. |
| **8,456–8,469** | Accessibility controller | Applies accessibility preferences to the document root. |
| **8,470–8,503** | Wake Lock | Keeps the screen awake during monitoring where supported. |
| **8,504–8,771** | AI Pack v4.1 | KNN, recursive least-squares calibration, Isolation Forest anomaly detection and per-pet AI orchestration. |
| **8,772–8,904** | Conductor AI | Runtime self-heal suggestions, health assessment and user-facing remediation guidance. |
| **8,905–9,060** | Reset / Initialize Center | Soft, hard and factory reset workflows with destructive-action confirmation. |
| **9,061–9,124** | Earlier encrypted-backup path | PBKDF2 and AES-GCM encrypted export/decrypt compatibility module. |
| **9,125–9,300** | V40 UI injection | Adds advanced settings, accessibility, diagnostics, coach and encrypted-export controls. |
| **9,301–9,719** | Compatibility and safety patches | Settings extensions, BLE-filter toggle, AI attachment, detail feedback learning, input sanitisation, wake-lock/error-shield integration, diagnostics and encrypted-import support. |
| **9,720–9,763** | Lost-state correction | Tracks repeated LOST transitions and battery-suspect conditions. |
| **9,764–9,791** | Per-pet alert routing | Per-tag sound, vibration, TTS and minimum-zone preferences. |
| **9,792–9,810** | Active-pet limit | Enforces a maximum of ten active monitored pets. |
| **9,811–9,899** | Leash-distance controls | Converts a 2–15 m UI distance into automatic RSSI thresholds. |
| **9,900–10,337** | Calibration Pro | RLS calibration UI and logic in registration and detail views. |
| **10,338–10,424** | Per-pet alert UI | Detail-view controls for tag-specific alert preferences. |
| **10,425–10,630** | Rescue Pack v1-era UI/workflow | Local pack generation, encoding/decoding and SOS-panel import/share controls later hardened by v2 layers. |
| **10,631–10,650** | UI injection bridges | Ensures detail and V40 render paths include the v4.1 extensions. |
| **10,651–10,744** | Diagnostics self-test UI | Adds the user-triggered local self-test and report display. |
| **10,745–10,816** | Extended-field persistence | Saves/restores alert preferences, leash distance, disabled state and lost-event history. |

### E. Final hardening, encrypted vault and v4.7.3 security controls

| Physical lines | Section / module | Primary function |
|---:|---|---|
| **10,817–11,174** | v4.3.8 final hardening layer | Runtime network/navigation guards, copy-only sharing, sanitised alert paths, coach/diagnostic patches, Rescue Pack and Emergency restrictions, and compatibility self-tests. |
| **11,175–11,213** | Final audit hardening and import boundary | Import size/depth/node limits, schema sanitisation, encrypted import dispatch and redacted diagnostics. |
| **11,214–11,273** | One-time hardening installation and VG473A scope exports | Installs final wrappers once and exposes closure-local accessibility/alert/UI helpers to later security modules. |
| **11,274–11,332** | v4.6 security-remediation setup | Secure prompt, confirmation, encoding, storage-safety and remediation configuration helpers. |
| **11,333–11,431** | Primary cryptographic core | PBKDF2-SHA-256, AES-GCM, purpose-bound AAD, v2 envelopes and structurally prechecked legacy v1 decryption. |
| **11,432–11,472** | Crypto/support bridge | Hashing, secure-prompt and compatibility helpers connecting the crypto layer to later storage/import flows. |
| **11,473–11,629** | Encrypted local vault | Encrypted state envelope, migration/unlock, atomic update queue, write epoch, full wipe and Store integration. |
| **11,631–11,650** | Data minimisation and unsafe auto-wipe removal | Removes retained histories from persisted state and disables destructive page-close auto-wipe. |
| **11,652–11,912** | VG473 authoritative BLE clone-state machine | Central CLEAR/BLOCKED/FLAGGED/ACKNOWLEDGED_FLAGGED transitions, incident lifetime, quiet close, episode counting and bounded acknowledgment. |
| **11,914–12,022** | BLE identity / fail-closed safety | Identity observations, clone-state delegation and advisory-only BLE identity controls. |
| **12,023–12,107** | Rescue Pack v2 | AEAD envelope, explicit consent, expiry validation, hashed bounded replay ledger and restricted assist mode. |
| **12,108–12,157** | Transactional import/export | Final schema validation, imported BLE de-binding, merge/replace atomicity, typed plaintext gate and hardened handler assignment. |
| **12,158–12,187** | UI claims and release integrity | Aligns user-visible claims, diagnostics and release/integrity declarations. |
| **12,188–12,441** | Final risk-closure addendum | Exact-bound BLE routing, duplicate-binding quarantine, import/vault bridges and remaining race/safety closures. |
| **12,442–12,488** | Final hardening and passphrase policy | NFKC passphrase scoring, distinct-word/variety requirements and secure-prompt enforcement. |
| **12,489–12,617** | v4.6.1–v4.6.8 maintenance/hardening history | UX cleanup, CSP-hash repair history, ID hardening and hold-to-cancel protections retained by v4.7.3. |
| **12,618–12,810** | v4.6.9 accessibility, persistence and UI compatibility | Accessibility fixes, live UI forwarders, persistence generation/tombstone guard and compatibility repairs. |
| **12,811–12,842** | Final audit-hotfix and release preamble | Last inherited audit fixes and introduction to the v4.7.3 self-test layer. |
| **12,843–13,267** | VG473 non-destructive security self-test | Tests action contracts, sanitizer, clone state machine, capability drift, backup precheck and final runtime definitions without destroying user data. |
| **13,269–13,292** | Guarded bootstrap | Single-run `App.init()` bootstrap with frame/duplicate-boot protection and fail-safe diagnostics. |
| **13,293–13,294** | Document closure | Closing `body` and `html` tags. |

### Reviewer reading order

For a fast architectural review, read the file in this order: **1–1709** (security boundary), **4,176–8,217** (core data/BLE/workflows), **8,504–9,124** (AI/reset/backup), and **10,817–13,267** (final hardening, vault, import, BLE identity, Rescue Pack and self-tests). The detailed security-priority map below narrows those broad architecture ranges to the approximately 1,800 lines that deserve the highest audit concentration.

---

## 0. Document Control

| Field | Verified value |
|---|---|
| Target artifact | `VitalGuard_AI_complete_V47_3.html` |
| Artifact SHA-256 | `b81c067f5523bc68728ae84f2fc93ce05077705ae4cb7e882f1c859885f47615` |
| Physical line count | **13,294 lines** |
| Verification date | **2026-07-30** |
| Correspondence rule | Every line reference in this document applies only to the exact artifact identified by the SHA-256 above. Any byte-level modification invalidates the line map. Recalculate the hash and re-anchor with the listed CTRL+F strings and named anchors. |

---

## 1. At-a-Glance — Exact Audit Priority Map

| WP / control | Domain | Exact core line range(s) | Priority |
|---|---|---:|---|
| **WP1** | First-executable zero-egress, frame, RTC, worker, popup, form and `eval` isolation | **42–131** | Highest |
| **WP2 / WP7** | Action allowlist, two-phase dispatcher and runtime argument contracts | **960–1,319** | Highest |
| **WP2 / VG473-03** | Parser-based HTML reconstruction, URL policy and attribute allowlists | **1,321–1,663** | Highest |
| **WP6-a** | PBKDF2 / AES-GCM crypto core, AAD and legacy-envelope handling | **11,289–11,433** | Highest |
| **WP6-a secondary** | Earlier encrypted-export `CryptoBox` PBKDF2 / AES-GCM path | **9,061–9,124** | High |
| **WP6-b** | Encrypted vault, atomic updates, write epoch and vault wipe | **11,473–11,629** | Highest |
| **WP6-b / DESTR** | Debounced persistence generation and tombstone guard | **12,731–12,763** | Highest |
| **WP6-c** | Import fallback entry, preliminary validation and effective transactional importer | **7,295–7,301**, **11,175–11,206**, **12,108–12,156** | Highest |
| **VG473-01** | Authoritative BLE clone/ambiguity state machine | **11,652–11,912** | High |
| **BLE identity / BQ** | Identity observation, exact-bound routing and duplicate-binding quarantine | **11,914–12,002**, **12,188–12,325** | High |
| **RP** | Rescue Pack v2 validation, replay ledger, restricted assist and UI wiring | **12,023–12,106** | High |
| **PP** | Passphrase scoring, distinct-word enforcement and prompt wrapping | **12,454–12,477** | High |
| **DESTR** | Full wipe, Reset Center, vault clear and persistence generation guard | **4,134–4,156**, **8,906–9,059**, **11,606–11,623**, **12,731–12,763** | Highest |
| **VG473-04** | Capability-declaration drift guard | **7,327–7,440** | Medium / audit |
| **VG473-05** | Legacy-envelope structural precheck | **11,381–11,411** | Highest |
| **VG473-06** | Non-destructive security self-test | **12,843–13,267** | Medium / audit |
| Secondary | Signal filtering and distance estimation | **4,338–4,407** | Medium |
| Secondary | On-device KNN, RLS and Isolation Forest pack | **8,504–8,770** | Medium |
| Secondary | BLE filters, permission boundary and scan lifecycle | **5,821–6,016** | High |
| Supply chain | Embedded Project Nayuki QR generator, MIT | **4,748–5,617** | Integrity check |

> **Recommended concentration.** The external audit should spend most effort on WP1, WP2/WP7, the full WP6 data path, VG473-01 BLE state transitions, duplicate-binding quarantine, destructive-write coordination and the VG473-03 sanitisation controls.

---

## 2. Threat Model

### 2.1 Protected users

- Individuals operating offline or with intermittent connectivity on low-resource or refurbished devices.
- Users for whom disclosure of locally stored records, contacts or location-related information creates elevated personal risk.
- Users whose device may later be inspected, lost, seized or accessed by another person.

### 2.2 Assets

| Asset | Primary location | Security relevance |
|---|---|---|
| Sensitive application state | Encrypted vault, **11,473–11,629** | Disclosure can expose users, contacts or locally recorded data. |
| Passphrase-derived keys | Session memory; crypto paths at **9,061–9,124** and **11,289–11,433** | Compromise defeats at-rest confidentiality. |
| Rescue Pack contents | Rescue Pack v2 path, **12,023–12,106** | Replay, forgery or unsafe interpretation could mislead a recipient. |
| Artifact integrity | Complete HTML file | A modified file may weaken controls or introduce exfiltration. |
| BLE binding state | Clone-state and exact-bound routing blocks | Incorrect promotion can produce unsafe routing or false confidence. |

### 2.3 Adversaries considered

| Adversary | Assumed capability | Primary controls |
|---|---|---|
| Network observer or induced exfiltration attempt | Can observe or provoke outbound traffic | WP1 and CSP |
| Malicious string, import or DOM input supplier | Can provide crafted markup, attributes, action strings or JSON | WP2/WP7, VG473-03 and WP6-c |
| Local post-hoc attacker | Can inspect storage or attempt offline passphrase guessing | WP6-a, WP6-b and PP |
| BLE advertisement spoofer | Can transmit crafted or duplicated advertisements | VG473-01, BLE identity restrictions and BQ |
| Accidental destructive-operation trigger | Can cause stale, delayed or overlapping writes around reset/delete | DESTR and persistence-generation guard |

### 2.4 Outside the artifact trust boundary

The browser, operating system, extensions, device firmware and physical device are outside the artifact’s control. Once arbitrary script execution or a compromised platform is assumed, in-page JavaScript cannot restore platform integrity. The artifact attempts to bound consequences; it does not claim to defeat a compromised browser or operating system.

---

## 3. Architecture and Integrity Model

The artifact is a single self-contained HTML file. There is no build, bundling or minification transform represented in the supplied artifact; byte-for-byte verification of the distributed file is therefore the reproducibility check.

- Browser-native Web Crypto is used for PBKDF2, SHA-256 and AES-GCM.
- CSP is hash-pinned and sets `default-src 'none'`, `connect-src 'none'`, `worker-src 'none'`, `object-src 'none'`, `frame-src 'none'`, `child-src 'none'`, `form-action 'none'`, Trusted Types and `script-src-attr 'none'`.
- No external script or stylesheet is loaded at runtime.
- Project Nayuki’s QR generator is vendored inline under the MIT License.
- Source text contains documentation URLs and self-test payload strings, but there is no external runtime CDN dependency.
- The in-page hash display is diagnostic only; the complete-file SHA-256 must be verified independently.

---

## 4. WP1 — Zero-Egress and First-Executable Isolation

**Exact block:** **lines 42–131**  
**Anchor:** `WP1_ZERO_EGRESS_CORE`, start **42**, end marker **129**  
**Complete executable closure:** through **line 131**

| Item | Exact line | CTRL+F string |
|---|---:|---|
| Core anchor | 42 | `ANCHOR_START: WP1_ZERO_EGRESS_CORE` |
| Telemetry counters | 46 | `T={rtc:0` |
| Framed execution detection | 62 | `framed=window.top!==window.self` |
| RTC constructor replacement | 77 | `R.rtc=throwStub('WebRTC'` |
| Worker replacement | 80 | `R.worker=throwStub('Worker'` |
| Fetch/XHR/WebSocket/EventSource stubs | 86 | `R.fetch=rejectStub('fetch')` |
| Immutable request and popup locks | 88 | `lock(window,'fetch'` |
| `sendBeacon`, share and Service Worker registration locks | 89–91 | `serviceWorker.register` |
| Form submission locks | 92 | `HTMLFormElement.prototype` |
| Built-in prototype freeze | 95 | `Object.freeze(p);T.proto` |
| `eval` replacement | 96 | `R.eval=function(){` |
| Bounded descriptor self-check | 98–115 | `Bounded self-check: confirms guards stay locked` |
| Invariant tick | 113 | `function tick(){var inv=inspect()` |
| Diagnostic API construction | 128–130 | `var api=Object.freeze({profile:` |

### Audit tests

- Attempt recovery or re-derivation of blocked APIs through prototypes, `Reflect`, same-origin realms, frames or cached references.
- Verify all locks are non-writable and non-configurable where intended.
- Verify a partially applied lock cannot produce a passing invariant report.
- Test whether a new realm or browser-specific object exposes an unguarded egress primitive.
- Confirm the frame guard fails closed before the main application script.
- Confirm deployment headers cover the meta-CSP limitations described in §11.

---

## 5. WP2 / WP7 — Anti-Injection and Trusted Types

### 5.1 Action allowlist and two-phase dispatcher

**Policy anchor:** **960–1,303**  
**Dispatcher:** **1,305–1,319**  
**VG473 action pipeline:** **1,003–1,294**  
**Argument contract:** **1,054–1,201**

| Item | Exact line(s) | CTRL+F string |
|---|---:|---|
| WP7 policy start | 960 | `ANCHOR_START: WP7_ACTION_POLICY` |
| Frozen namespace/method allowlist | 962–974 | `const allowed = Object.freeze({` |
| VG473 two-phase pipeline start | 1,003 | `ANCHOR_START: VG473_ACTION_PIPELINE` |
| Placeholder token parsing | 1,025–1,052 | `function parseAtomToken(tok)` |
| Argument-contract start | 1,054 | `ANCHOR_START: VG473_ARG_CONTRACT` |
| Complete contract table | 1,101–1,185 | `const VG473_CONTRACTS` |
| Argument-contract end | 1,201 | `ANCHOR_END: VG473_ARG_CONTRACT` |
| Dangerous-token rejection | 1,204–1,215 | `constructor|prototype|__proto__` |
| Static/runtime parsing | 1,224–1,269 | `function runtimeParse(action, el, ev)` |
| Legacy parser wrapper | 1,271–1,279 | `function parse(action, el, ev)` |
| Invocation path | 1,280–1,293 | `function invoke(action, el, ev)` |
| Pipeline end | 1,294 | `ANCHOR_END: VG473_ACTION_PIPELINE` |
| Policy end | 1,303 | `ANCHOR_END: WP7_ACTION_POLICY` |
| Capturing event dispatcher | 1,305–1,319 | `const VitalGuardActionDispatcher` |

### Audit tests

- Bypass attempts against the `Namespace.method(args)` grammar, including Unicode, whitespace, escaping, malformed quoting and token concatenation.
- Prototype-pollution attempts against namespace and contract lookup.
- Direct invocation with `null` element/event to confirm runtime contracts cannot be bypassed.
- Exhaustive comparison of every allowlisted method against `VG473_CONTRACTS`.
- Argument-to-sink tracing for reset, delete, import, navigation and BLE acknowledgment methods.
- Validate that unresolved placeholders are accepted only during static validation and are resolved or rejected before invocation.

### 5.2 Parser-based HTML reconstruction, URL policy and attribute allowlists

**Full Trusted Types guard:** **1,321–1,663**  
**Parser reconstruction core:** **1,325–1,547**  
**URL policy:** **1,392–1,427**  
**Data/ARIA allowlists:** **1,429–1,452**

| Item | Exact line(s) | CTRL+F string |
|---|---:|---|
| Trusted Types guard object | 1,321–1,324 | `const VitalGuardTrustedTypesGuard` |
| Parser-based sanitizer anchor | 1,325–1,547 | `WP2_HTML_SANITIZER_CORE` |
| Allowed HTML tags | 1,356–1,368 | `const VG472_TAGS` |
| Entire-subtree drop list | 1,372–1,379 | `const VG472_DROP` |
| General attribute allowlist | 1,381–1,390 | `const VG472_ATTRS` |
| Shared URL policy | 1,392–1,427 | `VG473_URL_POLICY` |
| Exact data-/ARIA-attribute allowlists | 1,429–1,452 | `VG473_DATA_ATTR_ALLOWLIST` |
| Attribute-copy enforcement | 1,454–1,492 | `function vg472CopyAttrs` |
| Rebuild recursion and budget | 1,494–1,518 | `function vg472Copy` |
| DOMParser reconstruction | 1,520–1,547 | `function neutralizeHTML(input)` |

### 5.3 Single sanitize pass and sink patches

**Single-pass anchor:** **1,558–1,572**  
**Sink patching and observer enforcement:** **1,573–1,645**

| Item | Exact line(s) | CTRL+F string |
|---|---:|---|
| Trusted Types policy creation | 1,549–1,557 | `trustedTypes.createPolicy` |
| Single sanitize pass | 1,558–1,572 | `VG473_SINGLE_SANITIZE_PASS` |
| `innerHTML` setter patch | 1,573–1,590 | `function patchInnerHTML(proto)` |
| `insertAdjacentHTML` patch | 1,591–1,597 | `insertAdjacentHTML` |
| `Range.createContextualFragment` patch | 1,598–1,604 | `createContextualFragment` |
| MutationObserver URL/action scrubber | 1,605–1,645 | `guard.scrubNode` |
| `document.write` block | 1,646–1,648 | `document.write = document.writeln` |
| OS share replacement | 1,649–1,660 | `VitalGuard copy-only mode` |

### Audit tests

- Mutation XSS, namespace confusion, nested-tag obfuscation and comment-boundary payloads.
- SVG, MathML, `<template>`, form and parser-repair edge cases.
- URL obfuscation with entities, control characters, Unicode separators and protocol-relative URLs.
- `blob:` and `data:` policy tests by element and attribute.
- Completeness comparison against all runtime `setAttribute`, `dataset`, `innerHTML`, `insertAdjacentHTML` and fragment-creation calls.
- TOCTOU analysis between node insertion and MutationObserver scrubbing.
- Browser-specific Trusted Types and DOMParser behaviour.

---

## 6. WP6 — Data Sovereignty

### 6.1 WP6-a — Crypto core

#### Primary V455 crypto path

**Configuration:** **11,289–11,300**  
**Crypto object:** **11,333–11,433**  
**Legacy compatibility block:** **11,361–11,429**  
**VG473 legacy precheck:** **11,381–11,411**

| Item | Exact line | CTRL+F string |
|---|---:|---|
| Iteration configuration | 11,293 | `iterations:600000` |
| Crypto core anchor | 11,333 | `ANCHOR_START: WP6A_CRYPTO_CORE` |
| `V455Crypto` object | 11,334 | `const V455Crypto = Object.freeze({` |
| PBKDF2 derive | 11,340–11,343 | `crypto.subtle.deriveKey` |
| Purpose-bound AAD | 11,344 | `aad(meta)` |
| Fresh salt and 12-byte IV | 11,345–11,350 | `new Uint8Array(12)` |
| AES-GCM decrypt with AAD | 11,352–11,359 | `additionalData:this.aad(env)` |
| Legacy decrypt anchor | 11,361–11,427 | `WP6A_LEGACY_DECRYPT` |
| VG473 structural precheck | 11,381–11,411 | `VG473_LEGACY_PRECHECK` |
| Legacy typed gate | 11,412–11,415 | `IMPORT LEGACY` |
| Legacy decrypt execution | 11,417–11,429 | `decryptLegacyBackup` |
| Crypto core end marker | 11,431 | `ANCHOR_END: WP6A_CRYPTO_CORE` |

#### Earlier encrypted-export path

**Exact block:** **9,061–9,124**

- PBKDF2 configuration appears at **line 9,081**.
- Audit this path separately for parameter agreement, IV generation, envelope validation and decryption failure behaviour.

### Review focus

- Fresh IV generation for every encryption path.
- AAD reconstruction and purpose separation.
- Strict version, algorithm, KDF and iteration validation.
- Legacy v1/v2 downgrade or confusion attempts.
- Base64 parser behaviour and size bounds before KDF execution.
- Passphrase lifetime and avoidable retention in memory.

### 6.2 WP6-b — At-rest encrypted vault

**Full vault and Store integration:** **11,473–11,629**  
**Race-critical anchored core:** **11,478–11,557**

| Item | Exact line(s) | CTRL+F string |
|---|---:|---|
| Vault section start | 11,473 | `ENCRYPTED LOCAL VAULT` |
| Secure-vault anchor | 11,478 | `ANCHOR_START: WP6B_SECURE_VAULT` |
| Vault object | 11,479 | `const SecureVaultV455={` |
| State normalisation and binding metadata | 11,483–11,499 | `normalize(s)` |
| Raw envelope read/write/delete | 11,500–11,517 | `rawGetEnvelope` |
| Vault AAD and decryption | 11,518–11,525 | `vaultAad(env)` |
| Fresh 12-byte vault IV | 11,527–11,533 | `async encryptState(candidate)` |
| Atomic persistence | 11,535–11,540 | `async persist(candidate)` |
| Atomic update queue | 11,542–11,555 | `atomicUpdate(mutator)` |
| Write invalidation / epoch advance | 11,556–11,558 | `invalidateWrites` |
| Vault creation and migration | 11,578–11,604 | `createOrMigrate` |
| Raw full clear | 11,606–11,612 | `clearAllRaw` |
| Vault object end | 11,615 | `};` |
| Store integration | 11,618–11,629 | `Store.savePet=async function` |

### Audit tests

- Concurrent mutator serialization.
- Stale `writeEpoch` rejection before and after mutation.
- Wipe occurring while a queued update is awaiting encryption or storage.
- `writeBlocked` and `finishInvalidation` correctness on exceptions.
- Full removal of vault fallback, language and replay keys.
- Locked, migration-required, ephemeral and unlocked mode transitions.
- Single-envelope re-encryption behaviour and storage-exhaustion handling.

### 6.3 WP6-c — Import boundary

The effective import path is layered. Review all listed locations; the later transactional importer supersedes the earlier fallback implementation.

| Layer | Exact line(s) | Purpose |
|---|---:|---|
| UI fallback dispatch | **7,295–7,301** | Calls `window.VitalGuardHardenedImport` when available. |
| Preliminary limits and parser | **11,175–11,206** | File-size, text-size, depth/node and early sanitisation boundary. |
| VG473A scope exports | **11,218–11,270** | Makes closure-local helpers reachable by later security paths. |
| Effective transactional importer | **12,108–12,156** | Final validation, decryption, typed plaintext gate, merge/replace and atomic update. |
| Persistent-vault import gate | **line 12,478** | Wraps import to reject it while the encrypted vault is inactive. |
| Vault bridge | **12,765–12,777** | Ensures vault creation/unlock before import and related persistence operations. |

#### Effective importer key lines

| Item | Exact line | CTRL+F string |
|---|---:|---|
| Transactional section | 12,108 | `TRANSACTIONAL IMPORT / EXPORT` |
| Shape / dangerous-key validator | 12,110 | `function v455AssertShape` |
| Imported BLE signature de-binding | 12,113 | `function v455SanitizeSignature` |
| Pet sanitiser | 12,115 | `function v455SanitizePet` |
| Atomic apply function | 12,122–12,134 | `async function v455ApplyImport` |
| Final import handler | 12,135–12,154 | `async function v455HandleImport` |
| Legacy precheck before passphrase | 12,138–12,148 | `vg473LegacyPrecheck` |
| Typed plaintext approval | 12,150 | `Type IMPORT PLAINTEXT` |
| Effective handler assignment | 12,155–12,156 | `window.VitalGuardHardenedImport=v455HandleImport` |

### Audit tests

- JSON depth, node, child-count and dangerous-key limits.
- Revalidation after decryption.
- Imported BLE metadata cannot become a trusted local binding.
- Reserved IDs and merge-key handling.
- Merge and replacement atomicity, cancellation and rollback.
- Voice-data URL type and size enforcement.
- Typed approval cannot be reached by malformed legacy envelopes before structural checks.
- Import cannot proceed without an active persistent vault.

---

## 7. v4.7.3 Reinforcement Controls

All v4.7.3 controls are described in the artifact as **IMPLEMENTED-PENDING-INDEPENDENT-RETEST**.

| Control | Exact line(s) | Anchor / locator | Review focus |
|---|---:|---|---|
| **VG473-01** authoritative BLE state machine | **11,652–11,912** | `VG473_BLE_STATE_MACHINE` | Centralised transition authority, bounded block deadline, episode counting, quiet-close and acknowledgment limits. |
| BLE identity observation | **11,914–12,002** | `BLE_IDENTITY_OBSERVE` at **11,968–11,984** | All ambiguity paths delegate to the central state machine. |
| Final exact-bound router | **12,188–12,325** | `V4.6 FINAL RISK-CLOSURE ADDENDUM` | Duplicate exact bindings, metadata reproduction, multiple matches and flagged raw-only routing. |
| **VG473-02** action pipeline | **1,003–1,294** | `VG473_ACTION_PIPELINE` | Static/runtime phase separation and direct-invocation contract enforcement. |
| **VG473-02** argument contract | **1,054–1,201** | `VG473_ARG_CONTRACT` | Complete allowlist coverage and value-level constraints. |
| **VG473-03** URL policy | **1,392–1,427** | `VG473_URL_POLICY` | Scheme, entity, separator and attribute-specific policy. |
| **VG473-03** data/ARIA allowlists | **1,429–1,452** | `VG473_DATA_ATTR_ALLOWLIST` | Exact allowlist completeness. |
| **VG473-03** single sanitize pass | **1,558–1,572** | `VG473_SINGLE_SANITIZE_PASS` | Exactly one sanitisation pass before sink use. |
| **VG473-04** capability drift | **7,327–7,440** | `VG473_CAPABILITY_DRIFT` | Exact set comparison across machine, human and JS declarations. |
| **VG473-05** legacy precheck | **11,381–11,411** | `VG473_LEGACY_PRECHECK` | Cheap validation before typed gate, passphrase and KDF. |
| **VG473-06** security self-test | **12,843–13,267** | `VG473_SECURITY_SELFTEST` | Non-destructive invariant tests and truthful PASS/FAIL/WARN/UNAVAILABLE reporting. |
| **VG473A** reinforcement log | **37–39** | `VG473A_REINFORCEMENT_LOG` | Declared repair provenance. |
| **VG473A** scope exports | **11,218–11,270** | `VG473A_SCOPE_EXPORT` | Accessibility, alert-preference helpers and live V41UI forwarders. |

### 7.1 Rescue Pack replay guard

**Rescue Pack validation and restricted-assist core:** **12,023–12,090**  
**Rescue Pack UI wiring:** **12,092–12,106**  
**Replay ledger implementation:** **12,040–12,062**

| Item | Exact line |
|---|---:|
| Rescue Pack validator | 12,031–12,038 |
| Replay key and bounded local ledger | 12,040–12,043 |
| SHA-256 JTI hashing | 12,044 |
| Seen check | 12,045–12,053 |
| Mark-used operation | 12,054–12,061 |
| Frozen replay API | 12,062 |
| Replay enforcement during assist | 12,071–12,075 |

Review the compatibility branch at **line 12,052**, which recognises a legacy raw `jti` inside the encrypted setting ledger while new writes store `{h,e}`. Confirm this backward-compatibility read cannot create replay disagreement between the local and encrypted ledgers.

### 7.2 Passphrase policy

**Exact policy block:** **12,454–12,477**

- NFKC normalisation and length/control checks: **12,454–12,460**
- Distinct normalised-word rule: **12,461–12,466**
- High-variety alternative path: **12,468–12,472**
- Frozen evaluation API: **12,474–12,475**
- Sensitive prompt wrapper: **line 12,477**
- Inherited asynchronous weak/strong-vector test: **line 12,820**

Test Unicode normalisation, locale casing, punctuation stripping, repeated phrases, common patterns, sequential strings and legacy unlock compatibility.

### 7.3 Duplicate-binding quarantine

**Local binding predicate:** **12,201–12,204**  
**Final router:** **12,278–12,313**  
**Registration duplicate rejection:** **12,317–12,325**

- More than one exact local binding is quarantined at **line 12,286**.
- Metadata-clone candidates are raised through the central state machine at **12,287–12,295**.
- Multiple qualified local matches are raised centrally at **12,300–12,302**.
- FLAGGED and ACKNOWLEDGED_FLAGGED states ingest raw RSSI only and skip zone processing at **12,304–12,309**.

### 7.4 Destructive coordination

| Component | Exact line(s) |
|---|---:|
| `Security.fullWipe()` | **4,134–4,156** |
| Reset Center | **8,906–9,059** |
| Vault `clearAllRaw()` and write invalidation | **11,606–11,612** |
| `Store.clearAll()` persistence hook | **11,622–11,623** |
| Full persistence module | **12,731–12,763** |
| `beforeClearAll()` generation guard | **12,751–12,754** |

Test a full wipe while delayed settings, pet writes, threshold changes and vault transitions are queued. Verify that no stale write can resurrect deleted state and that `afterClearAll()` leaves persistence usable but empty.

---

## 8. Secondary Areas

### 8.1 Signal math

**Exact range:** **4,338–4,407**

- `KalmanRSSI`: **4,340–4,371**
- `DistanceEstimator`: **4,373–4,407**

Review NaN/Infinity handling, extreme RSSI values, path-loss recalculation, division/logarithm edge cases and numerical stability.

### 8.2 On-device AI pack

**Exact range:** **8,504–8,770**

- `KNNLite`: **8,507–8,547**
- `RLSCalibrator`: **8,549–8,600**
- `IsolationForestLite`: **8,602–8,693**
- `AIPackV4`: **8,695–8,770**

Review bounded sample retention, imported model state, random sampling, division-by-zero/degenerate trees and local-only persistence.

### 8.3 BLE scan filters and permission boundary

**Exact BLE engine range:** **5,821–6,016**

- Capability / secure-context check: **5,852–5,857**
- Filter construction: **5,888–5,905**
- Scan request and permission boundary: **5,907–5,971**
- Stop and bounded restart lifecycle: **5,974–6,015**

Confirm received advertisements remain local and no scan option accidentally widens the intended surface.

### 8.4 CSPRNG local record IDs

**Exact function:** **1,789–1,803**

`genLocalIdSuffix()` uses `crypto.getRandomValues` when available and retains a `Math.random()` fallback for older engines. Confirm the fallback is acceptable for the stated compatibility posture and is not treated as cryptographic.

---

## 9. Supply Chain — Embedded Third-Party Component

### Project Nayuki QR generator

| Item | Exact line(s) |
|---|---:|
| Component and license notice | **4,748–4,775** |
| Vendored `qrcodegen` implementation | **4,777–5,617** |
| Local application wrapper `QRGenerator` | **5,620–5,671** |
| SPDX / third-party meta declaration | **lines 19–20** |

Audit tasks:

- Compare the vendored code with the claimed upstream release or document modifications.
- Confirm the MIT notice remains intact.
- Confirm the generator performs no network I/O.
- Confirm QR payload creation and rendering are reached only through intended local workflows.

The dependency posture is: **no external runtime dependency, with one vendored MIT-licensed QR implementation**.

---

## 10. Disclosed Residual Risks

- Meta CSP cannot enforce `frame-ancestors` or `sandbox`; see `security-limitations` at **line 26**.
- Top-level navigation cannot be made immutable after arbitrary script execution.
- Browser and operating-system compromise are outside the artifact trust boundary.
- Generic BLE advertisements are not cryptographic identity authentication.
- FLAGGED BLE data remains advisory raw signal only; it must not produce directional guidance, SAFE identity claims or life-safety decisions.
- The vault uses one encrypted state envelope, so small writes re-encrypt the complete sensitive state.
- The Rescue Pack replay ledger is browser-profile-local and can be removed by clearing local data.
- A legacy raw-JTI compatibility read remains at **line 12,052**; current replay writes store hashes.
- Storage-quota handling is not uniform across every historical storage call.
- A detached SHA-256 digest authenticates bytes only when obtained through an independent trusted channel; it is not a digital signature.
- The capability machine manifest is at **line 31**, the user-facing notice at **427–437**, and the exact-set drift guard at **7,327–7,440**. Review all three for agreement.

---

## 11. Deployment Requirements

When served over HTTP(S), verify these response-level controls because the single HTML file cannot enforce all of them itself:

- `Content-Security-Policy: frame-ancestors 'none'`
- `X-Content-Type-Options: nosniff`
- Restrictive `Permissions-Policy`
- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Resource-Policy: same-origin`
- A clean dedicated origin without an uncontrolled pre-existing Service Worker
- Independent authenticated delivery of the release SHA-256 or a signed release manifest

The artifact records expected response headers at **line 25**.

---

## 12. Lower-Priority / Integrity-Only Areas

| Area | Exact location | Rationale |
|---|---:|---|
| Inline stylesheet | **133–351** | Static presentation; integrity is covered by the CSP style hash. |
| Static application shell | **353–845** | Mostly fixed markup; action-bearing attributes are validated by WP7. |
| I18N dictionaries and localised HTML | Begins **2,035** | Static localisation content; review only where strings reach HTML sinks. |
| CSPRNG local suffix helper | **1,789–1,803** | Small, isolated helper; confirm fallback posture. |
| Historical release comments | Throughout main script | Provenance and compatibility context; not executable by themselves. |

Static content is not automatically harmless when it reaches a sink. Any translated or template HTML that flows through `innerHTML` remains in scope for the WP2 sink audit.

---

## 13. Internal Identifier Provenance

Identifiers such as `V455`, `V469`, `VG472`, `VG473` and `VG473A` are preserved across later release labels. Storage keys and function names encode module lineage and compatibility history. They should not be treated as version inconsistency findings unless behaviour or declarations actually conflict.

Relevant provenance locations:

- Release and security-hardening metadata: **lines 36–40**
- Main changelog: title at **line 852**
- V4.6 remediation section: begins **line 11,274**
- V4.6 final risk-closure addendum: begins **line 12,188**
- V4.6.9 final audit hotfix: begins **line 12,811**
- VG473 self-test: **12,843–13,267**

---

## 14. Reproducibility and Verification

1. Obtain `VitalGuard_AI_complete_V47_3.html` and its expected digest through an independent trusted channel.
2. Compute the SHA-256:

   ```bash
   sha256sum VitalGuard_AI_complete_V47_3.html
   ```

3. Expected result:

   ```text
   b81c067f5523bc68728ae84f2fc93ce05077705ae4cb7e882f1c859885f47615
   ```

4. Confirm the physical line count is **13,294**.
5. If the digest differs, do not use this line map. Recalculate every line location and CSP hash.

---

## 15. Highest-Uncertainty Areas for External Review

1. **Recovery of locked egress capabilities** — **42–131**.
2. **Action grammar, method allowlist and argument-contract completeness** — **960–1,319**.
3. **Parser reconstruction, URL policy, attribute allowlists and sink patch completeness** — **1,321–1,663**.
4. **Vault atomic-update and destructive-write race behaviour** — **11,473–11,629** with **12,731–12,763**.
5. **Effective transactional import and legacy-envelope ordering** — **12,108–12,156** with **11,381–11,411**.
6. **Authoritative BLE state transitions and final exact-bound routing** — **11,652–11,912** and **12,188–12,325**.
7. **Replay compatibility and ledger agreement** — **12,040–12,062**, especially **line 12,052**.
8. **Truthfulness and coverage of the non-destructive security self-test** — **12,843–13,267**.

---

## Appendix A — Exact Security Anchor Index

| Anchor | Start | End |
|---|---:|---:|
| `SECURITY_CSP_GUARD` | 21 | 24 |
| `VG473_CAPABILITY_MANIFEST_MACHINE` | 30 | 32 |
| `VG473A_REINFORCEMENT_LOG` | 37 | 39 |
| `WP1_ZERO_EGRESS_CORE` | 42 | 129 |
| `WP7_ACTION_POLICY` | 960 | 1,303 |
| `VG473_ACTION_PIPELINE` | 1,003 | 1,294 |
| `VG473_ARG_CONTRACT` | 1,054 | 1,201 |
| `WP2_HTML_SANITIZER_CORE` | 1,325 | 1,547 |
| `VG473_URL_POLICY` | 1,392 | 1,427 |
| `VG473_DATA_ATTR_ALLOWLIST` | 1,429 | 1,452 |
| `VG473_SINGLE_SANITIZE_PASS` | 1,558 | 1,572 |
| `CAPABILITY_MANIFEST_NOTICE` | 427 | 437 |
| `CAPABILITY_MANIFEST_PANEL` | 7,308 | 7,493 |
| `VG473_CAPABILITY_DRIFT` | 7,327 | 7,440 |
| `DESTR_RESET_CENTER` | 8,906 | 9,059 |
| `WP6C_IMPORT_BOUNDARY` | 11,192 | 11,202 |
| `VG473A_SCOPE_EXPORT` | 11,218 | 11,270 |
| `WP6A_CRYPTO_CORE` | 11,333 | 11,431 |
| `WP6A_LEGACY_DECRYPT` | 11,361 | 11,427 |
| `VG473_LEGACY_PRECHECK` | 11,381 | 11,411 |
| `WP6B_SECURE_VAULT` | 11,478 | 11,557 |
| `VG473_BLE_STATE_MACHINE` | 11,652 | 11,912 |
| `BLE_IDENTITY_OBSERVE` | 11,968 | 11,984 |
| `RP_REPLAY_GUARD` | 12,040 | 12,046 |
| `PP_PASSPHRASE_POLICY` | 12,474 | 12,477 |
| `DESTR_PERSISTENCE_GUARD` | 12,751 | 12,754 |
| `VG473_SECURITY_SELFTEST` | 12,843 | 13,267 |

> Some end anchors are intentionally embedded inside a line or cover only the most security-critical sub-block. The broader module ranges in the main sections are the correct audit scopes.

---

*Prepared for independent security review of VitalGuard / M-Corp Ethical AI.*  
*Artifact licence: Apache-2.0; embedded Project Nayuki QR component: MIT.*
