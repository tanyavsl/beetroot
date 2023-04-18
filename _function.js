//1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// function greet(name) {
//     alert(`Hello, ${name}`);
// }

// greet('Jane');
// greet("Inna");


// 2 2 2 2  22 2 2 2 2  2 2 2 2 2 2 2 2 2 2
// function getRectArea(width,height) {
//     return width * height;
// }
// let rectArea = getRectArea(23, 5);
// console.log(rectArea);

// 3333 3 33  3 3 3 3 3  3 3 3 3 3 3 3 3 3  3 3 
// function sum(a,b) {
//     return a+b;
// }
// let result = sum(1,2);
// alert(result);


// 4 4  4 4 4 4 4  4 4 4 4 4 4  4 4 4 4  4 4 
// function showMessage(from, text = "текст не задано") {
//     alert(from + ":" + text);
// }
// showMessage("Анна");


//5 5  5  5 5 5 5 5 5 55  5 5 55  5 5 5 5  5 
// function checkAge(age) {
//     if (age>=18) {
//         return true;
//     } else {
//         return confirm("У вас є дозвіл ваших батьків?");
//     }
// }
// let age = prompt("Скільки вам років?", 18);
// if(checkAge(age)) {
//     alert('Доступ надано');
// } else {
//     alert('У доступі відмовлено');
// }

//6 6 6 6 6 6 6 6 6 6 6 66 6 6 6 6 6  6
// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert('Ви погодились.');
// }
// function showCancel() {
//     alert('Ви скасували виконання.');
// }
// ask("Ви згодні?", showOk, showCancel);


//7 7 7 7 7 7 7 77  7 7 7 7 7 7 77  7 7  7   7
// function ask(question, yes, no) {
//     if(confirm(question)) yes()
//     else no();
// }
// ask(
//     "Ви згодні?",
//     function() {alert("Ви погодились.");},
//     function() {alert("Ви скасували виконання.");}
// );




//УРОК 4 ФУНКЦІЇ          УРОК 4 ФУНКЦІЇ          УРОК 4 ФУНКЦІЇ      УРОК 4 ФУНКЦІЇ 
//Задачка 1 задачка 1 задачка 1
// function numer(numer1, numer2) {
//     if(numer1 < numer2) {
//         return -1;
//     } else if (numer1 > numer2) {
//         return 1;
//     } else if(numer1 = numer2) {
//         return 0;
//     }
// }

// let question1 = Number(prompt('Введіть число'));
// let question2 = Number(prompt('Введіть інше число'));

// console.log(numer(question1, question2));



//Задачка 2   Задачка 2    Задачка 2     Задачка 2    Задачка 2 

// let question1 = prompt('Введіть число');
// let question2 = prompt('Введіть інше число');
// let question3 = prompt('Введіть ще одне число');
// function numer(numer1, numer2, numer3) {
//     let stringaNumer = Number(numer1 + numer2 + numer3);
//     return stringaNumer;
// }
// alert(numer(question1, question2, question3));


//Задачка 3 задачка3  3задачка 3
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max-min+1) + min);
// }
// console.log(randomNumber(10, 50));



//ДОМАШКА ПО ФУНКЦІЯМ
//МІНІМУМ МІНІМУМ МІНІМУМ МІНІМУМ  МІНІМУМ МІНІМУМ  МІНІМУМ МІНІМУМ 

//2 Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function age(a, b, c, d) {
// }
// console.log(age.length);



//4 Напиши функцію, яка обчислює факторіал переданого їй числа.
// let fact = Number(prompt('Введіть число'));

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
  
//   alert( factorial(fact) ); // 120



//6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
//Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

// function figure(length, width) {
//     let rectangle = length * width;
//     if(length && width) {
//         return rectangle; 
//     }  else if (length) {
//         return length * length;
//     }
//    width = typeof width !== "undefined" ? width : length;
// }

// console.log(figure(3, 2));


//НОРМА НОРМА НОРМА НОРМА НОРМА НОРМА  НОРМА НОРМА НОРМА  НОРМА НОРМА НОРМА 
//1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. 
//Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

// function perfectNumber





















//Задачка 1 задачка 1 задачка1
// const punch = (strange) => {
//     return(point) => strange ** point;
// }
// console.log(punch(4)(2));



//Задачка 2 задачка 2 задачка 2
// function number(...array) {
//     let sum = 0;
//     for (let index = 0; index < array.length && index < 5; index++) {
//         const element = array[index];
//         sum += element;
//      }
//      return sum;
//  }
//  console.log(number(1,2,3,4,5));
 