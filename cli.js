#!/usr/bin/env node

'use strict';

var wrap = require('wrap-stream');
var pkg = require('./package.json');

var result = '', args = process.argv.slice(2);


if (/-v|--version/.test(args[0])) {
	console.log(pkg.version);
	return;
}

//show help
if (!args.length || /-h|--help/.test(args[0]) || process.stdin.isTTY) {
	process.stdout.write([
		'',
		'Wrap stdin',
		'',
		'Usage',
		'  echo <string> | wrap "before" "after"',
		'',
		'Example',
		'  cat index.js | wrap ";(function($){" "})(jQuery);"'
	].join('\n  '));
	return;
}

process.stdin
.pipe(wrap(args[0], args[1]))
.pipe(process.stdout);