import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css'],
})
export class SubmenuComponent {
  selectedCategory: string = 'general';
  @Output() categoryChanged = new EventEmitter<string>();
  categories = [
    { name: 'General', icon: 'description' },
    { name: 'Business', icon: 'add_business' },
    { name: 'Entertainment', icon: 'theater_comedy' },
    { name: 'Health', icon: 'health_and_safety' },
    { name: 'Science', icon: 'biotech' },
    { name: 'Sports', icon: 'sports_football' },
    { name: 'Technology', icon: 'important_devices' },
  ];

  onCategoryChange(event: MatButtonToggleChange) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);
  }
}
