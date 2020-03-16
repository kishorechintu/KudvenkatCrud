import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[ appConfirmEqualValidator]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmEqualValidatorDirective,
      multi: true
    }
  ]
})
export class ConfirmEqualValidatorDirective implements Validator {
  validate(passwordGroup: AbstractControl): { [key: string]: any } | null {
    const passwrodField = passwordGroup.parent.get("password");
    const confirmPasswrodField = passwordGroup.parent.get("confirmpassword");

    if (
      passwrodField &&
      confirmPasswrodField &&
      passwrodField.value !== confirmPasswrodField.value
    ) {
      return { notEqual: true };
    }
    return null;
  }
}
