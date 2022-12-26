// // - Знайти та вивести довжину наступних стрінгових значень
let str = 'hello world'
let lengthStr = str.length
console.log(lengthStr);
let str1 = 'lorem ipsum';
let lenghtStr1 = str1.length;
console.log(lenghtStr1);
let str2 = 'javascript is cool';
console.log(str2.length);

// - Перевести до великого регістру наступні стрінгові значення
let str = 'hello world';
let toUpperCase = str.toUpperCase();
console.log(toUpperCase);
let str1 = 'lorem ipsum';
let toUpCase = str1.toUpperCase();
console.log(toUpCase);
let str2 = 'javascript is cool';
let toUppCase = str2.toUpperCase();
console.log(toUppCase);



// - Перевести до нижнього регістру наступні стрінгові значення
let str = 'HELLO WORLD'
let toLowerCase = str.toLowerCase()
console.log(toLowerCase);
let str1 = 'LOREM IPSUM'
let lowerCase = str1.toLowerCase()
console.log(lowerCase)
let str2 = 'JAVASCRIPT IS COOL'
let ToLower = str2.toLowerCase()
console.log(ToLower)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.length);
let x = str.trim()
console.log(x.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//~~~~~~~~~~~ let str = 'Ревуть воли як ясла повні';~~~~~~~~~~~~~~~//
//~~~~~~~~~~~ let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']~~~~~~~~~~~~//
let str = 'Ревуть воли як ясла повні';
let split = str.split(' ')
console.log(split);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0];
let strings = arr.map(value => value.toString())
console.log(strings)

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого
// до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
let sortNums =(direction, arr)=>{
    if (direction === 'asc'){arr.sort((a,b) => a - b);}
    else if (direction === 'asc'){arr.sort((a,b) => b - a);}
    return arr;
}
sortNums('asc', nums)
console.log(nums)

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// - є масив:
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 7},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 6},
    {title: 'Frontend', monthDuration: 4}
];
let filter = coursesAndDurationArray
    .filter((array) => {
        return array.monthDuration > 5;
    })
    .sort((a, b) => {
        return b.monthDuration - a.monthDuration
    })
// //~~~~~~~~~~let filter = coursesAndDurationArray.filter( (array)=>array.monthDuration > 5);~~~~~~~//
// console.log(filter)
//~~~~~~~~~~~~~~~~~~~~~~ coursesAndDurationArray.forEach( (asd)=> console.log(asd))~~~~~~~~~~~~~~//


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuit = [
    {cardSuit: 'diamond', color: 'red'},
    {cardSuit: 'heart', color: 'red'},
    {cardSuit: 'spade', color: 'black'},
    {cardSuit: 'clubs', color: 'black'}
]
let cardNames = [6,7,8,9,10,'king','queen','jack','ace']
let qwe = [];
for (const asd of cardSuit) {
    for (const cardName of cardNames) {
        let card = {
            cardSuit: asd.cardSuit,
            color: asd.color,
            value: cardName
        }
        qwe.push(card);
    }
}console.log(qwe);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let asd = qwe.reduce((accumulator, card) =>{
    accumulator.spades.push(card.cardSuit)
    accumulator.diamond.push(card.cardSuit)
    accumulator.hearts.push(card.cardSuit)
    accumulator.clubs.push(card.cardSuit)
    return accumulator
    }, {spades:[], diamond:[], hearts:[], clubs:[]})
console.log(asd)