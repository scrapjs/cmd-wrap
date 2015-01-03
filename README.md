# cmd-wrap [![Code Climate](https://codeclimate.com/github/dfcreative/cmd-wrap/badges/gpa.svg)](https://codeclimate.com/github/dfcreative/cmd-wrap) [![deps](https://david-dm.org/dfcreative/cmd-wrap.svg)](https://david-dm.org/dfcreative/cmd-wrap) <a href="UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>

Wrap stdin command. Can serve as a replacement for closurecompiler’s `--output_wrapper`.

`$ npm isntall -g cmd-wrap`

# Usage

`$ echo <string> | wrap before after`

# Example

`$ cat index.js | wrap ";(function($){" "})(jQuery);"`


[![NPM](https://nodei.co/npm/cmd-wrap.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cmd-wrap/)