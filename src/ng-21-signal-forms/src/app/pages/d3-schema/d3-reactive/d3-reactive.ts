import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedModule } from '../../../shared.module';
import { Rating } from '../../../models/rating.model';

@Component({
  selector: 'app-d3-reactive',
  imports: [SharedModule],
  templateUrl: './d3-reactive.html',
  styleUrl: './d3-reactive.scss',
})
export class D3Reactive {
  readonly form = new FormGroup({
    food: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    rating: new FormControl<number>(
      3, {
      nonNullable: true,      
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
    }),
    comeAgain: new FormControl(false, { nonNullable: true }),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
