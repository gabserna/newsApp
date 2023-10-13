import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CategoryService } from '../../services/categories.service';
import { LikedService, LikedArticle } from 'src/app/services/liked.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  @Input() selectedCategory: string = 'business';
  headlines: any;
  selectedCategory$: any

  categories = this.categoryService.categories;
  constructor(
    private newsService: NewsService,
    private categoryService: CategoryService,
    private likedService: LikedService
    ) {
    this.selectedCategory$ = this.newsService.selectedCategory$;
    console.log(this.selectedCategory);
  }

  ngOnInit() {
    this.getNews(this.selectedCategory);
    this.selectedCategory$.subscribe(category => {
    console.log(category);
      this.selectedCategory = category
      this.getNews(this.selectedCategory)
    })
  }

  getNews(category: string) {
    this.newsService.getTopHeadlines(category).subscribe((data: any) => {
      this.headlines = data.articles;
      console.log(data);
      
    });
  }
  onCategoryChange(event: string) {
    console.log(event, 'received');
    this.selectedCategory = event;
    this.getNews(this.selectedCategory);
  }

  truncatedText(title: string): string {
    if (title.length > 60) {
      return title.substring(0, 60) + '...';
    } else {
      return title;
    }
  }

  likedArticles(articleUrl: string) {
    const likedArticle: LikedArticle = {
      url: articleUrl,
      title: 'title',
      description: 'description',
    };
    this.likedService.addLikedArticle(likedArticle);
    console.log(articleUrl);
  }
  
  
}

