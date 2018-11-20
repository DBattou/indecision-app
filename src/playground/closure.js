// var adder = function(x) {
//   var add = function(y) {
//     return x + y;
//   };

//   return add;
// };

let addTwo = adder(2);
let addThree = adder(3);
let addTen = adder(10);
let addFour = adder(4);

// let addTwo = x => 2 + x;
// let addThree = x => 3 + x;
// let addTen = x => 10 + x;
// let addFour = x => 4 + x;

console.log([addTwo(20), addThree(20), addTen(20), addFour(20)]);
