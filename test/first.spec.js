const assert = require('assert').strict;

exports.test_addition = ()  => {
  let a = 1;
  let b = 2;
  assert.equal(a + b, 3);
}

exports.hello = "greeting";
exports.test_greeting = 'ciao';
