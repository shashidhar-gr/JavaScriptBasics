// Simple method.
var user1 = {
    name: 'Shashidhar',
    score: 0,
    incerement: function() {
        this.score++;
    }
};

console.log(user1);
console.log(user1.incerement());
console.log(user1);

// Method 01.
var userCreateFactroy = function(name, score) {
    const user = Object.create(null);
    user.name = name;
    user.score = score;
    user.incerement = function() {
        user.score++;
    }    
    return user;
}

const user2 = userCreateFactroy('shashidhar.gr', 100);
console.log(user1);
user1.incerement();
console.log(user1);

// Method 02.
const userFunctionStore = {
    increment: function() {
        this.score++;
    },
    decrement: function() {
        this.score--;
    }
}

var userCreateFactroyNew = function(name, score) {
    const user = Object.create(userFunctionStore);
    user.name = name;
    user.score = score;
    return user;
}

const user = userCreateFactroyNew('shashidhar', 50);
console.log(user);
console.log(user.increment());
console.log(user);
console.log(user.__proto__);

// Method 03.
function userCreator(name, score) {
    this.name = name;
    this.score = score;
}

userCreator.prototype.incerement = function() {
    this.score++;
}

userCreator.prototype.decrement = function() {
    this.score--;
}

const user3 = new userCreator("shashidhara", 100);
console.log(user3);
user3.incerement();
console.log(user3)

// Method 04.

class User {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    decrement() {
        this.score--;
    }
}

const user4 = new User('Shashidhar', 11000);
console.log(user4);
user4.increment();
console.log(user4);