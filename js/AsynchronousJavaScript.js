/*Browser has JS Engine which has Call Stack which has Global execution context, local execution context etc.
But browser has many other superpowers - Local storage space, Timer, place to enter URL, Bluetooth access, Geolocation access and so on.
Now JS needs some way to connect the callstack with all these superpowers. This is done using Web APIs.*/
console.log("start");
setTimeout(function cb() {
  console.log("timer");
}, 5000);
console.log("end");
// start end timer

/*
*First a GEC is created and put inside call stack.
*console.log("Start"); // this calls the console web api (through window) which in turn actually modifies values in console.
*setTimeout(function cb() { //this calls the setTimeout web api which gives access to timer feature. It stores the callback cb() and starts timer. console.log("Callback");}, 5000);
*console.log("End"); // calls console api and logs in console window. After this GEC pops from call stack.
*While all this is happening, the timer is constantly ticking. After it becomes 0, the callback cb() has to run.
*Now we need this cb to go into call stack. Only then will it be executed. For this we need event loop and Callback queue*/

console.log("Start");
document.getElementById("btn").addEventListener("click", function cb() {
  // cb() registered inside webapi environment and event(click) attached to it. i.e. REGISTERING CALLBACK AND ATTACHING EVENT TO IT.
  console.log("Callback");
});
console.log("End"); // calls console api and logs in console window. After this GEC get removed from call stack.
// In above code, even after console prints "Start" and "End" and pops GEC out, the eventListener stays in webapi env(with hope that user may click it some day) until explicitly removed, or the browser is closed.
// Eventloop has just one job to keep checking callback queue and if found something push it to call stack and delete from callback queue.
/*Q: Need of callback queue?

Ans: Suppose user clciks button x6 times. So 6 cb() are put inside callback queue. Event loop sees if call stack is empty/has space and whether callback queue is not empty(6 elements here). Elements of callback queue popped off, put in callstack, executed and then popped off from call stack.*/


console.log("Start"); // this calls the console web api (through window) which in turn actually modifies values in console.
setTimeout(function cbT() {
  console.log("CB Timeout");
}, 5000);
fetch("https://api.netflix.com").then(function cbF() {
    console.log("CB Netflix");
}); // take 2 seconds to bring response
// millions lines of code
console.log("End");

/*Code Explaination:
* Same steps for everything before fetch() in above code.
* fetch registers cbF into webapi environment along with existing cbT.
* cbT is waiting for 5000ms to end so that it can be put inside callback queue. cbF is waiting for data to be returned from Netflix servers gonna take 2 seconds.
* After this millions of lines of code is running, by the time millions line of code will execute, 5 seconds has finished and now the timer has expired and response from Netflix server is ready.
* Data back from cbF ready to be executed gets stored into something called a Microtask Queue.
* Also after expiration of timer, cbT is ready to execute in Callback Queue.
* Microtask Queue is exactly same as Callback Queue, but it has higher priority. Functions in Microtask Queue are executed earlier than Callback Queue.
* In console, first Start and End are printed in console. First cbF goes in callstack and "CB Netflix" is printed. cbF popped from callstack. Next cbT is removed from callback Queue, put in Call Stack, "CB Timeout" is printed, and cbT removed from callstack.
* See below Image for more understanding*/