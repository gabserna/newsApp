import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'newsApp';
  selectedCategory: string = 'general';

  isLoggedIn: boolean = false;
  isLoginPage: boolean = false;

  // constructor(
  //   private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.url.subscribe((segments) => {
  //     this.isLoginPage = segments.some((segment) => segment.path === 'login');
  //     // console.log('Is login page?', this.isLoginPage);
  //   });
  // }
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
      this.activatedRoute.url.subscribe((segments) => {
        this.isLoginPage = segments.some((segment) => segment.path === 'login');
      });
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.isLoggedIn = event.url !== '/login';
      }
    });
  }
  
  onCategoryChanged(category: string) {
    this.selectedCategory = category;
  }
}