let num=5;
somaNum(num);

function somaNum(num){
  let soma=0;
  for(let i=1; i<=num; i++){
    soma+=i;
  }
  console.log(soma);
}