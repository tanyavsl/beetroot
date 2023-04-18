
//ДОМАШКА ЦИКЛИ ТА УМОВИ ЗНАХОДИТЬСЯ НА 279 РЯДКУ


/* let firstName = "Ivan";
let age = 27;


const MAGIC_NUMBER = 0;

const first_number = prompt('How many kilometers to convert?');
const second_number = prompt('Second number');

const result = Number(first_number) * 0,621371;

alert(result)

console.log(result);
*/




// конвертація миль

/* let km = prompt('How many kilometers to convert?');
const mile = 0.621371;
const result = Number(km) * (mile);

alert(result);
console.log(result);
*/





// зарплата

/* let sales = prompt('How many sales?');
const salary = 250;
const procent = 10
const result = Number(sales) / (procent) + (salary);

alert(`ваша зп - ${result}`);
console.log(result);
*/


// МІНІМУМ  МІНІМУМ  МІНІМУМ  МІНІМУМ  МІНІМУМ  МІНІМУМ  МІНІМУМ 
// let userName = "Ivan";
// let userName2 = "Anya";

// let lastName = "Konoval",
//     lastName2 = "Scripnik";

// let let = "Ivan";
// let class = "Ivan";
/* let 1user = "Ivan";
let FirstName = "Ivan";
*/



//HОРМА   HОРМА   HОРМА    HОРМА   HОРМА    HОРМА   HОРМА   HОРМА
// let userName = prompt('Як вас звати?');
// alert(`Привіт, ${userName}`);

// let yearBirth = prompt('Ваш рік народження?');
// const year = 2023;
// const result = (year) - Number(yearBirth);
// alert(`Вам ${result}`);

// let sideLength = prompt('Довжина сторони квадрату?');
// const perimetr = 4;
// const result = Number(sideLength) * (perimetr);
// alert(`Периметр вашого квадрата - ${result}`);



//МАКСИМУМ  МАКСИМУМ  МАКСИМУМ  МАКСИМУМ   МАКСИМУМ  МАКСИМУМ  МАКСИМУМ  МАКСИМУМ
// let cicleRadius = prompt('Радіус кола?');
// const numberPi = 3.14;
// const result = (numberPi) * (Number(cicleRadius)**2);
// alert(`Площа кола - ${result}`);

// let km = prompt('Яка відстань в км між містами?');
// let hours = prompt('За скільки годин ви хочете дістатися?');
// const result = Number(km) / Number(hours);
// alert(`Вам необхідно рухатися зі швидкістю ${result} км/год`);

// let dollar = prompt('Доллар США');
// const euro = 0.92;
// const result = Number(dollar) * (euro);
// alert (`Евро - ${result}`);




// КАЛЬКУЛЯТОР
// let fitstValue = prompt('Перше значення');
// let operator = prompt('Оператор');
// let secondValue = prompt('Друге значення');

// let result;
// switch (operator) {
//     case "+":
//         result = Number(fitstValue) + Number(secondValue)
//         break;
//     case "-":
//         result = Number(fitstValue) - Number(secondValue)
//         break;
//     case "*":
//         result = Number(fitstValue) * Number(secondValue)
//         break;
//     case "/":
//         result = Number(fitstValue) / Number(secondValue)
//         break;
//     default:
//         result= "Not text here"
//         break;
// }

// alert(result);



// ЗНИЖКА
// let purchase = prompt('Cума покупки?');
// let result;

// if(purchase >= 200 && purchase  <=300) {
//     result = Number(purchase) - (Number(purchase) * 0.03);
// } else if(purchase >= 300 && purchase  <=500) {
//     result = Number(purchase) - (Number(purchase) * 0.05);
// } else if(purchase >=500) {
//     result = Number(purchase) - (Number(purchase) * 0.07);
// } else {
//     result = "Not result";
// }


// alert(`Сума покупки зі знижкою - ${result}`);



//Тест

// let points = 0;
// const x = 2;


// let question1 = prompt('Який зараз рік?\n  2021 \n  2023 \n  2022');
// if (question1 == "2023") {
//     points = points + x;
// }

// let question2 = prompt('Результат виразу 5+5?\n  10\n  20\n  5');
// if (question2 == "10") {
//     points = points + x;
// }

// let question3 = prompt('Столиця України?\n  Київ\n  Одесса\n  Львів');
// if (question3 == "Київ") {
//     points = points + x;
// }

// alert(points);






//ТИПИ ДАНИХ ТА ОПЕРАТОРИ
//МІНІМУМ
//1
// let sum = 0.1 + 0.2;
// alert(+sum.toFixed(2));

//2
// const x = 2;
// const result = (+sum.toFixed(2)) + x;
// alert(result);

//3
// let gb = prompt("Oбсяг флешки в Гб?");
// const mb = 820;
// const result = (gb) * 1000 / (mb);
// alert(`У вашу флешку поміщається ${Math.trunc(result)} файлів розміром 820Мб`);


//НОРМА НОРМА НОРМА НОРМА
//1
// let purse = prompt("Яка сума грошей у вашому гаманці?");
// let chocolate = prompt("Ціна однієї шоколадки?");
// const resultChoco = Number(purse) / Number(chocolate);
// const remainder = Number(purse) % Number(chocolate);
// alert(`Ви можете купити ${Math.trunc(resultChoco)} шт.`);
// alert(`Здача ${remainder}`);

//2
// let numer = prompt("Введіть тризначне число");
// let result = 0;
// for(; numer; numer = Math.floor(numer/10)) {
//     result *= 10;
//     result += numer % 10;
// }
// alert(result);


//МАКСИМУМ МАКСИМУМ МАКСИМУМ

// console.log(2 && 0 && 3);  //0
// console.log(2 || 0 || 3);  //2
// console.log(2 && 0 || 3);  //3




//lesson lesson lesson цикли й умови
//  let array = [
//     7,
//     8,
//     'some text',
//     ['dfdf', 34, 8],
//     4,
//     'dfdgfd',
//     78,
//     [1, 2, 3]
// ];


// for(let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if(Array.isArray(element)) {
//         for(let i = 0; i < element.length; i++) {
//             console.log(element[i]);
//         }
//     } else {
//         console.log(element);
//     }
// }

//задачка 1 задачка 1 задачка 1
// let i = prompt("Напишіть цифру");
// while (i > 0){
//     console.log(i);
//     i--;
// }

//задачка 2 задачка 2 задачка 2
// let question = Number(prompt("Яке число?"));
// let result = '';

// for (let i = 1; i < question; i++) {
//     result += `${i} вівця...`
// }
// console.log(result);

//задачка 3 задачка 3 задачка 3
// let question = Number(prompt("Число?"));

// for(let i = question; i > 0; i--) {
//     console.log(i);
// }

//задачка 4 задачка 4 задачка 4
// let number = Number(prompt("Введіть число"));
// let res = '';

// for(let i = number; i>0; i--) {
//     res = res + '#';
//     console.log(res);
// }



//ЦИКЛИ Й УМОВИ  ДОМАШКА

//МІНІМУМ   МІНІМУМ   МІНІМУМ   МІНІМУМ   МІНІМУМ 
//1
// const age = prompt("Скільки вам років?");
// let result;
// if(age >= 0 && age <= 11) {
//     result = ("Дитина");
// } else if(age >= 12 && age <= 17) {
//     result = ("Підліток");
// } else if(age >= 18 && age <= 59) {
//     result = ("Дорослий");
// } else if(age >= 60) {
//     result = ("Пенсіонер");
// } else {
//     result = ("Введено не вірні дані");
// }
// alert(result);


//2
// let numer = prompt("Число від 0 до 9?");
// let result;
// switch(numer) {
//     case '1':
//       result = '!';
//       break;
//     case '2':
//         result = '@';
//         break;
//     case '3':
//         result = '#';
//         break;
//     case '4':
//         result = '$';
//         break;
//     case '5':
//         result = '%';
//         break;
//     case '6':
//         result = '^';
//         break;
//     case '7':
//         result = '&';
//         break;
//     case '8':
//         result = '*';
//         break;
//     case '9':
//         result = '(';
//         break;
//     case '0':
//         result = ')';
//         break;
//     default:
//         result = ("Введено невірні дані");
//         break;
// }
// alert(result);


//3
// let x = Number(prompt("Введіть число"));
// let y = Number(prompt("Введіть число"));
// let sum = 0;
// for (let i = x; i<=y; i++) {
//     sum = sum + i;
// }
// alert(sum);


//4
// let a = Number(prompt("Введіть число"));
// let b = Number(prompt("Введіть число"));
// let ncd;
// while (a!=b) {
//     if (a>b) {
//       a = a - b;
//     } else {
//         b = b - a;
//     }
// }
// ncd=a;
// alert(ncd);


//5
// let a = Number(prompt("Введіть число"));
// let dividers = "";
// for (let index = 0; index<=a; index++) {
//     if (a % index == 0) {
//         dividers +=index;
//     }
// }
// alert(dividers);


//НОРМА НОРМА НОРМА НОРМА НОРМА НОРМА НОРМА
//1
// let num = prompt('Введіть п`ятизначне число');
// let temp = Array.from(num).reverse().join('');
// console.log(num);
// console.log(temp);
// if(num.length == 5) {
//     if(num == temp) {
//         alert('yes');
//     }else {
//         alert('no');
//     }
// }

//2
// let purchase = prompt('Cума покупки?');
// let result;

// if(purchase >= 200 && purchase  <=300) {
//     result = Number(purchase) - (Number(purchase) * 0.03);
// } else if(purchase >= 300 && purchase  <=500) {
//     result = Number(purchase) - (Number(purchase) * 0.05);
// } else if(purchase >=500) {
//     result = Number(purchase) - (Number(purchase) * 0.07);
// } else {
//     result = "Not result";
// }

// alert(`Сума покупки зі знижкою - ${result}`);


//3
// const tenNumbers = [];
// for(let index = 0; index < 10; index++) {
//     tenNumbers[index] = prompt('Введіть 10 чисел' + index);
// }
// for(let index=0; index<tenNumbers.length; index++) {
//     console.log(tenNumbers[index]);
// }

// let numPlus = 0;
// let numMinus = 0;
// let numNull = 0;

// for(let index = 0; index < tenNumbers.length; index++) {
//     if(tenNumbers[index] > 0) {
//         numPlus++;
//     } else if(tenNumbers[index] < 0) {
//         numMinus++;
//     } else if(tenNumbers[index] == 0) {
//         numNull++;
//     }
// }

// alert(`Кількість додатніх чисел ${numPlus}`);
// alert(`Кількість відємних чисел ${numMinus}`);
// alert(`Кількість нулів ${numNull}`);


//4
// let weekday = ["Понеділок", "Вівторок", "Середа", "Четверг", "Пятниця", "Субота", "Неділя"];
// let dayi = 0;

// while(confirm(`${weekday[dayi]}. Хочеш побачити наступний день?`)) {
//     if(dayi == 6) {
//         dayi = 1;
//     }
//     dayi++;
// }




//МАКСИМУМ МАКСИМУМ МАКСИМУМ МАКСИМУМ МАКСИМУМ МАКСИМУМ 
//1
// let min = 0;
// let max = 100;
// let N = Math.floor((min/max)/2);
// let answer;

// do{
//     answer = prompt(`ваше число > ${N}, чи < ${N} чи = ${N}`)
//     if(answer == '>'){
//         min = N;
//     } else if(answer == '<'){
//         max = N;
//     }
//     N = Math.floor((min+max)/2);
// }while(answer !== "=");

// alert(`Ваше число ${N}`);

//2
// let arrNum = [2, 3, 4, 5, 6, 7, 8, 9]
// for(let index = 0; index < 8; index++) {
//     const numMulti = arrNum[index];
//     for(let j = 1; j < 11; j++) {
//         arrNum[index] = numMulti * j;
//         console.log(arrNum[index]);
//     }
// }














