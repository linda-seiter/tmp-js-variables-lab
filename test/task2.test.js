const path = require("path");
const babel = require("@babel/core");
const helper = require("./helper.js");
require("jest-matcher-one-of");

const { apples, carrots } = require("../task2.js");

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, "..", "task2.js")
);
const code = babelResult.code;

describe("apples", () => {
  it("is incremented by 7 using operator +=", () => {
    const assignment = helper.getAssignment(code, "apples", "\\+=");
    expect(assignment).not.toBeNull();
    expect(parseInt(assignment[1])).toBe(7);
  });

  it("is decremented by 1 using operator -=", () => {
    const assignment = helper.getAssignment(code, "apples", "\\-=");
    expect(assignment).not.toBeNull();
    expect(parseInt(assignment[1])).toBe(1);
  });

  it("is divided by 2 using operator /=", () => {
    const assignment = helper.getAssignment(code, "apples", "\\/=");
    expect(assignment).not.toBeNull();
    expect(parseInt(assignment[1])).toBe(2);
  });

  it("has correct final value", () => {
    expect(apples).toBe(5);
  });
});

it("has correct final value", () => {
  expect(apples).toBe(5);
});

describe("carrots", () => {
  it("is incremented by 4 using operator +=", () => {
    const assignment = helper.getAssignment(code, "carrots", "\\+=");
    expect(assignment).not.toBeNull();
    expect(parseInt(assignment[1])).toBe(4);
  });

  it("is multiplied by 3 using operator -*", () => {
    const assignment = helper.getAssignment(code, "carrots", "\\*=");
    expect(assignment).not.toBeNull();
    expect(parseInt(assignment[1])).toBe(3);
  });

  it("has correct final value", () => {
    expect(carrots).toBe(18);
  });
});
