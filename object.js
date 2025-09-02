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
