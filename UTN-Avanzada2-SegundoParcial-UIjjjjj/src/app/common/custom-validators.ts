import { AbstractControl, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { DomainService } from '../services/domain.service';

export class CustomValidators {
    static numbersOnly(): ValidatorFn {
        let regExp: RegExp = /^[0-9\s]*$/;

        return (control: AbstractControl): {[key: string]: any} | null => {                     
            const numbersOnly = regExp.test(control.value);

            return !numbersOnly ? { 'numbersOnly': {value: control.value} } : null;
        };
    }

    static domainExists(domainService: DomainService): AsyncValidatorFn {       
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
          if (control.value == '') {
            return null;
          }
          else {
            return domainService.getByName(control.value)
                .then(response => {
                    return !response ? { 'domainExists': { value: control.value } } : null;
                })
          }                  
        };
      }
}
