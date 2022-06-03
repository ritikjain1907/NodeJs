class Users {
    constructor() {
        this.name = "Ritik";
        this.age = 26;
    }
    
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

var user = new Users();
console.log(user.getName())
console.log(user.getAge())