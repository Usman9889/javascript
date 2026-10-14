
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15

  let a = 10;
  let a = 100;  //this code is rejected upfront as SyntaxError. (duplicate declaration)
//   ------------------
  let a = 10;
  var a = 100; // this code also rejected upfront as SyntaxError. (can't use same name in same scope)

  let a;
a = 10;
console.log(a) // 10. Note declaration and assigning of a is in different lines.
// ------------------
const b;
b = 10;
console.log(b); // SyntaxError: Missing initializer in const declaration. (This type of declaration won't work with const. const b = 10 only will work)
// ------------------
const b = 100;
b = 1000; //this gives us TypeError: Assignment to constant variable.