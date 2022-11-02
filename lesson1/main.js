// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
let hello = 'hello'
console.log(hello)
let owu = 'owu'
console.log(owu)
let com = 'com'
console.log(com)
let ua = 'ua'
console.log(ua)
let someNumber = 1
console.log(someNumber)
let number = 10
console.log(number);
let num = -999
console.log(num);
let numb = 123
console.log(numb);
const PI = 3.14
console.log(PI);
let bool1 = true
console.log(bool1);
let bool2 = false
console.log(bool2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = 'Anton'
let middleName = 'Borusov'
let lastName = 'Romanovich'
let result = `${firstName} ${middleName} ${lastName}`
console.log(result);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
let a = 100
console.log(typeof a);
let b = '100'
console.log(typeof b);
let c = true
console.log(typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
const name = prompt("Your Name?")
console.log(name)
const surname = prompt("Your Surname?")
console.log(surname);
const date = prompt("Your date of birth?")
console.log(date);