import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Rating } from '../../../models/rating.model';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-d2-reactive',
  imports: [SharedModule],
  templateUrl: './d2-reactive.html',
  styleUrl: './d2-reactive.scss',
})
export class D2Reactive {
  readonly form = new FormGroup({
    food: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, validateCapital],
    }),
    rating: new FormControl<Rating>(
      'Okay', {
      nonNullable: true,      
      validators: [Validators.required],
    }),
    comeAgain: new FormControl(false, { nonNullable: true }),
  });

  onSubmit() {
    console.log(this.form.value);
  }

}

function validateCapital(control: AbstractControl<string>): ValidationErrors | null {
  const value = control.value;
  if (value && value[0] !== value[0].toUpperCase()) {
    return { capital: 'The first letter must be uppercase' };
  }
  return null;
}
