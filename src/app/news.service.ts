import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'b29c939a0d9a42319b5b03b6de190043';

  constructor(private http: HttpClient) { }

  // getTopHeadlines() {
  //   return this.http.get(`https://newsapi.org/v2/top-headlines?country=US&apiKey=${this.apiKey}`);
  // }
  getTopHeadlines(category: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=US&category=${category}&apiKey=${this.apiKey}`);
  }
}


// https://newsapi.org/v2/top-headlines?country=us&apiKey=b29c939a0d9a42319b5b03b6de190043