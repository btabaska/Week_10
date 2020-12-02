const Math = function (num = 0) {
  if (typeof num !== "number") {
    throw new Error("Must pass a number or nothing at all");
  } else {
    this.num = num;
  }
};

Math.prototype.add = function (num = 0) {
  return new Math(this.num + num);
};
Math.prototype.sub = function (num = 0) {
  return new Math(this.num - num);
};
Math.prototype.multiply = function (num = 0) {
  return new Math(this.num * num);
};
Math.prototype.divide = function (num = 0) {
  return new Math(this.num / num);
};

module.exports = Math;
