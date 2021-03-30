const checkGabarito = (certas, aluno) => {
  let pontos = 0;
  for (let index = 0; index < certas.length; index += 1) {
    if (certas[index] === aluno[index]) {
      pontos += 1;
    } else if (certas[index] !== aluno[index]) {
      pontos -= 0.5;
    }
  }
  return pontos;
}

const resultadoFinal = (checkCertas, checkAluno, verifica) => {
  return verifica(checkCertas, checkAluno);
}

const rightAnswers = [  'A',  'C',  'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(resultadoFinal(rightAnswers, studentAnswers, checkGabarito));