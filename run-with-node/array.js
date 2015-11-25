var arr = []; // this is an empty array
// this is the dumb way to add things to it
arr[0] = 5;
arr[2] = -23;
// console.log('arr[1] will be empty ' + arr); //
arr[1] = 3;
// now comes the cool way to add things.
arr.push(5);
arr.push(42);
arr.push(23);
console.log(arr);  // lets see whats inside
arr.pop(); // remove the last one
console.log(arr); // take another look
 // remove the first 3
 // slice does not change the original it
 // returns a new one
console.log(arr.slice(1));

// this is a sort function
// take a look at
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function mySortFunction(a, b) {
  return a - b;
}

// lets sort some number s in that array
var numbers = [4, 2, 5, 1, 3];

numbers.sort(mySortFunction);
console.log(numbers);

// [1, 2, 3, 4, 5]
