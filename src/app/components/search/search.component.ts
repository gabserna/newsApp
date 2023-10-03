import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  @Input() searchFilter: string = 'apple';
  headlines: any;


  constructor( private newsService: NewsService) {}

  ngOnInit(): void {
    this.getSearchResults()
  }

  getSearchResults() {

    this.newsService
      .searchArticles(this.searchFilter)
      .subscribe((data: any) => {
        this.headlines = data.articles;
        console.log(this.headlines);
      })

  }

  onFilterChange(filter: string) {
    this.searchFilter = filter;
    this.getSearchResults()
  }

}
