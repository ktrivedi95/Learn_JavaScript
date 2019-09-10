/*********JAVASCRIPT WRITE LESS, DO MORE*********/

/*********const and let*********/

//ES5
//var MyBtn = document.getElemendById('mybtn');
//ES6
//const MyBtn = document.getElemendById('mybtn');

let name = 'Said';
name = 'Rick';
//console.log(name);


/*********Arrow functions*********/

//ES5
function myFunc(name) {
    return 'Hello' + name;
}
//console.log(myFunc('Said'));

//ES6
const myFunc1 = name => {
    return `Hi ${name}`;
}
//console.log(myFunc1('Said'));

const myFunc2 = name => `Hi ${name}`;
//console.log(myFunc2('Said'));

/*Arrow function with map, filter, and reduce built-in functions*/

//ES5
const myArray = ['Tony', 'Sara', 'Said', 5];
let Arr1 = myArray.map(function(item) {
    return item;
});
//console.log(Arr1);

//ES6
let Arr2 = myArray.map(item => item);
//console.log(Arr2);


/*********Template Literals*********/

/*Don't need to use (+) operator for string concatenations*/

//ES5
function myFunc3(name, age) {
    return 'Hi ' + name + ' Your age is ' + age + ' year old!';
}
//console.log(myFunc3('Said', 22));

//ES6
const myFunc4 = (name, age) => {
    return `Hi ${name}, Your age is ${age} year old!`;
}
//console.log(myFunc4('Said', 22));


/*********Default parameters*********/

const myFunc5 = (name, age=22) => {
    return `Hello ${name} your age is ${age} year old?`
}
//console.log(myFunc5('Said'));


/*********Array and Object Destructuring*********/

//ES5
const contacts = {
    name: 'said',
    familyName: 'Hayani',
    age: 22
};

let name1 = contacts.name;
let FamilyName = contacts.familyName;
let myAge = contacts.age;
//console.log(name1);
//console.log(FamilyName);
//console.log(myAge);

//ES6
const contacts1 = {
    name2: 'Said',
    familyName2: 'Hayani',
    age2: 22
};
let {name2, familyName2, age2} = contacts1;
//console.log(name2);
//console.log(familyName2);
//console.log(age2);

//Arrays syntax is similar to Objects
const Arr = ['Lionel', 'John', 'Layla', 20];
let [value1, value2, value3] = Arr;
//console.log(value1);
//console.log(value2);
//console.log(value3);


/*********Import and Export*********/

/*
//ES6
export default function detail(name, age) {
    return `Hello ${name}, your age is ${age} year old!`;
}

import detail from './detailComponent'
console.log(detail('Said', 20));

import {detail, userProfile, getPosts} from './detailComponent'
console.log(detail('Said', 20));
console.log(userProfile);
console.log(getPosts);
*/


/*********Promises*********/
const myPromise = () => {
    return new Promise((resolve, reject) => {
        resolve('Hi the Promise executed successfully');
    })
};
//console.log(myPromise());


/*********Rest parameter and Spread operator*********/
const arr = ['Said', 20, 'JavaScript enthusiast', 'Hi', 'Said', 'How are you?'];
const [val1, val2, val3, ...rest] = arr;
const Func = (restOfArr) => {
    return restOfArr.filter(item => {return item}).join(" ");
};
//console.log(Func(rest));

const Func2 = (...anArray) => {
    return anArray;
}
//console.log(Func2(arr));


/*********Classes*********/
class myClass {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
}
const Home = new myClass("Said",20);
//console.log(Home.name)//  Said


/*Inherit from another class using extends*/
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hi ${this.name} your age is ${this.age}`);
    }
}

//inherit myClass methods and properties
class UserProfile extends MyClass {
    username() {
        console.log(this.name);
    }
}
const profile = new UserProfile('Said', 22);
//profile.sayHello();
//profile.username();
