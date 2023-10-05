import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('1s', style({ opacity: 0 }))]),
    ]),
    trigger('myOtherInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  isLoading = false;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
