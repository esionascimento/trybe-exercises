let estilos = document.getElementsByClassName('estilo');

for (let i = 0; i < estilos.length; i += 1) {
  estilos[i].innerHTML = 'Esio';
}
function changeColorToGreen() {
  let square = document.getElementsByClassName('estilo')[0];
  square.style.backgroundColor = 'rgb(76,164,109)';
}
changeColorToGreen();

let recuperaTag = document.getElementsByTagName('h4');
console.log(recuperaTag);