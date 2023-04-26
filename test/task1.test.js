const path = require("path");
const babel = require("@babel/core");
const helper = require("./helper.js");
require("jest-matcher-one-of");

const {
  dogs,
  jerky,
  cookies,
  treats,
  treatsPerDog,
  leftoverTreats,
} = require("../task1.js");

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, "..", "task1.js")
);
const code = babelResult.code;
const codeNoWhiteSpace = code.replace(/\s+/g, "");

describe("dogs", () => {
  it("is declared", () => {
    expect(dogs).toBeDefined();
  });

  it("is assigned a positive value", () => {
    expect(dogs).toBeGreaterThan(0);
  });
});

describe("jerky", () => {
  it("is declared", () => {
    expect(jerky).toBeDefined();
  });

  it("is assigned a positive value", () => {
    expect(jerky).toBeGreaterThan(0);
  });
});

describe("cookies", () => {
  it("is declared", () => {
    expect(cookies).toBeDefined();
  });

  it("is assigned a positive value", () => {
    expect(cookies).toBeGreaterThan(0);
  });
});

describe("treats", () => {
  it("is declared", () => {
    expect(treats).toBeDefined();
  });
  it("is the sum of jerky and cookies", () => {
    const assignment = helper.getAssignment(code, "treats", "=");
    expect(assignment).not.toBeNull();
    expect(assignment[1]).toBeOneOf(["jerky + cookies", "cookies + jerky"]);
  });
});

describe("treatsPerDog", () => {
  it("is declared", () => {
    expect(treatsPerDog).toBeDefined();
  });
  it("is the integer result of dividing treats by dogs ", () => {
    const assignment = helper.getAssignment(code, "treatsPerDog", "=");
    expect(assignment).not.toBeNull();
    expect(assignment[1]).toContain("Math.floor(treats / dogs)");
  });
});

describe("leftoverTreats", () => {
  it("is declared", () => {
    expect(leftoverTreats).toBeDefined();
  });
  it("is the remainder of dividing treats by dogs", () => {
    const assignment = helper.getAssignment(code, "leftoverTreats", "=");
    expect(assignment).not.toBeNull();
    expect(assignment[1]).toContain("treats % dogs");
  });
});
