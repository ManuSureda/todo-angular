import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/common/custom-validators';
import { Student } from 'src/app/models/student';
import { StudentAsyncService } from 'src/app/services/student-async.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  message = "";

  studentForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, CustomValidators.lettersOnly()]),
    lastName: new FormControl('', [Validators.required, CustomValidators.lettersOnly()]),
    dni: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, CustomValidators.forbiddenDomain(/google/)],
    [CustomValidators.emailExists(this.studentService)]),
    address: new FormControl('')
  })

  constructor(private studentService: StudentAsyncService) { }

  ngOnInit(): void {
  }

  get firstName() { return this.studentForm.get('firstName') };
  get lastName() { return this.studentForm.get('lastName') };
  get dni() { return this.studentForm.get('dni') };
  get email() { return this.studentForm.get('email') };
  get address() { return this.studentForm.get('address') };

  onSubmit(){
    let newStudent = new Student();

    newStudent.firstName = this.studentForm.get('firstName')?.value;
    newStudent.lastName = this.studentForm.get('lastName')?.value;
    newStudent.dni = this.studentForm.get('dni')?.value;
    newStudent.email = this.studentForm.get('email')?.value;
    newStudent.address = this.studentForm.get('address')?.value;

    this.studentService.add(newStudent);

    this.message = "Student added successfully";
  }

}
