
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

//  Cancelling a timeout with clearTimeout()
const timer = setTimeout(() => {
  console.log("Hello");
}, 3000);

clearTimeout(timer);

// Q: Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste Javascript");
}
x();
// Output:
// Namaste Javascript
// 6
// 6
// 6
// 6
// 6

/*Reason?

This happens because of closures. When setTimeout stores the function somewhere and attaches timer to it, the function remembers its reference to i, not value of i. All 5 copies of function point to same reference of i. JS stores these 5 functions, prints string and then comes back to the functions. By then the timer has run fully. And due to looping, the i value became 6. And when the callback fun runs the variable i = 6. So same 6 is printed in each log

To avoid this, we can use let instead of var as let has Block scope. For each iteration, the i is a new variable altogether(new copy of i). Everytime setTimeout is run, the inside function forms closure with new variable i */


// But what if interviewer ask us to implement using var?

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
      // put the setT function inside new function close()
    }
    close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
  }
  console.log("Namaste Javascript");
}
x();