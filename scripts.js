let bill = ''
let numberPeople = ''
let selectedPercent = ''

function getBill() {
  bill = document.querySelector('#bill').value;
  return(bill);
}

function getNumber() {
  numberPeople = document.querySelector('#numberOfPeople').value
  return(numberPeople);
}


        // Percent Buttons
document.querySelector('#one').onclick = function() {
  selectedPercent = 5;
  calculate();
}
document.querySelector('#two').onclick = function() {
  selectedPercent = 10;
  calculate();
}
document.querySelector('#three').onclick = function() {
  selectedPercent = 15;
  calculate();
}
document.querySelector('#four').onclick = function() {
  selectedPercent = 25;
  calculate();
}
document.querySelector('#five').onclick = function() {
  selectedPercent = 50;
  calculate();
}
const custom = document.getElementById('customButton')
  custom.addEventListener('keyup', (e) =>{
  if (e.code === "Enter") {
    let customTip = document.querySelector('#customButton').value
    selectedPercent = customTip;
    calculate()
  }
})


        // Calculate Function
let tipAmount = ""
let total = ""

function calculate() {
  getBill();
  getNumber();
  let tipAmountUnrounded = ((+bill) * (+selectedPercent) / 100) / (+numberPeople);
  tipAmount = tipAmountUnrounded.toFixed(2);
  let totalUnrounded = (+bill) / (+numberPeople) + (+tipAmount)
  total = totalUnrounded.toFixed(2);
  // alert(tipAmount);
  // alert(total)
  document.querySelector('.tipPerPerson').innerHTML = "$" + tipAmount;
  document.querySelector('.tipTotal').innerHTML = "$" + total;
}


        // Button Reset
const buttonReset = document.getElementById('reset');
buttonReset.classList.add('resetActive');
buttonReset.addEventListener('click', function() {
  document.querySelector('#bill').value = "0";
  document.querySelector('#numberOfPeople').value = "0";
  document.querySelector('#customButton').value = "Custom";
  document.querySelector('.tipPerPerson').innerHTML = "$0.00";
  document.querySelector('.tipTotal').innerHTML = "$0.00";
  let bill = '';
  let numberPeople = '';
  let selectedPercent = '';
});


        // Cyan Outline When Focused
const billl = document.querySelector('#bill')
const noOfppl = document.querySelector('#numberOfPeople')

billl.addEventListener('focus', (event) => {
  event.target.style.outlineColor = 'hsl(172, 67%, 45%)';
});

noOfppl.addEventListener('focus', (event) => {
  event.target.style.outlineColor = 'hsl(172, 67%, 45%)';
});

custom.addEventListener('focus', (event) => {
  event.target.style.outlineColor = 'hsl(172, 67%, 45%)';
});


        // Focused Input Color
billl.addEventListener('focus', (event) => {
  event.target.style.color = '#004341';
});
noOfppl.addEventListener('focus', (event) => {
  event.target.style.color = '#004341';
});
custom.addEventListener('focus', (event) => {
  event.target.style.color = '#004341';
});

