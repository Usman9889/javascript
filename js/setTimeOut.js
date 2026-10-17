
// 1. Basic syntax : setTimeout(function, delay);
console.log("Start");
setTimeout(() => {
  console.log("Hello Usman");
}, 2000);
console.log("End");

// console.log("Start") executes immediately.
// setTimeout() schedules the callback to execute after approximately 2 seconds.
// JavaScript continues executing the next line, printing "End".
// After the delay, the callback executes and prints "Hello Usman".

// Using a named function
function greets() {
  console.log("Hello!");
}
setTimeout(greets, 3000);
// This executes greet() after approximately 3 seconds.
// Important: Write greet, not greet().
// - greet passes the function to setTimeout.
// - greet() calls the function immediately and passes its return value instead.

// Passing arguments
function greet(name) {
  console.log("Hello " + name);
}
setTimeout(greet, 3000, "Mohd Usman");