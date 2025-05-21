import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs'

export interface NasaImage {
  title: string;
  explanation: string;
  url: string;
  media_type: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private apiKey = 'lulR8KcgQkt7dvpiPxZbNloPv3sBncGPxXKiJObl'
  private apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getApod(): Observable<NasaImage | null> {
    return this.http.get<NasaImage>(this.apiUrl).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 404) {
          return of(null);
        }
        return throwError(() => err);
      })
    );
  }
}
