import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() selectedCategory: string = 'general';
  headlines: any;
  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getNews(this.selectedCategory);
  }
  ngOnChanges() {
    this.getNews(this.selectedCategory);
  }

  getNews(category: string) {
    this.newsService
      .getTopHeadlines(category)
      .subscribe((data: any) => {
        this.headlines = data.articles;
        console.log(this.headlines);
      });
  }

  onCategoryChanged(event: any) {
    console.log(event);
    this.getNews(this.selectedCategory);
  }
}
