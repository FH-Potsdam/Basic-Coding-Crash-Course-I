var a = 5;
var b = 20;
var c = true;
var d = {'foo':'red','bah':12};

if(d.hasOwnProperty('foobaa') === true){
  console.log('yes there is a property named foobaa');
}else{
  console.log('there is no foobaa');
}

if(a < b || c === true){
  console.log("yes a is smaller then b");
}

if(((a < b) && (c === true)) && (d.hasOwnProperty('foo') === true) ){
  console.log("yes a is smaller then b");
}

if (b > a) {

} else if(a>b) {

}else if(a === b){

}else{

}

//
// if(c === true){
//   console.log('yes c is %s', c);
// }
//
// if(c !== true){
//   console.log('yes c is %s', c);
// }else{
//   console.log('no it\'s not');
//
// }
