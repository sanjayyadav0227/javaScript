1. (HR)
You are given an employee object:
const employee = { name: "Raj", age: 30, dept: "HR" };

👉 Remove the age property and print the object.
------------------------------------------------
const employee = { name: "Raj", age: 30, dept: "HR" };
console.log(employee);
delete employee.age;
console.log(employee);

=========================================================================
2. (eCommerce)
You are given a product object:
const product = { id: 101, name: "Laptop", price: 50000 };

👉 Check if "discount" property exists in the object and print result.
--------------------------------------------
const product = { id: 101, name: "Laptop", price: 50000 };
const ans = product.hasOwnProperty("discount")
console.log(ans);
=========================================================================
3. (Doctor Management)
You are given a doctor object:
const doctor = { id: 1, name: "Dr. Mehta", specialty: "Cardiology" };

👉 Print all the keys of the object.
--------------------------------------------
const doctor = { id: 1, name: "Dr. Mehta", specialty: "Cardiology" };
const ans = Object.keys(doctor)
console.log(ans);
=========================================================================
4. (eCommerce)
You are given an item object:
const item = { id: 5, name: "Shoes" };

👉 Print category if available, otherwise print "General".
----------------------------------------------
const item = { id: 5, name: "Shoes" };

const ans = (item.category?"available":"General")
console.log(ans);
=========================================================================
5. (Hospital)
You are given medicine stock:
const medicineStock = { paracetamol: 50, aspirin: 30, insulin: 10 };

👉 Print all stock values in an array.
-------------------------------------------------
const medicineStock = { paracetamol: 50, aspirin: 30, insulin: 10 };
const ans = Object.values(medicineStock)
console.log(ans);
=========================================================================
6. (HR)
You are given an employee:
const emp = { id: 201, name: "Sneha", role: "Manager" };

👉 Print all key–value pairs as an array.
---------------------------------------------
const emp = { id: 201, name: "Sneha", role: "Manager" };
const ans = Object.entries(emp)
console.log(ans);
=========================================================================
7. (Doctor)
You are given a doctor:
const doc = { name: "Dr. Sharma", specialization: "Dermatology" };

👉 Print doctor’s experience if available, otherwise print "Unknown".
---------------------------------------------
const doc = { name: "Dr. Sharma", specialization: "Dermatology" };
console.log(doc.experience||"Unknown")
=========================================================================
8. (eCommerce)
You are given a product:
const product = { id: 10, name: "Mobile" };

👉 Freeze the product and try to add a new property price = 15000. Print the object.
---------------------------------------------
const product = { id: 10, name: "Mobile" };
Object.freeze(product);
product["price"] = 15000;
console.log(product.price)
=========================================================================
9. (Hospital)
You are given medicine quantities:
const medicines = { paracetamol: 50, aspirin: 30, insulin: 10 };

👉 Find the total quantity of medicines.
--------------------------------------
const medicines = { paracetamol: 50, aspirin: 30, insulin: 10 };
const ans = Object.values(medicines).reduce((acc,curr)=> acc+curr,0);
console.log(ans);
=========================================================================
10. (HR)
You are given two objects:
const personal = { name: "Ravi" };
const official = { role: "Engineer" };

👉 Merge both objects into one and print.
-----------------------------------------------
const personal = { name: "Ravi" };
const official = { role: "Engineer" };
const ans = Object.assign({},personal,official);
console.log(ans);
=========================================================================
11. (eCommerce)
You are given a product:
const product = { id: 101, name: "Tablet", price: 20000 };

👉 Print all keys of the object as a single comma-separated string.
-------------------------------------------
const product = { id: 101, name: "Tablet", price: 20000 };
const ans = Object.keys(product).join(",");
console.log(ans);
=========================================================================
12. (Hospital)
You are given stock:
const stock = { paracetamol: 50, aspirin: 5, insulin: 2 };

👉 Print only those stock values greater than 10.
-----------------------------------------------
const stock = { paracetamol: 50, aspirin: 5, insulin: 2 };
const ans = Object.values(stock).filter(e=>e>10);
console.log(ans);
=========================================================================
13. (Doctor)
You are given doctor consultation fees:
const fees = { drA: 500, drB: 700, drC: 300 };

👉 Calculate total consultation fee.
---------------------------------------------
const fees = { drA: 500, drB: 700, drC: 300 };

const ans = Object.values(fees).reduce((acc,curr)=>acc+curr,0);
console.log(ans);
=========================================================================
16. (HR)
You are given employee:
const emp = { id: 301, name: "Kiran", role: "HR" };

👉 Convert this object into JSON string and print.
-----------------------------------------
const emp = { id: 301, name: "Kiran", role: "HR" };

const ans = JSON.stringify(emp);
console.log(typeof ans)
=========================================================================
17. (Doctor)
You are given patient details:
const patient = { id: 1, name: "Amit", disease: "Flu" };

👉 Deep clone this object using JSON.parse(JSON.stringify()) and print clone.
--------------------------------------
const patient = { id: 1, name: "Amit", disease: "Flu" };`
const clone = JSON.parse(JSON.stringify(patient));
console.log(clone);
=========================================================================
18. (eCommerce)
You are given product prices:
const products = { laptop: 50000, phone: 20000, watch: 5000 };

👉 Create a new array where all prices are doubled.
---------------------------------------
const products = { laptop: 50000, phone: 20000, watch: 5000 };
const double = Object.values(products).map(price => price * 2);
console.log(double);
=========================================================================
19. (Hospital)
You are given medicine object:
const medicine = { name: "Paracetamol" };

👉 Define a non-writable property type = "Tablet". Try to update it to "Capsule". Print the final value.
-------------------------------------
const medicine = { name: "Paracetamol" };
Object.defineProperty(medicine,"type",{
    value:"Tablet",
    writable:false,
    enumerable: true,
    configurable: true
})
medicine.type = "Capsule";
console.log(medicine.type)
=========================================================================
20. (HR)
You are given employee salary object:
const emp = { basic: 30000, bonus: 5000 };

👉 Add a getter property totalSalary that returns sum of basic + bonus. Print emp.totalSalary.
----------------------------------
=========================================================================
21. (HR – Group Employees by Department)
const employees = [
  { id: 1, name: "Amit", dept: "IT" },
  { id: 2, name: "Neha", dept: "HR" },
  { id: 3, name: "Ravi", dept: "IT" },
];

👉 Group employees by department into an object like:
{ IT: ["Amit", "Ravi"], HR: ["Neha"] }
-------------------------------------------------
const employees = [
  { id: 1, name: "Amit", dept: "IT" },
  { id: 2, name: "Neha", dept: "HR" },
  { id: 3, name: "Ravi", dept: "IT" },
];
const ans = employees.reduce((acc,curr)=>{
    acc[curr.dept]=(acc[curr.dept]||[]).concat(curr);
    return acc;
},{})
console.log(ans);
=========================================================================
22. (eCommerce – Group Products by Category)
const products = [
  { id: 1, name: "Shirt", category: "Clothing" },
  { id: 2, name: "Jeans", category: "Clothing" },
  { id: 3, name: "Laptop", category: "Electronics" },
];

👉 Create an object grouping products by category.
-----------------------------------------------
const products = [
  { id: 1, name: "Shirt", category: "Clothing" },
  { id: 2, name: "Jeans", category: "Clothing" },
  { id: 3, name: "Laptop", category: "Electronics" },
];

const ans = products.reduce((acc,curr)=>{
    acc[curr.category]=(acc[curr.category]||[]).concat(curr)
    return acc;
},{})
console.log(ans);
=========================================================================
23. (Doctor – Count Patients by Disease)
const patients = [
  { id: 1, name: "Amit", disease: "Flu" },
  { id: 2, name: "Riya", disease: "Diabetes" },
  { id: 3, name: "Sam", disease: "Flu" },
];

👉 Output should be:
{ Flu: 2, Diabetes: 1 }
--------------------------------------------
const patients = [
  { id: 1, name: "Amit", disease: "Flu" },
  { id: 2, name: "Riya", disease: "Diabetes" },
  { id: 3, name: "Sam", disease: "Flu" },
];

const ans = patients.reduce((acc,curr)=>{
    acc[curr.disease]=(acc[curr.disease]||0)+1;
    return acc;
},{})
console.log(ans);
=========================================================================
24. (Hospital – Highest Stock Medicine)
const stock = { paracetamol: 50, aspirin: 30, insulin: 10 };

👉 Find the medicine with the highest stock.
--------------------------------------------
const stock = { paracetamol: 50, aspirin: 30, insulin: 10 };
const ans = Object.entries(stock).reduce((acc,curr)=>acc[1]>curr[1]?acc:curr)
console.log(ans);
=========================================================================
25. (HR – Convert Array to Object by ID)
const employees = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" }
];

👉 Convert into object:
{ 1: { id:1, name:"Amit" }, 2: { id:2, name:"Neha" } }
----------------------------------------------
const employees = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Neha" }
];
const ans = employees.reduce((acc,curr)=>{
    acc[curr.id]=curr;
    return acc;
},{})
console.log(ans);
=========================================================================
26. (eCommerce – Calculate Cart Total)
const cart = [
  { name: "Shirt", price: 1000, qty: 2 },
  { name: "Shoes", price: 2000, qty: 1 },
];

👉 Find total cart value.
-------------------------------------------
const cart = [
  { name: "Shirt", price: 1000, qty: 2 },
  { name: "Shoes", price: 2000, qty: 1 },
];

const ans = cart.reduce((acc,curr)=>acc+curr.qty,0)
console.log(ans);
=========================================================================
27. (Doctor – Group Doctors by Specialization)
const doctors = [
  { id: 1, name: "Dr. A", specialization: "Cardiology" },
  { id: 2, name: "Dr. B", specialization: "Neurology" },
  { id: 3, name: "Dr. C", specialization: "Cardiology" },
];

👉 Group them like:
{ Cardiology: ["Dr. A", "Dr. C"], Neurology: ["Dr. B"] }
--------------------------------------------------------
 const doctors = [
   { id: 1, name: "Dr. A", specialization: "Cardiology" },
   { id: 2, name: "Dr. B", specialization: "Neurology" },
   { id: 3, name: "Dr. C", specialization: "Cardiology" },
 ];
 const ans = doctors.reduce((acc,curr)=>{
   acc[curr.specialization]=(acc[curr.specialization]||[]).concat(curr.name);
   return acc;
 },{})
 console.log(ans)
=========================================================================
28. (Hospital – Medicine Filter by Min Stock)
const stock = [
  { name: "Paracetamol", qty: 50 },
  { name: "Insulin", qty: 5 },
  { name: "Aspirin", qty: 20 },
];

👉 Return only medicines with stock >= 20.
------------------------------------------
 const stock = [
   { name: "Paracetamol", qty: 50 },
   { name: "Insulin", qty: 5 },
   { name: "Aspirin", qty: 20 },
 ];

 const ans = stock.filter((obj)=>obj.qty>=20).map((e)=>e.name)
 console.log(ans);
=========================================================================
29. (eCommerce – Most Expensive Product)
const products = [
  { id: 1, name: "Shirt", price: 1200 },
  { id: 2, name: "Laptop", price: 50000 },
  { id: 3, name: "Shoes", price: 2500 }
];

👉 Find the product with the highest price.
----------------------------------------------
 const products = [
   { id: 1, name: "Shirt", price: 1200 },
   { id: 2, name: "Laptop", price: 50000 },
   { id: 3, name: "Shoes", price: 2500 }
 ];

 const ans = products.reduce((acc,curr)=>curr.price>acc.price?curr:acc)["name"]
 console.log(ans)
=========================================================================
30. (HR – Salary Grouping by Range)
const employees = [
  { name: "Amit", salary: 25000 },
  { name: "Neha", salary: 60000 },
  { name: "Ravi", salary: 45000 },
];

👉 Group into { low: [], mid: [], high: [] }
 (Condition: salary <30k → low, 30k–50k → mid, >50k → high).
----------------------------------------------
const employees = [
  { name: "Amit", salary: 25000 },
  { name: "Neha", salary: 60000 },
  { name: "Ravi", salary: 35000 },
];
const ans = employees.reduce((acc,curr)=>{
  const key = curr.salary<30000 ? "low" : curr.salary<=50000 ? "mid" : "high";
  acc[key].push(curr);
 return acc;
  
},{low:[],mid:[],high:[]})
console.log(ans);
=========================================================================