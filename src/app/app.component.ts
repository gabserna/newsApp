import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsApp';
  selectedCategory: string = 'business';

  onCategoryChanged(category: string) {
    this.selectedCategory = category;
  }
}