import {Student} from "./student";

export class StudentManager {
  listStudent: Student[] = [];

  constructor() {
  }

  show(){
    console.log(this.listStudent)
  }

  addStudent(student:Student){
    this.listStudent.push(student);
  }

  update(index1:number,student:Student){
    this.listStudent.forEach((value,index)=> {
      if(index==index1){
        this.listStudent[index1]=student;
      }

    })
  }

  delete(index1) {
    this.listStudent.forEach((value,index)=> {
      if(index==index1){
        this.listStudent.splice(index1,1)
        return console.log("xoa thanh cong")
      }

    })
  }

  startistic():object{
    let countPoint1:number = 0;
    let countPoint2:number = 0;
    let countPoint3:number = 0;
    this.listStudent.forEach((student)=>{
      if(student.point <6){
        countPoint1++
      }

      if(student.point>=6&& student.point<8){
        countPoint2++
      }

      if(student.point>=8){
        countPoint3++
      }
    })
    return {
      studentScoreless6: countPoint1 +" people",
      studentScoreless8: countPoint2 +" people",
      studentScoreless9: countPoint3 +" people"
    }
  }
}