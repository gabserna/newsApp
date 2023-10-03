import { Component, EventEmitter, Output, HostListener } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  windowInnerWidth: number;

  constructor() {
    this.windowInnerWidth = window.innerWidth;
  }

  categories = [
    { name: 'General', icon: 'description' },
    { name: 'Business', icon: 'add_business' },
    { name: 'Entertainment', icon: 'theater_comedy' },
    { name: 'Health', icon: 'health_and_safety' },
    { name: 'Science', icon: 'biotech' },
    { name: 'Sports', icon: 'sports_football' },
    { name: 'Technology', icon: 'important_devices' },
  ];

  selectedCategory: string = 'general';
  @Output() categoryChanged = new EventEmitter<string>();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowInnerWidth = window.innerWidth;
  }

  onCategoryChange(event: MatButtonToggleChange) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);
  }
}
