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