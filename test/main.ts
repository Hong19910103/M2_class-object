
import {Student} from "./Student";
import {StudentManager} from "./quanlisinhvien";


let student1 = new Student('tai','A',2)
let student2 = new Student('tai2','A',4)
let student3 = new Student('tai3','A',6)
let student4 = new Student('tai4','A',8)
let student5 = new Student('tai5','A',10)

let manager = new StudentManager();
manager.addStudent(student1)
manager.addStudent(student2)
manager.addStudent(student3)
manager.addStudent(student4)
manager.addStudent(student5)

let a = manager.startistic()
console.log(a)

// let b = manager.show();
manager.show()
