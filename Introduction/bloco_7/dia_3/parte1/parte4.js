/* esionascimento */
const assert = require('assert');

function myFizzBuzz(num) {
  //EARLY RETURN
  if (typeof num !== 'number') return false;

  /* if (typeof num !== 'number') {
    throw 'INVALIDO, somente numeros';
  } */
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

/* 5-Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(15),'fizzbuzz');
/* 6-Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(6),'fizz');
/* 7-Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(25),'buzz');
/* 8-Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado */
const aux = 7;
assert.deepStrictEqual(myFizzBuzz(aux), aux);
/* 9-Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado */
assert.deepStrictEqual(myFizzBuzz(''), false);
/* assert.throws(() => {
  myFizzBuzz('');
}) */