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
16. Filter doctors who specialize in cardiology.
const doctors = [
  { id: 1, name: "Dr. Asha", specialty: "Cardiology" },
  { id: 2, name: "Dr. Vivek", specialty: "Dermatology" },
  { id: 3, name: "Dr. Neha", specialty: "Cardiology" },
  { id: 4, name: "Dr. Ravi", specialty: "Neurology" }
];
const ans = doctors.filter((e)=>e.specialty === "Cardiology");
console.log(ans);
=========================================================================
17. Filter doctors who have a rating above 4.5.
const doctors = [
  { id: 1, name: "Dr. Sara", rating: 4.8 },
  { id: 2, name: "Dr. Rohit", rating: 4.2 },
  { id: 3, name: "Dr. Isha", rating: 4.9 },
  { id: 4, name: "Dr. Vinay", rating: 4.0 }
];
const ans = doctors.filter((e)=>e.rating > 4.5);
console.log(ans);
=========================================================================
18. Filter doctors who offer online consultation.
const doctors = [
  { id: 1, name: "Dr. Tanya", onlineConsultation: true },
  { id: 2, name: "Dr. Imran", onlineConsultation: false },
  { id: 3, name: "Dr. Farah", onlineConsultation: true },
  { id: 4, name: "Dr. Kunal", onlineConsultation: false }
];
const ans = doctors.filter((e)=>e.onlineConsultation);
console.log(ans);
=========================================================================
19. Filter doctors with more than 1000 consultations.
const doctors = [
  { id: 1, name: "Dr. Arya", consultations: 1200 },
  { id: 2, name: "Dr. Vikas", consultations: 850 },
  { id: 3, name: "Dr. Sneha", consultations: 1300 },
  { id: 4, name: "Dr. Raj", consultations: 700 }
];
const ans = doctors.filter((e)=>e.consultations > 1000);
console.log(ans);
=========================================================================
20. Filter doctors located in "Kolkata".
const doctors = [
  { id: 1, name: "Dr. Mehul", city: "Mumbai" },
  { id: 2, name: "Dr. Nandita", city: "Kolkata" },
  { id: 3, name: "Dr. Dev", city: "Kolkata" },
  { id: 4, name: "Dr. Anu", city: "Delhi" }
];
const ans = doctors.filter((e)=>e.city === 'Kolkata');
console.log(ans);
=========================================================================
21. Filter products priced below ₹500.
const products = [
  { id: 1, name: "Pen", price: 50 },
  { id: 2, name: "Notebook", price: 250 },
  { id: 3, name: "Power Bank", price: 999 },
  { id: 4, name: "USB Cable", price: 300 }
];
const ans = products.filter((e)=>e.price < 500);
console.log(ans);
=========================================================================
22. Filter items with discount greater than 20%.
const items = [
  { id: 1, name: "Shirt", discount: 25 },
  { id: 2, name: "Jeans", discount: 15 },
  { id: 3, name: "Shoes", discount: 30 },
  { id: 4, name: "Cap", discount: 10 }
];

const ans = items.filter((e)=>e.discount > 20);
console.log(ans);
=========================================================================
23. Filter products that are out of stock.
const inventory = [
  { id: 1, name: "Tablet", inStock: true },
  { id: 2, name: "Laptop", inStock: false },
  { id: 3, name: "Headphones", inStock: false },
  { id: 4, name: "Charger", inStock: true }
];
const ans = inventory.filter((e)=> !e.inStock);
console.log(ans);
=========================================================================
24. Filter products that belong to the "Electronics" category.
const catalog = [
  { id: 1, name: "TV", category: "Electronics" },
  { id: 2, name: "Sofa", category: "Furniture" },
  { id: 3, name: "Washing Machine", category: "Electronics" },
  { id: 4, name: "Table", category: "Furniture" }
];
const ans = catalog.filter((e)=> e.category === 'Electronics');
console.log(ans);
=========================================================================
25. Filter items that are eligible for free shipping.
const items = [
  { id: 1, name: "Books", freeShipping: true },
  { id: 2, name: "Stationery", freeShipping: false },
  { id: 3, name: "Smartphone", freeShipping: true },
  { id: 4, name: "Speaker", freeShipping: false }
];
const ans = items.filter((e)=> e.freeShipping);
console.log(ans);
=========================================================================
26. Filter students who have completed their course.
const students = [
  { id: 1, name: "Ankit", courseCompleted: true },
  { id: 2, name: "Divya", courseCompleted: false },
  { id: 3, name: "Rajesh", courseCompleted: true },
  { id: 4, name: "Kriti", courseCompleted: false }
];
const ans = students.filter((e)=> e.courseCompleted);
console.log(ans);
=========================================================================
27. Filter courses with duration more than 6 months.
const courses = [
  { id: 1, name: "Full Stack Dev", duration: 12 },
  { id: 2, name: "Data Entry", duration: 3 },
  { id: 3, name: "AI & ML", duration: 8 },
  { id: 4, name: "Tally", duration: 4 }
];

const ans = courses.filter((e)=> e.duration>6);
console.log(ans);
=========================================================================
28. Filter instructors who are currently active.
const instructors = [
  { id: 1, name: "Ritu", active: true },
  { id: 2, name: "Adil", active: false },
  { id: 3, name: "Neha", active: true },
  { id: 4, name: "Mohit", active: false }
];
const ans = instructors.filter((e)=> e.active);
console.log(ans);
=========================================================================
29. Filter students with attendance below 75%.
const students = [
  { id: 1, name: "Shreya", attendance: 80 },
  { id: 2, name: "Aman", attendance: 60 },
  { id: 3, name: "Bhavya", attendance: 70 },
  { id: 4, name: "Punit", attendance: 90 }
];
const ans = students.filter((e)=> e.attendance < 75);
console.log(ans);
=========================================================================
30. Filter students who opted for the "Python" course.
const students = [
  { id: 1, name: "Tanmay", course: "JavaScript" },
  { id: 2, name: "Ragini", course: "Python" },
  { id: 3, name: "Harsh", course: "Python" },
  { id: 4, name: "Mehul", course: "Java" }
];
const ans = students.filter((e)=> e.course === "Python");
console.log(ans);
=========================================================================
