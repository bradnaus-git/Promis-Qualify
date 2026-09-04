#!/usr/bin/env python3
"""
CLI utility to dynamically generate and scaffold a new Agent Skill adhering to the SKILL.md specification.
"""

import os
import sys
import argparse
from pathlib import Path

SKILLS_DIR = Path(__file__).parent / "skills"

TEMPLATE = """---
name: {name}
version: 1.0.0
description: {description}
category: {category}
stage: {stage}
tools_required: {tools}
entry_script: scripts/run.py
---

# {title} Skill

## 1. Purpose & Scope
{description}

## 2. Operating Guidelines
- Detail step-by-step logic and integration points with the Promis Qualify web platform.
- Adhere to WCAG 2.2 AA universal design standards and TypeScript strict typing.

## 3. Prompts & Execution Schema
Describe prompts, inputs, and outputs here.
"""

SCRIPT_TEMPLATE = """#!/usr/bin/env python3
import sys

def main():
    print("Executing skill hook for {name}...")
    # Add custom validation, ingestion, or runtime transformation logic here
    print("Execution completed successfully.")

if __name__ == "__main__":
    main()
"""

def create_skill(name: str, description: str, category: str = "custom", stage: str = "runtime", tools: str = "none"):
    skill_slug = name.lower().replace(" ", "-")
    target_dir = SKILLS_DIR / skill_slug
    
    if target_dir.exists():
        print(f"Error: Skill '{skill_slug}' already exists at {target_dir}.", file=sys.stderr)
        sys.exit(1)
        
    target_dir.mkdir(parents=True, exist_ok=True)
    scripts_dir = target_dir / "scripts"
    scripts_dir.mkdir(exist_ok=True)
    
    title = name.replace("-", " ").title()
    content = TEMPLATE.format(
        name=skill_slug,
        title=title,
        description=description,
        category=category,
        stage=stage,
        tools=tools
    )
    
    (target_dir / "SKILL.md").write_text(content, encoding="utf-8")
    run_script = scripts_dir / "run.py"
    run_script.write_text(SCRIPT_TEMPLATE.format(name=skill_slug), encoding="utf-8")
    
    print(f"[Success] Scaffolded new skill '{skill_slug}' at {target_dir}")
    print(f"  - {target_dir / 'SKILL.md'}")
    print(f"  - {run_script}")

def main():
    parser = argparse.ArgumentParser(description="Create a new Agent Skill for Promis Qualify")
    parser.add_argument("--name", required=True, help="Unique name/slug for the skill")
    parser.add_argument("--description", required=True, help="Description of the skill")
    parser.add_argument("--category", default="custom", help="Skill category (e.g., runtime-feature, pipeline-gate, compliance)")
    parser.add_argument("--stage", default="runtime", help="Lifecycle stage (build, audit, test, runtime)")
    parser.add_argument("--tools", default="typescript", help="Comma-separated required tools")
    
    args = parser.parse_args()
    create_skill(args.name, args.description, args.category, args.stage, args.tools)

if __name__ == "__main__":
    main()
