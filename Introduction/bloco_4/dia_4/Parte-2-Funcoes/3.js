let dado=[2,4,6,7,10,0,-3];
menor(dado);

function menor(dado){
  let numMenor=dado[0];
  let indice;
  for(let i=0; i<dado.length;i++){
    if(dado[i]<numMenor){
      numMenor=dado[i];
      indice=i;
    }
  }
  console.log(indice);
}