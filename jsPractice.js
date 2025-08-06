1. 
console.log(typeof test);
var test = function() { 
return 5; 
};
---------------
undefined 
_____________
hoisting
==========================================
2.
let x = 5;
function scopeTest() {
  console.log(x);
  var x = 10;
}
scopeTest();
------------------------
undefined
_____________
lexical scoping
============================================
3.
function createIncrementer() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let increment = createIncrementer();
console.log(increment());
console.log(increment());
---------------------------------------
1  2 
_____
closure
=============================================
4.
console.log(foo);
var foo = 10;
------------------
undefined
___________
hoisting
=============================================
5.
function blockScope() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}
blockScope();
-------------------------
20     10 
__________
block scope
============================================
6.
function outer() {
  var outerVar = "outer";
  return function inner() {
    console.log(outerVar);
  };
}
var innerFunc = outer();
innerFunc();
---------------------------------
outer
______
function scope
============================================
7.
let a = 10;
function shadow() {
  let a = 5;
  console.log(a);
}
shadow();
console.log(a);
-------------------
5   10
_______
==========================================
8.
function outerFunc() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

let counter = outerFunc();
counter.increment();
counter.decrement();

--------------------------
1   0
______
closure
============================================
9.
function outerFunc() {
  let x = 10;
  function innerFunc() {
    console.log(x);
  }
  return innerFunc;
}
let result = outerFunc();
result();
-----------------
10
___
lexical scope
=============================================
10.
function hoistingTest() {
  console.log(x);
  var x = 10;
}
hoistingTest()
----------------
undefined
__________
hoisting
=============================================
11.
function add(a = 5, b = a * 2) {
  return a + b;
}
console.log(add(3));
console.log(add());
-----------------------------
9      15
___________
parameter
==============================================
12.
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
-----------------------------------
1   2
______
closure
=============================================
13.
function testHoist() {
  console.log(foo);
  var foo = 10;
}
testHoist();
----------------------
undefined
__________
hoisting
============================================
14.
(function() {
  var x = 5;
})();
console.log(x);
---------------------
undefined
__________
iife      function scope
===========================================
15.
function multiplierFactory(factor) {
  return function(num) {
    return num * factor;
  };
}
let double = multiplierFactory(2);
console.log(double(4));
------------------------------
8
__
closure with parameter
==========================================
16.
let x = 5;
function checkScope() {
  let x = 10;
  console.log(x);
}
checkScope();
console.log(x);
-----------------------------
10   5
__________
function scope
==========================================
17.
function hoistParam(param) {
  console.log(param);
  var param = 20;
}
hoistParam(10);
-------------------
10
___
hoisting parameter
===========================================
18.
let x = 1;
function outer() {
  let x = 2;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
--------------------
 2
____
function scope
===========================================
19.
function testArgs(a, b, c) {
  console.log(arguments[0], arguments[1], arguments[2]);
}
testArgs(1, 2);
----------------------
20.
function testArgs(a, b, c) {
  console.log(arguments[0], arguments[1], arguments[2]);
}
testArgs(1, 2);
---------------------
1   2    undefined
____________________
arguments object
============================================
