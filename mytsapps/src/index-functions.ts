//function

function sayHello() {
    return 'Hello'
}

console.log(sayHello())

//arrow functions
const sayHai = () => {
    return "Hai"
}
console.log(sayHai())
//args and parameters
const add = (a: number, b: number): number => {
    return a + b
}
console.log(add(10, 10))
//console.log(add("10","10"))
//optional and default args

const multiply = (a: number = 0, b: number = 0): number => {
    return a * b;
}
console.log(multiply(10, 10))
console.log(multiply())

//optional args
const div = (a?: number, b?: number): number => {
    return a * b;
}
console.log(div(10, 10))
console.log(div())

//void 
const greet = (): void => {
    console.log('test')
}
greet()
///Union type : A variable can have multiple types
// let a:number | string  a=10 or a="33"
let gender: "Male" | "Female" | "Third"
gender="Third"
console.log(gender)

function getPersonDetails(id: number | string , name: string = "", gender: "Male" | "Female" | "Third") {
    console.log(id,name,gender)
}
getPersonDetails(1,"subramanian","Male")
getPersonDetails("abc","subramanian","Male")

// let a:any 
// a=1
// a=false 
