const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(file, msg, cb) {
  const line = `[${Date.now()}] ${msg}\n`;
  fs.appendFile(file, line, cb);
}

console.time('Thread idle');
console.time('Logs done');
fs.stat(dirPath, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(dirPath, (err) => {
      if (err) {
        return console.log(err.message);
      }
      next();
    });
  }

  next();
});
console.timeEnd('Thread idle');

function next() {
  // Callback hell / Pyramid of doom
  log(filePath, 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }
    log(filePath, 'Ligne 2', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log(filePath, 'Ligne 3', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log(filePath, 'Ligne 4', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log(filePath, 'Ligne 5', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.timeEnd('Logs done');
          });
        });
      });
    });
  });
}
