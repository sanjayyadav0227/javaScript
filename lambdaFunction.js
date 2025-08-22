1. Sum of Two Numbers: Write a lambda function to add two numbers.
--------------------------------------------
let sum = (a,b) => a+b;
console.log(sum(5,10));
==================================================================

2. Square of a Number: Write a lambda function to find the square of a given number.
----------------------------------------------------------------
let square = a => a*a;
console.log(square(5));
==================================================================

3. Check Even or Odd: Write a lambda function to check if a number is even or odd.
----------------------------------------------------------------
let evenOdd = a => a%2==0?"even":"odd";
console.log(evenOdd(5))
=================================================================

4. Find Maximum of Two Numbers: Write a lambda function to find the maximum of two numbers.
-----------------------------------------------------------------
let max = (a,b) => a>b?a:b;
console.log(max(5,20))
===================================================================

5. Find Minimum of Two Numbers: Write a lambda function to find the minimum of two numbers.
-----------------------------------------------------------------
let min = (a,b) => a<b?a:b;
console.log(min(50,20))
===================================================================

6. Power Calculation: Write a lambda function to calculate the power of a number (base, exponent).
-------------------------------------------------------------------
let power = (a,b) => a**b;
console.log(power(5,3));
===================================================================

7. Convert Fahrenheit to Celsius: Write a lambda function to convert temperature from Fahrenheit to Celsius.
-------------------------------------------------------------------
let fahrenheitToCelsius = f => ((f - 32) * 5 / 9).toFixed(2);
console.log(fahrenheitToCelsius(98.5));
====================================================================

8. Check Leap Year: Write a lambda function to check if a year is a leap year or not.
---------------------------------------------------------------------
let isLeap = y => (y%4 === 0 || y%400 === 0)?"YES":"NO";
console.log(isLeap(2016));
=====================================================================

9. Find Factorial Using Recursion: Write a recursive lambda function to find the factorial of a number.
---------------------------------------------------------------------
let fact = n => (n<=1)?n:n*fact(n-1);
console.log(fact(5));
====================================================================

10. Reverse a String: Write a lambda function to reverse a given string.
------------------------------------------------------------------
let str = "Helllo";
let newStr = a => a.split("").reverse().join("");
console.log(newStr(str))
===================================================================

11. Check Palindrome String: Write a lambda function to check if a given string is a palindrome.
-------------------------------------------------------------------
let str = "madam";
let palindrom = a => a.split("").reverse().join("");
let newNum = palindrom(str);
console.log(newNum === str);
==================================================================

12. Find the Absolute Value: Write a lambda function to return the absolute value of a given number.
------------------------------------------------------------------
let num = -5;
let newNum = a => Math.abs(num);
console.log(newNum(num));
==================================================================

13. Check Divisibility by 5: Write a lambda function to check if a number is divisible by 5.
------------------------------------------------------------------
let num = 25;
let divisibile = a => a%5 === 0;
console.log(divisibile(num))
===================================================================

14. Find the Length of a String: Write a lambda function to find the length of a given string.
------------------------------------------------------------------
let str = "Hello";
let newStr = a => a.length;
console.log(newStr(str))
==================================================================

15. Calculate Simple Interest: Write a lambda function to calculate simple interest (P, R, T).
-----------------------------------------------------------------
let simpleInterest = (P,R,T) => (P * R * T) / 100;
console.log(simpleInterest(1000, 5, 2));
==================================================================

16. Convert Kilometers to Miles: Write a lambda function to convert distance from kilometers to miles.
----------------------------------------------------------------
let kilometersTomiles = km => (km*0.621371).toFixed(2);
console.log(kilometersTomiles(100));
==================================================================

17. Check Uppercase or Lowercase: Write a lambda function to check if a character is uppercase or lowercase.
------------------------------------------------------------------
let LowerUpperCase = a => a === a.toLowerCase()?"lowerCase":"upperCase";
console.log(LowerUpperCase("Ram"));
==================================================================
18. Find the Last Digit of a Number: Write a lambda function to extract the last digit of a given number.
------------------------------------------------------------------
let lastDigit = num => num%10;
console.log(lastDigit(1256))
==================================================================
19. Check if Number is Positive, Negative, or Zero: Write a lambda function to check if a number is positive, negative, or zero.
------------------------------------------------------------------
let check = num =>(num>0)?"Positive":(num<0)?"Negative":"Zero";
console.log(check(-5))
==================================================================
20. Calculate Area of a Circle: Write a lambda function to calculate the area of a circle given the radius.
------------------------------------------------------------------
let AreaOfCircle = r => 3.14*r*r;
console.log(AreaOfCircle(15))
==================================================================
21. Multiply Two Numbers: Write a lambda function to multiply two numbers.
------------------------------------------------------------------
let multiply = (a,b) => a*b;
console.log(multiply(15,5))
==================================================================
22. Subtract Two Numbers: Write a lambda function to subtract two numbers.
------------------------------------------------------------------
let Subtract= (a,b) => a-b;
console.logSubtract(15,5))
==================================================================
23. Check if a Number is a Prime: Write a lambda function to check if a given number is prime.
-----------------------------------------------------------------
let isPrime = (num) => {
    if(num < 2) return false;
    for(let i=2; i*i<num;i++){
        if(num%i === 0) return false;
    }
    return true;
}
console.log(isPrime(4))
==================================================================
24. Find the Cube of a Number: Write a lambda function to find the cube of a given number.
------------------------------------------------------------------
let isPrime = (n) => (Math.cbrt(n)).toFixed(2);
console.log(isPrime(28));
==================================================================
25. Convert Celsius to Fahrenheit: Write a lambda function to convert temperature from Celsius to Fahrenheit.
------------------------------------------------------------------
let celsius = (c) => (9/5*c)+32;
console.log(celsius(28));
===================================================================
29. Find the Greater of Three Numbers: Write a lambda function to find the greatest of three numbers.
-------------------------------------------------------------------
let max = (a,b,c) => a>b&&a>c?a:b>a&&b>c?b:c;
console.log(max(521,9,71));
===================================================================
32. Calculate Compound Interest: Write a lambda function to calculate compound interest (P, R, T).
-------------------------------------------------------------------
let compundInterest = (p, r, t) => (p * (Math.pow((1 + r / 100),t)))-p;
console.log(compundInterest(10000, 5, 2))
===================================================================
34. Check if a Character is a Vowel or Consonant: Write a lambda function to check if a given character is a vowel or consonant.
-------------------------------------------------------------------
let vowelConsonent = char => (char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U") ? "Vowel" : "Consonent";

console.log(vowelConsonent("5"));
===================================================================

35. Find the ASCII Value of a Character: Write a lambda function to find the ASCII value of a given character.
-------------------------------------------------------------------
let vowelConsonent = char => char.charCodeAt(0);
console.log(vowelConsonent("T"));
====================================================================
36. Check if a Year is a Century Year: Write a lambda function to check if a year is a century year (ends with 00).
---------------------------------------------------------------------
let vowelConsonent = year => year % 100 === 0;
console.log(vowelConsonent(2010));
====================================================================
37. Check if Two Numbers are Equal: Write a lambda function to check if two numbers are equal.
--------------------------------------------------------------------
let equal = (a,b) => a === b;
console.log(equal(5, "5"));
====================================================================
39. Find the Next Even Number: Write a lambda function to return the next even number after a given number.
--------------------------------------------------------------------
let nextEven = num => (num % 2 === 0) ? num + 2 : num + 1;
console.log(nextEven(6));
====================================================================
41. Find the sum of digits of a number: Write a lambda function to calculate the sum of the digits of a given number.
--------------------------------------------------------------------
let equal = (num) => num.toString().split('').reduce((arr,ass)=> arr+Number(ass),0);
console.log(equal(555));
====================================================================
45. Swap two numbers without a third variable: Write a lambda function to swap two numbers without using a third variable.
-------------------------------------------------------------------
let swap = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
};
console.log(swap(5, 10));
=====================================================================
47. Find the greatest common divisor (GCD) of two numbers: Write a lambda function to find the GCD of two numbers.
--------------------------------------------------------------------
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

console.log(gcd(48, 18));
=====================================================================
48. Find the least common multiple (LCM) of two numbers: Write a lambda function to find the LCM of two numbers.
---------------------------------------------------------------------
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

console.log(lcm(4, 6));
console.log(lcm(15, 20));
=====================================================================
49. const isArmstrong = num => {
  let digits = num.toString().split('');
  let power = digits.length;
  let sum = digits.reduce((a, d) => a + Math.pow(d, power), 0);
  return sum === num;
};
console.log(isArmstrong(153));
console.log(isArmstrong(123));
====================================================================
50. Convert hours to minutes and seconds: Write a lambda function to convert hours into minutes and seconds
--------------------------------------------------------------------
const convertTime = hours => ({minutes: hours * 60,  seconds: hours * 3600});

console.log(convertTime(2));
console.log(convertTime(1.5));
====================================================================
51. Find the logarithm of a number: Write a lambda function to find the natural logarithm of a number.
--------------------------------------------------------------------
const naturalLog = num => Math.log(num);

console.log(naturalLog(1));
console.log(naturalLog(Math.E));
console.log(naturalLog(10));
====================================================================
52. Check if a number is a perfect cube: Write a lambda function to check if a number is a perfect cube
---------------------------------------------------------------------
const isPerfectCube = num => Number.isInteger(Math.cbrt(num));

console.log(isPerfectCube(27));
console.log(isPerfectCube(64));
console.log(isPerfectCube(20));
====================================================================
55. Find the next prime number after a given number: Write a lambda function to find the next prime number after a given number.
--------------------------------------------------------------------
const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2; i*i <=n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const nextPrime = num => {
  let candidate = num + 1;
  while (!isPrime(candidate)) {
    candidate++;
  }
  return candidate;
};

console.log(nextPrime(7));
console.log(nextPrime(14));
===================================================================
56. Check if the sum of two numbers is greater than a third number: Write a lambda function to check if the sum of two numbers is greater than a third number.
-------------------------------------------------------------------
const isSumGreater = (a, b, c) => (a + b) > c;

console.log(isSumGreater(5, 10, 12));
console.log(isSumGreater(3, 4, 10));
==================================================================
61. Write a lambda function to calculate the factorial of a number.
------------------------------------------------------------------
const factorial = n => (n < 2 ? n : n * factorial(n - 1));

console.log(factorial(5));
console.log(factorial(0));
==================================================================
62.  Write a lambda function to check if a number is a Fibonacci number.
------------------------------------------------------------------
const isPerfectSquare = x => Number.isInteger(Math.sqrt(x));

const isFibonacci = n => 
  isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);

console.log(isFibonacci(8)); 
console.log(isFibonacci(21));
console.log(isFibonacci(22));

=================================================================
67. Write a lambda function to generate a random number between two given numbers.
----------------------------------------------------------------
const randomIntBetween = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomIntBetween(5, 10));
================================================================
75. Write a lambda function to reverse a string without using the reverse() method.
----------------------------------------------------------------
const reverseString = str => str.split('').reduce((rev, char) => char + rev, '');

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
================================================================
76. Write a lambda function to check if two strings are anagrams of each other.
----------------------------------------------------------------
const areAnagrams = (str1, str2) => 
  str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
================================================================
77. Write a lambda function to return the ASCII value of a given character.
----------------------------------------------------------------
const asciiValue = char => char.charCodeAt(0);

console.log(asciiValue('A'));
console.log(asciiValue('a'));
console.log(asciiValue('0'));
==================================================================
78. Write a lambda function to convert a lowercase letter to uppercase without using .toUpperCase().
-------------------------------------------------------------------
const toUpperCaseManual = char => 
  String.fromCharCode(char.charCodeAt(0) - 32);

console.log(toUpperCaseManual('a'));
console.log(toUpperCaseManual('z')); 
====================================================================
79. Write a lambda function to convert an uppercase letter to lowercase without using .toLowerCase().
--------------------------------------------------------------------
const toLowerCaseManual = char => 
  String.fromCharCode(char.charCodeAt(0) + 32);

console.log(toLowerCaseManual('A'));
console.log(toLowerCaseManual('Z'));
=====================================================================
80. Write a lambda function to count the number of words in a given sentence.
---------------------------------------------------------------------
const wordCount = sentence => 
  sentence.trim().split(/\s+/).length;

console.log(wordCount("Hello world"));
console.log(wordCount("   This   is   JavaScript "));
======================================================================
