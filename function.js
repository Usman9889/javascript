function greet(){
    console.log("hi there")
    console.log("how are you")
}

greet()

function sqr(x){ // x --> parameter
    return x*x;

}

let a = sqr(8); // 8 --> argument
console.log(a)

//function without any parameter and return
function sayMessage(){
    console.log("hey! how are you")
}

sayMessage();
sayMessage();
sayMessage();
sayMessage();

// functions without any parameter
function passMessage(){

    return " I am happy to learn full stack web development."
}

let message = passMessage();
console.log(message)

let newmessage = message + "hello";
console.log(newmessage)

//function with one parameter
function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed)
}

 displayMessage("hello");

 displayMessage("hihi");

 //function with default parameter
 function dismessage(message="pw skills"){
    console.log(message);
 }

 dismessage();
 dismessage("hello ")

// functions with 2 parameters
 function add(x=5,y=6){
    return x+y;
 }

 console.log(add(1,5))

 //
function sumOfTwoNumbers(num1, num2){

    return num1+num2;
}
 let result = sumOfTwoNumbers(10,20);
 console.log(result)

//array as an argument

function sum([num1,num2]){
    return num1+num2;
}

let numbers = [12, 51];

let results = sum(numbers);

console.log(results)

//function with unlimited number of arguments

function sumOfAllParameters(){

    let sum = 0;
    for( var i = 0; i < arguments.length; i++) sum += arguments[i];
    return sum ;
}

let resultss = sumOfAllParameters(1,2,3,4,5);
console.log(resultss)