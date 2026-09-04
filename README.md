# Promis Qualify AS - Digital Platform & Agent Framework

> **"Nail the Test, Rock Your Success!"**  
> Premier test management, advisory, Big Testing, and commissioning consultancy based at Rebel in Oslo.

---

## 🏛️ Project Overview

This repository houses the modern digital platform and extensible **Agent Framework** for **Promis Qualify AS**.

- **Modern Web Application**: Built with Next.js 14, React 18, TypeScript, Tailwind CSS, Lucide Icons, and Framer Motion.
- **Dual-Audience Architecture**: Specialized trust signals and compliance for the **Norwegian public sector** (WCAG 2.2 AA / Digdir, ISTQB Advanced, NS 6450) and agility for **private enterprises** (CI/CD test automation, API testing, performance).
- **Interactive Value Tools**:
  - **Test Maturity & Project Risk Calculator**: 4-parameter interactive risk assessment generating a tailored QA methodology roadmap.
  - **Transparent Salary Simulator**: Interactive model calculating expected earnings across Promis Qualify's 6G base, 7G base, and fixed salary options.
  - **QualifyAI Copilot**: On-site knowledge agent answering client questions on testing standards and methodologies.
- **Extensible Agent Framework (`skills.md`)**: Standardized skill-based system for pipeline verification, quality gating, and runtime capabilities.

---

## ☁️ Render Deployment (Enstruc Proto Architecture)

This repository includes a native **Render Blueprint** (`render.yaml`) and multi-stage `Dockerfile` for zero-configuration cloud hosting.

### 1-Click Connection on Render:
1. Go to [dashboard.render.com](https://dashboard.render.com).
2. Click **New +** $\rightarrow$ **Blueprint**.
3. Select this repository: `bradnaus-git/Promis-Qualify`.
4. Click **Apply**.
5. Render will automatically build the service in **Frankfurt (`region: frankfurt`)** and provide a live public URL (e.g. `https://promis-qualify-preview.onrender.com`).

---

## 🤖 Agent Framework (`skills.md` Architecture)

The repository implements the standardized `skills.md` convention:

```bash
# List all registered skills
python agent-framework/runner.py list

# Verify all skills against schema
python agent-framework/runner.py verify

# Execute a specific skill
python agent-framework/runner.py run --skill runtime-qa-advisor

# Dynamically scaffold a new skill
python agent-framework/create_skill.py --name "tender-analyzer" --description "Automated analysis of public sector tender specs"
```

### Core Built-in Skills:
- `brand-design-system`: Enforces Nordic QA precision tokens, typography, and contrast.
- `content-orchestrator`: Governs bilingual (NO/EN) copy and public tender terminology.
- `accessibility-wcag`: Enforces WCAG 2.1/2.2 AA universal design standards.
- `qa-automation`: Manages unit, E2E, and performance benchmarks.
- `ci-cd-deploy`: Manages CI/CD GitHub Actions quality gates.
- `runtime-qa-advisor`: Powers the on-site QualifyAI Copilot.

---

## 🚀 Local Development

```bash
# Set environment PATH to use Node LTS
$env:PATH = "d:\Tools\Code\PromisQualify\.node;$env:PATH"

# Install dependencies
npm install

# Start development server
npm run dev

# Run Vitest test suite
npm run test

# Build production bundle
npm run build
```
