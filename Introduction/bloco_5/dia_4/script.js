let leBody = document.getElementById('body');

function addInput(nTag, nClass, nPlace) {
  let addInputTela = document.createElement(nTag);
  addInputTela.className = nClass;
  addInputTela.placeholder = nPlace;
  leBody.appendChild(addInputTela);
}
addInput('input', 'inputCorTela', 'cor fundo tela');
addInput('input', 'inputCorP', 'cor paragrafo');
//----------------------------------------------------------
let getCorFundoTela = document.querySelector('.inputCorTela');
getCorFundoTela.addEventListener('change', alterarBackgroundBody);
let getCorParagrafo = document.querySelector('.inputCorP');
getCorParagrafo.addEventListener('change', alterarCorP);
//----------------------------------------------------------
function alterarBackgroundBody() {
  leBody.style.backgroundColor = getCorFundoTela.value;
}
function alterarCorP() {
  leBody.style.color = getCorParagrafo.value;
}
/* function getValor(confirmado) {
  let getCor = confirmado.value;
  alterarBackgroundBody(getCor, confirmado)
}
function confirmaAlteracao(e) {
  let str = document.querySelectorAll('.input');
  for(let i=0; i<3; i++){
    let aux = [];
    aux = str[i];
    let words = aux.className.split(' ');

    if(words[1] === 'inputCorP'){
      getValor(words[1])  
      console.log(words[1]);
    }else{
      getValor()  
    }
  }
  
  /* if(e.which == 13){
     funCompromisso();
  } */

//2

/* var select = document.getElementById('language');
var option = select.options[select.selectedIndex];

console.log(option.value); // pt */


function update() {
  let alterarP = document.getElementById('paragrafo');
  let alterarP2 = document.getElementById('paragrafo2');
  var select = document.getElementById('language');
  var option = select.options[select.selectedIndex];
  

  alterarP.style.fontSize = option.value;
  alterarP2.style.fontSize = option.value;

}
update();