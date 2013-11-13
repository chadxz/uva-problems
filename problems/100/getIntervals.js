
function getIntervals() {
  "use strict";
  var intervals = [],
      args = Array.prototype.slice.call(arguments),
      numArguments = args.length,
      i, j;

  if (numArguments === 0) {
    throw new TypeError('cycleLength requires at least one argument');
  }

  if ((numArguments === 1) && (Array.isArray(args[0]))) {
    if (Array.isArray(args[0][0])) {
      // single argument is an array of arrays.
      // assume caller knows what they're doing.
      return args[0].slice();
    }
    else {
      // single argument contains an array of non-arrays.
      // move single argument to array.
      args = args[0];
      numArguments = args.length;
    }
  }

  i = j = 0;
  // copy pairs of arguments to the intervals array
  while (j+1 < numArguments) {
    intervals[i] = [
      args[j],
      args[j+1]
    ];

    i++;
    j += 2;
  }
  return intervals;
}

module.exports = getIntervals;