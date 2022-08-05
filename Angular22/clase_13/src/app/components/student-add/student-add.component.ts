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

  message: string = '';

  studentForm = new FormGroup({
    firstName: new FormControl('', [ Validators.required ]),
    lastName: new FormControl('', [ Validators.required ]),
    dni: new FormControl('', [ Validators.required, CustomValidators.numbersOnly() ]),
    email: new FormControl('', [ Validators.required ]),
    address: new FormControl('')
  });

  constructor(private studentService: StudentAsyncService) { }
  
  ngOnInit(): void {
    this.message = '';
  }

  get firstName() { return this.studentForm.get('firstName'); }
  get lastName() { return this.studentForm.get('lastName'); }
  get dni() { return this.studentForm.get('dni'); }
  get email() { return this.studentForm.get('email'); }
  get address() { return this.studentForm.get('address'); }

  onSubmit(){
    let newStudent = new Student();
    
    newStudent.firstName = this.firstName?.value;
    newStudent.lastName = this.lastName?.value;
    newStudent.dni = this.dni?.value;
    newStudent.email = this.email?.value;
    newStudent.address = this.address?.value;

    this.studentService.addStudent(newStudent)
      .then(response => {
        this.message = 'Student succesfully added';
      })
      .catch(reason => {
        this.message = reason;
      });
  }
}
