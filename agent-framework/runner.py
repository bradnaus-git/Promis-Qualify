#!/usr/bin/env python3
"""
Promis Qualify Agent Framework Runner
Orchestrates pipeline management and runtime skills defined via SKILL.md.
"""

import os
import sys
import json
import re
import argparse
from pathlib import Path

SKILLS_DIR = Path(__file__).parent / "skills"

def parse_skill_md(skill_path: Path):
    """Parse YAML frontmatter and markdown body from SKILL.md"""
    content = skill_path.read_text(encoding="utf-8")
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n(.*)$", content, re.DOTALL)
    if not match:
        raise ValueError(f"Invalid SKILL.md format in {skill_path}: missing YAML frontmatter")
    
    frontmatter_raw, body = match.groups()
    metadata = {}
    for line in frontmatter_raw.splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if ":" in line:
            key, val = line.split(":", 1)
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            metadata[key] = val
            
    return {
        "metadata": metadata,
        "instructions": body.strip(),
        "file_path": str(skill_path)
    }

def list_skills():
    """List all available skills discovered in the framework"""
    skills = []
    if not SKILLS_DIR.exists():
        print(f"[AgentFramework] Skills directory {SKILLS_DIR} does not exist.")
        return []

    for skill_file in SKILLS_DIR.glob("*/SKILL.md"):
        try:
            parsed = parse_skill_md(skill_file)
            skills.append(parsed)
        except Exception as e:
            print(f"[Warning] Failed parsing {skill_file}: {e}")
            
    return skills

def verify_all_skills():
    """Validate all SKILL.md definitions against the schema"""
    skills = list_skills()
    required_keys = ["name", "version", "description", "category", "stage"]
    errors = []
    
    print(f"--- Validating {len(skills)} Agent Skills ---")
    for s in skills:
        meta = s["metadata"]
        missing = [k for k in required_keys if k not in meta]
        if missing:
            errors.append(f"Skill '{s['file_path']}' missing required keys: {missing}")
        else:
            print(f"[PASS] {meta.get('name')} (v{meta.get('version')}) - Category: {meta.get('category')}")
            
    if errors:
        for err in errors:
            print(f"[FAIL] {err}", file=sys.stderr)
        return False
        
    print("\nAll skills verified successfully.")
    return True

def run_skill(skill_name: str, params: dict = None):
    """Execute or load a specific skill"""
    skills = {s["metadata"].get("name"): s for s in list_skills()}
    if skill_name not in skills:
        print(f"Error: Skill '{skill_name}' not found. Available: {list(skills.keys())}", file=sys.stderr)
        sys.exit(1)
        
    skill = skills[skill_name]
    print(f"--- Executing Skill: {skill_name} ---")
    print(f"Description: {skill['metadata'].get('description')}")
    print(f"Category: {skill['metadata'].get('category')}")
    print(f"Instructions loaded: {len(skill['instructions'])} chars")
    
    # Check for executable script
    script_entry = skill["metadata"].get("entry_script")
    if script_entry:
        script_path = Path(skill["file_path"]).parent / script_entry
        if script_path.exists():
            print(f"Running entry script: {script_path}")
            os.system(f"{sys.executable} \"{script_path}\"")
        else:
            print(f"Note: Entry script {script_entry} declared but not found at {script_path}.")
    else:
        print(f"Skill '{skill_name}' operates as declarative guidance and prompt schema.")
        
    return skill

def main():
    parser = argparse.ArgumentParser(description="Promis Qualify Agent Framework CLI")
    parser.add_argument("command", choices=["list", "verify", "run"], help="Command to execute")
    parser.add_argument("--skill", help="Name of the skill to execute")
    parser.add_argument("--params", help="JSON parameters for skill execution", default="{}")
    
    args = parser.parse_args()
    
    if args.command == "list":
        skills = list_skills()
        print(f"\nFound {len(skills)} Registered Skills:\n" + "="*50)
        for s in skills:
            m = s["metadata"]
            print(f"• {m.get('name', 'unnamed'):<26} [{m.get('category', 'general')}] v{m.get('version', '1.0.0')}")
            print(f"  {m.get('description', '')}\n")
    elif args.command == "verify":
        success = verify_all_skills()
        sys.exit(0 if success else 1)
    elif args.command == "run":
        if not args.skill:
            print("Error: --skill parameter is required for 'run' command.", file=sys.stderr)
            sys.exit(1)
        params = json.loads(args.params)
        run_skill(args.skill, params)

if __name__ == "__main__":
    main()
