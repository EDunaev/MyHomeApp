import { AbstractControl } from "@angular/forms";


export class CustomValidators {
    static onlyNumberValidator(control: AbstractControl) {
        const value = control.value;
        if (isNaN(parseFloat(value)) || isNaN(value - 0)) {
            return { onlyNumber: true };

        }
        return null;
    }
}

