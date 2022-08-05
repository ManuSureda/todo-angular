import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidator {
    static numbersOnly(): ValidatorFn {
        return (control: AbstractControl): {[value: string]: any} | null => {
            const regExp : RegExp = /^\d+$/;
            const numbersOnly = regExp.test(control.value);
            return !numbersOnly ? {numbersOnly: {value: control.value}} : null;
          };
    }
}
