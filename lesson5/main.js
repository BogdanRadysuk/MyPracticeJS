// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function s_rectangle(a, b) {
    let result = (a + b) * 2;
    console.log(result)
}s_rectangle(5, 8)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function s_сirсle(PI, r) {
    let result = PI * r ** 2;
    console.log(result);
}s_сirсle(3.14, 8)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function s_cylinder (PI, h, r){
let result = 2 * PI * r * h;
    console.log(result);
}s_cylinder(3.14,10,4)

// - створити функцію яка приймає масив та виводить кожен його елемент
let arr = ['asdfasdf','nmbvnmvbnm','fgioyuioyuio']
function qwe (array) {
    console.log(arr);
}qwe(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let content = 'asdfasdf'
function asd(text) {
    document.write(content);
}asd('<p>jjdfguifo</p>')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function qwerty(text) {
    document.write('<ul>')
    document.write(`<li>text</li>`)
    document.write(`<li>text</li>`)
    document.write(`<li>text</li>`)
    document.write('</ul>')
}qwerty('asdfadfhdfghdhgj')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function fds(text, txt) {
    document.write(`<ul>`)
    for (let txt = 0; txt < 3; txt++) {
        document.write(`<li>text</li>`)
    }
    document.write(`</ul>`)
}fds('sdlfgjsdfg')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr = [1, true, NaN, undefined, 'string']
function asdf(qwerty){
    console.log(arr)
}asdf(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let array = ['id', 'name', 'age']
function asd(...arr) {
    for (const item of arr) {
        console.log(item);
    }
}asd(array)

// - створити функцію яка повертає найменьше число з масиву
let arr = [4, 3, 44, 5, 5, 7, 12]
function asd(array) {
    let minNumber = array[0];
    for (const item of array) {
        if (item < minNumber){
            minNumber = item;
        }
    }
    return minNumber;
}let qwe = asd(arr);
console.log(qwe);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [1,2,3];
function asd(array){
    let zxc = 0;
    for (const item of array) {
        zxc += item;
    }
    return zxc
}console.log(asd(arr));
