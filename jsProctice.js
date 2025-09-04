1. Write a function to check if a number is even or odd.
--------------------------
function isEvenOdd(n){
  return n%2===0?"Even":"Odd";
}
console.log(isEvenOdd(10))
=========================================================================
2. Reverse a string without using built-in methods.
--------------------------------
function reverseStr(str){
  let reverse="";
  for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
  }
  console.log(reverse);
}
reverseStr("hello")
=========================================================================
3. Find the largest number in an array.
---------------------------
const arr = [25,98,30,78,41,163];
const ans = arr.reduce((acc,curr)=>acc>curr?acc:curr ,0);
console.log(ans);
=========================================================================
4. Write a function that counts vowels in a string.
---------------------------------
function countVowel(str){
  const vowel = "aeiou";
  let count=0;
  for(let ch of str){
    if(vowel.includes(ch)) count++;
  }
  console.log(count)
}
countVowel("krishan");
=========================================================================
5. Check if a string is a palindrome.
----------------------------------
function palindrome(str){
  let reverse="";
  for(let i=str.length-1;i>=0;i--){
    reverse+=str[i];
  }
  return reverse === str;
}
console.log(palindrome("madam"))
=========================================================================
6. Given an array of numbers, return a new array with only even numbers.
-----------------------------------------
const arr = [1,2,3,4,5,6,7];
const ans = arr.filter((n)=>n%2===0)
console.log(ans);
=========================================================================
7. Write a function to flatten a nested array.

const arr = [1, [2, 3], [4, [5, 6]]];
-----------------------------------
const arr = [1, [2, 3], [4, [5, 6]]];
const ans = arr.flat(Infinity);
console.log(ans);
=========================================================================
8. Create an object person with name, age, and a method greet() that prints "Hello, my name is ..."
---------------------------------------
const person = {
  name:"kishor",
  age:25,
  greet:function(){
    console.log("Hello, my name is "+this.name)
  }
}
person.greet();
=========================================================================
9. Merge two arrays and remove duplicates.
-----------------------------------------------
const arr1 = [1,2,3,4,5];
const arr2 = [4,5,6,7,8];
const arr3 = [...arr1,...arr2];
const ans = [...new Set(arr3)];
console.log(ans);
=========================================================================
10. Sort an array of objects by age.
---------------------------------------------
const students = [
  { id: 1, name: "Sanjay", age: 22 },
  { id: 2, name: "Aman", age: 21 },
  { id: 3, name: "Riya", age: 23 }
];
const ans = students.sort((a,b)=>a.age - b.age);
console.log(ans);
=========================================================================
