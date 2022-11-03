// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [12, 34, true, [12, 34, 1234], 'asd']
console.log(arr);

//==============рiзнi види виводу масивiв в консоль==============//
// console.log(arr.length);                        //довжина масиву
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
//=======================//

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book = {
    title: 'Roksberry',
    pageCount: 323,
    genre: 'Mystery'
}
// console.log(book);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book1 = {
    title: 'The Lord of the Rings',
    pageCount: 4324,
    genre: 'fantasy',
    authors: {
        name: 'John Ronald Reuel Tolkien',
        age: 57
    }
}
console.log(book1);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user1 = {name:'petro', username:'petrovich', password:'petrovich1975'};
let user2 = {name:'oleg', username:'olegovich', password:'olegovich1523'};
let user3 = {name:'vasya', username:'vasulyovich', password:'vasulyovich1585'};
let user4 = {name:'alex', username:'alexandrovich', password:'alexandrovich1245'};
let user5 = {name:'orest', username:'orestovich', password:'orestovich1245'};
let user6 = {name:'roman', username:'romanovich', password:'romanovich35263'};
let user7 = {name:'mykola', username:'mykolayovich', password:'mykolayovich23567'};
let user8 = {name:'evgen', username:'evgenovich', password:'evgenovich2353246'};
let user9 = {name:'bogdan', username:'bogdanovich', password:'bogdanovich234657'};
let user10 = {name:'ura', username:'urievich', password:'urievich580912'};
let users = [
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
    user9,
    user10
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);