const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
/* 1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */
console.log('---Questao 1---');
const addManha = (lesson2, turno, value) => {
  Object.assign(lesson2, lesson2[turno] = value);
  console.log(lesson2);
}
addManha(lesson2,'turno', 'manhã');
/* 2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */
console.log('---Questao 2---');
const listarKeys = (les) => {
  for (let key in les) {
    if (Object.hasOwnProperty.call(les, key)) {
      const element = key;
      console.log(element);
    }
  }
}
listarKeys(lesson1);
/* 3-Crie uma função para mostrar o tamanho de um objeto. */
console.log('---Questao 3---');
const tamanhoObjeto = (les) => {
  console.log(Object.keys(les).length);
}
tamanhoObjeto(lesson3);
/* 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
console.log('---Questao 4---');
const listarValores = (les) => {
  for (const key in les) {
    if (Object.hasOwnProperty.call(les, key)) {
      const element = les[key];
      console.log(element);
    }
  }
}
listarValores(lesson2);
/* 5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */
console.log('---Questao 5---');