/* Ajuda code review Duda Wiltiner */
const returnNomeEmail = (nome) => {
  const nomeCompleto = nome.split(' ').join('_').toLowerCase();
  return ({
    nome: nome,
    email: `${nomeCompleto}@trybe.com`,
  })
}

const newEmployees = (nomeEmail) => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: nomeEmail('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: nomeEmail('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(returnNomeEmail));
