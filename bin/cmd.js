#!/usr/bin/env node

'use strict';

var wrap = require('..');

process.stdin.setEncoding('utf8');

var result = '', wrapper = '%output%';
var opts = process.argv.slice(2);

wrapper = opts[0] || wrapper;

process.stdin.on('data', function(data) {
	result += data;
});

process.stdin.on('end', function() {
	process.stdout.write(wrap(result, wrapper));
});