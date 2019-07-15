import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanLeave {
  canLeave: () => Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class CanLeavePageGuard implements CanDeactivate<CanLeave> {
  canDeactivate(
    component: CanLeave, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot) {
      return component.canLeave();
  }
  
}
