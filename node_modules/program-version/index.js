'use strict'

module.exports = version;

var path = require('path');
var json = require(path.join(__dirname, '../../package.json'));

function version() {
  return json.name + ' v' + json.version;
}

