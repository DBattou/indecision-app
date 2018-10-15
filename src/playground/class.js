let obj = {
  a: 5,
  b: 6,
  method: function() {
    return this.a + this.b;
  }
};
console.log(obj.method());

let variable = obj.method.bind({ a: 5, b: 55 });
console.log(variable());
