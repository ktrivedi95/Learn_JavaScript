/******STACKS******/
var stack = [];
stack.push(2);
stack.push(5);
var i = stack.pop();
//alert(i);


/******QUEUE******/
var queue = [];
queue.push(2);
queue.push(5);
var i = queue.shift();
//alert(i);

var queue = [];
queue.add = queue.push;
queue.remove = queue.shift;
queue.add(1);
var i = queue.remove();
//alert(i);


/******String Concat (bad method)******/
function string_concat1(str) {
    test = [' a ', ' b ', ' c ', ' d ', ' e '];
    for (piece in test) {
        str += test[piece]; // bad for performance!
    }
    return str;
}
//alert(string_concat1('Alphabets: '));


/******String Concat (Array.join)******/
function string_concat2(str) {
    var tmp = []
    var test = [' a ', ' b ', ' c ', ' d ', ' e '];
    for(piece in test) {
        tmp.push(test[piece]);
    }
    return str + tmp.join('');
}
//alert(string_concat2('Alphabets: '));


/******Binding Methods to Objects******/
function bind(obj, method) {
    return function() { return method.apply(obj, arguments); }
}
var obj = {
    msg: 'Name is',
    buildMessage: function (name) {
      return this.msg + ' ' + name;
    }
}
//alert(obj.buildMessage('John'));
f = obj.buildMessage;
//alert(f('Smith'));
g = bind(obj, obj.buildMessage);
//alert(g('Smith'));


/******Sorting with Custom Comparison Function******/
function cmp(a, b) {
    return a - b;
}
var list = [5, 10, 2, 1];
list.sort(cmp);
//alert(list);


/******Assertion******/
function AssertException(message) {
    this.message = message;
}
AssertException.prototype.toString = function () {
    return 'AssertException: ' + this.message;
}
function assert(exp, message) {
    if (!exp) {
        throw new AssertException(message);
    }
}
//var obj = null;
//assert(obj != null, 'Object is null');


/******Static Local Variables******/
function count() {
    return count.i++;
}
count.i = 0;
//console.log(count());
//console.log(count());


/*****null, undefined, and delete******/
/* UNDEFINED
alert(typeof xyz);
var xyz;
alert(typeof xyz);
*/

/* OBJECT UNDEFINED BY DELETE
var obj = {
    val: 'Some string'
}
alert(obj.val);
delete obj.val;
alert(obj.val);
*/


/******Deep Nesting of Objects******/
//var field = documnet.forms[0].elements[0];


/******$ vs $$******/
//$('nav') -> returns the element whose id is #nav.
//$$('div li.menu') -> returns an array of li elements that are 
//                  -> located inside a div and has the .menu class


/******console.log(format, obj1, ...)******/
var adf = 1;
//console.log('adf value is %d', adf);