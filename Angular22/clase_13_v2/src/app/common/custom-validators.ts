import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { StudentAsyncService } from "../services/student-async.service";

export class CustomValidators {
    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;
        return (control: AbstractControl): {[kay: string]: any} | null => {
            const lettersOnly = regExp.test(control.value);
            return !lettersOnly ? {'lettersOnly': {value: control.value}} : null;
          };
    }

    static forbiddenDomain(forbidden: RegExp): ValidatorFn {
        return (control: AbstractControl): {[kay: string]: any} | null => {
            const dom = forbidden.test(control.value);
            return dom ? {'forbiddenDomain': {value: control.value}} : null;
          };
    }

    static emailExists(studentService: StudentAsyncService): AsyncValidatorFn {
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
           
              return studentService.getByEmailFake(control.value)
                  .then(response => {
                      return response ? { 'emailExists': { value: control.value } } : null;
                  })
                           
          };
    }
}
