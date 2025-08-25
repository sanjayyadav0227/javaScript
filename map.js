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
=========================================================================
11. Append Batch Year
 ['Amit', 'Neha'] → ['Amit - 2020', 'Neha - 2020']

const name = ['Amit', 'Neha'];
const result = name.map((e)=> `${e} - 2020`);
console.log(result);
=========================================================================
12. Generate Student Emails
 ['Raj Verma', 'Kavita Rai'] → ['raj.verma@univ.com', 'kavita.rai@univ.com']

const name = ['Raj Verma', 'Kavita Rai'];
const result = name.map((e)=> e.toLowerCase().replace(" ",".")+"@univ.com");
console.log(result);
=========================================================================
13. Convert Subject Names to Uppercase
 ['history', 'geography'] → ['HISTORY', 'GEOGRAPHY']

const name = ['history', 'geography'];
const result = name.map((e)=> e.toUpperCase())
console.log(result);
=========================================================================
14. Student Roll Numbers Formatting
 [101, 102] → ['Roll#101', 'Roll#102']

const roll = [101, 102];
const result = roll.map((e)=> `Roll#${e}`)
console.log(result);
=========================================================================
15. Assign All Students to Same Section
 ['S1', 'S2'] → [{ id: 'S1', section: 'A' }, { id: 'S2', section: 'A' }]

const id = ['S1', 'S2'];
const result = id.map((e)=> ({id: e, section: 'A'}))
console.log(result);
=========================================================================
16. Add Status to Leads
 ['Lead1', 'Lead2'] → [{ name: 'Lead1', status: 'new' }, { name: 'Lead2', status: 'new' }]

const id = ['Lead1', 'Lead2'];
const result = id.map((e)=> ({name: e, status: 'new'}))
console.log(result);
=========================================================================
17. Client Name Capitalization
 ['reliance', 'tcs'] → ['Reliance', 'Tcs']

const id = ['reliance', 'tcs'];
const result = id.map((e)=> e.charAt().toUpperCase()+e.slice(1))
console.log(result);
=========================================================================
18. Format Client Codes
 ['C01', 'C02'] → ['CLIENT-C01', 'CLIENT-C02']

const id = ['C01', 'C02'];
const result = id.map((e)=> `CLIENT-${e}`)
console.log(result);
=========================================================================
19. Assign Sales Representative
 ['Client A', 'Client B'] → [{ name: 'Client A', rep: 'Unassigned' }, { name: 'Client B', rep: 'Unassigned' }]

const id = ['Client A', 'Client B'];
const result = id.map((e)=> ({name:e, rep: "Unassigned"}))
console.log(result);
=========================================================================
20. Transform Invoices to PDF links
 [301, 302] → ['/invoices/301.pdf', '/invoices/302.pdf']

const id = [301, 302];
const result = id.map((e)=> `/invoices/${e}.pdf`)
console.log(result);
=========================================================================
