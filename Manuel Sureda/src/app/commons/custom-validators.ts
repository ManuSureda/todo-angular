import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ClientService } from "../services/client.service";

export class CustomValidators {
    static numbersOnly(): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            const regExp : RegExp = /^\d+$/;
            const numbersOnly = regExp.test(control.value);
            return !numbersOnly ? {numbersOnly: {value: control.value}} : null;
          };
    }

    // static clientExist(clientService : ClientService): AsyncValidatorFn {
    //     return (control: AbstractControl): Promise<ValidationErrors | null> => {
    //         const promise = new Promise((resolve) => {
    //             clientService.deleteById(control.value)
    //                 .then(response => {
    //                     if (response.status === 404) {
    //                         resolve()
    //                     } else {
    //                         this.errorMsg = 'Sorry, something went wrogn.';
    //                     }
    //                 })
    //                 .catch(error => {
    //                     console.log(error);
    //                     if (error.status === 404) {
    //                     this.errorMsg = 'There is no client with that ID';
    //                     } else {
    //                     this.errorMsg = 'Sorry, something went wrogn.';
    //                     }
    //                 })
    //         })
    //         const numbersOnly = regExp.test(control.value);
    //         return !numbersOnly ? {numbersOnly: {value: control.value}} : null;
    //       };
    // }
}
