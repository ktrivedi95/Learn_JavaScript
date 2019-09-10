/*********THE SPREAD SYNTAX*********/


/*********Inserting Arrays*********/
var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];

console.log(arr);

var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr);


/*********Math*********/
var arr = [2, 4, 8, 6, 0];

function max(arr) {
  return Math.max.apply(null, arr);
}

console.log(max(arr));


var arr = [2, 4, 8, 6, 0];
var max = Math.max(...arr);

console.log(max);


/*********Copy an Array*********/
var arr = ['a', 'b', 'c'];
var arr2 = arr;

console.log(arr2);


var arr = ['a', 'b', 'c'];
var arr2 = arr;

arr2.push('d');

console.log(arr);


var arr = ['a', 'b', 'c'];
var arr2 = [...arr];

console.log(arr2);


var arr = ['a', 'b', 'c'];
var arr2 = [...arr];

arr2.push('d');

console.log(arr);


/*********String to Array*********/
var str = "hello";
var chars = [...str];

console.log(chars);
