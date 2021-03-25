/* esionascimento */
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(item, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

/* 4-Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado */
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4],3),[1,2,4]);