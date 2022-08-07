import { AbstractControl, ValidationErrors } from '@angular/forms';

export class FormValidators {
  static isLatin(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    const regex = /^[a-zA-Z]+$/;
    return regex.test(value) ? null : { notLatin: true };
  }

  static isNumbers(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    const regex = /^[0-9]+$/;
    return regex.test(value) ? null : { notNumber: true };
  }

  static isAlfaNumeric(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(value) ? null : { notNumber: true };
  }
}
