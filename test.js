// Your code here

const Employee = require('./employee')

const wick = new Employee("John Wick", "Dog Lover");

setTimeout(wick.sayName, 2000) //It prints "John Wick says hello"
setTimeout(wick.sayOccupation, 3000)//It prints "John Wick is a Dog Lover"
