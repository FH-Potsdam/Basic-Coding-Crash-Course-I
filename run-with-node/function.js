
var result = add(10, 20);
console.log(result);


function add(a,b){
  return a + b;
}

// console.log(subtract(10,20));  // this will result in an error

var subtract = function(a, b){
  return a - b;
};

console.log(subtract(10,20));
console.log(subtract(20,20));
console.log(subtract(100,20));
console.log(subtract(23232,20));
console.log(subtract(0,20));
console.log(subtract(304,20));

//anonymos
console.log(
  function (a, b){
  return a+b;
}(10,20));
