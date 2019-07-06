import { ColorsService } from './colors.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ColorModel } from '../models/colors.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private filter$ = new BehaviorSubject<string>('');
  get filter() { return this.filter$.asObservable()}

  private searchResults$: Observable<ColorModel[]>;
  get searchResults() { return this.searchResults$};

  private isBusy$: Observable<boolean>;
  get isBusy() { return this.isBusy$;}

  constructor(private colorsService: ColorsService) { }

  setFilter(keyword: string): Promise<void> {
    this.filter$.next(keyword);
    return Promise.resolve();
  }
}

