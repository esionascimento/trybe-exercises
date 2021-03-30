const checkResponse = (pergunta) => {
  return (resposta) => {
    const minus = resposta.toLowerCase();
    return pergunta === minus ? true : false;
  }
}

// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

console.log(checkResponse(correctAnswer)(userAnswer));