import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/categories.service';
import { NewsService } from 'src/app/services/news.service';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  // standalone: true,
  // imports: [MatIconModule],
})

export class SidenavComponent implements OnInit {
  isAuthenticated: boolean = false;
  windowInnerWidth: number;

  categories = this.categoryService.categories;
  showSearchComponent: boolean = false;
  newsListComponent: boolean = false;

  constructor(
    private router: Router, 
    public authService: AuthService, 
    private categoryService: CategoryService,
    public newsService: NewsService) {
    this.windowInnerWidth = window.innerWidth;
  }

  selectedCategory: string = 'general';
  @Output() categoryChanged = new EventEmitter<string>();

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowInnerWidth = window.innerWidth;
  }

  onCategoryChange(event: MatButtonToggleChange) {
    this.selectedCategory = event.value;
    this.categoryChanged.emit(this.selectedCategory);
  
    if (event.value === 'Search') {
      this.router.navigate(['search']);
    } else if (event.value === 'Start') {
      this.router.navigate(['top-headlines']);
    }
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().subscribe((authenticated) => {
      this.isAuthenticated = authenticated;
    });
  }

}
