module.exports = function () {
  'use strict';

  var hasParent = !!module.parent;

  if (!hasParent) {
    // i'm being run directly, pull options from process.argv[]
  } else {
    // i'm being require()'d, pull options from arguments
  }

};