import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor() { }

  confirm(message: string): Promise<boolean> {
    const confirmation = window.confirm(message);
    return Promise.resolve(confirmation);
  }
}
