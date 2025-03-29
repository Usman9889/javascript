let arr = [1,2,3,4,5];
console.log(arr)

// to add elements at the ending index
arr.push(6);
console.log(arr)

//to remove the last element
arr.pop();
console.log(arr)

//to remove element from 0 index
arr.shift(arr);
console.log(arr)

//to add element at 0 index
arr.unshift(9)
console.log(arr)

//to join arrays
let a1 = [1,2,3,4,5]
let a2 = [6,7,8,9]

let a3 = a1.concat(a2);
console.log(a1,a2,a3)

// club the array into sting
let s = a3.join(" ");
console.log(s)

// to reverse an array
a3.reverse();
console.log(a3)

//to find a particular element
console.log(a3.indexOf(4))

//to fetch continuos elements
let arr1 = [1,2,3,4,5,6];
console.log(arr1.slice(2,5));

//to add an element at any particular position

// arr1.splice(2,0,11)
// console.log(arr1)

arr1.splice(2,2,11)
console.log(arr1)