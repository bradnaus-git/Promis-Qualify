import { describe, it, expect } from "vitest";

const G = 124028;

describe("Transparent Salary Model Simulator", () => {
  it("Standard model guarantees at least 6G base", () => {
    const baseGuarantee = 6 * G;
    const turnover = 1000 * 500; // very low turnover
    const estimatedPayout = Math.max(baseGuarantee, Math.round(turnover * 0.58));
    expect(estimatedPayout).toBe(baseGuarantee);
    expect(baseGuarantee).toBe(744168);
  });

  it("Standard model scales with billing beyond base threshold", () => {
    const baseGuarantee = 6 * G;
    const turnover = 1450 * 1650; // 2,392,500 NOK
    const estimatedPayout = Math.max(baseGuarantee, Math.round(turnover * 0.58));
    expect(estimatedPayout).toBeGreaterThan(baseGuarantee);
    expect(estimatedPayout).toBe(1387650);
  });

  it("Trygghet model guarantees at least 7G base", () => {
    const baseGuarantee = 7 * G;
    expect(baseGuarantee).toBe(868196);
  });
});
