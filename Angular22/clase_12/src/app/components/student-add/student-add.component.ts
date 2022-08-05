import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  message!: String;

  studentForm = new FormGroup({
        //ese '' q le mando al constructor es el valor por defaul
        //que va a tener ese input, NO es un placeholder, es el valor default
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dni: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private studentService: StudentAsyncService) { }

  ngOnInit(): void {
  }

  addStudent() {
    let newStudent = new Student();

    newStudent.firstName = this.studentForm.get('firstName')?.value;
    newStudent.lastName = this.studentForm.get('lastName')?.value;
    newStudent.dni = this.studentForm.get('dni')?.value;
    newStudent.email = this.studentForm.get('email')?.value;
    newStudent.address = this.studentForm.get('address')?.value;

    this.studentService.add(newStudent)
      .then(response => {
        this.message = "Student successfully added";
      })
      .catch(error => {
        this.message = "There was an error, sorry";
      });
     
  }

}
