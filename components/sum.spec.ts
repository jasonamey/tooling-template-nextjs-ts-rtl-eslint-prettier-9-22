import { sum } from "./sum";

it("sum 5 + 2", () => {
  const a = 5;
  expect(a).toBe(5);
  expect(sum(5, 3)).toBe(8);
});
