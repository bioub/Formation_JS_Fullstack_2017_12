const assert = require('assert'); // binaire de node
const hello = require('../hello'); // ./ ou ../ pour les fichiers locaux

try {
  assert.strictEqual(hello(), 'Hello Inconnu');
  assert.strictEqual(hello('Romain'), 'Hello Romain');
  console.log('Tests hello OK');
}
catch (err) {
  console.log('Tests hello FAILED', err.message);
}
