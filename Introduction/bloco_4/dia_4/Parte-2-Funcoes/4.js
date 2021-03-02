let nomes=['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
tamMaior(nomes);

function tamMaior(nomes){
  let maiorNome=nomes[0];
  let indice;
  for(let i=0; i<nomes.length;i++){
    if(nomes[i].length>maiorNome.length){
      maiorNome=nomes[i];
    }
  }
  console.log(maiorNome);
}