const assert = require('assert'); // binaire de node
const myMaths = require('../my-maths'); // ./ ou ../ pour les fichiers locaux

try {
  assert.strictEqual(myMaths.sum(1, 2), 3);
  console.log('Tests myMaths OK');
}
catch (err) {
  console.log('Tests myMaths FAILED', err.message);
}
