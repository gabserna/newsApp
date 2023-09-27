import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // private apiKey = environment.apiKey;
  private apiKey = 'b29c939a0d9a42319b5b03b6de190043';

  constructor(private http: HttpClient) { }

  getTopHeadlines(category: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${this.apiKey}`);
  }

}