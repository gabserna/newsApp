import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: { title: string, url: string }[] = [];
  @Input() searchFilter = '';
  // @Input() searchFilter = 'apple';
  headlines: any;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getSearchResults();
  }

  getSearchResults() {
    this.newsService
      .searchArticles(this.searchFilter)
      .subscribe((data: any) => {
        this.headlines = data.articles;
        console.log(this.headlines);
        this.searchResults = this.headlines.map((article: any) => {
          return {
            title: article.title,
            url: article.url
          };
        });
      });
  }

  onFilterChange(event: any) {
    const filter = event.target.value;
    this.searchFilter = filter;
    this.getSearchResults();
  }
}
