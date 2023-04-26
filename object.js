//01
// const user = {
//     name: 'Jane',
//     age: 25,
//     'eye color': 'brown'
// }
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user['eye color']);

// user.age = 30;
// console.log(user.age);

// for (let key in user) {
//     console.log(`${key} = ${user[key]}`);
// }

//03 copying_object  copying_object   copying_object   copying_object 
// const user2 = user; //Copy by reference
// user.age = 30;
// console.log(user2.age);

// const user3 ={};
// //Copy all the properties into the new object
// for (let key in user) {
//     user3[key] = user[key];
// }
// user.age = 25;
// console.log(user3.age) // в консолі виводить 30

// const user4 = Object.assign({}, user);
// console.log(user4)




//04 methods methods
// const user = {
//     name: 'Jane',
//     lastName: 'Doe',
//     login: function() {
//         console.log('Successfully logged in!');
//     },
//     fullName() {
//         return `${this.name} ${this.lastName}`;
//     }

// }

// user.login();
// console.log(user.fullName());



//05 symbol key    symbol key    symbol key    symbol key 
// const user = {
//     name: 'Jane'
// }
// let id = Symbol('id');
// user[id] = 1;
// console.log(user[id]);



// const user = {
//     name: 'Іван',
//     surname: 'Сміт',
// }

// user.name = 'Петро'
// delete user.name



//lesson
// const person = {
//     firstName: 'Ivan',
//     lastName: 'Ostrovskiy',
//     age: 25
// }

// const description = {
//        country: 'Ukraine',
//        city: 'Kyiv',
//        proffession: 'medic'
// }

// const method = {
//     personInfo() {
//         console.log(`His name ${this.firstName} ${this.lastName}. He is ${this.age} years old.`);
//     }
// }


// const fullInfo = {...person, ...description, ...method};
// const { proffession, ...anyOther} = fullInfo;


// fullInfo.personInfo();
// console.log(fullInfo);
// console.log(anyOther);



// ДОМАШКА ПО ОБЄКТАМ             ДОМАШКА ПО ОБЄКТАМ         ДОМАШКА ПО ОБЄКТАМ 
//Мінімум мінімум мінімум мінімум
// const  car = {
//     manufacturer: 'Germany',
//     model: 'Audi',
//     graduationYear: 1909,
//     avarageSpeed: 80,
//     volumeFuel: 60,
//     fuel: 12,
//     driverName1: 'Tania',
//     infoCar: function(driver) {
//         console.log(`Машина: ${this.model},\nВиробник: ${this.manufacturer},\nРік випуску: ${this.graduationYear},\nСередня швидкість: ${this.avarageSpeed},\nОбсяг паливного баку: ${this.volumeFuel},\nСередня витрата палива на 100км: ${this.fuel},\nВодій 1: ${this.driverName1},\nВодій 2: ${driver}`)
//     },
//     time: function() {
//         let distance = Number(prompt('Введіть відстань, яку треба проїхати?'));
//         let res = ((distance / this.avarageSpeed) / 4) + (distance / this.avarageSpeed);
//         let gas = (distance / this.avarageSpeed) * this.fuel;
//         alert(`Ви витратите ${res} годин на дорогу`);
//         alert(`Ви витратите ${gas}л бензину на дорогу`);

//     }
// }
// //1
// console.log(car.infoCar());

// //2
// car.driverName2 = "Ivan";
// console.log(car.infoCar(car.driverName2));

// //3
// console.log("driverName1" in car);

// //4
// car.time();



//НОРМА НОРМА НОРМА НОРМА 
// const clockTime = {
//     hours: 20,
//     minutes: 19,
//     seconds: 47,
    
//     clock() {
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
//     },

//     changeSecond(sec) {
//          clockSec = `${this.seconds} + ${sec}`;
//          console.log(Number(clockSec));
//     }
// };

// clockTime.clock();
// clockTime.changeSecond(5);

