// brute force implementation

var getIntervals = require('./getIntervals');

function getCycleLengths() {
  "use strict";
  var args = Array.prototype.slice.call(arguments),
      intervals = getIntervals(args);

  // TODO: implement
}

function getMaxCycleLength() {
  "use strict";
  var args = Array.prototype.slice.call(arguments),
      intervals = getIntervals(args),
      cycleLengths = getCycleLengths(intervals);

  return cycleLengths.length > 0 ?
      Math.max.apply(Math, cycleLengths) :
      0;
}

exports.getCycleLengths = getCycleLengths;
exports.getMaxCycleLength = getMaxCycleLength;