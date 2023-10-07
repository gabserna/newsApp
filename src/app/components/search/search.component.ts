import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResults: { title: string; url: string }[] = [];
  @Input() searchFilter = '';
  // @Input() searchFilter = 'apple';
  headlines: any;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getSearchResults();
  }

  // getSearchResults() {
  //   this.newsService
  //     .searchArticles(this.searchFilter)
  //     .subscribe((data: any) => {
  //       this.headlines = data.articles;
  //       console.log(this.headlines);
  //       this.searchResults = this.headlines.map((article: any) => {
  //         return {
  //           title: article.title,
  //           url: article.url
  //         };
  //       });
  //     });
  // }

  getSearchResults() {
    if (this.searchFilter.trim() !== '') {
      this.newsService.searchArticles(this.searchFilter).subscribe(
        (data: any) => {
          this.headlines = data.articles;
          console.log(this.headlines);
          this.searchResults = this.headlines.map((article: any) => {
            return {
              title: article.title,
              url: article.url,
            };
          });
        },
        (error: any) => {
          console.error('Error on API request:', error);
        }
      );
    }
  }

  onFilterChange(event: any) {
    const filter = event.target.value;
    this.searchFilter = filter;
    this.getSearchResults();
  }

  goBackToTopHeadlines() {
    this.router.navigate(['top-headlines']);
  }
}
