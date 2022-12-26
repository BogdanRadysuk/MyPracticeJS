// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// - Взяти масив з  User[] та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// - Взяти масив з  User[] та відсортувати його по id. по зростанню (sort)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user1 = new User(0, 'Vasya', 'Pupkin', 'Vasya143@gmail.com', '+(380)97-234-12-76')
let user2 = new User(1, 'Alex', 'Zolotov', 'asdfasdf234@gmail.com', '+(380)97-653-17-96')
let user3 = new User(2, 'Sergiy', 'Orexov', 'asdfasdf2@gmail.com', '+(380)97-564-82-23')
let user4 = new User(3, 'Oleg', 'Dirkiy', 'dfgsdfg214@gmail.com', '+(380)97-256-32-65')
let user5 = new User(4, 'Robert', 'Kondrashev', 'sdfgsd3@gmail.com', '+(380)97-652-65-24')
let user6 = new User(5, 'Derek', 'Rocket', 'dfghdfgh7@gmail.com', '+(380)97-654-24-56')
let user7 = new User(6, 'Dima', 'Polos', 'fghjfhjl89@gmail.com', '+(380)97-271-964-88')
let user8 = new User(7, 'Ura', 'Kurt', 'nmvbnmyujk192@gmail.com', '+(380)97-744-14-42')
let user9 = new User(8, 'Bogdan', 'Hmel', 'cvbfgntr246@gmail.com', '+(380)97-888-55-17')
let user10 = new User(9, 'Evgen', 'Nurstakovich', 'dfbhfg17@gmail.com', '+(380)97-746-42-86')

let arr = []
arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
console.log(arr)

let filter = arr.filter(value => value.id % 2===0)
console.log(filter);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let client1 = new Client(0, 'Vasya', 'Pupkin', 'Vasya143@gmail.com', '+(380)97-234-12-76',1);
let client2 = new Client(1, 'Alex', 'Zolotov', 'asdfasdf234@gmail.com', '+(380)97-653-17-96',2);
let client3 = new Client(2, 'Sergiy', 'Orexov', 'asdfasdf2@gmail.com', '+(380)97-564-82-23',3);
let client4 = new Client(3, 'Oleg', 'Dirkiy', 'dfgsdfg214@gmail.com', '+(380)97-256-32-65',4);
let client5 = new Client(4, 'Robert', 'Kondrashev', 'sdfgsd3@gmail.com', '+(380)97-652-65-24',5);
let client6 = new Client(5, 'Derek', 'Rocket', 'dfghdfgh7@gmail.com', '+(380)97-654-24-56',6);
let client7 = new Client(6, 'Dima', 'Polos', 'fghjfhjl89@gmail.com', '+(380)97-271-964-88',7);
let client8 = new Client(7, 'Ura', 'Kurt', 'nmvbnmyujk192@gmail.com', '+(380)97-744-14-42',8);
let client9 = new Client(8, 'Bogdan', 'Hmel', 'cvbfgntr246@gmail.com', '+(380)97-888-55-17',9);
let client10 = new Client(9, 'Evgen', 'Nurstakovich', 'dfbhfg17@gmail.com', '+(380)97-746-42-86',10);
let arr = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
arr.push();
console.log(arr);
let filter = arr
    .sort((a,b) => {return a.order - b.order})
console.log(filter);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, producer, year, maxSpeed, engine) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engine = engine
    this.engine = function drive(speed) {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
    this.info = function info() {
        for (const infoElement of this) {
            if (typeof  this[infoElement] === 'function'){console.log(`${infoElement} -- ${this[infoElement]}`);}}}
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver
    }
    }
let car = new Car('BMW', 'Germany', '2022', 330, 5.5)
console.log(car);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car {
    constructor( model, producer, year, maxSpeed, engine) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engine = engine
    }
    engine () {console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
    info () {
        for (const infoElement of this) {
            if (typeof  this[infoElement] === 'function'){console.log(`${infoElement} -- ${this[infoElement]}`);}}}
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed += newSpeed
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver){
        this.driver = driver
    }
    }
let car = new Car('BMW', 'Germany', '2022', 330, 5.5)
car.engine()
car.info()
car.increaseMaxSpeed()
car.changeYear()
car.addDriver()
console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
function Princes(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}
let princes1 = new Princes('Alisa', 19, 33)
let princes2 = new Princes('Linda', 20, 34)
let princes3 = new Princes('Susi', 23, 35)
let princes4 = new Princes('Almonda', 21, 34)
let princes5 = new Princes('Kriss', 23, 38)
let princes6 = new Princes('Fell', 18, 39)
let princes7 = new Princes('Lonika', 22, 36)
let princes8 = new Princes('Vika', 20, 34)
let princes9 = new Princes('Lika', 24, 37)
let princes10 = new Princes('Diana', 21, 36)

let arr = []
arr.push(princes1, princes2, princes3, princes4, princes5, princes6, princes7, princes8, princes9, princes10);

class Prince {
    constructor(name, age, findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Luke', 24, 37)

let princess = (arr, boy) => {
    for (const item of arr) {
        if (item.footSize === boy.findFootSize){
            console.log(`My princes is ${item.name}`);
        }
    }
}
princess(arr, prince)