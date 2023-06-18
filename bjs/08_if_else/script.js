function numToString(num) {
    let res = "";
    let primNums = [ "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "ноль", ];
    let primDecNums = [ "одинадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать", ];
    let decNums = [ "десять", "двадцать", "тридцать", "сорок", "пятдесят", "шестдесят", "семдесят", "восемдесят", "девяноста", ];
    let handNums = [ "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот", ];

    let rowNums = num.toString().split("");

    if (rowNums.length === 1) {
        if (num != 0) {
            for (let i = 0; i < 10; i++) {
                if (num == i + 1) res += primNums[i];
            }
        } else {
            res += primNums[9];
        }
    } else if (rowNums.length === 2) {
        if (rowNums[0] !== "1") {
            for (let i = 0; i < 10; i++) {
                if (rowNums[0] == i) res += decNums[i - 1];
            }
            if (rowNums[1] != 0) {
                res += " ";
                for (let i = 0; i < 10; i++) {
                    if (rowNums[1] == i) res += primNums[i - 1];
                }
            }
        } else {
            for (let i = 0; i < 10; i++) {
                if (rowNums[1] == i) res += primDecNums[i - 1];
            }
        }
    } else if (rowNums.length === 3) {
        for (let i = 0; i < 10; i++) {
            if (rowNums[0] == i) res += handNums[i - 1] + " ";
        }
        if (rowNums[1] != 1) {
            if (rowNums[1] != 0) {
                for (let i = 0; i < 10; i++) {
                    if (rowNums[1] == i) res += decNums[i - 1] + " ";
                }
                if (rowNums[2] != 0) {
                    for (let i = 0; i < 10; i++) {
                        if (rowNums[2] == i) res += primNums[i - 1];
                    }
                }
            }
        } else {
            for (let i = 0; i < 10; i++) {
                if (rowNums[2] == i) res += primDecNums[i - 1];
            }
        }
    }

    return res;
}

function fullStringNumber(num) {
    let res = "";
    if (num < 0) {
        res += "минус ";
    }
    res += numToString(Math.abs(num));

    return res;
}

function startGame() {
    minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
    maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));

    if (!minValue) minValue = 0;

    if (!maxValue) maxValue = 100;

    minValue = minValue < -999 ? -999 : minValue;
    maxValue = maxValue > 999 ? 999 : maxValue;

    alert(
        `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
    );
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;

    let showTextAnswer;
    showTextAnswer = numToString(Math.abs(answerNumber));

    if (showTextAnswer.length <= 12) {
        answerField.innerText = `Вы загадали число ${fullStringNumber(answerNumber)}?`;
    } else {
        answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
}


let minValue, maxValue, answerNumber, orderNumber, gameRun;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

document.addEventListener("DOMContentLoaded", startGame);
document.getElementById("btnRetry").addEventListener("click", function () {
    startGame();
});

let phrases = [ "Ваше число ", "Мое предположение, это число ", "Возможно, это ", "Вы загадали число ", "Наверное, это число ", ];
let winPhrases = [ "Я всегда угадываю!", "Это было проще простого!", "Это было не очень то и сложно!", "От меня ничего не утаишь!", "Поздравляю меня за угаданное число!", ];

document.getElementById("btnLess").addEventListener("click", function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase =
                phraseRandom === 1
                    ? `Вы загадали неправильное число!\n\u{1F914}`
                    : `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            answerField.innerText =
                phrases[phraseRandom] + fullStringNumber(answerNumber) + "?";
        }
    }
});

document.getElementById("btnOver").addEventListener("click", function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase =
                phraseRandom === 1
                    ? `Вы загадали неправильное число!\n\u{1F914}`
                    : `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            answerField.innerText =
                phrases[phraseRandom] + fullStringNumber(answerNumber) + "?";
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
