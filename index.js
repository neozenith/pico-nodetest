const fs = require('fs');
const path = require('path');

const log = (msg) => { console.log(JSON.stringify(msg)); }

function collect(_path, suffix) {
  return fs.readdirSync(_path, {withFileTypes: true})
    .reduce((acc, curr) => {
      acc.push( (curr.isDirectory()) ? collect(path.join(_path, curr.name), suffix) : path.join(_path, curr.name));
      return acc;
    }, [])
    .flatMap( (x) => x )
    .filter( (x) => x.endsWith(suffix));
}

function main(){
  let files = collect('./test/', '.spec.js');
  log(files);
};

main();
