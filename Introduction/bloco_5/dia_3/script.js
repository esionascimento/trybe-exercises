function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.className = 'day';
    if (day === 24 || day === 31){
      dayItem.innerHTML = day;
      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem);
    }else if (day === 4 || day === 11 || day === 18) {
      dayItem.innerHTML = day;
      dayItem.className = 'day friday';
      getDaysList.appendChild(dayItem);
    }else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
createDaysOfTheMonth();
//2
function funFeriados(idButton,buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.innerHTML = buttonName;
  newButton.id = idButton;
  buttonContainer.appendChild(newButton);
}
funFeriados('btn-holiday','Feriados');
//3 
function clickButton(){

  for (let index = 0; index < getFeriados.length; index += 1){
    if( getFeriados[index].style.backgroundColor == "black"){
      console.log("eai");
      getFeriados[index].style.backgroundColor = "rgb(238,238,238)";
    } else {
      console.log("22");
      getFeriados[index].style.backgroundColor = "black";
    }
  }
}

let getButton = document.querySelector('#btn-holiday');
let getFeriados = document.querySelectorAll('.holiday');
getButton.addEventListener('click', clickButton);
//4
funFeriados('btn-friday','Sexta-feira');
funFeriados('btn-sabado','Sabado');