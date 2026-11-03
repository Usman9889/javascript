
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

// Trust issues with setTimeout()

/*setTimeout with timer of 5 secs sometimes does not exactly guarantees that the callback function will execute exactly after 5s.

Let's observe the below code and it's explaination*/

console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");
// Millions of lines of code to execute

// o/p: Over here setTimeout exactly doesn't guarantee that the callback function will be called exactly after 5s. Maybe 6,7 or even 10! It all depends on callstack. Why?
/*Reason?

First GEC is created and pushed in callstack.
Start is printed in console
When setTimeout is seen, callback function is registered into webapi's env. And timer is attached to it and started. callback waits for its turn to be execeuted once timer expires. But JS waits for none. Goes to next line.
End is printed in console.
After "End", we have 1 million lines of code that takes 10 sec(say) to finish execution. So GEC won't pop out of stack. It runs all the code for 10 sec.
But in the background, the timer runs for 5s. While callstack runs the 1M line of code, this timer has already expired and callback fun has been pushed to Callback queue and waiting to pushed to callstack to get executed.
Event loop keeps checking if callstack is empty or not. But here GEC is still in stack so cb can't be popped from callback Queue and pushed to CallStack. Though setTimeout is only for 5s, it waits for 10s until callstack is empty before it can execute (When GEC popped after 10sec, callstack() is pushed into call stack and immediately executed (Whatever is pushed to callstack is executed instantly).
This is called as the Concurrency model of JS. This is the logic behind setTimeout's trust issues.
The First rule of JavaScript: Do not block the main thread (as JS is a single threaded(only 1 callstack) language).*/

/*setTimeout guarantees that it will take at least the given timer to execute the code.

JS is a synchronous single threaded language. With just 1 thread it runs all pieces of code. It becomes kind of an interpreter language, and runs code very fast inside browser (no need to wait for code to be compiled) (JIT - Just in time compilation). And there are still ways to do async operations as well.

What if timeout = 0sec?*/

console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 0);
console.log("End");
// Even though timer = 0s, the cb() has to go through the queue. Registers calback in webapi's env , moves to callback queue, and execute once callstack is empty.
// O/p - Start End Callback
// This method of putting timer = 0, can be used to defer a less imp function by a little so the more important function(here printing "End") can take place


