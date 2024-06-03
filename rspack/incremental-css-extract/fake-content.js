let i = 0;
module.exports = function(content) {
  this.cacheable(false);
  i++;
  if (i === 1) {
    return content;
  } else {
    return `
      body {
        color: blue;
      }
    `;
  }
}
