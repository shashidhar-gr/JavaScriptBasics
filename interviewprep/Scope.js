/**
 * https://www.youtube.com/watch?v=oUWRxJ19gfE&list=PLKhlp2qtUcSaCVJEt4ogEFs6I41pNnMU5
 */
//What are scopes in javascript? difference between let/const/var?
/**
 * The scope is the current context of execution in which values
 * and expressions are visible or can be referenced. If a variable is not
 * in the current scope, it will not be available for use.
 * Global scope: The default scope for all code running in script mode.
 * Module scope: The scope for code running in module mode.
 * Function scope: The scope created with a function.
 * Block scope: The scope created within a pair of curly braces.
 * 
 * When you declare a variable outside of any functions it is called a global variable. It is 
 * available to any other code in the current document.
 * Variable declared inside a function is called local variable and is available only within 
 * that function.
 */

if(true) {
    var x = 10;     //X can be accessed by outside.
}

if(true) {
    let y = 10;     //Y throws reference error, since it is available only in block.
}

//console.log(x, y);   

var name = "shashidhar";
function hello() {
    console.log("Hello "+name);
    function greet() {
        console.log("Hello "+name);
    }
    greet();
}
hello();

//let name = "Shashidhar";        // This will throw error since there is already a variable with the 
                                // same name in global scope.
function hello1() {

    console.log("Hello "+name);
    function greet1() {
        console.log("Hello "+name);
    }
    greet1();
}

hello1();
