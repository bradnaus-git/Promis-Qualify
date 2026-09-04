---
name: qa-automation
version: 1.0.0
description: Manages end-to-end testing, visual regression, component validation, and performance benchmarks.
category: quality-assurance
stage: test-and-validation
tools_required: playwright, vitest, axe-core
entry_script: scripts/run_qa_suite.py
---

# QA Automation Skill: Living the Practice

## 1. Dogfooding Quality Assurance
As a test management consultancy, Promis Qualify's own website must demonstrate flawless QA engineering:
- Zero JavaScript console errors or unhandled rejections.
- Zero broken links (internal or external).
- High performance: Core Web Vitals (LCP < 2.5s, FID/INP < 200ms, CLS < 0.1).
- End-to-end verification of all interactive features:
  - Test Maturity & Project Risk Calculator.
  - Transparent Salary Calculator (6G/7G calculation formulas).
  - Bilingual switcher (state persistence and language integrity).
  - Contact and recruitment inquiry flows.

## 2. Test Execution Protocol
1. **Unit Tests (Vitest)**: Verification of calculation algorithms, formatting functions, and state reducers.
2. **E2E Tests (Playwright)**: Cross-browser verification (Chromium, Firefox, WebKit) across desktop and mobile viewports.
3. **Accessibility Audits**: Integration with `@axe-core/playwright`.
