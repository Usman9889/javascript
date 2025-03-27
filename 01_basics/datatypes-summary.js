//  Primitive (call by value)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// (kisi bhi value ko unique bana ne ke liye Symbol use hota hai )

// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don’t need to declare the data type of a variable explicitly.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(typeof id);
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}



const myFunction = function(){
    console.log("Hello world");
}
// myFunction()

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3