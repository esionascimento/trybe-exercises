let word='trybe';
let ending='be';
verificaFimPalavra(word, ending);

function verificaFimPalavra(word, ending){
  let pontCount=word.length-ending.length;
  let confirma=false;
  count=0;
  for (let i=0; i<ending.length; i++){
    if(ending[i]===word[pontCount]){
      pontCount++;
      count++;
    }
  }
  if(count==ending.length)
    confirma=true;
  else confirma=false;
  console.log(confirma)
}