module.exports = function (content) {
  console.log(this.mode);
  console.log(this.target);
  this.callback(null, content);
};
