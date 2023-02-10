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

document.querySelector('#one').onclick = function() {
  selectedPercent = 5;
  mega();
}

document.querySelector('#two').onclick = function() {
  selectedPercent = 10;
  mega();
}

document.querySelector('#three').onclick = function() {
  selectedPercent = 15;
  mega();
}

document.querySelector('#four').onclick = function() {
  selectedPercent = 25;
  mega();
}

document.querySelector('#five').onclick = function() {
  selectedPercent = 50;
  mega();
}

let custom = document.getElementById('customButton')
  custom.addEventListener('keyup', (e) =>{
  if (e.code === "Enter") {
    let customTip = document.querySelector('#customButton').value
    selectedPercent = customTip;
    mega()
  }
})


let tipAmount = ""
let total = ""

function mega() {
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



// function f() {if ( (theBill) > 1 && (numberPeople) > 1) {
//   let reset = document.getElementById('reset');
//   reset.classList.add("resetActive");
// }
// }

// document.querySelector('#reset').classList.add(".resetActive");


// let reset = document.getElementById('reset');

// document.addEventListener.onclick = function() {
//   if ( ( (+bill) > 0 ) && ( (+numberPeople) > 0 )) {
//   reset.classList.add("resetActive");
// }}


const buttonReset = document.getElementById('reset'); 

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


// document.querySelector('#bill').addEventListener


// function required() {
// var empt = document.getElementById('bill').value;
// if (empt == "")
// {
// function addInput(){
// let billl = document.getElementById('bill')
// bill.classList.add('borderRed');
// }
// }
// else 
// {
// buttonReset.classList.add('resetActive');
// }
// }