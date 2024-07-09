
console.log(module.loaded);
console.log(module.id === require.resolve('./c.js'));
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
__webpack_nonce__ = "2312312"


console.log(__webpack_chunkname__)

console.log(__webpack_is_included__('./a.js'));

console.log(__webpack_exports_info__)

console.log(__webpack_hash__)

import('../a');

console.log(__rspack_version__)
console.log(__rspack_unique_id__)

console.log(require.resolve('../a.js'))

console.log(require.cache[require.resolve("../a.js")])