const assert = require('assert');
// escreva a função addOne aqui
/* 1-Escreva a função addOne para passar nos testes já implementados. */
const addOne = (myArray) => {
  let aux = [];
  for (const iterator of myArray) {
    aux.push(iterator + 1);
  }
  return aux;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
