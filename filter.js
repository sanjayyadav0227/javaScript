1. Filter all patients who are admitted currently.
const patients = [
  { id: 1, name: "Rohan", admitted: true },
  { id: 2, name: "Anjali", admitted: false },
  { id: 3, name: "Vikram", admitted: true },
  { id: 4, name: "Sita", admitted: false }
];
const ans = patients.filter((e)=>e.admitted);
console.log(ans);
=========================================================================
2. Filter doctors who are available today.
const doctors = [
  { id: 1, name: "Dr. Meena", availableToday: true },
  { id: 2, name: "Dr. Ali", availableToday: false },
  { id: 3, name: "Dr. Tara", availableToday: true },
  { id: 4, name: "Dr. Ronit", availableToday: false }
];

const ans = doctors.filter((e)=>e.availableToday);
console.log(ans);
=========================================================================
3. Filter patients whose age is more than 60.
const patients = [
  { id: 1, name: "Dinesh", age: 65 },
  { id: 2, name: "Sunita", age: 45 },
  { id: 3, name: "Mahesh", age: 72 },
  { id: 4, name: "Komal", age: 58 }
];
const ans = patients.filter((e)=>e.age>60);
console.log(ans);
=========================================================================
4. Filter hospital staff who are nurses.
const staff = [
  { id: 1, name: "Pooja", role: "Nurse" },
  { id: 2, name: "Raj", role: "Doctor" },
  { id: 3, name: "Lata", role: "Nurse" },
  { id: 4, name: "Amit", role: "Receptionist" }
];
const ans = staff.filter((e)=>e.role == "Nurse");
console.log(ans);
=========================================================================
5. Filter ICU patients.
const patients = [
  { id: 1, name: "Karan", ward: "ICU" },
  { id: 2, name: "Seema", ward: "General" },
  { id: 3, name: "Nitin", ward: "ICU" },
  { id: 4, name: "Suman", ward: "Private" }
];
const ans = patients.filter((e)=>e.ward == "ICU");
console.log(ans);


=========================================================================6. Filter doctors who have more than 5 years of experience.
const doctors = [
  { id: 1, name: "Dr. Renu", experience: 10 },
  { id: 2, name: "Dr. Sameer", experience: 3 },
  { id: 3, name: "Dr. Alok", experience: 8 },
  { id: 4, name: "Dr. Namrata", experience: 2 }
];
const ans = doctors.filter((e)=>e.experience>5);
console.log(ans);
=========================================================================
7. Filter patients with pending bills.
const patients = [
  { id: 1, name: "Aarti", pendingBill: true },
  { id: 2, name: "Rakesh", pendingBill: false },
  { id: 3, name: "Deepak", pendingBill: true },
  { id: 4, name: "Kavita", pendingBill: false }
];
const ans = patients.filter((e)=>e.pendingBill);
console.log(ans);
=========================================================================
8. Filter hospital equipment that needs maintenance.
const equipment = [
  { id: 1, name: "ECG Machine", needsMaintenance: true },
  { id: 2, name: "Ventilator", needsMaintenance: false },
  { id: 3, name: "Suction Pump", needsMaintenance: true },
  { id: 4, name: "Ultrasound", needsMaintenance: false }
];
const ans = equipment.filter((e)=>e.needsMaintenance);
console.log(ans);
=========================================================================
9. Filter ambulance drivers who are on duty.
const drivers = [
  { id: 1, name: "Suraj", onDuty: true },
  { id: 2, name: "Harish", onDuty: false },
  { id: 3, name: "Neeraj", onDuty: true },
  { id: 4, name: "Aakash", onDuty: false }
];
const ans = drivers.filter((e)=>e.onDuty);
console.log(ans);
=========================================================================
10. Filter medicines that are out of stock.
const medicines = [
  { id: 1, name: "Paracetamol", inStock: false },
  { id: 2, name: "Amoxicillin", inStock: true },
  { id: 3, name: "Ibuprofen", inStock: false },
  { id: 4, name: "Metformin", inStock: true }
];
const ans = medicines.filter((e)=>!e.inStock);
console.log(ans);
=========================================================================
11. Filter employees who are currently on leave.
const employees = [
  { id: 1, name: "Ravi", onLeave: false },
  { id: 2, name: "Priya", onLeave: true },
  { id: 3, name: "Arjun", onLeave: true },
  { id: 4, name: "Neha", onLeave: false }
];
const ans = employees.filter((e)=>e.onLeave);
console.log(ans);
=========================================================================
12. Filter employees with pending performance reviews.
const employees = [
  { id: 1, name: "Rahul", reviewPending: true },
  { id: 2, name: "Sneha", reviewPending: false },
  { id: 3, name: "Imran", reviewPending: true },
  { id: 4, name: "Ritu", reviewPending: false }
];
const ans = employees.filter((e)=>e.reviewPending);
console.log(ans);
=========================================================================
13. Filter employees who joined in the current financial year.
const employees = [
  { id: 1, name: "Meera", joiningYear: 2023 },
  { id: 2, name: "Aakash", joiningYear: 2022 },
  { id: 3, name: "Suman", joiningYear: 2023 },
  { id: 4, name: "Nikhil", joiningYear: 2021 }
];
******************************************
=========================================================================
14. Filter employees with designation as "Software Engineer".
const employees = [
  { id: 1, name: "Tanvi", designation: "Software Engineer" },
  { id: 2, name: "Rakesh", designation: "HR Manager" },
  { id: 3, name: "Leena", designation: "Software Engineer" },
  { id: 4, name: "Abhishek", designation: "QA Analyst" }
];
const ans = employees.filter((e)=>e.designation === 'Software Engineer');
console.log(ans);
=========================================================================
15. Filter employees whose salary is above ₹80,000.
const employees = [
  { id: 1, name: "Aditya", salary: 75000 },
  { id: 2, name: "Kiran", salary: 90000 },
  { id: 3, name: "Divya", salary: 82000 },
  { id: 4, name: "Manav", salary: 70000 }
];
const ans = employees.filter((e)=>e.salary > 80000);
console.log(ans);
=========================================================================
