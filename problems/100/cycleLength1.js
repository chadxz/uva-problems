// brute force implementation
function getCycleLength() {
  "use strict";
  var intervals = [];

  // initialize intervals variable based on arguments
  if (arguments.length === 0) {
    throw new TypeError('cycleLength requires at least one argument');
  }
  else if ((arguments.length === 1) && (Array.isArray(arguments[0]))) {
    if (Array.isArray(arguments[0][0])) {
      intervals = arguments[0];
    }
    else {
      intervals[0] = [
        arguments[0][0],
        arguments[0][1]
      ];
    }
  }
  else {
    intervals[0] = [
      arguments[0],
      arguments[1]
    ];
  }


  console.log(intervals);
}

module.exports = getCycleLength;