import { other, val2c, Test } from "./shared.mjs";

it("should have the correct value", () => {
	expect(other).toBe("other");
	expect(val2c).toBe(42);
	expect(Test).toBeTypeOf("function");
	expect(new Test()).toBeInstanceOf(Test);
});
