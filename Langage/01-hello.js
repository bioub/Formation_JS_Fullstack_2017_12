/**
 * Additionne 2 params
 * @param {number} a Le 1er nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

for (let i = 0; i < 10; i++) {
  console.time('sum');
  let result = sum(i, i);
  console.timeEnd('sum');
}
