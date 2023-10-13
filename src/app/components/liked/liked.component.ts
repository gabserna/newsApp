import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LikedService, LikedArticle } from '../../services/liked.service';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css'],
})
export class LikedComponent implements OnInit {
  likedArticles: LikedArticle[] = [];

  constructor(
    private authService: AuthService,
    private likedService: LikedService,
    private router: Router
    ) {}

    ngOnInit() {
      this.authService.getUserData().subscribe((user: User) => {
        this.likedArticles = this.likedService.getLikedArticles();
      });
    }


  goBackToTopHeadlines() {
    this.router.navigate(['top-headlines']);
  }

}
