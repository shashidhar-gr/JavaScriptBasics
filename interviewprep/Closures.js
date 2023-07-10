/**
 * A closure is the combination of a function bundeled together with the references to
 * its sorrounding state (the lexical environment). 
 * A closure gives you access to the outer function scope from an inner function.
 */
// function init() {
//     var name = "mozilla";       // Local scope
//     function displayName() {    // Creates a closure and have access to outer function
//         console.log(name);
//     }
//     displayName();
// }
// init();

// function init() {
//     var name = "mozilla";       // Local scope
//     function displayName() {    // Creates a closure and have access to outer function
//         console.log(name);
//     }
//     return displayName;         // Inner function is being returned before execution.
// }
// const res = init();
// res();

function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

// Practical Closures.
/**
 * Closures are usefull because they let you associate data (the lexical environment)
 * with a function that operates on that data. This is similar to java object binding
 * data and functions that act on that data.
 */


// Emulating private methods with closures.
/**
 * Languages such as java allows declaring methods as private by restricting access 
 * to only other class methods.
 */

const counter = (function() {
    let privateCounter = 0;
    update = function(val) {
        return privateCounter += val;
    }

    return {
        // Below are the 3 closures that share the same lexical scope.
        value: function() {
            return privateCounter;
        },
        increment: function() {
            return update(1); 
        },
        decrement: function() {
            return update(-1);
        }
    }
})();

console.log(counter.value());
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

// Closure scope chain.
/**
 * Every closure has access to all the below scopes.
 * 1. Local scope.
 * 2. Outer function scope.
 * 3. Global scope.
 */
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
