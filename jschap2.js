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
