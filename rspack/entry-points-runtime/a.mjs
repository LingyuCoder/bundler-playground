import { val, val2b } from "./shared.mjs";

it("should have the correct value", () => {
	expect(val).toBe(84);
	expect(val2b).toBe(42);
});
