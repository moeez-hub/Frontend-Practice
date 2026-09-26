
// Task 1

// const num = [1,2,3,4,5];
// const double = num.map((n) => n*2);
// console.log(double);

// Task 2

// const marks = [12,56,35,87,43,82];
// const pass = marks.filter((n) => n >= 50);
// console.log(pass);

// Task 3

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "Moeez" }
// ];

// const f = users.find((u) => u.id===3);
// console.log(f);

// Task 4

const items = [
  { name: "Pen", price: 20 },
  { name: "Book", price: 150 },
  { name: "Bag", price: 500 }
];

const f = items.reduce((sum, item) => sum+item.price,0);
console.log(f);