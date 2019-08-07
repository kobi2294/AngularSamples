import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate  {
  constructor(
    private auth: AuthenticationService, 
    private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      var promise = this.auth.isLoggedIn.pipe(
        first()
      ).toPromise();

      var res = await promise;

      if (res)
        return true;

      const targetUrl = state.url;
      await this.auth.setNextTarget(targetUrl);
      
      return this.router.parseUrl('/account');
  }
  
}
