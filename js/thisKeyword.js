In JavaScript, the this keyword refers to an object, which object depends on how this is being invoked (used or called).

this in global space
Anything defined globally is said to be in a global space.

console.log(this); // refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment,
this inside a function
function x() {
  // the below value depends on strict/non-strict mode
  console.log(this);
  // in strict mode - undefined
  // in non-strict mode - refers to global window object
}
x();
// 💡 Notes:

// On the first go feels like `this` keyword in global space and inside function behaves same but in reality it's different.

// The moment you make JS run in strict mode by using: "use strict" at the top, `this` keyword inside function returns `undefined` whereas global space will still refers to global window object
this substitution -> According to this substitution, if the value of this keyword is null/undefined, it will be replaced by globalObject only in non-strict mode. This is the reason why this refers to global window object inside function in non-strict mode.

💡 So to summarize, the value of this keyword inside function is undefined, but because of this substitution in non-strict mode this keyword refers to globalWindowObject and in strict mode it will still be undefined

this keyword value depends on how the function is called. For eg:
In strict mode:

x(); // undefined
window.x(); // global window object
this inside a object's method
// `x` key below is a method as per terminology
const obj = {
  a: 10,
  x: function () {
    console.log(this); // {a: 10, x: f()}
    console.log(this.a); // 10
  },
};
obj.x(); // value of `this` is referring to current object i.e. `obj`