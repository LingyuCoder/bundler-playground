const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname, './a.js'), `
import b from './b';

export default b + 1;
`, 'utf-8');


fs.writeFileSync(path.join(__dirname, './b.js'), `
import c from './c';

export default c + 2;
`, 'utf-8');

fs.writeFileSync(path.join(__dirname, './c.js'), `
export default 3;
`, 'utf-8');