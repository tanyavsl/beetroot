//01 array
// const colors = ['red', 'green', 'blue'];

// console.log(colors);

// console.log(colors[0])

// colors[0] = 15;
// console.log(colors);

// colors[3]='white';
// console.log(colors);



//02 array methods
// const colors = ['red', 'green', 'blue'];

// console.log(colors.length);

// console.log(colors.pop());
// console.log(colors);

// colors.push('yellow');
// console.log(colors);

// console.log(colors.shift());
// console.log(colors);

// console.log(colors.unshift('violet', 'black'));
// console.log(colors);


//03  iterators
// const colors = ['red', 'green', 'blue'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// for (let color of colors) {
//     console.log(color);
// }








//1
// const fruits = ['Banana', 'Apple', 'Mango'];

// //fruits.forEach((element) => {
// //     console.log(element);
// // })

// function myFruits(element) {
//     console.log(element);
// }
// fruits.forEach(myFruits);




//2
//cкорочено
// const numbers = [2, 5, 10, 48, 34, 30]

// const sumNumbers = (array) => array.reduce((total, value) => total + value);

// console.log (sumNumbers(numbers));


//
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value) {
//   return total + value;
// }
// console.log(sum);

//3
// let numbers = [2, 5, 10, 48, 34, 30];


// let maxNum = (numbers) => {
//     return numbers.reduce(function (max, item) {
//         if(max < item) {
//             max = item;
//         }
//         return max;
//     })
// }

// console.log(maxNum(numbers));

//скорочено
// let numbers = [2, 5, 10, 48, 34, 30];


// let maxNum = (numbers) => numbers.reduce((max, item) => max < item ? item : max);
    

// console.log(maxNum(numbers));


//4
// const fruits = ['Banana', 'Apple', 'Mango'];

// const myFruits = (array, index, ...element) =>  {
//     array.splice(index, 0, ...element);  
// }
// myFruits(fruits, 2, 'Orange', 'Blue');
// console.log(fruits);


//5
// const fruits = ['Banana', 'Apple', 'Mango', 'Orange', "Pineapple", 'Bluberry'];

// const myFruits = (array, index) =>  {
//     array.splice(index, 1);  
// }
// myFruits(fruits, 3);
// console.log(fruits);


//6
// const fruits = ['Banana', 'Apple', 'Mango', 'blue', 'green'];
// const fruitsOther = ['Banana', 'Apple', 'Mango', 'Orange', "Pineapple", 'Bluberry'];
// const fullFuits = fruits.concat(fruitsOther);

// const uniq = Array.from(new Set(fullFuits));
// console.log(uniq);

//інший варіант
// const fruits = ['Banana', 'Apple', 'Mango', 'blue', 'green'];
// const fruitsOther = ['Banana', 'Apple', 'Mango', 'Orange', "Pineapple", 'Bluberry'];

// const concat = (...arrays) => {
//     console.log(arrays.flat())
//     return arrays.flat().filter((item, index, arr) => 
//     ![...arr].slice(index + 1).includes(item))
// };
// console.log(concat(fruits, fruitsOther))










//Домашка по масивам Домашка по масивам
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
// кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// 1.Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, 
//що вже придбали.
// 2.Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
// const shoppingList = [{
//     name: 'Олія',
//     number: 1,
//     bought: 'так',
//     price: 59,
//     sum: 59
// }, {
//     name: 'Шоколад',
//     number: 3,
//     bought: 'так',
//     price: 30,
//     sum: 90
// }, {
//     name: 'Кукурудза',
//     number: 2,
//     bought: 'так',
//     price: 43,
//     sum: 86
// }, {
//     name: 'Помідор',
//     number: 2,
//     bought: 'ні',
//     price: 25,
//     sum: 50
// }, {
//     name: 'Ковбаса',
//     number: 1,
//     bought: 'ні',
//     price: 120,
//     sum: 120
// }, {
//     name: 'Печиво',
//     number: 2,
//     bought: 'так',
//     price: 34,
//     sum: 68
// },  {
//     name: 'Філе',
//     number: 2,
//     bought: 'ні',
//     price: 32,
//     sum: 64
// },  {
//     name: 'Креветки',
//     number: 1,
//     bought: 'так',
//     price: 50,
//     sum: 50
// },  {
//     name: 'Вареники',
//     number: 1,
//     bought: 'ні',
//     price: 60,
//     sum: 60
// }];

// const list = shoppingList.forEach(function(item, index, array) {
//     console.log(item, index);
// });
// console.log(list);

// shoppingList.sort((a, b) => {
//  const boughtA = a.bought;
//  const boughtB = b.bought;
//  if (boughtA < boughtB) {
//     return -1;
//  }
//  if (boughtA > boughtB) {
//     return 1;
//   }
// })

// console.log(shoppingList.sort());


