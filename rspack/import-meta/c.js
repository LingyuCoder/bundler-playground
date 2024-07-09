import {a } from './a'

console.log(module.loaded);
console.log(module.id);
console.log(Object.keys(__webpack_modules__));
console.log(__webpack_chunk_load__);
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(__webpack_module__);
console.log(__webpack_module__.id)
console.log(__webpack_runtime_id__)
console.log(__webpack_base_uri__)
console.log(__webpack_public_path__)

a;

console.log(__webpack_is_included__('./a.js'));

console.log(__webpack_exports_info__)