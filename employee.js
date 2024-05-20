// Your code here
class Employee {
    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;
        this.sayName = this.sayName.bind(this);
        this.sayOccupation = this.sayOccupation.bind(this)
    }

    sayName(){
        console.log(`${this.name} says hello`)
    }

    sayOccupation(){
        console.log(`${this.name} is a ${this.occupation}`)
    }
}

module.exports = Employee
