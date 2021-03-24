import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ')) {
      return {cannotContainSpace: true};
    }
    return null;
  }
}
