import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authState$ = new BehaviorSubject<boolean>(false);
  private nextUrl: string | null = null;

  constructor(private router: Router){}

  public get isLoggedIn(): Observable<boolean> {
    return this.authState$.asObservable();
  }

  public setNextTarget(url: string): Promise<void> {
    this.nextUrl = url;
    return Promise.resolve();
  }

  public login(): Promise<void> {
    this.authState$.next(true);
    if (this.nextUrl) {
      this.router.navigateByUrl(this.nextUrl);      
      this.nextUrl = null;
    }

    return Promise.resolve();
  }

  public logout(): Promise<void> {
    this.authState$.next(false);
    return Promise.resolve();
  }
}
