import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css'],
})
export class SubmenuComponent {

  constructor(private router: Router) {}

  showSearchComponent: boolean = false;
  newsListComponent: boolean = false;


  selectedCategory: string = 'general';
  @Output() categoryChanged = new EventEmitter<string>();
  categories = [
    { name: 'Home', icon: 'home' },
    { name: 'General', icon: 'description' },
    { name: 'Business', icon: 'add_business' },
    { name: 'Entertainment', icon: 'theater_comedy' },
    { name: 'Health', icon: 'health_and_safety' },
    { name: 'Science', icon: 'biotech' },
    { name: 'Sports', icon: 'sports_football' },
    { name: 'Technology', icon: 'important_devices' },
    { name: 'Search', icon: 'search' },
  ];

  onCategoryChange(event: MatButtonToggleChange) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);

    if (event.value === 'Search') {
      this.router.navigate(['/search']);
    } else {
      this.showSearchComponent = false;
    }


    if (event.value === 'Home') {
      this.router.navigate(['/top-headlines']);
    } else {
      this.newsListComponent = false;
    }
    
  }
}
