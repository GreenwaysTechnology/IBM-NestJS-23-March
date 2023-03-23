

//depedency injection : object has other object 

class Address {
    street: string
    city: string
    constructor(street: string = '', city: string = '') {
        this.street = street
        this.city = city
    }
}
class Employee {
    id: number;
    name: string;
    //has a : dependency Object
    address: Address
    constructor(id: number = 0, name: string = '', address: Address = new Address()) {
        this.id = id
        this.name = name
        this.address = address
    }
}
let emp = new Employee(1, 'Subramanian', new Address('3 rd street', 'Coimbatore'))
console.log(emp)

