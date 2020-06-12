const assert = require('assert').strict;

exports.test_failure = ()  => {
  let a = 1;
  let b = 2;
  assert.equal(a + b, 4);
}

