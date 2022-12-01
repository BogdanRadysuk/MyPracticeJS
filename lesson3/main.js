// let answer = confirm('you have 18?');
//
// if (answer) {
//     document.write('<h1>all</h1>');
// } else {
//     document.write('<h1>not_allContent</h1>');
// }


// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно',
//     інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 4;
if (x !==0 ){
    console.log('True');
} else {
    console.log('False');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('what time is it now?')

if (time >=0 && time <15){
    document.write('<h1>first quarter</h1>')
}
else if (time >= 15 && time < 30){
    document.write('<h1>second quarter</h1>')
}
else if (time >= 30 && time < 45){
    document.write('<h1>third quarter</h1>')
}
else if (time >= 45 && time < 60)
    document.write('<h1>fourth quarter</h1>')
else {
    document.write('<h1>I dont know</h1>')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('what day is it now?')

if (day >=1 && day <10){
    console.log('first')
}
else if (day >=10 && day <20){
    console.log('second')
}
else if (day >=20 && day <=31){
    console.log('third')
}
else {
    console.log('error')
}


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let week = +prompt ();
switch (week) {
    case 1:
        console.log('monday')
        break;
    case 2:
        console.log('tuesday')
        break;
    case 3:
        console.log('wednesday')
        break;
    case 4:
        console.log('thursday')
        break;
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
    case 7:
        console.log('sunday')
        break;
    default:
        console.log('error');
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a=8
let b=8
if (a>b){
    console.log(a);
}
else if (b>a){
    console.log(b)
}
else if (b==a){
    console.log('the same')
}
else {
    console.log('error');
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x = +prompt() || 'default';
console.log(x)