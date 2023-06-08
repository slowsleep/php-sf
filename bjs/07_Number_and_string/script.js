function sum(a, b) { return a + b;}

function dif(a, b) { return a - b;}

function mult(a, b) { return a * b;}

function div(a, b) { return a / b;}

function sqrt(a) { return Math.sqrt(a);}


let lastOperand = 0;
let operation = null;
const inputWindow = document.getElementById('inputWindow');
let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

for (let num of nums) {
    document.getElementById('btn_' + num).addEventListener('click', function () {
        inputWindow.value += num;
    })
}

let operands = ['sum', 'dif', 'mult', 'div', 'sqrt'];

for (let operand of operands) {
    document.getElementById('btn_' + operand).addEventListener('click', function () {
        lastOperand = parseInt(inputWindow.value);
        operation = operand;
        inputWindow.value = '';

    });
}

document.getElementById('btn_calc').addEventListener('click', function () {
    let result;
    if (operation === 'sum') {
        result = sum(lastOperand, parseInt(inputWindow.value));
    }
    if (operation === 'dif') {
        result = dif(lastOperand, parseInt(inputWindow.value));
    }
    if (operation === 'mult') {
        result = mult(lastOperand, parseInt(inputWindow.value));
    }
    if (operation === 'div') {
        result = div(lastOperand, parseInt(inputWindow.value));
    }
    if (operation === 'sqrt') {
        result = sqrt(lastOperand);
    }
    operation = null;
    lastOperand = 0;
    inputWindow.value = result;

})


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

