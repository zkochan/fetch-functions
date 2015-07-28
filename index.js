'use strict';
var bind = require('bind-ponyfill');

function fetchFunctions(obj, fnames) {
  var result = {};
  for (var i = fnames.length; i--;) {
    if (typeof obj[fnames[i]] === 'function') {
      result[fnames[i]] = bind(obj[fnames[i]], obj);
    }
  }
  return result;
}

module.exports = fetchFunctions;
