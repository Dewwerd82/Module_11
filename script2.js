let minValue = 0;
let maxValue = 0;
let num = 0;
let answerNumber = 0;
let orderNumber = 1;
let numText = 0;
let A1 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let A2 = ['одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать',
    'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
];
let A3 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
    'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
];
let A4 = ['сто ', 'двести', 'триста', 'четыреста', 'пятьсот',
    'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
];
let a = 0;
let a1 = 0;
let a2 = 0;
let b = 0;
let b1 = 0;
let b2 = 0;
let c = 0;
let d = 0;
let e = 0;
let str = '';
let strText = 'Вы ввели :';

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

document.getElementById("btnRetry").addEventListener('click', function() {
    document.getElementById("Game").disabled = false;
    document.getElementById('input').value = '0';
    document.getElementById('MinValue').value = '-999';
    document.getElementById('MaxValue').value = '999';
    minValue = 0;
    maxValue = 0;
    num = 0;
    answerNumber = 0;
    orderNumber = 1;
    document.getElementById('orderNumberField').innerHTML = 'Ещё раз';
    document.getElementById('numText').innerHTML = strText;
    document.getElementById('answerField').innerHTML = 'Введите диапазон от - 999 до + 999';
})

function winGame() {
    document.getElementById('orderNumberField').innerHTML = 'Попытка №' + orderNumber;
    document.getElementById('answerField').innerHTML = 'Угадал';
}

function reqursiv(n, x) {
    if (n == x) {
        return winGame();
    } else if (n > x) {
        orderNumber++;
        minValue = answerNumber;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        reqursiv(num, answerNumber)
    } else if (n < x) {
        orderNumber++;
        maxValue = answerNumber;
        answerNumber = Math.floor((minValue + maxValue) / 2);
        reqursiv(num, answerNumber)
    }
}


function runGame() {
    answerNumber = Math.floor((minValue + maxValue) / 2);
    reqursiv(num, answerNumber)
}

document.getElementById("Game").addEventListener('click', function() {
    orderNumber = 1;
    minValue = parseInt(document.getElementById('MinValue').value);
    maxValue = parseInt(document.getElementById('MaxValue').value);
    num = parseInt(document.getElementById('input').value);
    if (typeof num === 'number' && !isNaN(num) && minValue < num < maxValue &&
        typeof minValue === 'number' && !isNaN(minValue) &&
        typeof maxValue === 'number' && !isNaN(maxValue) && maxValue > minValue &&
        maxValue != 0) {

        maxValue > 1000 ? maxValue = 1000 : maxValue;
        minValue < -1000 ? minValue = -1000 : minValue;
        num > 1000 ? num = 1000 : num;
        num < -1000 ? num = -1000 : num;

        document.getElementById('input').value = String(num);
        document.getElementById('MinValue').value = String(minValue);
        document.getElementById('MaxValue').value = String(maxValue);
        document.getElementById("Game").disabled = true;
        numText = parseInt(document.getElementById('input').value);
        if (numText > 0) {
            str = String(propis(numText));
        } else {
            str = "минус" + " " + String(propis(Math.abs(numText)));
        }

        document.getElementById('numText').innerHTML = strText + str;

        runGame();
    } else {
        alert('Некорректо ввели данные!!!');
    }
})


function propis(n) {
    b = n % 10;
    a = (n - b) / 10;
    c = n % 100;
    b1 = n % 10;

    e = c % 10;
    a1 = (c - e) / 10;

    d = (n - c) / 100;

    if (n == 0) return 'Нуль';
    if (n < 10) return A1[n - 1];

    if (n > 10 && n < 20) return A2[n - 11];

    if (b == 0 && n > 9 && n < 99) return A3[a - 1];

    if (c == 0 && n > 99 && n < 1000) return A4[d - 1];

    if (n > 20 && n < 100) return A3[a - 1] + ' ' + A1[b - 1];

    if (b == 0 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A3[a1 - 1]; //100

    if (b1 == 0 && b == 0 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A3[a1 - 1]; //130

    if (c > 10 && c < 20 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A2[c - 11]; //111

    if (c < 10 && n > 99 && n < 1000) return A4[d - 1] + ' ' + A1[c - 1]; //101

    if (c > 20 && c < 99 && n > 99 && n < 1000) return A4[d - 1] + ' ' +
        ' ' + A3[a1 - 1] + ' ' + A1[e - 1];

}