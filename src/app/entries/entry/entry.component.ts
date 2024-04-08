import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {
  entryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.entryForm = this.fb.group({
      textInput: ['', Validators.required],
      integerInput: [
        null,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      decimalInput: [
        null,
        [Validators.required, Validators.pattern('^[0-9]*\\.?[0-9]+$')],
      ],
    });
  }

  onSubmit() {
    console.log(this.entryForm.value);
  }

  get f() {
    return this.entryForm.controls;
  }
}
