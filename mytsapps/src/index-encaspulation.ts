//encapsulation keywords

class Employee {
    //declare public keyword: by default all variables are public 
    public id: number
    public name: string

    //public mehtods
    public getSalary(): number {
        return 100
    }
}
let emp = new Employee()
emp.id = 1
emp.name = 'subramanian'
console.log(emp.id, emp.name, emp.getSalary())

//private 
class Authentication {
    private userName: string
    private generatePassword() {
        console.log('password is being generated')
    }
}
let auth = new Authentication()
//auth.userName ='admin'
// auth.generatePassword()