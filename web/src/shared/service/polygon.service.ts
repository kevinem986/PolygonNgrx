import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PolygonService {
  bearerToken: String = environment.apiKey;
  headers: any;

  constructor(private http: HttpClient) {
    const me = this;
    me.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${me.bearerToken}`,
    });
  }

  getTicker(
    active: boolean = true,
    sort: string = 'ticker',
    order: string = 'asc',
    limit: number = 10
  ) {
    return this.http
      .get(
        `${environment.apiUrl}/v3/reference/tickers?active=${active}&sort=${sort}&order=${order}&limit=${limit}`,
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((result) => {
          return result as any;
        })
      );
  }
}
