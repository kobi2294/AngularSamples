import { Component, computed, input, model } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-star-rating',
  imports: [MatIconModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
  readonly value = model.required<number>();

  readonly max = input<number | undefined>(undefined);

  readonly stars = computed(() => 
    Array.from({ length: this.max() ?? 5 }, (_, i) => i + 1));

}
