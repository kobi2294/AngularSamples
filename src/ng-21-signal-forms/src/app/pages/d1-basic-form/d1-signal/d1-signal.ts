import { Component, signal } from '@angular/core';
import { Field, form, MIN, required } from '@angular/forms/signals';
import { Rating, RATINGS } from '../../../models/rating.model';
import { SharedModule } from '../../../shared.module';
import { min } from 'rxjs';

interface DinerRating {
  readonly food: string;
  readonly rating: Rating;
  readonly comeAgain: boolean;
}

@Component({
  selector: 'app-d1-signal',
  imports: [SharedModule, Field],
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
