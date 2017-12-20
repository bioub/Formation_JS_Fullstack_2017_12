const fs = require('fs');

const dirContent = fs.readdirSync(__dirname);

for (let f of dirContent) {
  if (f.endsWith('.test.js')) {
    require(`./${f}`);
  }
}
