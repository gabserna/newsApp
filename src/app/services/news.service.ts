import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = environment.newsApiThree.apiKey;

  constructor(private http: HttpClient) {}

  getTopHeadlines(category: string) {
    return this.http
      .get(
        `https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${this.apiKey}`
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          return throwError(error);
        })
      );
  }

  searchArticles(filters: string) {
    return this.http
      .get(
        `https://newsapi.org/v2/everything?q=${filters}&sortBy=publishedAt&apiKey=${this.apiKey}`
      )
      .pipe(
        catchError((error: any) => {
          console.error('Error en la solicitud a la API:', error);
          return throwError(error);
        })
      );
  }
}
