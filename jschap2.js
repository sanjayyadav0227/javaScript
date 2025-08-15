1.
Create a function greet that takes two positional arguments: name and greeting, and returns a personalized greeting message.
_________________________
function greet(name, greeting){
    console.log(name, greeting);
}
greet();
greet('ram');
greet('ram', 25);
======================================================
2.
Write a function calculatePrice that takes two arguments: price and taxRate. If taxRate is not provided, it should default to 5%.
------------------------------
function  calculatePrice(price, taxRate=0.05){
    if(!price) return "Not valid price";
   return price*taxRate;
}
let ans = calculatePrice();
console.log(ans);
let ans1 = calculatePrice(56);
console.log(ans1);
let ans2 = calculatePrice(56,0.08);
console.log(ans2);
======================================================
3.
Create a function sumNumbers that takes an unknown number of arguments using the rest operator and returns their sum.
----------------------------
function sumNumbers(...numbers){
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let ans =  sumNumbers();
console.log(ans);
let ans1 =  sumNumbers(15,3,6,48);
console.log(ans1);
let ans2 =  sumNumbers(42,6,47,15,24,75,84,74);
console.log(ans2);
======================================================
4.
Create a function introduce that takes three positional arguments: firstName, lastName, and age, and returns a sentence introducing the person.
------------------------------
function introduce(firstName, lastName, age){
    return `My name is ${firstName} ${lastName} and age ${age}.`
}
let ans =  introduce();
console.log(ans);
let ans1 =  introduce('sanjay');
console.log(ans1);
let ans2 =  introduce('sanjay', 'yadav');
console.log(ans2);
let ans3 =  introduce('sanjay', 'yadav', 21);
console.log(ans3);
======================================================
5.
Write a function makeSandwich that takes two arguments: breadType and filling. The default value for breadType should be "whole wheat".
-------------------------
function MakeSandwich(breadType = "whole wheat", filling) {
  if (breadType === "") breadType = "whole wheat";
  return breadType + " " + filling;
}
let ans = MakeSandwich();
console.log(ans);
let ans1 = MakeSandwich("atta", "potato");
console.log(ans1);
let ans2 = MakeSandwich("", "potato");
console.log(ans2);
======================================================
6.
Create a function multiply that takes two positional arguments x and y, with a default value for y as 1, and returns the result of multiplying them.
----------------------------
function multiply(x,y=1){
    return x*y;
}
let ans = multiply();
console.log(ans);
let ans1 = multiply(5);
console.log(ans1);
let ans2 = multiply(5,2);
console.log(ans2);
======================================================
7.
Write a function getTotalPrice that takes an unknown number of prices as arguments using the rest operator and returns the total price.
-----------------------------
function getTotalPrice(...numbers){
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let ans = getTotalPrice();
console.log(ans);
let ans1 = getTotalPrice(5,95,55,42);
console.log(ans1);
let ans2 = getTotalPrice(9);
console.log(ans2);
======================================================
8.
Create a function buildSentence that accepts three arguments: subject, verb, and object. If no object is passed, it should default to "something".
------------------------
function buildSentence(subject, verb, object = "something"){
    return `${subject} ${verb} ${object}.`
}
let ans = buildSentence("I", 'like', 'pizza');
console.log(ans);
let ans1 = buildSentence('she', 'likes');
console.log(ans1);
let ans2 = buildSentence();
console.log(ans2);
======================================================
9.
Write a function addNumbers that takes an unknown number of numbers using the rest operator and returns the sum.
----------------------------
function addNumbers(...numbers){
    let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let ans = addNumbers();
console.log(ans);
let ans1 = addNumbers(5,95,55,42);
console.log(ans1);
let ans2 = addNumbers(9);
console.log(ans2);
======================================================
10.
Create a function displayInfo that takes three arguments: name, age, and city. If no city is provided, it should default to "Unknown".
-------------------------
function displayInfo(name, age, city = "Unknown"){
    console.log(`name : ${name}`);
    console.log(`age : ${age}`);
    console.log(`city : ${city}`);
}

displayInfo("Raman",25);
displayInfo("Raman",25,"Jaipur");
======================================================
11.
Write a function orderPizza that takes two arguments: size and topping. If no topping is provided, it should default to "cheese".
----------------------------------
function orderPizza(size, topping = "cheese") {
  return `You ordered a ${size} pizza with ${topping}.`;
}
let ans = orderPizza();
console.log(ans);
let ans1 = orderPizza('large');
console.log(ans1);
let ans2 = orderPizza('medium', 'pepperoni');
console.log(ans2);
======================================================
12.
Create a function makeCoffee that takes one required argument type and an unknown number of optional ingredients using the rest operator.
---------------------------


======================================================
13.
Write a function introducePerson that takes two positional arguments name and profession, with profession defaulting to "Student".
-------------------------
function introducePerson (name, profession="student"){
    console.log(`My name is ${name}, I am a ${profession}`);
}

introducePerson();
introducePerson("Abhi");
introducePerson("Suresh", "Engineer");
======================================================
14.
Create a function findMax that accepts an unknown number of numbers using the rest operator and returns the maximum value.
--------------------------

function findMax(...numbers){
    let max=0;
    for(let i=0; i<numbers.length; i++){
        if(max<numbers[i]){
            max = numbers[i];
        }
    }
    console.log(max);
}

findMax(2,5,6,36,8,7)
findMax(65,82,63,4,98,22,35)
======================================================
15.
Write a function buildPerson that takes two arguments: firstName and lastName, and returns an object representing the person.
----------------------------------
function buildPerson(firstName, lastName){
    console.log(`my firstName is ${firstName} and my lastName is ${lastName}.`)
}

buildPerson("sanjay");
buildPerson("Sanjay", "Yadav");
======================================================
16.
Create an object car with primitive properties: brand, model, and year.
-----------------------------
const car = {
   brand:"Toyota", model:"Camry", year:2022,
}
console.log(car.brand);
console.log(car['model']);
console.log(car.year);
======================================================
17.
Create an object book with non-primitive properties: title, author, and reviews (where reviews is an array of review objects).
-----------------------------
const book = {
  title: "Journey Through Time",
  author: {
    firstName: "Emily",
    lastName: "Clark"
  },
  reviews: [
    {
      reviewer: "Ravi",
      rating: 5,
      comment: "A masterpiece — couldn't put it down!"
    },
    {
      reviewer: "Sneha",
      rating: 4.2,
      comment: "Beautifully written with deep insights."
    },
    {
      reviewer: "Amit",
      rating: 4.8,
      comment: "Gripping story and excellent pacing."
    }
  ]
};

console.log(book.title);
console.log(book.author.firstName);
console.log(book.reviews[2]);
======================================================
18.
Create an object laptop with both primitive (brand, price) and non-primitive (features - an array) properties.
---------------------------
const laptop = {
  brand: "Dell",
  price: 75000,
  features: [
    "Intel Core i7",
    "16GB RAM",
    "512GB SSD",
    "Windows 11",
    "Backlit Keyboard"
  ]
};
console.log(laptop.brand);
console.log(laptop.price);
console.log(laptop.features[2]);
======================================================
19.
Create an object person with a method greet that prints a greeting message using the name property.
--------------------------
const person = {
  name: "Sanjay",
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
};
console.log(person.name);
person.greet();
=====================================================
20.
Write a function buildTeam that takes an unknown number of team members using the rest operator and returns an array of their names.
-------------------------------
function buildTeam(...members) {
  return members;
}
console.log(buildTeam("Raman", "Anjali", "Vikram", "Aisha"));
======================================================
21.
Create a function discountPrice that takes two positional arguments: price and discountPercentage. If no discount is provided, it should default to 10%.
-----------------------------
function discountPrice(price, discountPercentage = 10){
    discountAmt = (price*discountPercentage)/100;
    console.log(price-discountAmt);
}
discountPrice(200)
discountPrice(200,20)
======================================================
22.
Write a function describePet that accepts two arguments: petName and petType. If no petType is provided, it should default to "dog".
----------------------------
function describePet(petName, petType = "dog") {
  return `${petName} is a ${petType}.`;
}

console.log(describePet("Bruno"));         
console.log(describePet("Mittens", "cat"));
======================================================
23.
Create a function calculateArea that accepts two arguments: length and width. If width is not provided, it should default to the same value as length (for a square).
------------------------------
function calculateArea(length, width = length) {
  return length * width;
}
console.log(calculateArea(5));
console.log(calculateArea(5, 10));
======================================================
24.
Write a function joinStrings that accepts an unknown number of strings using the rest operator and returns them concatenated into one string.
----------------------------
function joinStrings(...strings) {
  return strings.join('');
}

console.log(joinStrings("Hello", " ", "Raman", "!"));  
======================================================
25.
Create a function createUserProfile that accepts three arguments: name, email, and role. If no role is provided, it should default to "user".
----------------------------------------------
function createUserProfile(name, email, role = "user") {
  if (name === "" || email === "") {
    console.log("null null user");
    return;
  }
  console.log(name);
  console.log(email);
  console.log(role);
}
createUserProfile();
createUserProfile("sanjay", "sanjay@gmail.com");
createUserProfile("raman", "raman@gmail.com","admin");
createUserProfile("", "", "admin");
======================================================
26.
Write a function divideNumbers that takes two arguments: a and b, with b defaulting to 1 if not provided.
--------------------------
function divideNumbers(a, b = 1) {
  return a / b;
}
console.log(divideNumbers(10));
console.log(divideNumbers(10, 2)); 
======================================================
27.
Create a function combineArrays that accepts an unknown number of arrays using the rest operator and returns one combined array.
-----------------------------------
function combineArrays(...arrays) {
  return arrays.flat();
}

console.log(combineArrays([1, 2], [3, 4], [5]));
======================================================
28.
Write a function introduceEmployee that takes two positional arguments: employeeName and position, with position defaulting to "intern".
-----------------------------------
function introduceEmployee(employeeName, position = "intern") {
  return `${employeeName} works as an ${position}.`;
}

console.log(introduceEmployee("Raman"));
console.log(introduceEmployee("Anjali", "developer"));
======================================================
29.
Create a function findAverage that takes an unknown number of scores using the rest operator and returns the average score.
--------------------------------------
function findAverage(...scores) {
  if (scores.length === 0) return 0;
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

console.log(findAverage(80, 90, 100));
console.log(findAverage());      
=========================================================================
30.
Write a function buildCar that accepts three arguments: brand, model, and year. If no year is provided, it should default to the current year.
---------------------------------------------
function buildCar(brand, model, year = new Date().getFullYear()) {
  return {
    brand,
    model,
    year
  };
}

console.log(buildCar("Toyota", "Camry"));
console.log(buildCar("Honda", "Civic", 2020));
=========================================================================
