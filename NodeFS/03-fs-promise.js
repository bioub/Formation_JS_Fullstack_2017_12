const fs = require('fs-extra');
const path = require('path');
const util = require('util');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

const stat = util.promisify(fs.stat);

function log(file, msg) {
  const line = `[${Date.now()}] ${msg}\n`;
  return new Promise((resolve, reject) => {
    fs.appendFile(file, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  });
}

console.time('Thread idle');
console.time('Logs done');

stat(dirPath)
  .catch((err) => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(dirPath);
    }
    throw err;
  })
  .then(() => log(filePath, 'Ligne 1'))
  .then(() => log(filePath, 'Ligne 2'))
  .then(() => log(filePath, 'Ligne 3'))
  .then(() => log(filePath, 'Ligne 4'))
  .then(() => log(filePath, 'Ligne 5'))
  .then(() => {
    console.timeEnd('Logs done');
  })
  .catch((err) => {
    console.log(err.message);
  });

console.timeEnd('Thread idle');
