import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value = 0;
  //private counter = new Subject<number>();
  private counter = new BehaviorSubject<number>(0);

  getCounter(): Observable<number> {
    return this.counter.asObservable();
  }

  increment(): Promise<void> {
    this.counter.next(++this.value);
    return Promise.resolve();
  }
  
  decrement(): Promise<void> {
    this.counter.next(--this.value);
    return Promise.resolve();
  }  
  
}



