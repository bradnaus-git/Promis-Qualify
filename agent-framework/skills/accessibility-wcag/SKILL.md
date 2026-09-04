---
name: accessibility-wcag
version: 1.0.0
description: Enforces WCAG 2.1 / 2.2 AA accessibility requirements mandated by Norwegian public sector regulations (Digdir / Uu-tilsynet).
category: compliance-and-a11y
stage: verification-and-ci
tools_required: axe-core, playwright, lighthouse
entry_script: scripts/check_a11y.py
---

# Accessibility & WCAG 2.2 Compliance Skill

## 1. Regulatory Context (Norway / Public Sector)
In Norway, public and private websites must comply with the Regulations on Universal Design of ICT Solutions (Forskrift om universell utforming av IKT-løsninger) supervised by Uu-tilsynet / Digdir.
- Standards: WCAG 2.1 / 2.2 Level AA.
- High contrast: Text contrast minimum 4.5:1 (normal text) and 3:1 (large text / UI controls).
- Full keyboard navigation: Focus indicators must be clearly visible (`focus:ring-2 focus:ring-[#00D2A0]`).
- Screen reader semantic markup: Headings in strictly hierarchical order (`h1` -> `h2` -> `h3`), descriptive ARIA labels, image `alt` texts.
- Accessibility statement (*Tilgjengelighetserklæring*): Must be accessible from the footer.

## 2. Automated Testing Rules
Every automated test run must:
1. Verify tab stop sequences across interactive components (calculators, modals, language switches).
2. Scan all rendered views with axe-core for 0 critical, serious, or moderate violations.
3. Validate color contrast in both light and dark themes.
