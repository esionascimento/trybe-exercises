let dado=[2,3,6,7,10,1];
maior(dado);

function maior(dado){
  let numMaior=0;
  let indice;
  for(let i=0; i<dado.length; i++){
    if(dado[i]>numMaior){
      numMaior=dado[i];
      indice=i;
    }
  }
  console.log(indice);
}