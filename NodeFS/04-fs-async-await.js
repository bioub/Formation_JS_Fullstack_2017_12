const fs = require('fs-extra');
const path = require('path');

const dirPath = path.resolve(__dirname, 'logs');
const filePath = path.resolve(dirPath, 'app.log');

function log(file, msg) {
  const line = `[${Date.now()}] ${msg}\n`;
  return fs.appendFile(file, line);
}

console.time('Thread idle');
console.time('Logs done');

async function logs() {
  try {
    try {
      const stats = await fs.stat(dirPath);
    }
    catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
      await fs.mkdir(dirPath);
    }

    for (let i=1; i<6; i++) {
      await log(filePath, 'Ligne ' + i);
    }
    console.timeEnd('Logs done');
  }
  catch (err) {
    console.log(err.message);
  }

}

logs();
console.timeEnd('Thread idle');
