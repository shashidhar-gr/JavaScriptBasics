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