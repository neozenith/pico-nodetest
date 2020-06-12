# pico-nodetest

## Getting started

```bash
git clone https://github.com/neozenith/pico-nodetest
cd pico-nodetest
# no need for `npm install`, since only using standard library
npm test
```

## Sample output

```bash
> pico-nodetest@1.0.0 test /Users/username/play/pico-nodetest
> node index.js

[
  'test/first.spec.js',
  'test/integration/cloud/sixth.spec.js',
  'test/integration/third.spec.js',
  'test/second.spec.js'
]
[
  [ 'test/first.spec.js', 'test_addition', [Function (anonymous)] ],
  [ 'test/second.spec.js', 'test_failure', [Function (anonymous)] ]
]
[
  [ 'test/first.spec.js', '.' ],
  [
    'test/second.spec.js',
    'F',
    AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

    3 !== 4

        at Array.exports.test_failure (/Users/username/play/pico-nodetest/test/second.spec.js:6:10)
        at /Users/username/play/pico-nodetest/index.js:21:14
        at Array.map (<anonymous>)
        at execute (/Users/username/play/pico-nodetest/index.js:19:16)
        at main (/Users/username/play/pico-nodetest/index.js:34:17)
        at Object.<anonymous> (/Users/username/play/pico-nodetest/index.js:39:30)
        at Module._compile (internal/modules/cjs/loader.js:1200:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:1220:10)
        at Module.load (internal/modules/cjs/loader.js:1049:32)
        at Function.Module._load (internal/modules/cjs/loader.js:937:14) {
      generatedMessage: true,
      code: 'ERR_ASSERTION',
      actual: 3,
      expected: 4,
      operator: 'strictEqual'
    }
  ]
]
npm ERR! Test failed.  See above for more details.
```
