let minValue, maxValue, answerNumber, orderNumber, gameRun;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

let modalMinNum = document.querySelector("#modalMinNum");
let modalMaxNum = document.querySelector("#modalMaxNum");
let modalCondition = document.querySelector("#modalCondition");
let minNum, maxNum, textCondition;


document.addEventListener("DOMContentLoaded", function() {
    modalMinNum.style.display = "block";
});


function numToString(number) {
    let primeNums = ["ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let primeTensNums = [ "десять", "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let tensNums = [ "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
    let handredNums = [ "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
    let res = [];

    if (number < 0) res.push('минус');

    number = Math.abs(number);
    let arrNums = Array.from(String(number), Number);

    if (0 <= number && number < 10) {
        for (let i = 0; i < 10; i++) {
            if (number == i) res.push(primeNums[i]);
        }
    } else if (10 <= number && number < 20) {
        for (let i = 0; i< 10; i++) {
            if (arrNums[1] == i) res.push(primeTensNums[i]);
        }
    } else if (20 <= number && number < 100) {
        for (let i = 0; i < 10; i++) {
            if (arrNums[0] == i) res.push(tensNums[i - 2]);
        }
        for (let i = 0; i < 10; i++) {
            if (arrNums[1] == i && arrNums[1] != 0) res.push(primeNums[i]);
        }
    } else if (100 <= number && number < 1000) {
        for (let i = 0; i < 10; i++) {
            if (arrNums[0] == i) res.push(handredNums[i - 1]);
        }
        for (let i = 0; i < 10; i++) {
            if (arrNums[1] == 1 && arrNums[2] == i) res.push(primeTensNums[i]);
            else if (arrNums[1] == i && arrNums[1] != 1) res.push(tensNums[i - 2]);
        }
        for (let i = 0; i < 10; i++) {
            if (arrNums[2] == i && arrNums[1] > 1) res.push(primeNums[i]);
        }
    }
    return res.join(' ').trim();
}

function checkLength(str, num) {
    return str.length < 20 ? str : num;
}

function startGame() {
    minValue = Number(minNum);
    maxValue = Number(maxNum);
    answerNumber = Math.floor((minValue + maxValue) / 2);

    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;

    let printNumber = checkLength(numToString(answerNumber), answerNumber);
    answerField.innerText = `Вы загадали число ${printNumber}?`;

}


document.getElementById("btnRetry").addEventListener("click", function () {
    modalMinNum.style.display = "block";
});

let phrases = [ "Ваше число ", "Мое предположение, это число ", "Возможно, это ", "Вы загадали число ", "Наверное, это число ", ];
let winPhrases = [ "Я всегда угадываю!", "Это было проще простого!", "Это было не очень то и сложно!", "От меня ничего не утаишь!", "Мне нет равных!", ];

document.getElementById("btnLess").addEventListener("click", function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = phraseRandom === 1 ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            answerField.innerText = phrases[phraseRandom] + checkLength(numToString(answerNumber), answerNumber) + "?";
        }
    }
});

document.getElementById("btnOver").addEventListener("click", function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = phraseRandom === 1 ? `Вы загадали неправильное число!\n\u{1F914}` : `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            answerField.innerText = phrases[phraseRandom] + checkLength(numToString(answerNumber), answerNumber) + "?";
        }
    }
});

document.getElementById("btnEqual").addEventListener("click", function () {
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 4);
        answerField.innerText = winPhrases[phraseRandom] + `\n\u{1F60E}`;
        gameRun = false;
    }
});


// modal windows functionality
document.querySelector("#nextToMax").addEventListener("click", function () {
    minNum = Number(document.querySelector("input[name='min_number']").value);
    if (!minNum) minNum = 0;
    minNum = minNum < -999 ? -999 : minNum;

    modalMinNum.style.display = "none";
    modalMaxNum.style.display = "block";
});

document.querySelector("#backToMin").addEventListener("click", function () {
    modalMaxNum.style.display = "none";
    modalMinNum.style.display = "block";
});

document.querySelector("#backToMax").addEventListener("click", function () {
    modalCondition.style.display = "none";
    modalMaxNum.style.display = "block";
});

document.querySelector("#nextToConditions").addEventListener("click", function () {
    maxNum = Number(document.querySelector("input[name='max_number']").value);
    if (!maxNum) maxNum = 100;
    maxNum = maxNum > 999 ? 999 : maxNum;

    let elTextCondition = document.querySelector("#textCondition");
    let textCondition = ``;

    if (minNum > maxNum) {
        textCondition = `Минимальное число больше максимального. Перепишите числа, иначе будут использованы значения по <abbr title="от 0 до 100">умолчанию</abbr>.`;
        minNum = 0;
        maxNum = 100;
        elTextCondition.innerHTML = textCondition;
    } else {
        textCondition = `Загадайте любое целое число от ${minNum} до ${maxNum}, а я его угадаю.`
        elTextCondition.textContent = textCondition;
    }

    modalMaxNum.style.display = "none";
    modalCondition.style.display = "block";
});

document.querySelector("#nextToGame").addEventListener("click", function () {
    modalCondition.style.display = "none";
    startGame();
});

let closeBtns = [ "closeModalMinNum", "closeModalMaxNum", "closeModalCondition", ];

for (let i = 0; i < closeBtns.length; i++) {
    document.querySelector("#" + closeBtns[i]).addEventListener("click", function () {
        modalMinNum.style.display = "none";
        modalMaxNum.style.display = "none";
        modalCondition.style.display = "none";
    });
}

window.onclick = function (event) {
    if (event.target == modalMinNum) {
        modalMinNum.style.display = "none";
    } else if (event.target == modalMaxNum) {
        modalMaxNum.style.display = "none";
    } else if (event.target == modalCondition) {
        modalCondition.style.display = "none";
    }
};
