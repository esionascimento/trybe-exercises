let array=[2,3,2,5,8,8,8];
let qtd;
let numero;
let qtdNumero=0;
maisRepete(array);
function maisRepete(array){
  for(let i=0; i< array.length;i++){
    qtd=1;
    for (let j=1; j< array.length;j++){
      if(array[i]===array[j]){
        qtd+=1;
        array.splice(j,1)
      }
    }
    if(qtd>qtdNumero){
        numero=array[i];
        qtdNumero=qtd;
    }
  }
}
console.log(numero);