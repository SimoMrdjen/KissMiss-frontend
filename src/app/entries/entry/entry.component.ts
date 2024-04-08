import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  validateForm: FormGroup<{
    // userName: FormControl<string>;
    //email: FormControl<string>;
    // password: FormControl<string>;
    //  confirm: FormControl<string>;
    // comment: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      //   userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      //  email: ['', [Validators.email, Validators.required]],
      //  password: ['', [Validators.required]],
      //  confirm: ['', [this.confirmValidator]],
      //  comment: ['', [Validators.required]]
    });
  }

  submitForm(): void {
    console.log('submit');
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
  }
  suffixIconButton() {}
}
