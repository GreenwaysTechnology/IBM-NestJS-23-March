//decorator declaration

// function Course(target: any) {
//     //decorator logic
//     Object.defineProperty(target.prototype,"course",{value:'Nest js'})
// }
function Course(name: any) {
    return function (target:any) {
        //decorator logic
        Object.defineProperty(target.prototype, "course", { value: name })
    }
}

// class CourseType {
//     name:string 
//     course?:string
// }

@Course('Cloud')
class Student {
    constructor(public name: string = 'Subramanian') { }
}
let student = new Student() as any
console.log(`${student.name} is learning ${student.course}`)