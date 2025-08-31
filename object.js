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
