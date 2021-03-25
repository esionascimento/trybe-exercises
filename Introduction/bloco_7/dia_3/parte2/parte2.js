const assert = require('assert');
// escreva a função wordLengths aqui
/* 2-Escreva a função wordLengths para passar nos testes já implementados. */
const wordLengths = (words) => {
  let aux = [];
  for (const iterator of words) {
    let tamanho = iterator.length;
    aux.push(tamanho);
  }
  return aux;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);