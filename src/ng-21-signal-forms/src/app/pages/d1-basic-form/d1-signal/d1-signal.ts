import { Component, signal } from '@angular/core';
import { form, required } from '@angular/forms/signals';
import { DinerRating, RATINGS } from '../../../models/rating.model';
import { SharedModule } from '../../../shared.module';


@Component({
  selector: 'app-d1-signal',
  imports: [SharedModule],
  templateUrl: './d1-signal.html',
  styleUrl: './d1-signal.scss',  
})
export class D1Signal {
  readonly model = signal<DinerRating>({
    food: '',
    rating: 'Okay',
    comeAgain: false,
  });

  readonly dinnerForm = form(this.model, p => {
    required(p.food, { message: 'Food is required'});     
  });

  readonly ratingOptions = RATINGS;


}
