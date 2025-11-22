import { Component, signal } from '@angular/core';
import { Field, form, max, min } from '@angular/forms/signals';
import { StarRating } from "./components/star-rating/star-rating";

@Component({
  selector: 'app-root',
  imports: [Field, StarRating],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly model = signal({
    rating: 3
  });

  readonly ratingForm = form(this.model, f => {
    max(f.rating, 7);
  })
}
