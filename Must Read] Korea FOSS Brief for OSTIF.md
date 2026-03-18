# A Brief on Open-Source Sovereignty: VitalGuard AI and the Path to Supply Chain Resilience

**To:** Amir Montazery and the OSTIF Team  
**From:** Morgan J. (Gyu-min Jeon), Lead Architect, M-Corp Ethical AI  
**Contact:** contact@mcorpai.org

---

When the open-source ecosystem has a genuine opportunity to become more self-sustaining, that opportunity deserves careful attention—because such moments are rare.

A single principled open-source developer achieving verifiable independence can create a ripple effect that strengthens the broader supply chain for hundreds of others.

I would like to share a focused perspective on the open-source landscape in South Korea, and to explore whether OSTIF's expertise in security validation might intersect meaningfully with this work.

**This brief covers three connected points and should take approximately five minutes to read.**

---

## 1. The Supply Chain Problem, Seen from the Ground Up

Independence is not merely a philosophical preference—it is a structural precondition for supply chain security.

Supply chain attacks do not emerge from technical weakness alone. They occur when open-source developers, lacking sustainable support, are eventually forced to transfer control of their libraries to parties whose incentives are misaligned with the ecosystem. Research suggests that a significant portion of widely-used libraries may carry latent supply chain vulnerability, not because of malicious intent, but because of maintainer burnout and institutional neglect.

If we are building systems meant to operate in high-stakes environments—child protection, disaster response, medical triage—we must be able to verify the people and processes behind every dependency. If that verification is not possible, those dependencies should not be used.

This is the reasoning behind VitalGuard AI's "Zero Library" philosophy: a design commitment to zero external dependencies, making the codebase architecturally immune to supply chain attacks by construction. There is no third-party library to compromise. There is no external server to subvert. The entire system—roughly 400KB of vanilla HTML and JavaScript—is auditable in its entirety by a single competent reviewer.

This is not a claim of perfection. It is an invitation to verify.

---

## 2. What OSTIF's Role Represents in This Context

OSTIF's core value is not simply funding security audits—it is making rigorous, credible security verification accessible to projects that genuinely need it, and doing so in a way that generates publicly verifiable outcomes.

That distinction matters here.

VitalGuard AI has been submitted for a security audit through OTF's process (application #21441), with Radically Open Security (ROS) identified as a preferred audit partner. OTF is currently in a vendor selection process, with new contracts tentatively beginning around August 2026. There is a structural window between now and that timeline.

I am not writing to request funding. I am writing to ask two specific questions:

1. **Does OSTIF have existing or planned collaboration with OTF** in the context of their security audit vendor process? If so, understanding that relationship would help clarify the most appropriate path forward.

2. **Would OSTIF be willing to offer guidance or advisory input** on the security audit scope for a zero-dependency, offline-first AI system designed for humanitarian use? A project of this architecture has some unusual properties—no network calls, no external APIs, no library surface—that may benefit from structured scoping advice before a formal audit begins.

I recognize that these are specific asks, and I would be grateful for candid feedback on whether either falls within the scope of what OSTIF typically engages with.

---

## 3. Why Independent Validation Matters in the South Korean Context

South Korea began implementing its AI Basic Act in January 2026. The broader policy and institutional support ecosystem is expected to expand significantly from 2027 onward.

Within this environment, there is a structural feature of South Korean institutional culture that is worth naming directly: internationally recognized security validation—particularly from established U.S.-based institutions—carries significant weight in unlocking domestic public resources and institutional trust. This is not a claim about prestige. It reflects the practical reality of how South Korean public funding decisions are made, especially in the AI and open-source domains.

A credible security audit, conducted by a respected institution and resulting in a publicly available report, would function in this context as more than a technical deliverable. It would serve as a verifiable signal of trustworthiness that domestic institutions can point to when making resource allocation decisions.

The OTF application currently under review ($100,000 in seed funding) is not a bid for perpetual dependency. It is a request for catalytic validation—the kind that, in the South Korean policy environment, can unlock matching public resources at a significantly larger scale. In this sense, OTF's potential contribution would be both a financial bridge and a credibility marker that travels further than the funds themselves.

This mechanism operates on a well-understood principle: internationally recognized validation enables domestic institutional confidence, which enables sustainable local funding structures. The goal is a path away from grant dependency, not deeper into it.

---

## 4. VitalGuard AI: Relevant Technical Summary

**Architecture:** Single-file vanilla HTML/JavaScript (~400KB), zero external dependencies, zero network calls, offline-first operation on repurposed smartphones.

**Security Model:**
- Zero Library design eliminates the primary vector for supply chain attacks
- AES-GCM encryption for local data
- BLE mesh networking for offline peer-to-peer communication
- On-device anomaly detection (no cloud inference)
- Emergency data wipe functionality

**Humanitarian Scope:**
- Designed for use by refugees, human rights defenders, and journalists in low-connectivity environments
- 7 language support including Arabic (RTL)
- Acoustic mesh protocol as fallback for environments where Bluetooth is unavailable (e.g., iOS Safari Web Bluetooth limitation)

**Prior Review:**
- Reviewed by the Luxembourg Embassy (H.E. Ambassador Jacques Flies), with follow-up through LuxDev over a three-week period. The conclusion was that direct Luxembourg government involvement was not the appropriate institutional channel, but the review itself was completed and confirmed via official embassy correspondence.
- Exploratory engagement with IDS (Caroline Khene, Moinul Zaber) and UCL GDI Hub (Catherine Holloway, Tigmanshu Bhatnagar) is ongoing.

**License:** M-Corp Ethical AI License (Hippocratic 3.0 derivative), prohibiting military and surveillance use at the architectural level.

---

## 5. A Note on What I Am Not Requesting

To be explicit about what this brief is not:

- It is not a request for OSTIF to fund VitalGuard directly.
- It is not a request for OSTIF to endorse or publicly validate the project at this stage.
- It is not a request for a commitment of any kind.

It is a request for a brief conversation to determine whether there is a meaningful intersection between OSTIF's work and the specific needs of this project at this stage of development. If there is not, that is a useful and honest answer, and I would be grateful for it.

I would welcome a short call at a time that is convenient for you—Microsoft Teams, email, or any format that works best for your team.

---

Morgan J. (Gyu-min Jeon)  
Lead Architect, M-Corp Ethical AI  
Hanbat National University, South Korea  
contact@mcorpai.org  
mcorpai.org

---

## Appendix: On Open-Source Sustainability and Supply Chain Architecture

The long-term health of the open-source ecosystem depends on a principle that is difficult to operationalize but easy to state: meaningful contributions should lead to meaningful sustainability.

The root cause of many supply chain attacks is not malice at the origin. It is the predictable consequence of unpaid maintainers eventually stepping away, transferring ownership, or becoming susceptible to acquisition by parties with different incentives. The "don't reinvent the wheel" principle, while sensible in normal circumstances, becomes a liability when the wheel's maintenance structure cannot be independently verified.

VitalGuard's approach—building everything from first principles without external library dependencies—is one response to this structural problem. It is not the only response, and it is not universally appropriate. But for systems deployed in environments where verification of every component is a life-safety requirement, it represents a principled and auditable design choice.

**On the South Korean Policy Context:**

South Korea's AI Basic Act implementation, combined with the regional policy environment, creates an unusual window. Regional public institutions in South Korea are actively required to deploy allocated AI budgets, but face a shortage of technically validated, ethically grounded projects to fund. Internationally validated open-source tools fill this gap in ways that domestic-only projects cannot.

A $100,000 catalytic grant from OTF, accompanied by a credible published security audit, would serve as the international validation signal that unlocks these domestic matching mechanisms. This is not speculation—it reflects how Korean institutional funding decisions have been made in adjacent domains.

**On OSTIF's Role in This Ecosystem:**

OSTIF's model—connecting critical projects with expert security review, producing publicly available audit reports, and building long-term relationships with project maintainers—is precisely the kind of infrastructure-level work that the open-source ecosystem needs more of. The fact that OSTIF operates as a neutral third party, with no profit motive beyond the quality of the work, is what makes its outputs carry weight in institutional contexts.

If VitalGuard is eventually audited through OSTIF's process, the resulting public report would serve not only as a technical document, but as a durable reference point for institutions evaluating whether to adopt, fund, or recommend the project. That kind of verifiable, public, institutionally credible output is difficult to produce through other means.

---

**Official Reference:**  
South Korea AI Strategy – Ministry of Science and ICT (MSIT):  
https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&bbsSeqNo=42&nttSeqNo=1071

---

## Supplementary Letter: To Dr. Melanie Rieback, Radically Open Security

Dear Dr. Rieback,

I am reaching out because Radically Open Security's approach to security work—prioritizing transparency and public benefit over extractive profit—reflects the same principles that shape VitalGuard AI's design.

I have submitted VitalGuard (OTF #21441) with ROS identified as the preferred audit partner. I wanted to make direct contact in parallel, both to introduce the project and to ask a practical question: given VitalGuard's unusual architecture (zero external dependencies, single-file vanilla HTML/JS, offline-first), would you be willing to offer an informal assessment of whether the project is appropriately scoped for a formal security engagement?

The reason I ask is that a zero-dependency architecture presents a different audit surface than most projects ROS would typically encounter. There are no library call graphs to analyze, no npm or pip dependency trees to trace. The audit scope would focus on the implementation of cryptographic primitives, BLE mesh protocol security, on-device data handling, and the integrity of the offline AI inference logic. I would value your perspective on whether this scope is appropriately sized and whether any scoping adjustments would make the engagement more productive.

VitalGuard has undergone a three-week review by the Luxembourg government (confirmed via official embassy correspondence) and is in exploratory engagement with IDS and UCL GDI Hub. The South Korean AI Basic Act implementation creates a policy window in 2026-2027 that makes timely technical validation particularly valuable.

I am not asking for a commitment. I am asking for a candid technical conversation.

Thank you for your time and consideration.

Morgan J. (Gyu-min Jeon)  
contact@mcorpai.org

---

*© 2026 Morgan J. (Gyu-min Jeon) | M-Corp Ethical AI — M-Corp 윤리적 AI 라이선스 (Hippocratic 3.0 파생 라이선스) 오직 민간·농업·인도주의 목적에 한해 사용 가능*
