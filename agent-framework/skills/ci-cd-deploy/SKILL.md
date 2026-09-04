---
name: ci-cd-deploy
version: 1.0.0
description: Manages continuous integration, security scanning, production build packaging, and deployment verification.
category: devops-and-deployment
stage: delivery-and-monitoring
tools_required: github-actions, docker, npm
entry_script: scripts/verify_build.py
---

# CI/CD Deployment Skill

## 1. Automated Pipeline Stages
Every commit and pull request must traverse strict quality gates before being deemed release-ready:
1. **Lint & Format**: ESLint + Prettier check.
2. **Typecheck**: TypeScript strict mode verification.
3. **Agent Skills Verification**: `agent-framework/runner.py verify`.
4. **Unit & Integration Tests**: Vitest suite.
5. **E2E & Accessibility Tests**: Playwright + Axe-core.
6. **Production Build**: Next.js optimized production compilation / static export.

## 2. GitHub Actions Integration
Workflows are defined in `.github/workflows/ci.yml` to mirror this pipeline.
