
//encapsulation keywords and dependency injection
class Employee_ {
    //variable declaration
    id: number;
    name: string
    constructor(id: number = 0, name: string = "") {
        //variable initalization
        this.id = id
        this.name = name
    }
}
//reduce code using encapulation keywords

class Employee {
    //constructor args variable local variable by default
    //we can convert local variables into instance instance variable
    //we can convert local variables into instance variables by using "private or public keywords"
    // constructor(public id: number = 0, public name: string = "") {
    //     //variable initalization
    //     this.id = id
    //     this.name = name
    // }
    constructor(public id: number = 0, public name: string = "") { }
}
let emp = new Employee(1, 'Subramanian')
console.log(emp)
/////////////////////////////////////////////////////////////////////////////////////

class CustomerService {
    constructor() {

    }
    findAll(): string {
        return 'customers'
    }
}
class CustomerController_ {
    customerService: CustomerService
    constructor(customerService: CustomerService) {
        this.customerService = customerService
    }
    init() {
        console.log(this.customerService.findAll())
    }
}
class CustomerController {
    //di 
    constructor(private customerService: CustomerService) { }
    init() {
        console.log(this.customerService.findAll())
    }
}

let ctrl = new CustomerController(new CustomerService())
ctrl.init()















