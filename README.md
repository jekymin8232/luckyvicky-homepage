# VitalGuard AI — Life‑Saving Offline AI Demo (v4.1.4)

A **single‑file, offline‑only** web demo that combines:

- **Bluetooth Low Energy (BLE) proximity** (RSSI from advertisement scanning)
- A tiny **on‑device “micro‑AI” engine** (signal smoothing + stability logic + optional local learning)
- **Emergency/SOS** UX that still works when the network/cloud is unavailable

This repository is intentionally built so that a reviewer can open **one HTML file** and understand what it does — no build system, no external JS libraries, and no hidden telemetry.

**Live / source:** https://github.com/jekymin8232/luckyvicky-homepage  
**Contact:** Morgan J. (Gyumin Jeon) · contact@mcorpai.org · mcorpai.org

---

## Why the UI looks like a “Pet Safety Leash”

To test the offline AI engine and BLE proximity system **in everyday environments**, the prototype is skinned as a **“Pet Safety Leash”** — a universal, non‑sensitive use case.

The **same underlying offline engine** can be re‑skinned for humanitarian and disaster contexts such as:

- evacuation / muster guidance,
- search & rescue assistance,
- field operations in low‑connectivity environments,
- disaster response coordination *without cloud dependencies*.

(Important: this demo uses **BLE proximity**, not GPS.)

---

## What it does (high level)

### 1) Offline BLE proximity tracking (Advertisement RSSI)
- Uses **Web Bluetooth LE Scanning** (`requestLEScan` + `advertisementreceived`) to read RSSI repeatedly.
- Tracks one or many BLE tags with a **registration wizard** (name the tag, save a signature, verify by moving).
- Includes **scan health** monitoring (events/sec + watchdog restart when the scan stalls).

### 2) Decision stability (“AI core”)
BLE RSSI is noisy. VitalGuard focuses on **stable decisions**, not fake precision.

The core engine includes:
- **Kalman filtering** to smooth RSSI and estimate trend/velocity.
- **Hysteresis + anti‑flapping zone logic** so alerts don’t bounce rapidly.
- **Lost detection** when signal is absent for a configured window.

Optional “local learning” modules are included (all on‑device, no cloud):
- **k‑NN Lite** (learns from user feedback samples)
- **IsolationForest Lite** (baseline anomaly scoring from SAFE windows)
- **Q‑learning Lite** (small threshold adjustments from feedback)
- **RLS calibration** (optional calibration of RSSI→distance mapping)

### 3) SOS / Emergency UX (offline)
- **SOS Finder**: a focused UI to assist locating a selected tag.
- **Emergency Mode**: loud siren / strobe / big on‑screen message.
- **Rescue Assist**: share an offline **“Rescue Pack”** so another phone can scan for the same tag.
- **Backups**: export/import local data; **optional encrypted exports** (AES‑GCM) for safe hand‑off.

---

## Privacy & GDPR posture (plain language)

- **No accounts. No cloud sync. No analytics/telemetry.**
- Data is stored **locally on the device** (browser storage).
- Nothing is uploaded unless the user **explicitly exports** a file.

This is designed to be **GDPR‑friendly by architecture** (local‑only).  
*(This README is not legal advice.)*

---

## How to run the demo

1. Download/open `VitalGuard AI_complete_V41_4.html`.
2. Use a **Chromium‑based browser** that supports Web Bluetooth scanning (support varies by platform).
3. For the most reliable behavior, serve the file from:
   - `https://…` or `http://localhost`  
   (some browsers restrict BLE on `file://`).
4. Click **Add Demo Tag** → register a BLE tag → start monitoring.

---

## Limitations (important to understand)

- **BLE RSSI is not a tape measure.** Walls, pockets, bodies, and reflections can distort signal strength.
- Scanning can pause due to OS battery restrictions; the demo includes watchdog recovery, but **background behavior varies** by device.
- This is a **technology demo**, not a certified safety/medical product.

---

## What to look at (for reviewers)

- `BLE` module: scanning lifecycle, filters, scan watchdog, adv/sec metrics
- `Wizard`: tag registration + signature capture
- `Pet` processing: Kalman smoothing, zone stability, alert rules
- `AIPackV4` / `QLearningLite`: optional on‑device learning
- Export/import + optional encryption (“Rescue Pack”)

---

## License & use

This demo is published openly for review and humanitarian innovation.  
It includes an ethical‑use notice (no military/surveillance use).

---

If you are evaluating this for humanitarian or disaster use, please share:
- device models,
- tag types,
- whether you tested indoors/outdoors,
- whether scanning remains stable in the background.

That feedback helps harden the offline engine for real‑world conditions.
