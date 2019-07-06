import { ALLCOLORS } from './../models/all-colors';
import { Injectable } from '@angular/core';
import { ColorModel } from '../models/colors.model';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  constructor() { }

  delay(millis: number): Promise<void> {
    return new Promise((resolve, reject) => setTimeout(resolve, millis));
  }

  async searchColors(filter: string): Promise<ColorModel[]> {
    filter = filter.toLowerCase();
    const entries = Object.entries(ALLCOLORS);
    const res = entries
      .map(entry => {return {displayName: entry[1], code: entry[0]}})
      .filter(color => color.displayName.toLowerCase().includes(filter))
      
    await this.delay(3000);
    return res;
  }
}
