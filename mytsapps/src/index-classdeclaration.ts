//class declaration

class Employee {

    //instance variable
    firstName: string = 'Subramanian';
    lastName: string = 'Murgan';
    salary: number = 100
    status: boolean = true

    //constructors
    constructor() {

    }
    //instance methods
    findAll(): string {
        return 'findAll'
    }
}
let emp = new Employee();
console.log(emp)