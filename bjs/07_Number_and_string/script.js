let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})


document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';

})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';

})

document.getElementById('btn_calc').addEventListener('click', function () {
    let result;
    if (operation === 'sum') {
        result = lastOperand + parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }
     else if (operation === 'def') {
        result = lastOperand - parseInt(inputWindow.value);
        operation = null;
        lastOperand = 0;
        inputWindow.value = result;
    }

})


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

