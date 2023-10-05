import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'newsApp';
  selectedCategory: string = 'business';

  isLoginPage: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.url.subscribe((segments) => {
      this.isLoginPage = segments.some((segment) => segment.path === 'login');
      // console.log('Is login page?', this.isLoginPage);
    });
  }
}