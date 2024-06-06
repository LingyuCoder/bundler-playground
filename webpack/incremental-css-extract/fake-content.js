let i = 0;
module.exports = function(content) {
  this.cacheable(false);
  i++;
  if (i === 1) {
    return `
      body {
        color: red;
      }
    `;
  } else if (i === 2) {
    return `
      body {{ }
    `;
    
  } else {
    return `
      body {
        color: blue;
      }
    `;
  }
}
