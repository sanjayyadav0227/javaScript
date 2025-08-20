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
