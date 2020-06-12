const fs = require('fs');
const path = require('path');

const log = (msg) => { console.log(msg); }

function collectFiles(_path, suffix) {
  return fs.readdirSync(_path, {withFileTypes: true})
    .reduce((acc, curr) => { return acc.concat( (curr.isDirectory()) ? collectFiles(path.join(_path, curr.name), suffix) : path.join(_path, curr.name)); }, [])
    .flatMap( (x) => x )
    .filter( (x) => x.endsWith(suffix));
}
function collectSpecs(files, prefix) {
  return files.map( (file) => { return {file: file, spec: require( `./${file}`)} } )
    .map( (spec) => { return Object.entries(spec.spec).map( ([k,v]) => { return [spec.file, k, v] }) })
    .flatMap( (x) => x )
    .filter( (x) => x[1].startsWith(prefix) && typeof x[2] === 'function' );
}
function execute(specs){
  return specs.map( (spec) => {
    try {
      spec[2]()
      return [spec[0], spec[1], '.'];
    } catch (err) {
      return [spec[0], spec[1], 'F', err];
    }
  });
}

function main(){
  let files = collectFiles('.', '.spec.js');
  log(files);
  let specs = collectSpecs(files, 'test_');
  log(specs);
  let results = execute(specs);
  log(results);
  if ( results.some( (x) => x[2] === 'F' ) ) process.exit(1);
};

if (require.main === module) main();
