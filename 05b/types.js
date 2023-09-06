/**
// var let const
function f(shouldInitialize: Boolean) {
    let x: number;  // 3
    //const x = 4; // 5
    //x=20; // 4
    if (shouldInitialize) {
        //var x=10; // 1
        let x=10;  // 2

    }
    return x;
}


console.log(f(true));
console.log(f(false));
*/
var Person = /** @class */ (function () {
    function Person(firstName, // public is shorthand for
    // this.firstName = firstName
    lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    return Person;
}());
var c = new Person('matt', 'smith'); // OK
console.log(c.getFullName());
