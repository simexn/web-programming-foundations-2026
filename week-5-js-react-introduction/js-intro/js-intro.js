// ---------------------------------------------------------------- //
// 1. Променливи

// let -> може да се променя
let name = "Ivan";

// const -> константа (не се променя)
const age = 25;

console.log(name);
console.log(age);

// ---------------------------------------------------------------- //
// 2. Създаване на функции (възможни начини)

// 2.1 Function Declaration
// - може да се извика преди дефиницията (hoisting)
function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3));

// 2.2 Function Expression
// - функцията се пази в променлива
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(2, 3));

// 2.3 Arrow functions
// - кратък синтаксис, често използван в React
const divide = (a, b) => {
  console.log("ss");
  return a / b;
};

console.log(divide(10, 2));

// ---------------------------------------------------------------- //
// 3. Template literal
// - ${} позволява вмъкване на променливи в string

const user = "Maria";
const message = `Hello, ${user}! Welcome back.`;

console.log(message);

// ---------------------------------------------------------------- //
// 4. Default Values
// - ако няма подаден параметър -> използва се default стойност

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet();
greet("Ceco");

// ---------------------------------------------------------------- //
// 5. Създаване на обекти (key-value структура)

const person = {
  name: "Ivan",
  age: 30,
};

console.log(person.name);
console.log(person.age);

// ---------------------------------------------------------------- //
// 5.1 Function inside object (method)
// - функция вътре в обект = метод

const car = {
  brand: "BMW",
  start: function () {
    return "Car started";
  },
};

console.log(car.start());

// ---------------------------------------------------------------- //
// 5.2 Constructor Function
// - стар начин за създаване на обекти (преди class)

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Ivan", 25);

console.log(p1.name);
console.log(p1.age);

// ---------------------------------------------------------------- //
// 5.3 Classes
// - модерен OOP синтаксис

class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    return `${this.type} makes a sound`;
  }
}

const dog = new Animal("Dog");

console.log(dog.speak());

// ---------------------------------------------------------------- //
// 5.4 Object.create()
// - създава обект с prototype наследяване

const animalProto = {
  type: "Invertebrates",
  displayType() {
    console.log(this.type);
  },
};

const animal = Object.create(animalProto);
animal.displayType();

// ---------------------------------------------------------------- //
// 6. Работа с колекции (Arrays)
// - масив = списък от стойности

const numbers = [1, 2, 3, 4];

console.log(numbers);
console.log(numbers[0]); // първи елемент
console.log(numbers.length); // дължина

// ---------------------------------------------------------------- //
// 7. Array API

const nums = [1, 2, 3, 4, 5];

// map -> връща нов масив (transform)
console.log(nums.map((n) => n * 2));

// filter -> филтрира елементи
console.log(nums.filter((n) => n > 2));

// includes -> проверка дали има елемент
console.log(nums.includes(3));

// some -> поне един елемент отговаря
console.log(nums.some((n) => n > 4));

// every -> всички елементи отговарят
console.log(nums.every((n) => n > 0));

// forEach -> обхождане (НЕ връща нов масив)
nums.forEach((n) => {
  console.log("Value:", n);
});

// ---------------------------------------------------------------- //
// 8. Destructuring
// - взимане на стойности от обекти/масиви

const user2 = {
  firstName: "Maria",
  lastName: "Ivanova",
};

// basic destructuring
const { firstName } = user2;

console.log(firstName);
// console.log(lastName);

// alias (преименуване)
const { firstName: fName } = user2;

console.log(fName);
// console.log(lName);

// ---------------------------------------------------------------- //
// 8.3 Nested destructuring

const user3 = {
  name: "Ivan",
  address: {
    city3: "Sofia",
    zip3: 1000,
  },
};

const {
  address: { city3, zip3 },
} = user3;

console.log(city3);
console.log(zip3);

// ---------------------------------------------------------------- //
// 8.4 Destructuring в функции
// - много използвано в React (props)

function printUser({ firstName, lastName }) {
  console.log(firstName, lastName);
}

const user4 = {
  firstName: "Maria",
  lastName: "Ivanova",
};

// printUser(user4.firstName, user4.lastName);
printUser(user4);

// ---------------------------------------------------------------- //
// 8.5 Array destructuring + rest operator

const numbersCollection = [10, 20, 30, 40, 50, 70, 1000];

const [a, b, ...rest] = numbersCollection;

console.log(a);
console.log(b);
console.log(rest);

// ---------------------------------------------------------------- //
// 9. Rest Operator
// - събира всички аргументи в масив

function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sumAll(1, 2, 3, 4, 10));

// ---------------------------------------------------------------- //
// 10. Spread Operator
// - разпъва масив/обект (copy, merge)

const arr1 = [1, 2, 3, 4, 5, 7, 10];
const arr2 = [...arr1, 3, 4];

console.log(arr2);
