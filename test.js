var assert = require('assert');
var wrap = require('./');

assert.equal(wrap('Hello Dolly', '\n%OUTPUT%!\n'), '\nHello Dolly!\n');

assert.equal(wrap('', '%output%'), '');
assert.equal(wrap(123, ''), '');