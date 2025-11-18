import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { DinerRating, RATINGS } from '../../../models/rating.model';
import { applyWhenValue, customError, FieldTree, form, required, SchemaPath, validate } from '@angular/forms/signals';

@Component({
  selector: 'app-d2-signal',
  imports: [SharedModule],
  templateUrl: './d2-signal.html',
  styleUrl: './d2-signal.scss',
})
export class D2Signal {
  readonly model = signal<DinerRating>({
    food: '',
    rating: 'Okay',
    comeAgain: false,
  });

  // custom validation
  // conditional validation
  // composed validation

  readonly dinnerForm = form(this.model, p => {
    required(p.food, { message: 'Food is required'});  
    capitalized(p.food); 
    applyWhenValue(p, m => m.rating === 'Great', q => {
      required(q.comeAgain, { message: 'If the food was great, you must come again' });
    }), 
    validate(p.comeAgain, ctx => {
      const food = ctx.valueOf(p.food);
      const comeAgain = ctx.value();
      if (food === 'Yummy' && !comeAgain) {
        return customError({
          kind: 'must-come-again',
          message: 'If the food was yummy, you must come again!',
        })
      }
      return undefined;
    })
  });

  readonly ratingOptions = RATINGS;

}

function capitalized(path: SchemaPath<string>) {
  validate(path, ctx => {
    const value = ctx.value();
    if (value && value[0] !== value[0].toUpperCase()) {
      return customError({
        kind: 'capitalized',
        message: 'Must start with a capital letter',
      })
    }

    return undefined;
  })
}
