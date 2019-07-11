import { SwatchModel } from '../model/swatch.model';
import { ColorModel } from '../model/color.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private colors: ColorModel[] = [
    {displayName: 'red', code: '#FF0000'}, 
    {displayName: 'blue', code: '#0000FF'}, 
    {displayName: 'green', code: '#00FF00'}, 
    {displayName: 'magenta', code: '#FF00FF'}, 
    {displayName: 'cyan', code: '#00FFFF'}, 
    {displayName: 'yellow', code: '#FFFF00'}, 
  
  ];
  private swatches: SwatchModel[] = [
    {displayName: 'Primary', colors: [this.colors[0], this.colors[1], this.colors[2]]}, 
    {displayName: 'Secondary', colors: [this.colors[3], this.colors[4], this.colors[5]]}, 
  ];

  private colors$ = new BehaviorSubject<ColorModel[]>(this._deepClone(this.colors));
  private swatches$ = new BehaviorSubject<SwatchModel[]>(this._deepClone(this.swatches));

  constructor() { }

  private _deepClone<T>(value: T): T {
    const str = JSON.stringify(value);
    const res = JSON.parse(str) as T;
    return res;
  }

  private _notifyColors() {
    this.colors$.next(this._deepClone(this.colors));
  }

  private _notifySwatches() {
    this.swatches$.next(this._deepClone(this.swatches));
  }


  getAllColors(): Observable<ColorModel[]> {
    return this.colors$.asObservable();    
  }
  getAllSwatches(): Observable<SwatchModel[]> {
    return this.swatches$.asObservable();
  }

  getColor(name: string) {
    return this.colors$.pipe(map(list => list.find(c => c.displayName === name)));
  }

  getSwatch(name: string) {
    return this.swatches$.pipe(map(list => list.find(c => c.displayName === name)));
  }


  addColor(value: ColorModel): Promise<void> {
    this.colors.push(this._deepClone(value));
    this._notifyColors();
    return Promise.resolve();
  }

  removeColor(name: string): Promise<void> {
    this.colors = this.colors.filter(x => x.displayName !== name);
    this._notifyColors();
    return Promise.resolve();
  }

  modifyColor(value: ColorModel) {
    this.colors = this.colors.map(x => x.displayName === value.displayName 
      ? this._deepClone(value) 
      : x);
    this._notifyColors();
    return Promise.resolve();
  }

  addSwatch(value: SwatchModel): Promise<void> {
    this.swatches.push(this._deepClone(value));
    this._notifySwatches();
    return Promise.resolve();
  }

  removeSwatch(name: string): Promise<void> {
    this.swatches = this.swatches.filter(x => x.displayName !== name);
    this._notifySwatches();
    return Promise.resolve();
  }

  modifySwatch(value: SwatchModel) {
    this.swatches = this.swatches.map(x => x.displayName === name 
      ? this._deepClone(value) 
      : x);
    this._notifySwatches();
    return Promise.resolve();
  }

}
