

const n_items = 10;
let list = [];
for (let i = 0;i < n_items; ++i) list.push(Math.floor(1 + (Math.random() * 10)));

console.log("Generated")
console.log(list)
console.log("Sorted")
console.log(list.sort());
console.log("Reverse")
console.log(list.reverse());