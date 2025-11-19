import { Component, computed, effect, signal } from '@angular/core';
import { aggregateMetadata, createMetadataKey, customError, form, MAX, max, maxMetadataKey, metadata, MIN, min, minMetadataKey, orMetadataKey, REQUIRED, required, SchemaPath, validate, validateAsync } from '@angular/forms/signals';
import { DinerNumerticRating, DinerRating, RATINGS } from '../../../models/rating.model';
import { SharedModule } from '../../../shared.module';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

export const SKIP = maxMetadataKey();


@Component({
  selector: 'app-d3-signal',
  imports: [SharedModule],
  templateUrl: './d3-signal.html',
  styleUrl: './d3-signal.scss',  
})
export class D3Signal {
  readonly model = signal<DinerNumerticRating>({
    food: '',
    rating: 3,
    comeAgain: false,
  });

  readonly dinnerForm = form(this.model, p => {
    required(p.food, { message: 'Food is required'});   
    min(p.rating, 1, { message: 'Rating must be at least 1' });
    max(p.rating, 10, { message: 'Rating cannot be more than 10' });
    validateAsync(p.food, {
      params: ctx => ctx.valueOf(p.comeAgain), 
      factory: prms => rxResource({
        params: prms,
        stream: () => of(10)
      }), 
      onError: () => {}, 
      onSuccess: () => {}
    }), 
    skipped(p.rating, 2);
  });

  readonly ratingOptions = RATINGS;

  constructor() {
    effect(() => {
      console.log('Form Status: ', this.dinnerForm.rating().metadata(MAX)());

      const isRequired = this.dinnerForm.food().metadata(REQUIRED)();
      console.log('Is Food Required? ', isRequired);
      const theSkip = this.dinnerForm.rating().metadata(SKIP);
      console.log('The SKIP value is: ', theSkip());

    })
  }
}

function skipped(path: SchemaPath<number>, value: number) {
  aggregateMetadata(path, SKIP, () => value);
  validate(path, ctx => {
    const skip = ctx.fieldTreeOf(path)().metadata(SKIP)();
    const value = ctx.valueOf(path);
    if (skip) {
      if (value % skip !== 0) {
        return customError({
          kind: 'not skipping',
          message: `Value ${value} is not skipping by ${skip}`
        })
      }
    }
    return undefined;
  })
}


