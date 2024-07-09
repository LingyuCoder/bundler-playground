import { a, exportsA } from "./lib.js";

it("should have exports", () => {
  expect(a).toBe(123);
  expect(exportsA).toBe(123);
});