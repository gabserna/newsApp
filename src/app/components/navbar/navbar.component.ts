import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  selectedCategory: string = 'business';
  @Output() categoryChanged = new EventEmitter<string>();

  constructor(public authService: AuthService) {}

  onCategoryChange(event: MatButtonToggleChange) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);
  }
}
