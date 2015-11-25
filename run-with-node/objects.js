var obj = {
  'x':10,
  'y':20,
  'add' : function (a, b){
    return a + b;
  }
};

obj.subtract = function (){
  return this.x - this.y;
};

obj.obj = {};
obj.obj.obj = {};
obj.obj.obj.arr = [];

console.log(obj.add(obj.x, obj.y));
// console.log(obj.add());
console.log(obj.subtract());

console.log(obj);
