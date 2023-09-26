import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() selectedCategory: string = 'business'; // Utiliza @Input() para recibir la categoría desde el componente padre
  headlines: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.newsService.getTopHeadlines(this.selectedCategory).subscribe((data: any) => {
      this.headlines = data.articles;
    });
  }
}



