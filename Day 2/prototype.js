var student = function() {
    this.name = "Ritik",
    this.age = 26,
    this.email = "ritik@gmail.com"
}

// var stud = new student();

// console.log(stud);

student.prototype = {
    address : "Delhi NCR",
    getName:function() {
        return this.name;
    }
}

var stud2 = new student();
console.log(stud2.address);
console.log(stud2.getName());