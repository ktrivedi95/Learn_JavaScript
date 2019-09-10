/*********Enforcing required parameters*********/
const required = () => {throw new Error('Missing parameter')};
//The below function will trow an error if either "a" or "b" is missing.
const add = (a = required(), b = required()) => a + b;
//add(1, 2); //3
//add(1); // Error: Missing parameter.


/*********The mighty "reduce"*********/
const numbers = [10, 20, 30, 40];
const doubledOver50 = numbers.reduce((finalList, num) => {
    num = num * 2; //double each number (i.e. map)

    //filter number > 50
    if (num > 50) {
        finalList.push(num);
    }
    return finalList;
}, []);
//console.log(doubledOver50); // [60, 80]

/*Using reduce to balance parentheses*/
//Returns 0 if balanced.
const isParensBalanced = (str) => {
    return str.split('').reduce((counter, char) => {
        if(counter < 0) {
            return counter;
        } else if(char === '(') {
            return ++counter;
        } else if(char === ')') {
            return --counter;
        }  else {
            return counter;
        }
    }, 0); //<-- starting value of the counter
}
/*console.log(isParensBalanced('(())')); // 0 <-- balanced
console.log(isParensBalanced('(asdfds)')); //0 <-- balanced
console.log(isParensBalanced('(()')); // 1 <-- not balanced
console.log(isParensBalanced(')(')); // -1 <-- not balanced*/

/*Counting Duplicate Array Items (Converting Array -> Object)*/
var cars = ['BMW','Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
var carsObj = cars.reduce(function (obj, name) { 
    obj[name] = obj[name] ? ++obj[name] : 1;
    return obj;
}, {});
//console.log(carsObj); // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }


/*********Object Destructuring*********/

/*Removing unwanted properties*/
let {_internal, tooBig, ...cleanObject} = {el1: '1', 
_internal:"secret", tooBig:{}, el2: '2', el3: '3'};
//console.log(cleanObject); // {el1: '1', el2: '2', el3: '3'}

/*Destructure nested objects in function params*/
var car = {
    model: 'bmw 2018',
    engine: {
        v6: true,
        turbo: true,
        vin: 12345
    }
}
const modelAndVIN = ({model, engine: {vin}}) => {
    console.log(`model: ${model} vin: ${vin}`);
}
//modelAndVIN(car); // => model: bmw 2018  vin: 12345

/*Merge Objects*/
let object1 = { a:1, b:2,c:3 }
let object2 = { b:30, c:40, d:50 }
let merged = { ...object1, ...object2 } //spread and re-add into merged
//console.log(merged); // {a:1, b:30, c:40, d:50}


/*********Sets*********/

/*De-duping Arrays Using Sets*/
let arr = [1, 1, 2, 2, 3, 3];
let deduped = [...new Set(arr)] // [1, 2, 3]
//console.log(deduped);

/*Using Array Methods*/
let mySet = new Set([1,2, 3, 4, 5]);
var filtered = [...mySet].filter((x) => x > 3) // [4, 5]
//console.log(filtered);


/*********Array Destructuring*********/

/*Swap Values*/
let param1 = 1;
let param2 = 2;//swap and assign param1 & param2 each others values
[param1, param2] = [param2, param1];
//console.log(param1) // 2
//console.log(param2) // 1

/*Receive and assign multiple values from a function*/
async function getFullPost() {
    return await Promise.all([
        fetch('/post'),
        fetch('/comments')
    ]);
}
//const [post, comments] = getFullPost();