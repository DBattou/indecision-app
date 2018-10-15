console.log("Load utils");

const square = function(x) {
  return x * x;
};

const add = (a, b) => a + b;
const minus = (a, b) => a - b;
export { square, minus as default };
