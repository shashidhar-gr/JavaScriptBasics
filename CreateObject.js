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