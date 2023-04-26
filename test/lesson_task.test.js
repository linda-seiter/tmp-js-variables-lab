const path = require("path");
const babel = require("@babel/core");
const {
  horses,
  apples,
  applesPerHorse,
  leftoverApples,
} = require("../lesson_task.js");

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, "..", "task1.js")
);
const code = babelResult.code;
const codeNoWhiteSpace = code.replace(/\s/g, "");

describe("horses", () => {
  it("is declared", () => {
    expect(horses).toBeDefined();
  });

  it("equals 3", () => {
    expect(horses).toEqual(3);
  });
});

describe("apples", () => {
  it("is declared", () => {
    expect(apples).toBeDefined();
  });

  it("equals 17", () => {
    expect(apples).toEqual(17);
  });
});

describe("applesPerHorse", () => {
  it("is declared", () => {
    expect(applesPerHorse).toBeDefined();
  });

  it("equals 5", () => {
    expect(applesPerHorse).toEqual(5);
  });

  it("is calculated with correct formula", () => {
    expect(codeNoWhiteSpace).toContain("Math.floor(apples/horses)");
    const assignmentStatement = code.match("applesPerHorse\\s*=\\s*([^;]*);");
    expect(assignmentStatement).not.toBeNull();
    expect(assignmentStatement[1].toContain("Math.floor(apples / horses)");
  });
});

describe("leftoverApples", () => {
  it("is declared", () => {
    expect(leftoverApples).toBeDefined();
  });

  it("equals 2", () => {
    expect(leftoverApples).toEqual(2);
  });

  it("is calculated with correct formula", () => {
    const assignmentStatement = code.match("leftoverApples\\s*=\\s*([^;]*);");
    expect(assignmentStatement).not.toBeNull();
    expect(assignmentStatement[1]).toContain("apples % horses");
  });
});
