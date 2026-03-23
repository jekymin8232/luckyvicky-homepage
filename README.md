I know my strengths and weaknesses with clarity.
The vanilla code I design reflects the hardships I’ve lived through. Anyone can write code. But true design is something you only arrive at after enduring a life shaped by constraint and scarcity.
In the end, the only person I can truly rely on is myself. A designer is always alone, but that is where true safety lies.

## Nothing in this world is truly free. What appears to be free often comes with a very high cost. 

**Paying a fair price is what truly defines open source. This is a longer-term goal, but I plan to build a team and develop any necessary libraries in-house — essentially, to build and use our own wheels.**

**Do not reinvent the wheel. The real wheel is the browser. Chrome and Safari are robust platforms built by thousands of brilliant engineers. It is unfortunate to use them merely as conduits for libraries and external API calls.**

Open source is not “free.” The misconception that it is leads many developers and organizations to rely on it without recognizing the underlying risks. In reality, most libraries are built and maintained by individuals, often with limited support and resources.

When that work is expected to be done for free, maintainers become vulnerable to burnout. And burnout is not an exception—it is a predictable outcome. Once a maintainer steps away or hands over control to others without proper continuity and oversight, the integrity of the library can deteriorate. At that point, security is no longer guaranteed.

In that sense, the issue is not the concept of open source itself, but the structural assumption that it can be sustained without adequate support. That assumption is what ultimately makes many libraries more exposed to security risks.

## [Unnecessary expenses] Using libraries means accepting dependency.
Open-source projects often face structural challenges in achieving long-term sustainability. For this reason, I am actively working toward a self-sustaining model.
I see OTF’s support not as a dependency, but as a catalytic seed that can unlock matched funding and accelerate the project’s path toward independence.

Even in the worst situations, lives must be saved. Relying on libraries and external APIs can slow down responsiveness. Anyone should be able to fix the code on the spot—this is only possible with vanilla code.
Using external libraries introduces dependency on third-party maintainers, which can create risks in long-term maintenance, security auditing, and update compatibility.
In critical environments, minimizing such dependencies can significantly improve reliability and auditability.

>**I sincerely ask that you read “[Must Read] Korea FOSS Brief for OSTIF.md.”**
>
>We’ve outlined a way to break free from supply chain attacks—meaning risks from libraries and external APIs. At the very least, any libraries we rely on for life-critical systems must be secured against these threats.
>
>Open-source projects are inherently difficult to sustain independently. 
> However, passing a security audit can open a viable path toward self-sufficiency.
> 
> **This “Pet Safety Leash” UI serves as a neutral demo skin for everyday usability testing.**
> Beneath that surface, however, it is an **Offline Bluetooth Swarm Network** designed for disaster response in zero-infrastructure environments.
> When both internet access and grid power fail during wildfires, floods, hurricanes, or similar crises, nearby devices can self-organize and continue operating locally.
> There is no cloud dependency, no reliance on cell towers, and no account system by design. Instead, it enables local coordination, SOS relay, and operational continuity across nearby nodes.
> **An early-warning system and life-saving mesh combined**—an infrastructure-independent resilience layer deployable on ordinary smartphones.

# VitalGuard AI - Infrastructure-Independent Survival Framework (v4.2)

VitalGuard AI is a **single-file, offline-first continuity demo** that has been **technically reviewed** and designed **with GDPR compliance in mind**. It keeps **local decision support** available when **power and connectivity are disrupted**, with **no accounts, no cloud dependency, and no telemetry by design**.

**UI languages (7):** English · 한국어 · العربية (RTL) · 日本語 · Français · 繁體中文 (台灣) · Español

**Format:** One self-contained HTML file with no build system and no external JS/CSS libraries.

South Korea operates specialized public institutions, such as KOTRA, to attract foreign investment. By leveraging public funding from U.S. institutions and aligning it with partnerships involving South Korean local governments, there is strong potential to secure mutually beneficial matching funds.

I am providing the official evidence regarding the strategic and institutional framework for this initiative:

🔗 **[Official English Press Release] South Korea’s AI Strategy – Ministry of Science and ICT (MSIT)**  
https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&bbsSeqNo=42&nttSeqNo=1071

---

## Document control (government / enterprise friendly)

| Field | Value |
|---|---|
| Document | VitalGuard AI README (Executive + Audit Notes) |
| Release artifact | `VitalGuard_AI_complete_V42_1.html` (single-file offline demo) |
| Version | v4.2 |
| Release date | 2026-02-17 |
| Owner | Morgan J. (Gyumin Jeon) |
| Contact | contact@mcorpai.org (mcorpai.org) |
| Classification | Unclassified - For external review |

---

## Release integrity (recommended for restricted environments)

**SHA-256 (approved artifact):** `7c22c0d182473f424597fa132b3fd1f408b0d5f1d191aabf849bbfaad2cf12cb`  
**File size:** 412572 bytes (~402.9 KiB)

Integrity verification commands:
- macOS: `shasum -a 256 VitalGuard_AI_complete_V42_1.html`
- Linux: `sha256sum VitalGuard_AI_complete_V42_1.html`
- Windows (PowerShell): `Get-FileHash .\VitalGuard_AI_complete_V42_1.html -Algorithm SHA256`

Why this matters:
- **Single audited artifact:** reduces runtime supply-chain exposure and "what exactly ran?" ambiguity.
- **Tamper-evident distribution:** reviewers can record the hash in a change-control memo (and optionally attach a digital signature) before use.

---

## Executive brief (60 seconds)

**What it is**
- A **local-only** web demo that uses **Bluetooth Low Energy (BLE) proximity (RSSI)** plus **on-device stability logic** to support **short-range coordination** when networks are unreliable.

**What it's for**
- Demonstrating **offline continuity patterns** for disaster response / field operations:
  - proximity-based mustering / asset boundary alerts,
  - short-range search & rescue assistance workflows (BLE proximity - not GPS),
  - offline hand-off continuity between devices (encrypted export option).

**What it is NOT**
- **Not GPS** (no map, no geolocation), and **not certified emergency/medical equipment**.
- Not a cloud product (no accounts, no remote control, no analytics).
- Not a "tracking platform" (no central database; no remote admin).

**Decision question this demo answers**
- "Can we evaluate an offline-first proximity/stability workflow without introducing cloud risk or third-party runtime dependencies?"

---

## Main-screen pillars (field narratives)

1) **Extreme S&R (Avalanche/Landslide)** - BLE beacon proximity + on-device stability logic to support a radar-like life-locator workflow when responders are operating off-grid.  
2) **Upcycling E-Waste (ESG & SDGs)** - repurpose retired smartphones into offline relief nodes, aligning with ESG and UN SDG objectives.  
3) **Off-Grid Agriculture & Asset Protection** - practical patterns for livestock and asset safety in rangeland/desert environments with no coverage.  
4) **Arabic & Global Ready** - multilingual UI is built in (7 languages), including Arabic (RTL).

---

## Threat model (half-page, review-friendly)

**In-scope assurances (what this demo is designed to resist):**
- **Cloud / telemetry risk by architecture:** no accounts, no analytics, no outbound endpoints in normal use.
- **Runtime supply-chain exposure:** no external JS/CSS/CDN dependencies at runtime (single-file artifact).
- **Accidental data leakage during review:** data stays in browser storage unless the user explicitly exports.

**Out-of-scope / non-goals (what this demo does NOT claim to protect against):**
- **Compromised device/OS:** malware, rooted devices, hostile firmware, or untrusted keyboards.
- **Malicious browser extensions / injected scripts** (enterprise add-ons, spyware, hostile profiles).
- **Physical capture of an unlocked device** (or screen/shoulder surfing).
- **Hostile MDM policies** (forced proxies, certificate injection, restricted Bluetooth policies).
- **Radio-layer attacks** (spoofed BLE advertisers, jamming, RF interference) beyond basic stability heuristics.

**Operational takeaway:** treat VitalGuard as a **reviewable prototype**. For real deployments, pair it with device hardening, policy controls, and a formal incident/assurance process.

---

## Acceptance criteria (5-line "pass/fail" checklist)

Use these as fast, objective "done" conditions for reviewers:

1) **Outbound requests to non-self origins: 0** during normal use (DevTools -> Network).  
2) **External runtime dependencies: 0** (no third-party `<script src=...>` / remote fonts / CDNs).  
3) **Local data is removable** (UI reset controls clear browser storage for the demo).  
4) **Offline usability**: in Airplane Mode, non-BLE features (Help, SOS UI, local data) remain usable.  
5) **BLE scan stability (foreground)**: on a supported device/browser, scanning remains stable for an evaluation window (e.g., 10-15 minutes) with watchdog recovery logged if stalls occur.

---

## How to run the demo (practical)

1. Open `VitalGuard_AI_complete_V42_1.html`.
2. Use a Chromium-based browser that supports Web Bluetooth scanning (platform support varies).
3. For the most reliable BLE behavior, open from a **secure context**:
   - `https://...` or `http://localhost` (recommended)
   - Avoid `file://` for scanning where possible (many browsers restrict Web Bluetooth on local files).
4. Optional (recommended when policy allows): **Install as an app (PWA).**
   - In Chrome/Edge, use **Install app** / **Add to Home Screen** so the demo runs in a dedicated window.
   - This can reduce accidental tab suspension and improve operational stability, but BLE scanning reliability remains OS/browser policy-dependent.
   - Keep the app **in the foreground** during BLE operations.
5. Click **Add Demo Tag** -> register a BLE tag -> start monitoring.

---

## Key verifiable claims (audit-friendly)

| Claim | How to verify (5 minutes) |
|---|---|
| Offline-first / local-only by default | Open DevTools -> Network, then use the UI. There should be no unexpected outbound requests to non-self origins during normal use. |
| No accounts / no cloud sync / no telemetry | Search the HTML for analytics endpoints, external scripts, or tracking code. Verify UI has no sign-in. |
| No third-party runtime dependencies | Confirm there are no external `<script src=...>` libraries loaded at runtime. |
| Data stays on device | Confirm browser local storage is used. Verify nothing leaves the device unless you explicitly export/share. |
| Optional secure hand-off | If using encrypted export, confirm it uses AES-GCM via WebCrypto (on-device). |

---

## Platform compatibility (typical)

| Platform | Expected status | Notes |
|---|---|---|
| Android + Chrome/Edge | Best experience | Web Bluetooth scanning support is strongest here. |
| Windows/macOS + Chrome/Edge | Often works | Depends on browser policies and BLE hardware support. |
| iOS/iPadOS + Safari/Chrome | Often limited | Web Bluetooth support differs; scanning may be unavailable. |
| Locked-down enterprise builds | Policy-dependent | BLE and local storage may be restricted by MDM policies. |

---

## Limitations (important)

- **BLE RSSI is not a tape measure.** Walls, pockets, bodies, and reflections distort signal strength.
- Scanning can pause due to OS battery restrictions; the demo includes watchdog recovery, but background behavior varies by device.
- This is a **technology demonstration**, not a certified safety/medical product.

---

## Provenance

- Official site: https://mcorpai.org  
- Demo (hosted): https://mcorpai.org/VitalGuard_AI  
- Source (GitHub): https://github.com/jekymin8232/luckyvicky-homepage  
- Contact: Morgan J. (Gyumin Jeon) - contact@mcorpai.org

---

*This README is not legal advice.*
