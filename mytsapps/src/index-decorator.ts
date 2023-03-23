
//decorator declaration

function Course(target: any) {
    //decorator logic
    Object.defineProperty(target.prototype,"course",{value:'Nest js'})
}

@Course
class Student {
    constructor(public name: string = 'Subramanian') { }
}
let student = new Student() as any
console.log(`${student.name} is learning ${student.course}`)