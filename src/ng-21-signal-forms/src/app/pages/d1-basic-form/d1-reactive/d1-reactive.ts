import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared.module';
import { Rating } from '../../../models/rating.model';

@Component({
  selector: 'app-d1-reactive',
  imports: [SharedModule],
  templateUrl: './d1-reactive.html',
  styleUrl: './d1-reactive.scss',
})
export class D1Reactive {
  readonly form = new FormGroup({
    food: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
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
