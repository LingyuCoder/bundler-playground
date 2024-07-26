import * as C from "./reexport-namespace";
import { counter } from "./reexport-namespace";

it("should report consistent exports info", () => {
  const x1 = counter.exportsInfo;

  expect(C.exportsInfo.unusedExport).toBe(x1.unusedExport);
  expect(C.exportsInfo.unusedExportInfo).toBe(x1.unusedExportInfo);
});
