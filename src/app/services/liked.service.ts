import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LikedService {
  private likedArticles: LikedArticle[] = [];

  addLikedArticle(likedArticle: LikedArticle) {
    this.likedArticles.push(likedArticle);
  }

  getLikedArticles(): LikedArticle[] {
    return this.likedArticles;
  }
}

export interface LikedArticle {
  url: string;
  title: string;
  description: string;
}