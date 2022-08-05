import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { ClientService } from "../services/client.service";

export class CustomValidator {
    static numbersOnly(): ValidatorFn {
        return (control: AbstractControl): {[value: string]: any} | null => {
            const regExp : RegExp = /^\d+$/;
            const numbersOnly = regExp.test(control.value);
            return !numbersOnly ? {numbersOnly: {value: control.value}} : null;
          };
    }

    static clientExist(clientService : ClientService): AsyncValidatorFn {
        return (control: AbstractControl): Promise<any> => {
            const response = new Promise((resolve, rejects) => {
                clientService.getById(control.value)
                    .then(response => {
                        if (response['length'] === 0) {
                            resolve({clientDontExist: {value: control.value}});
                        } else {
                            resolve(null);
                        }
                    });
            })
            return response;
          }
    }

    static clientExist2(clientService : ClientService): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> => {
            const ans = new Promise((resolve)=> {
                clientService.getById(control.value)
                    .then(response => {
                        if (response['length'] === 0) {
                            resolve( { clientDontExist2: { value: control.value } } )
                        } else {
                            resolve(null);
                        }
                    })
            })
            return ans;
          };
    }
}
