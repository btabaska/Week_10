function Algo() {}

Algo.prototype.reverse = function (str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};

Algo.prototype.isPalindrome = function (str) {
  reverseString = this.reverse(str);

  if (str === reverseString) {
    return true;
  } else {
    return false;
  }
};

Algo.prototype.capitalize = function (str) {
  var completedArray = [];
  var splitStringArray = str.split(" ");
  splitStringArray.forEach((item) => {
    completedArray.push(item.charAt(0).toUpperCase() + item.slice(1));
  });
  var finishedArray = completedArray.join(" ");
  return finishedArray;
};

module.exports = Algo;
