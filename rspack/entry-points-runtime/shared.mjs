import value from "./reexport-dep.mjs";
import value2 from "./reexport-dep2.mjs";
import * as dep2 from "./dep2.js";
import Super from "./super.js";

const derived = value;

export const val = /*#__PURE__*/ (() => value + derived)();

export const val2a = value2;
export const val2b = value2;
export const val2c = value2;

export const other = "other";

export class Test extends Super {}
