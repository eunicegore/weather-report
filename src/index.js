let initTemp = 71;
const city = 'Seattle';

document.getElementById('currentTemp').innerHTML = initTemp;

cityValue = document.getElementById('inputCity').value = city;
document.getElementById('cityLog').innerHTML = `${cityValue}✨`;
// const cityUserInput = () => {
//   newCityValue = document.getElementById('inputCity').value;
//   if (newCityValue != cityValue) {
//     document.getElementById('city1').innerHTML = `${newcityValue}✨`;
//   }
// };

const input = document.querySelector('inputCity');

console.log(log);

input.addEventListener('input', updateValue);

function updateValue(e) {
  const log = document.getElementById('cityLog');
  log.innerHTML = `${e.input.value}✨`;
}

// cityValue.addEventListener('type', cityUserInput);

// document.getElementById('selectSky').onchange = function () {
//   alert(this.value);
// };

// const state = {
//   currentTemp: (document.getElementById('currentTemp').innerHTML = initTemp),
// };

// document.getElementById('currentTemp';

// const changeTemp = () => {
//   console.log('hello');
//   var tempToChange = document.getElementById('currentTemp').innerHTML;
//   console.log(tempToChange);
//   let increment = tempToChange;
//   console.log(increment);
//   ++increment;
//   console.log(increment);
//   document.getElementById('currentTemp').innerHTML = increment;
// };

//printing default value of data that is 0 in h2 tag
document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;

//creation of increment function
function increment() {
  initTemp += 1;
  document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;
}
//creation of decrement function
function decrement() {
  initTemp -= 1;
  document.getElementById('currentTemp').innerHTML = `${initTemp}&deg;`;
}

const tempTextColor = () => {
  const tempToColor = document.getElementById('currentTemp').innerHTML;
  console.log(tempToColor);
  if (tempToColor >= 80) {
    document.getElementById('currentTemp').classList.toggle('textRed');
  }
};

// const changeSky = () => {
//   console.log('hello');
//   const changeDisplay = document.querySelector('#tempDisplay');
//   console.log(changeDisplay);
//   changeDisplay.classList.toggle('rainyMode');
// };

const selectSky = document.querySelector('#selectSky');
const backGround = document.querySelector('#tempDisplay');
console.log(backGround.classList);

selectSky.addEventListener('change', setSky);

function setSky() {
  const choice = selectSky.value;
  console.log(choice);
  if (choice === 1) {
    backGround.classList.toggle('sunnyMode');
  } else if (choice === 2) {
    backGround.classList(2).toggle('rainyMode');
  } else if (choice === 4) {
    backGround.classList.toggle('snowyMode');
  } else {
    backGround.classList.toggle('CloudyMode');
  }
}

// const changeTempDown = () => {
//   state.currentTemp += 1;
//   var tempToChange = document.getElementById('currentTemp').innerHTML;
//   tempToChange = state.currentTemp;
// let decrease = ;
// --decrease;
// console.log(decrease);
// document.getElementById('currentTemp').innerHTML = decrease;
// };

const registerEventHandlers = () => {
  // const changeSky = document.querySelector('#select-sky');
  // changeSky.addEventListener('change', changeTheme);
  // const textColor = document.querySelector('#currentTemp');
  // textColor.addEventListener('value', tempTextColor);
  // const selectSky = document.querySelector('#selectSky');
  // const BackGround = document.querySelector('#tempDisplay');
  // selectSky.addEventListener('change', setSky);
  // const tempUp = document.getElementById('tempAdjustUp');
  // tempUp.addEventListener('click', increment);
  // const tempLow = document.getElementById('tempAdjustLow');
  // tempLow.addEventListener('click', changeTempDown);
};
// const changeTemp = () => {
//   const tempToChange = document.getElementById('#currentTemp');
//   consol
//   const tempValue = tempToChange.innerHTML;
//   console.log(tempValue);
//   ++tempValue;
//   console.log(tempvalue);
//   document.getElementById('#currentTemp').innerHTML = tempValue;
// };

// const registerEventHandlers = () => {
//   const tempUp = document.getElementById('#tempAdjustUp');
//   tempUp.addEventListener('click', changeTemp);
// };

document.addEventListener('DOMContentLoaded', registerEventHandlers);

// onst tempUp = document.getElementById('currentTemp').value;
//   document.getElementById('current-temp').innerHTML = inputTempVariable

// document.getElementById('tempAdjustHigh').onclick;
// document.getElementById('');

// const setTemp()=>{
//   let
//   initTemp=initTemp
// }

const resetCity = () => {
  let inputCityVariable = document.getElementById('input-city').value;
  document.getElementById('seattleCity').innerHTML = inputCityVariable;
};
