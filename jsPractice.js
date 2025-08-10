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
21.
function outer() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}
let result = outer();
result();
--------------------------
 1
____
closure and lexical
============================================
22.
console.log(typeof foo);
var foo = function() {
  return 5;
};
-------------------
undefined
__________
hoisting
============================================
23.
function hoistFunc() {
  console.log(foo());
  function foo() {
    return 10;
  }
}
hoistFunc();
------------------------
 10
____
hoisting function
=============================================
24.
function createFunction() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const increment = createFunction();
console.log(increment());
console.log(increment());
-----------------------------------
1  2
_____
closure
===========================================
25.
let x = 10;
function checkScope() {
  let x = 20;
  console.log(x);
}
checkScope();
console.log(x);
-------------------
20   10 
_________
scope 
=========================================
26.
(function() {
  var x = 5;
})();
console.log(x);
------------------
ReferenceError 
_______________
iife scope
============================================
27.
function outerFunction() {
  var outerVar = "I'm outer";
  return function innerFunction() {
    console.log(outerVar);
  };
}
outerFunction()();
----------------------
I'm outer
__________
closure
=============================================
28.
console.log(typeof func);
var func = function() {
  return 5;
};
-----------------------
undefined
__________
hoisting
=============================================
29.
let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
-------------------
20   10 
________
block scope
=============================================
30.
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const increment = counter();
console.log(increment());
console.log(increment());
----------------------------
1   2 
_______
closure
============================================
31.
function testHoisting(param) {
  console.log(param);
  var param = 20;
}
testHoisting(10);
-------------------------
 10
_____
hoisting parameter
============================================
32.
let a = 1;
function outer() {
  let a = 2;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();
-----------------
2
__
scope
============================================
33.
function createCounter() {
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

const counter = createCounter();
counter.increment();
counter.decrement();
--------------------------------
1  0
_____
closure
============================================
34.
let a = 1;
function outerFunc() {
  let a = 2;
  return function() {
    console.log(a);
  };
}
let result = outerFunc();
result();
-------------------------------
 2 
____
closure and lexical
============================================
35.
console.log(test());
function test() {
  return 5;
}
----------------
5
__
hoisting
============================================
36.
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

let double = createMultiplier(2);
console.log(double(4));
-----------------------------
 8
____
closure with parameter
==============================================
37.
var x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
------------------
20  10
_______
block scope
===============================================
38.
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
-----------------------------
1   2 
________
closure
============================================
39.
console.log(typeof func);
var func = function() {
  return 10;
};
----------------------
undefined
___________
Hoisting
========================================
40.
function scopeTest() {
  console.log(x);
  var x = 10;
}
scopeTest();
----------------------
undefined
__________
hoisting in function
=========================================
41.
function multiplierFactory(factor) {
  return function(num) {
    return num * factor;
  };
}
let double = multiplierFactory(2);
console.log(double(5));
-----------------------------
10
___
closure
===========================================
42.
let x = 10;
function outerFunc() {
  console.log(x);
}
function test() {
  let x = 20;
  outerFunc();
}
test();
-----------------------
10
____
laxical scope 
=======================================
43.
console.log(a);
let a = 10;


Question: What is the output and why? Explain the concept of the "Temporal Dead Zone."
------------------
referenceError
TDZ
scope ki suruaat se lekar us line tk jaha variable ko pahali bar declare kiya gya h us time tak us variable ko use nhi hota h

==========================================
44.
function outer() {
  console.log(a);
  var a = 10;
  function inner() {
    console.log(a);
    var a = 20;
  }
  inner();
}
outer();


Question: What will be printed and why? Discuss how hoisting affects variables in nested functions.
-------------------------
undefined undefined
____________________
hoisting

hoisting ke karan var ka declarations top pr ho gya h lakin initialized usi line pr h ese karan undefined aa raha h
====================================================
45.
let count = 0;
function counter() {
  count++;
  return count;
}

let c1 = counter;
let c2 = counter;

console.log(c1());
console.log(c2());
console.log(c1());


Question: What will be the output and why? Analyze the behavior of closures when functions are assigned to multiple variables.
------------------------------------------
1   2   3
___________
closure function reassign
---------------------------------
01 01 01 3
___________
bahar vale loop me var h and under vale loop me let hone ke karan 0 se 2 tak bahar vala loop chalega or under vala loop har bar 0 se 1 tk chalega and gec me jane ke bad var i ki value print krega jo 3 hogi.
=====================================================
47.

function outer() {
  let a = 1;
  return function inner() {
    return a++;
  };
}

const x = outer();
console.log(x());
console.log(x());
console.log(a);


Question: What will be the output and why? Analyze the closure formed by `inner()` and how it impacts variable access.
-------------------
1  2
______
closure and lexical

closure ke karan jb x ko call kr raha  h to 1 and 2 print ho rha h or a function ke under hone ke karan a ko function ke under hi access kiya ja sakta h lexial scope ke karan reference error dega.
=====================================================
48.
var x = 10;
let x = 20;
console.log(x);


Question: What will happen here, and why? Discuss why this causes an error and the difference between `var` and `let` in terms of redeclaration.

----------------
syntax Error
______________
GEC me x name ke two variable hone ke karan syntax error dega
=======================================================
49.
function outer() {
  var x = 10;
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}
outer();


Question: What will be printed and why? Explain how block scope works with `let` and `var`.

----------------------------------
20   10
__________
block scope

var function scope variable h and let block scope es liye let if me hi access kiya ja sakta h
======================================================

50.
const obj = { a: 10 };
obj.a = 20;
obj = { a: 30 };
console.log(obj.a);


Question: What is the output and why? Discuss how `const` works with objects, particularly in terms of re-assignment versus mutation.
------------------------------------
type error
___________

obj constant hone ke karan pura obj change nhi kr sakte sidha obj ok change nhi kr sakte obj. krke change kr sakte h
=================================================
