import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static lettersOnly(): ValidatorFn {
        let regExp: RegExp = /^[a-zA-Z\s]*$/;
        // ese control seria el formControl al que se lo aplique, no se como pero es asi
        return (control: AbstractControl): {[key: string]: any} | null => {             
            console.log(control.value);
            // eso va a ir imprimiendo en la consola cada letra que metas en el input
            // j
            // jo
            // joh
            // por cada letra se hace un llamado a la funcion lettersOnly
                    
            const lettersOnly = regExp.test(control.value);

            return !lettersOnly ? { 'lettersOnly': {value: control.value} } : null;
        
        }
    }

    static numbersOnly(): ValidatorFn {
        let regExp: RegExp = /^\d+$/;
        return (control: AbstractControl): {[key: string]: any} | null => {
            const numbersOnly = regExp.test(control.value);
            return !numbersOnly ? { 'numbersOnly': {value: control.value} } : null;
        
        }
    }
}
