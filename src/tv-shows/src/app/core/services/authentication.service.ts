import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authState$ = new BehaviorSubject<boolean>(false);

  public get isLoggedIn(): Observable<boolean> {
    return this.authState$.asObservable();
  }

  public login(): Promise<void> {
    this.authState$.next(true);
    return Promise.resolve();
  }

  public logout(): Promise<void> {
    this.authState$.next(false);
    return Promise.resolve();
  }

  constructor() { }
}
