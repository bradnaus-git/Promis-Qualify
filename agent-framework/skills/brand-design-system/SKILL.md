---
name: brand-design-system
version: 2.0.0
description: Enforces authentic Promis Qualify senior consultancy visual identity, white backgrounds, Promis blue tokens, and WCAG 2.2 AA contrast.
category: design-and-ux
stage: build-and-lint
tools_required: tailwindcss, lucide-react
entry_script: scripts/validate_tokens.py
---

# Brand Design System Skill: Promis Qualify AS

## 1. Brand Essence & Visual Language
Promis Qualify is a premier Norwegian test management consultancy with senior consultants averaging 15–20+ years of experience (average age 50+).
The visual identity reflects **senior corporate trust, stability, and dignity** — not a flashy startup or dark tech theme.

- **Background**: Pure Crisp White (`#FFFFFF`) throughout.
- **Secondary Surfaces**: Soft Warm Corporate Slate / Grey (`#F8FAFC`, `#F1F5F9`).
- **Headings & Body Text**: Deep Graphite & Corporate Charcoal (`#0F172A`, `#1E293B`, `#334155`).
- **Signature Accent**: Promis Cerulean Blue (`#009FE3` / `#0088C5`), matching the horizontal bar and the 'O' and 'A' in the official Promis Qualify logo.
- **Official Logo**: Located at `/logo.png`, crisp horizontal layout on white background.
- **Borders & Dividers**: Clean, subtle executive borders (`#E2E8F0`, `#CBD5E1`).

## 2. Component Directives
1. **Buttons & Actions**:
   - Primary: Promis Blue (`bg-[#009FE3] hover:bg-[#0088C5] text-white font-semibold rounded-md shadow-sm`).
   - Secondary: White with slate border (`bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 rounded-md`).
2. **Cards & Containers**:
   - Clean white corporate cards (`bg-white border border-slate-200 rounded-lg p-6 shadow-sm`).
   - Muted information boxes (`bg-slate-50 border border-slate-200 rounded-lg p-5`).
3. **Tone & Demographics**:
   - Tone is grounded, calm, and deeply knowledgeable.
   - Tailored to senior public procurement executives (Doffin/Digdir) and enterprise C-suite leaders.
