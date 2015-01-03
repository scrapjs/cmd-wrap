#!/usr/bin/env node

'use strict';

var wrap = require('wrap-stream');

var result = '', args = process.argv.slice(2);

//no args passed
if (!args.length) {
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
	process.exit(1);
}

process.stdin
.pipe(wrap(args[0], args[1]))
.pipe(process.stdout);