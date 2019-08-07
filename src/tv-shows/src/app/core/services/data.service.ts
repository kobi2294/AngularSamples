import { Injectable } from '@angular/core';
import { Show } from '../models/show.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  private baseUrl ='http://api.tvmaze.com';

  getAllShows(): Promise<Show[]> {
    let url = `${this.baseUrl}/shows`;
    let res = this.http.get<Show[]>(url).toPromise();

    return res;
  }

  getShowDetails(index: number): Promise<Show> {
    let url = `${this.baseUrl}/shows/${index}`;
    let res = this.http.get<Show>(url).toPromise();

    return res;

  }

}
