/*********WHEN AND WHY TO USE ARROW FUNCTIONS*********/

//Regular Function
function timesTwo(params) {
    return params * 2;
}
timesTwo(4);  // 8

//Same function as Arrow Function
var timesTwo = params => params * 2
timesTwo(4);  // 8


/*********Variations*********/

/*No parameters*/
() => 42;
_ => 42;

/*Single parameter*/
x => 42;
(x) => 42;

/*Multiple parameters*/
(x, y) => 42;

/*Statements (as opposed to expressions)*/
var feedTheCat = (cat) => {
    if (cat === 'hungry') {
        return 'Feed the cat';
    } else {
        return 'Do not feed the cat';
    }
}

/*"Block body"*/
var addValues = (x, y) => {
    return x + y;
}

/*Object literals*/
x =>({ y: x });


/*********When you should not use Arrow Functions*********/

/*1. Object Methods*/
var cat = {
    lives: 9,
    jumps: () => {
        this.lives--;
    }
};

/*2. Callback functions with dynamic context*/
var button = document.getElementById('press');
button.addEventListener('click', () => {
    this.classList.toggle('on');
});

/*3. When it makes your code less readable*/
//It is worth taking into consideration the variety of syntax we covered earlier.
//With regular functions, people know what to expect.
//With arrow functions, it may be hard to decipher what you are looking at straightaway.


/*********When you should use Arrow Functions*********/
/*
Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.

Despite the fact that they are anonymous, I also like using them with methods such as map and reduce,
because I think it makes my code more readable. To me, the pros outweigh the cons.
*/
