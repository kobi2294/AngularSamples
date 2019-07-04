import { Component } from '@angular/core';
import { Observable, interval, Observer, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowingCounter = true;

  toggleCounter() {
    this.isShowingCounter = !this.isShowingCounter;
  }


  createInterval(): Observable<number> {
    return interval(1000);
  }

  createCustomObservable(): Observable<number> {
    const res = new Observable<number>(observer => {
      observer.next(100);
      setTimeout(() => observer.next(200), 2000);
      setTimeout(() => observer.next(300), 4000);
      setTimeout(() => observer.next(400), 5000);
      setTimeout(() => observer.next(500), 8000);
      setTimeout(() => observer.complete(), 10000);
    });
    return res;
  }

  createCustomSubject(): Subject<number> 
  {
      const res = new Subject<number>();
      res.next(100);
      setTimeout(() => res.next(200), 2000);
      setTimeout(() => res.next(300), 4000);
      setTimeout(() => res.next(400), 5000);
      setTimeout(() => res.next(500), 8000);
      setTimeout(() => res.complete(), 10000);

      return res;
  }

  createCustomBehaviorSubject(): Subject<number> 
  {
      const res = new BehaviorSubject<number>(0);
      res.next(100);
      setTimeout(() => res.next(200), 2000);
      setTimeout(() => res.next(300), 4000);
      setTimeout(() => res.next(400), 5000);
      setTimeout(() => res.next(500), 8000);
      setTimeout(() => res.complete(), 10000);

      return res;
  }


  go() {
    const observer1 : Observer<number> = {
      next: val => console.log(`observer 1, next ${val}`), 
      complete: () => console.log(`observer 1, complete`), 
      error: err => console.log(`observer 1 error: ${err}`)
    };

    const observer2: Observer<number> = {
      next: val => console.log(`observer 2, next ${val}`), 
      complete: () => console.log(`observer 2, complete`), 
      error: err => console.log(`observer 2 error: ${err}`)
    }

    const observable = this.createCustomBehaviorSubject();
    observable.subscribe(observer1);
    setTimeout(() => {
      observable.subscribe(observer2);
    }, 3500);
  }
}




