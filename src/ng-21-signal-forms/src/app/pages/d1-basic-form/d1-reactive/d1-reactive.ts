import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared.module';

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
    rating: new FormControl(3, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
    }),
    comeAgain: new FormControl(false, { nonNullable: true }),
  });
}
