//class declaration

class Employee {

    //instance variable are initalized within class
    // firstName: string = 'Subramanian';
    // lastName: string = 'Murgan';
    // salary: number = 100
    // status: boolean = true
    firstName: string
    lastName: string;
    salary: number;
    status: boolean;
    //constructors
    // constructor() {
    //     //variables are initalized inside constructors
    //     this.firstName = 'Subramanian'
    //     this.lastName = 'Murugan'
    //     this.salary = 100
    //     this.status = true
    // }
    constructor(firstName: string = 'Subramanian', lastName: string = 'Murugan', salary: number = 100, status: boolean = false) {
        //variables are initalized inside constructors
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
        this.status = status
    }
    //instance methods
    findAll(): string {
        return 'findAll'
    }
}
let emp = new Employee();
console.log(emp)