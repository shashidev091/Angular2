import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return {cannotContainSpace: true};
    }
    return null;
  }
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      // setTimeout(() => {
      //   console.log('ok');
        if (control.value === 'shashi') {
          console.log('here');
          resolve( { shouldBeUnique: true });
        } else {
          console.log('hereo');
          resolve(null);
        }
      // }, 2000);
    });
  }
}
