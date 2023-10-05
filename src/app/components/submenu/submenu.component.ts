import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/categories.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css'],
})
export class SubmenuComponent {

  constructor(private router: Router, private categoryService: CategoryService) {}
  categories = this.categoryService.categories;

  showSearchComponent: boolean = false;
  newsListComponent: boolean = false;


  selectedCategory: string = 'general';
  @Output() categoryChanged = new EventEmitter<string>();

  onCategoryChange(event: MatButtonToggleChange) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);
  
    if (event.value === 'Search') {
      this.router.navigate(['search']);
    } else if (event.value === 'Start') {
      this.router.navigate(['top-headlines']);
    }
  }
  
}
