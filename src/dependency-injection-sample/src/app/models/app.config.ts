import { InjectionToken } from '@angular/core';

export const BASE_URL = new InjectionToken<string>('base token');

export const CURRENT_DATE = new InjectionToken<string>('current date');

export function getDate(): string {
    const d = new Date(Date.now());
    d.setDate(d.getDate()+1);
    
    return 'The day before ' + d.toDateString();
}

