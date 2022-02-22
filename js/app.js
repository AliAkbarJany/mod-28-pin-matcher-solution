
function getPin() {
    // debugger;

    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 didgit and calling again', pin);
        return getPin();
    }

}

function generatePin() {
    // debugger;
    // console.log('generate pin');
    // const pin = Math.round(Math.random() * 10000);
    const pin = getPin();
    console.log(pin);

}

document.getElementById('key-pad').addEventListener('click', function (event) {
    debugger;

    // console.log(event.target);
    // console.log(event.target.innerText);
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {


        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }


})



/* function generatePin() {
    debugger;
    // console.log('generate pin');
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
        // console.log(pin);
    }
    else {
        console.log('got 3 didgit and calling again', pin);
        return generatePin();
    }


}
const pin = generatePin();
console.log(pin);
 */


const pro = 5;
const price = "7";
debugger;
const sub = pro * price;
const tax = sub / 10;
const total = sub + tax;
console.log(total);


