const check = (number, numberSortido) => {
  return number === numberSortido ? 'Parabéns você ganhou' : 'Tente novamente';
}

const gerarNumber = (number, checking) => {
  const numberSortido = Math.round(Math.random() * (5 - 1) + 1);
  console.log(numberSortido);
  return checking(number, numberSortido);
}

console.log(gerarNumber(4, check));