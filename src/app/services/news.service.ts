import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = environment.newsApiFive.apiKey;
  private selectedCategory = new Subject<string>();

  selectedCategory$ = this.selectedCategory.asObservable();

  constructor(private http: HttpClient) {}

  show(category:string) {
    this.selectedCategory.next(category);
    console.log(typeof category);
    
  }

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
          console.error('API request failed:', error);
          return throwError(error);
        })
      );
  }
}
