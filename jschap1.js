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
51.
for (let i = 0; i < 3; i++) {
  (function() {
    console.log(i);
  })();
}


Question: What will be printed and why? Analyze the behavior of IIFE (Immediately Invoked Function Expression) with `let` in loops.
-------------------------
0  1  2  
_________
for loop 0 se 2 tak chalega or 3 pr false ho jayega for loop me iife function h es kiye ye i ke value print kr rha h jitani bar loop chalege utani bat iife call hoga
====================================================
52.
function test() {
  console.log(foo);
  var foo = 10;
  function foo() {}
  console.log(foo);
}
test();


Question: What will be the output and why? Explain the order in which function declarations and variable declarations are hoisted.

-----------------------------
[function: foo]
10
______________
esme ek hi name ka variable and function h or ye dono hi hoist hoge pr function me function foo(){} jayega and variable me var foo; es karan pahale vale log me function jayega and bad vale log me variable,
=================================================
var x = 5;
function scopeCheck() {
  console.log(x);
  var x = 10;
  console.log(x);
}
scopeCheck();


Question: What will be printed and why? Discuss how variable hoisting affects the `x` variable within the function.
----------------------
undefined  10
_______________
scope
log function me hone ke karan function vala x hoist hoga or fir log me undefined hoga or fir dusare log se pale x initialization ho gya h esa liye 10 print hoga. 
===============================================
54.
function counter() {
  counter.count = (counter.count || 0) + 1;
  return counter.count;
}

console.log(counter());
console.log(counter());


Question: What will be the output? How does the function property `counter.count` affect the closure and variable persistence?
-------------------------------
1  2
__________
js me function ko object hi mana jata h es liye ham count key me kuch assign kr rhe h , (counter.count || 0) es condition me pahale to count undefined hone se 0 ayega or 0+1 =1 count me assign ho jayega fir bad me count me 1 hone ke karan 1+1=2 hoga 
====================================================
55.
let x = 10;
{
  let x = 20;
  var y = 30;
}
console.log(x);
console.log(y);


Question: What will be the output? Explain how `let` and `var` behave differently inside block scope.
-----------------------------
10  30
____________
let block scope hone ke karan let x =20; block me access hoga bahar nhi es liye log x me 10 aayega and var function scope hone ke karan var GEC me hi ho es liye log y me 30 print hoga
===================================================
56.
console.log(func());
var func = function() {
  return 10;
};


Question: What will be printed and why? Discuss the difference in hoisting behavior between function declarations and function expressions.
-------------------------------
type error
____________
esme func ek function nhi h ye ek expression h es liye type error aayega.
====================================================
const a = 5;
{
  const a = 10;
  console.log(a);
}
console.log(a);


Question: What will be printed? Discuss how `const` works in different block scopes and whether re-declaration is possible.
--------------------------------
10   5
________
esme const a= 5 hone ke karan es block me hi h ye dusara a h jo es block me hi access kiya ja sakta h esa liye under log me 10 and bahar log me 5 print hoga
===================================================
58.
(function() {
  console.log(a);
  var a = 10;
})();


Question: What will be the output and why? Explain the role of hoisting inside an IIFE.
------------------------------------
undefined
___________
esme iife function me hoisting ho rhi h, a top pr hoist ho jayega and declare usi line pr hoga es liye log me undefined hoga
================================================
59.
function outer() {
  let counter = 0;
  return function increment() {
    counter++;
    return counter;
  };
}

let increment1 = outer();
let increment2 = outer();
console.log(increment1());
console.log(increment2());
console.log(increment1());

Question: What will be printed? Discuss how closures preserve their lexical environment across different instances of the same function.
----------------------------
1   1   2
_____________
esme outer ko two ler me dal diya yani outer ke two expresstion ban gye h dono me counter 0 h jese hi increment1 se call kiya to increment1 me counter ki value post increment hokr 1 print ho gyi, and ab increment2 se call kiya to pahale esme counter ki value 0 thi fir post increment hokr 1 ho gyi, and ab
increment1 se vapash call kiya gya to counter ki value 1 se post increment hokr 2 ho gyi
==================================================

60.
for (var i = 0; i < 3; i++) {
  let j = i;
  console.log(j);
}
console.log(i);


Question: What will be printed and why? Explain the difference between `var` and `let` in loop variable declaration.
-----------------------------------
0   1    2    3
__________________
esme loop 0 se start ho rha h or 2 tak chal rah h or loop me i ko j me assign kiya ja rha h or j ko log kiya ja raha h to 0  1  2 print ho rha h, and i ki value increce hokr 3 hone ke karan loop me condition false ho gye or i me last value 3 raha gye loop se bahar hone pr i ko log kiya ja rha h to fir 3 print ho rha h
==================================================
61.
let a = 5;
function test() {
  var a = 10;
  console.log(a);
}
test();
console.log(a);


Question: What will be printed and why? Discuss how `let` and `var` interact in terms of scope and shadowing.

---------------------------------
10    5
____________
var function scope hone ke karan var test function me hi khatam ho jayega or let GEC me hone ke karan sabhi jagah use hoga
====================================================
62.
function testScope() {
  console.log(x);
  var x = 10;
  console.log(x);
}
testScope();


Question: What will be printed? Analyze how `var` variables are hoisted within a function and how their value is handled before initialization.

------------------------------
undefined   10
________________
yha hoisting ke karan pahale log me undefined aayega and bad me 10 aayega
====================================================
63.

var a = 10;
function testVar() {
  var a = 20;
  console.log(a);
}
testVar();
console.log(a);


Question: What will be the output? Explain how variable scope works when re-declaring `var` inside a function.

--------------------------------------
20   10
___________
var function scope hone ke karan var testVar function me hi khatam ho jayega or var a = 10; GEC me hone ke karan sabhi jagah use hoga
======================================================
64.
function outerFunc() {
  var x = 10;
  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}
outerFunc();


Question: What will be printed and why? Discuss the concept of lexical scoping in nested functions.

--------------------------
 10
____
inner function ka x globel hone ke karan inner function ke log me 10 print ho jayega
=====================================================
65.
let a = 5;
{
  let a = 10;
  console.log(a);
}
console.log(a);


Question: What will be printed? Discuss how block scoping with `let` affects variable visibility inside and outside the block.

----------------------------
10   5
_________
let block scope hone ke karan a=10; block me khatam ho jayega or let a =5; GEC me hone ke karan pure code me use kiya ja sakta h
=====================================================
66.
function outerFunc() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    }
  };
}

let counter = outerFunc();
console.log(counter.increment());
console.log(counter.decrement());


Question: What will be the output and why? Analyze how closures behave with multiple functions accessing the same lexical scope.
---------------------------------
1   0
_______
outer function ko counter me store kiya and couner ko expression banaya gya or fir counter se increment function ko call kiya to count post increment ho gya or 1 print kiya , fir counter se decrement call kiya gya or count ki value 1 se decrece hokar vapas 0 ho gyi
====================================================
67.
console.log(test());
function test() {
  return 5;
}


Question: What will be printed and why? Explain how function declarations are hoisted.

-------------------------------
hoisting ke karan test function ka pura scope top pr jayega or log me 5 print ho jayega
=====================================================

68.
console.log(foo());
var foo = function() {
  return 5;
};


Question: What will happen here and why? Discuss the difference between function expressions and function declarations in terms of hoisting.

--------------------------
typeError
___________
foo ek function na hone ke karn type error aayega foo yha pr expression h
=====================================================
69.
let a = 1;
function outer() {
  let b = 2;
  function inner() {
    console.log(a, b);
  }
  inner();
}
outer();


Question: What will be printed and why? Explain how the scope chain works in nested functions.
---------------------------------
1    2
_______
a GEC me hone ke karan function ke under use kiya ja sakta h or b inner ka globel hone ke karan inner me use kiya ja raha h esa karan 1   2 print honge.
=====================================================
70.
function outer() {
  let x = 10;
  return function() {
    return x++;
  };
}

const a = outer();
const b = outer();

console.log(a());
console.log(b());
console.log(a());
console.log(b());

Question: What will be printed? Discuss how closures work with multiple instances and how they preserve their own state.
------------------------------
10   10   11   11
___________________
esme outer ko two const me dal diya yani outer ke two expresstion ban gye h dono me x 10 h jese hi a se call kiya to x post increment hote in return kr diya to 10 return hoga and fir b call kiya to esme bhi x ki value 10 h or return me post increment 	hone ke karan 10 hi return ho jayega fir vagash se a ko call kiya gya h to x ki value 11 h to return me post increment hone ke karan 11 hi return hoga , fir b call ho raha b me bhi x ki value 11 h or return me post increment hone ke karan 11 hi log loga						
=====================================================

