/******Dynamic Property Names******/
let  city= 'sheffield_';
let a = {
    [ city + 'population' ]: 350000
};
a[ city + 'county' ] = 'South Yorkshire';
//console.log(a); // {sheffield_population: 350000, sheffield_county: 'South Yorkshire' }


/******Arrow Functions******/
var foo = function( a, b ) {
    return a * b;
}
let bar = ( a, b ) => a * b;
//console.log(bar(2, 3));

let baz = ( c, d ) => {
    let length = c.length + d.toString().length;
    let e = c.join(', ');
    return `${e} and there is a total length of  ${length}`;
}
//console.log(baz(['a', 'b', 'c'], 'xyz'));

let arr = [ 5, 6, 7, 8, 'a' ];
let b = arr.map( item => item + 3 );
//console.log(b); // [ 8, 9, 10, 11, 'a3' ]

/*
var clickController = {
    doSomething: function (..) {
        var self = this;
        btn.addEventListener(
            'click', 
            function() { self.doSomething(..) }, 
            false
       );
   } 
};

let a = {
    oneThing: ( a ) => {
         let b = a * 2;
         this.otherThing(b);
    }, 
    otherThing: ( b ) => {....} 
};a.oneThing(6);
*/


/******for ... of Loops******/
let d = ['a', 'b', 'c', 'd' ];
// ES6 
for ( var val of d ) {
    //console.log( val );
} // "a" "b" "c" "d"
// pre-ES6 
for ( var idx in d ) {
    //console.log( idx );
}  // 0 1 2 3


/******Number Literals******/
console.log(Number( 29 ));  // 29
console.log(Number( 035 )); // 35 in old octal form. 
console.log(Number( 0o35 )); // 29 in new octal form 
console.log(Number( 0x1d )); // 29 in hexadecimal 
console.log(Number( 0b11101 )); // 29 in binary form
