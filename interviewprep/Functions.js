/**
 * https://www.youtube.com/watch?v=tbqVqP5ilzQ 
 */

//Q1. What is a function?
function squarebasic(num) {
    return num * num;
}

//Q2. What is a function expression?
const square = function(num) {
    return num * num;
}

//Q3. What are first class functions?
/*
 A programming language is said to have first class function if its functions are treated as 
 any other varaibles. Functions can be assigned to a variable, passed as arguments to functions 
 retured from a function etc..
*/
const displaySquare = function(fn, num) {
    console.log("Square is: "+fn(num));
}

displaySquare(square, 5);

//Q4. What is IIFE?
/**
 * Immediately invoked function expression. 
 * A function that runs as soon as it is defined.
 */
const n = (function square(num) {
    return num * num;
})(5);

//Q5. What is the output of the below program?
(function(x) {
    return function(y) {
        console.log(x);
    }(2);
})(1);

//Q6. Function scope?
(function main() {
    var score1 = 10, score2 = 20, name = "Shashidhar";

    console.log("Name: "+name+", Score1: "+score1+", Score2: "+score2);

    (function sub() {
        var score1 = 20, score2 = 40;
        console.log("Name: "+name+", Score1: "+score1+", Score2: "+score2);
    })();
})();

//Q7. Function scope - O/P based question. What is the output?

//What is the difference between below loops?
for(let i = 0; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}

for(var i = 0; i <= 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
}


//Q8. Function hoisting. 
var x = 5;
greet();
hello();                            // Throws reference error.

function greet() {                  // Normal functions are hoisted.
    console.log("Hello! "+x);       // This will output undefined for x, because it tries
                                    // to access local variable x not global variable x.
    var x = 10;
}

const hello = function() {          //Function expressions are not hoisted.
    console.log("In hello function.")
}

//Q10. parameter vs argument
function hello(message) {       // Parameters
    console.log(message);
}

hello("shashidhar morning!");   // Argument

//Q11. rest vs spread 
function multiply(num1, num2) {
    return num1 * num2;
}

multiply(10, 20);

function multiply(...num) {         //Here we call parameter as "rest" operator.
    return num[0] * num[1];
}
let num = [10, 20];
const res = multiply(...num);       //Here we call argument as "spread" operator.
console.log(res);

function multiply(num1, num2, ...i , j) {   //Parameter "i" throws error as rest operator
                                            // should always be placed as last parameter.
    return num1 * num2;
}

//Q11. parameter vs argument - O/P based question.
function multiply(num1, num2, i , ...j) {
    console.log(j);
}

multiply(10, 20, 30, 1, 2, 3, 4, 5);        // Starting from 1 to 5 arguments are taken 
                                            // for j (rest) oeprator.

// Q12. Callback functions.
/**
 * A function passed as a argument to other function. The outer function then 
 * call this callback function to complete some action.
 */

function greet(message) {
    console.log(message);
}

function host(greet) {
    console.log("Say hi..");
    greet("Good bye!");
}

host(greet);

//Q13. Arrow functions.
/**
 * A function passed as a argument to other function. The outer function then 
 * call this callback function to complete some action.
 */

// Traditional Function
function square(num) {
    return num * num;
}
  
// Arrow Function
const squarearrow = (num) => num * num;

//This keyword
const obj  = {
    name: "shashidhar",
    func1: function() {
        console.log(this.name);
    },
    func2: () => console.log(this.name)         //Return undefined, since "this" keybword points
                                                // to global scope.
}

const squarenomrmal = function() {
    console.log(arguments);
}

const squarearrow1 = () => {
    console.log(arguments);
}

squarenomrmal(1, 2, 3);
squarearrow1(1, 2, 3);