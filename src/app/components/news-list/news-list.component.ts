import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
  @Input() selectedCategory: string = 'business';
  headlines: any;
  selectedCategory$: any

  // selectedCategory: string
  

  categories = this.categoryService.categories;
  constructor(private newsService: NewsService, private categoryService: CategoryService) {
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

  // ngOnChanges() {
  //   var category = ''
  //   this.selectedCategory$.subscribe(cat => {
  //     this.getNews(cat)

  // })
  //   // this.getNews(category);
  //   console.log(this.selectedCategory);
    
  // }

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
}

