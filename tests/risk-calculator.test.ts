import { describe, it, expect } from "vitest";

// Reusable logic from risk assessment
function calculateRisk(projectType: string, complexity: number, currentQA: string, criticality: number) {
  let score = 0;

  if (projectType === "building") score += 25;
  else if (projectType === "public") score += 22;
  else if (projectType === "integrations") score += 18;
  else score += 10;

  score += complexity * 7;

  if (currentQA === "none") score += 25;
  else if (currentQA === "manual") score += 18;
  else if (currentQA === "partial") score += 10;
  else score += 4;

  score += criticality * 6;

  const clampedScore = Math.min(Math.max(score, 15), 98);

  let level: "low" | "medium" | "high" | "critical" = "medium";
  if (clampedScore >= 75) level = "critical";
  else if (clampedScore >= 55) level = "high";
  else if (clampedScore >= 35) level = "medium";
  else level = "low";

  return { score: clampedScore, level };
}

describe("Test Risk Calculator Logic", () => {
  it("should classify high-complexity building projects with no QA as critical risk", () => {
    const result = calculateRisk("building", 4, "none", 4);
    expect(result.score).toBeGreaterThanOrEqual(75);
    expect(result.level).toBe("critical");
  });

  it("should classify standard SaaS with advanced QA as low/moderate risk", () => {
    const result = calculateRisk("saas", 1, "advanced", 1);
    expect(result.score).toBeLessThan(40);
    expect(["low", "medium"]).toContain(result.level);
  });

  it("should clamp values within safety boundaries (15 - 98)", () => {
    const minResult = calculateRisk("saas", 1, "advanced", 1);
    expect(minResult.score).toBeGreaterThanOrEqual(15);

    const maxResult = calculateRisk("building", 4, "none", 4);
    expect(maxResult.score).toBeLessThanOrEqual(98);
  });
});
