// class Computer {
//     constructor(name, videocard, price) {
//         this.name = name;
//         this.videocard = videocard;
//         this.price = price;
//     }
//     get full() {
//         return `Price of ${this.name} ${this.videocard} is ${this.price}`;
//     }

//     set full(info) {
// this.name = info;
//     }
//     showPrice() {
//         console.log(this.full)
//     }
// }

// const user = new Computer("Ivan", "Biostar", "1200");

// user.showPrice();
// user.name = 'David'
// user.showPrice();





// class User {
//     constructor(first, last, age) {
//         this.first = first;
//         this.last = last;
//         this.age = age;
//     }

//     get full() {
//       return `${this.first} ${this.last}`
//     }
//     set full(name) {
// this.first = name;
//     }
//     hello() {
//         console.log(this.full)
//     }
// }

// const someUser = new User('David', 'Koda', 33);
// const someUse = new User('Ivan', 'Koda', 55)

// console.log(someUser);
// someUser.hello();
// someUse.first = "Kolya"
// someUse.hello();






//Домашка    Домашка    Домашка    Домашка   Домашка 
//Завдання 1   Завдання 1    Завдання 1 
// class Circle {
//     constructor(radius) {
//   this.radius = radius;
//     }

//     get radiusValue() {
//         return `${this.radius}`
//     }
//     set radiusValue(value) {
//         this.radius = value;
//     }
//     get diameter() {
//         return this.radius * 2
//     }

//     metod1 () {
//         const PI = 3.14;
//         const number = 2;
//         const metod = Math.floor(PI * number * this.radius);
//         return metod
//     }
//     metod2 () {
//         const PI = 3.14;
//       const metod2 = Math.floor((PI * this.radius)**2)
//       return metod2
//     }

// }

// const circle1 = new Circle (4);
// // circle1.metod1();
// // circle1.metod2();
// // circle1.radius = 3;
// // circle1.metod1();
// // circle1.metod2();
// console.log(`Радіус кола: ${circle1.radius}`);
// console.log(`Діаметр кола: ${circle1.diameter}`);
// console.log(`Площа кола: ${circle1.metod1()}`);
// console.log(`Довжина кола: ${circle1.metod2()}`);

// //Зміна радіуса за допомогою set
// circle1.radius = 3;
// console.log(`Новий радіус кола: ${circle1.radius}`);
// console.log(`Новий діаметр кола: ${circle1.diameter}`);
// console.log(`Новий площа кола: ${circle1.metod1()}`);
// console.log(`Новий довжина кола: ${circle1.metod2()}`);




//Завдання 2   Завдання 2   Завдання 2  Завдання 2
// class Marker {
//     constructor (color, number) {
// this.color = color;
// this.number = number;
//     }

//     write(text) {
//         let output = "";
//         for (let i = 0; i < text.length; i++) {
//             const character = text[i];
//             if (character !== " " && this.number > 0) {
//                 output += character;
//                 this.number -= 0.5;
//             } else {
//                 output += " ";
//             }
//         }
//         console.log(`[${this.color} ${output}]`);
//     }
// }

// class RefillableMarker extends Marker {
//     refill(amount) {
//         this.number = Math.min(this.number + amount, 100);
//         console.log(`[${this.color}] Маркер заправлено. Поточний рівень чорнила: ${this.number}%`);
//     }
// }

// //Використання класу Маркер
// const marker = new Marker("синій", 50);
// marker.write("Hello, World!");


// const refillableMarker = new RefillableMarker("червоний", 30);
// refillableMarker.write("Lorem ipsum dolor sit amet.");

// refillableMarker.refill(50);
// refillableMarker.write("Consectetur adipiscing elit.");







//ООП урок
//Наслідування

class Animal {
    constructor(name, color, wight) {
        this.name = name;
        this.legs = 4;
        this.color = color;
        this.wight = wight;
        
    }

    say() {
        throw new Error('Not inplement');
    }

    eat() {
        console.log('eating');
    }
}


class Dog extends Animal{
    someDogProperty;
    constructor(name, color, wight, someDogProperty) {
        super(name, color, wight)
        this.someDogProperty = someDogProperty;
    }
    say() {
        console.log('Bark');
    }
}
class Cat extends Animal{
    someCatProperty;
    constructor(someCatProperty, name, color, wight) {
        super(name, color, wight)
        this.someCatProperty = someCatProperty;
    }
    say() {
        console.log('Meow');
    }
}


const dog = new Dog('Barsik', 'Red', 20, 'dog value');
const cat = new Cat('cat value', "Mushka",'Green', 5);

console.log(dog)
console.log(cat)
cat.eat()
dog.eat()
cat.say()
dog.say()


//Абстракція