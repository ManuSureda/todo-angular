import { AbstractControl, AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { ClientService } from "../services/client.service";

export class CustomValidators {
    static numbersOnly(): ValidatorFn {
        const regExp : RegExp = /^\d+$/;

        return (control: AbstractControl): {[key: string]: any} | null => {
            const numbersOnly = regExp.test(control.value);
            return !numbersOnly ? {'numbersOnly': {value: control.value}} : null;
          };
    }

    static clientExist(clientService : ClientService): AsyncValidatorFn {
        return (control: AbstractControl): Promise<{ [key: string]: any } | null> => {
            if (control.value == '') {
                return null;
            } 
            else {
                console.log(control.value);
                
                // clientService.getById(Number(control.value))
                // .then(response => {
                //     console.log(response);
                
                //     if (response) {
                //         return new Promise((resolve, reject) =>{
                //             resolve(null);
                //         })
                //     } else {
                //         return new Promise((resolve, reject) =>{
                //             resolve({ 'clientExist': {value: control.value} });
                //         })
                //     }
                
                // })
                // .catch(err => {
                //     console.log(err);
                //     return new Promise((resolve, reject) =>{
                //         resolve({ 'clientExist': {value: control.value} });
                //     })
                // })

                return clientService.getById(Number(control.value))
                    .then(response => {
                        return response ? null : { 'clientExist': {value: control.value } }
                    })
                    .catch(err => {
                        return { 'clientExist': {value: control.value } };
                    })

            }
          };
    }
}
