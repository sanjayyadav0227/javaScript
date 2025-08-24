1. Add Course Code Prefix
 ['Math101', 'Eng102'] → ['COURSE: Math101', 'COURSE: Eng102']

const sub = ['Math101', 'Eng102'];
const result = sub.map((e)=>`COURSE: ${e}`);
console.log(result);
=========================================================================
2. Student Names to Lowercase for Login
 ['Rahul Sharma', 'Anita Das'] → ['rahul.sharma', 'anita.das']

const name = ['Rahul Sharma', 'Anita Das'];
const result = name.map((e)=>e.toLowerCase().replace(" ","."));
console.log(result);
=========================================================================
3. Mark All Lessons as Incomplete
 ['Lesson 1', 'Lesson 2'] → [{ lesson: 'Lesson 1', completed: false }, { lesson: 'Lesson 2', completed: false }]

const less = ['Lesson 1', 'Lesson 2'];
const result = less.map((e)=>({lesson:e, completed: false}));
console.log(result);
=========================================================================

4. Attach Certificate Suffix
 ['Digital Marketing', 'Finance Basics'] → ['Digital Marketing - Certified', 'Finance Basics - Certified']

const course = ['Digital Marketing', 'Finance Basics'];
const result = course.map((e)=> `${e} - Certified`);
console.log(result);
=========================================================================

5. Convert Marks to Pass/Fail
 [65, 45, 30] → ['Pass', 'Pass', 'Fail']

const marks = [65, 45, 30];
const result = marks.map((e)=> e>36?"pass":"fail");
console.log(result);
=========================================================================
6. Apply GST of 18% to Prices
 [100, 200, 500] → [118, 236, 590]

const num = [100, 200, 500];
const result = num.map((e)=> (e * 18) / 100 +e);
console.log(result);
=========================================================================
7. Attach SKU Prefix
 ['A123', 'B456'] → ['SKU-A123', 'SKU-B456']

const num = ['A123', 'B456'];
const result = num.map((e)=> `SKU-${e}`);
console.log(result);
=========================================================================
8. Create Cart Summary with Quantity 1
 ['Mouse', 'Keyboard'] → [{ item: 'Mouse', quantity: 1 }, { item: 'Keyboard', quantity: 1 }]

const item = ['Mouse', 'Keyboard'];
const result = item.map((e)=> ({item: e, quantity: 1}));
console.log(result);
=========================================================================
9. Add Availability Status
 ['Item1', 'Item2'] → [{ name: 'Item1', available: true }, { name: 'Item2', available: true }]

const item = ['Item1', 'Item2'];
const result = item.map((e)=> ({name: e, available: true}));
console.log(result);
=========================================================================
10. Price to Text Format
 [499, 899] → ['Price: ₹499', 'Price: ₹899']

const price = [499, 899];
const result = price.map((e)=> `Price : $${e}`);
console.log(result);