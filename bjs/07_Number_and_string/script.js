function sqrt(a) { return Math.sqrt(a);}

function setAnswer() {
    inputWindow.value = getCulcExpression();
}

function getCulcExpression() {
    let culcScript = `return ${inputWindow.value};`;
    let calcFunc = new Function(culcScript);
    return calcFunc();
}

let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const inputWindow = document.getElementById('inputWindow');

const operands = new Map();
operands.set('sum', '+');
operands.set('dif', '-');
operands.set('mult', '*');
operands.set('div', '/');


// добавляет на "дисплей" цифру нажатую пользователем
for (let num of nums) {
    document.getElementById('btn_' + num).addEventListener('click', function () {
        inputWindow.value += num;
    });
}

// добавляет на "дисплей" операцию над числами
for (let [key, value] of operands) {
    document.getElementById('btn_' + key).addEventListener('click', function () {
        inputWindow.value += value;
    });
}

document.querySelector('#btn_sqrt').addEventListener('click', function(){
    inputWindow.value = sqrt(getCulcExpression());
});

document.getElementById('btn_calc').addEventListener('click', function () {
    setAnswer();
});

document.getElementById('btn_clr').addEventListener('click', function () {
    inputWindow.value = '';
});

