export let counter = 0;
export const increment = () => {
  counter++;
};
export function reset() {
  counter = 0;
}
export const unusedExport = 42;

export const exportsInfo = {
  unusedExport: __webpack_exports_info__.unusedExport.used,
  unusedExportInfo: __webpack_exports_info__.unusedExport.useInfo,
};
