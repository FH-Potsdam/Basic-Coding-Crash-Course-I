
function change(a,b){
  return a + b;
}
var arr = [1,3,6,9,12,23];
var obj = {'foo':'red','bah':12};
var bool = true;

// range
// for(var i = arr.length - 1; i >=0;i--){
// for(var i = 0; i < arr.length;i++){
//   console.log('We are in iteration %s', i + 1);
//   console.log('This is before addition ' +arr[i]);
//   arr[i] = change(arr[i], 5);
//   console.log('This is after addition '+ arr[i]);
// }
// object

  // for(var key in obj){
  //   console.log('This is the key named: ' + key);
  //   console.log('This is the content of obj[key] ' + obj[key]);
  // }
// conditional
var counter = 0;
while(bool){
counter++;

if(counter === 5){
  continue;
}
console.log('unlimited loop at count ' + counter);

if(counter === 10){
  bool = false;
  // break; or use this
}

}
