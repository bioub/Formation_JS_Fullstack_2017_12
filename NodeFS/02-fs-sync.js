const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(file, msg) {
  const line = `[${Date.now()}] ${msg}\n`;
  fs.appendFileSync(file, line);
}

console.time('Thread idle');
console.time('Logs done');

try {
  try {
    const stats = fs.statSync(dirPath);
  }
  catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
    fs.mkdirSync(dirPath);
  }

  log(filePath, 'Ligne 1');
  log(filePath, 'Ligne 2');
  log(filePath, 'Ligne 3');
  log(filePath, 'Ligne 4');
  log(filePath, 'Ligne 5');
  console.timeEnd('Thread idle');
  console.timeEnd('Logs done');
}
catch (err) {
  console.log(err.message);
}
