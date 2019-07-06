import { ColorsService } from './colors.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { ColorModel } from '../models/colors.model';
import { switchMap, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  constructor(private colorsService: ColorsService) { 
    this.searchResults$ = this.filter$.pipe(
      debounceTime(1000),
      switchMap(keyword => this.colorsService.searchColors(keyword))
      );
      
    const true$ = this.filter$.pipe(map(val => true));
    const false$ = this.searchResults$.pipe(map(val => false));
    this.isBusy$ = merge(true$, false$)
                    .pipe(distinctUntilChanged());

  }


  setFilter(keyword: string): Promise<void> {
    this.filter$.next(keyword);
    return Promise.resolve();
  }
}

