/**
 * @module wrap-file
 *
 * @param {string} str Source string to wrap
 * @param {string} wrapper Wrapper string with %output% token
 *
 * @return {string} Wrapped string
 */
module.exports = function(str, wrapper){
	return (wrapper + '').replace(/\%output\%/i, str);
};