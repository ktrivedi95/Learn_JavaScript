/******Template literals******/
var fName = 'Peter', sName = 'Smith', age = 43, job= 'photographer';
var a = 'Hi, I\'m ' + fName + ' ' + sName + ', I\'m ' + age + ' and work as a ' + job + '.';
var b = `Hi, I'm ${ fName } ${ sName }, I'm ${ age } and work as a ${ job }.`;
//console.log('A: ' + a);
//console.log('B: ' + b);


/******'let' Declaration******/
var a = 'car' ;
{
    let a = 5;
    //console.log(a);
}
//console.log(a);

//doesn't work like intended
for (var i = 1; i < 5; i++){
    //setTimeout(() => { console.log(i); }, 1000);
}
//works as intended
for (let i = 1; i < 5; i++){
    //setTimeout(() => { console.log(i); }, 1000);
}

{ 
    //console.log(asdf); // undefined
    //console.log(bsdf); // ReferenceError
    var asdf = 'car';
    let bsdf = 5;
}


/******const******/
{
    const c = "tree";
    //console.log(c);  // tree
    //c = 46;  // TypeError! 
}
{
    const d = [1, 2, 3, 4];
    const dave = { name: 'David Jones', age: 32};
    d.push(5); 
    dave.job = "salesman";
    //console.log(d);
    //console.log(dave);
}


/******Spread******/
let arr = [3, 4, 5];
let brr = [1, 2, ...arr, 6];
//console.log(brr);  // [1, 2, 3, 4, 5, 6]

function foo(x, y, z) { console.log(`a=${x}, b=${y}, c=${z}`); } 
let data = [5, 15, 2];
//foo( ...data); // a=5, b=15, c=2

let car = { type: 'vehicle ', wheels: 4};
let fordGt = { make: 'Ford', ...car, model: 'GT'};
//console.log(fordGt); // {make: 'Ford', model: 'GT', type: 'vehicle', wheels: 4}

let abc = [1, 2, 3];
let bcd = [ ...abc ];
let cde = abc;
bcd.push(4);
//console.log(abc);  // [1, 2, 3]
//console.log(bcd);  // [1, 2, 3, 4] referencing different arrays
cde.push(5);
//console.log(abc);  // [1, 2, 3, 5] 
//console.log(cde);  // [1, 2, 3, 5] referencing the same array

function foo1(...args) {
    console.log(args); 
} 
//foo1( 'car', 54, 'tree');  //  [ 'car', 54, 'tree' ] 


/******Default Parameters******/
function foo2( a = 5, b = 10) {
    console.log( a + b);
} 
/*foo2();  // 15
foo2( 7, 12 );  // 19
foo2( undefined, 8 ); // 13
foo2( 8 ); // 18
foo2( null ); // 10 as null is coerced to 0*/

function foo12( a ) { return a * 4; }
function bar12( x = 2, y = x + 4, z = foo12(x)) {
    console.log([ x, y, z ]);
}
//bar12();  // [ 2, 6, 8 ]
//bar12( 1, 2, 3 ); //[ 1, 2, 3 ] 
//bar12( 10, undefined, 3 );  // [ 10, 14, 3 ]


/******Destructuring******/
let [ f, g, h ] = [ 6, 2, 9 ];
//console.log(`a=${f}, b=${g}, c=${h}`); //a=6, b=2, c=9
function foo23() { return ['car', 'dog', 6 ]; } 
let [ q, w, e ] = foo23();
//console.log(`x=${q}, y=${w}, z=${e}`);  // x=car, y=dog, z=6

function bar23() { return {r: 1, t: 2, y: 3}; }
let { r, y } = bar23();
//console.log(r); // 1
//console.log(y); // 3
//console.log(t); // undefined

function baz() { 
    return {
        x: 'car',
        y: 'London',
        z: { name: 'John', age: 21}
    }; 
}
let { x: vehicle, y: city, z: { name: driver } } = baz();
//console.log(
//    `I'm going to ${city} with ${driver} in their ${vehicle}.`
//); // I'm going to London with John in their car. 

let { x: first, x: second } = { x: 4 };
//console.log( first, second ); // 4, 4


/******Object Literals and Concise Parameters******/
let j = 4, k = 7;
let l = { j: j, k: k };
let concise = { j, k };
//console.log(l, concise) // {j: 4, j: 7}, {j: 4, k: 7}

/*function foo123() {
    return {
        name: 'Anna', 
        age: 56,
        job: { company: 'Tesco', title: 'Manager' }
    };
} // pre ES6
let asdfg = foo123(), name = asdfg.name, age = asdfg.age, company = asdfg.job.company;// ES6 destructuring and concise parameters 
let { name, age, job: {company}} = foo123();*/

let person = {
    name: 'Anna', 
    age: 56,
    job: { company: 'Tesco', title: 'Manager' }
};// method 1
function old1( person) {
    var yearOfBirth = 2018 - person.age;
    console.log( `${ person.name } works at ${ person.job.company } and was born in ${ yearOfBirth }.`);
}// method 2
function old1( person) {
    var age = person.age,
        yearOfBirth = 2018 - age, 
        name = person.name,
        company = person.job.company;
    console.log( `${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
} // method 3
function es6({ age, name, job: {company}}) {
    var yearOfBirth = 2018 - age;
    console.log( `${ name } works at ${ company } and was born in ${ yearOfBirth }.`);
}
