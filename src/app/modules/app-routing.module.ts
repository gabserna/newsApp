import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { NewsListComponent } from '../components/news-list/news-list.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../components/verify-email/verify-email.component';
import { SearchComponent } from '../components/search/search.component';

import { AuthGuard } from '../guard/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'top-headlines', component: NewsListComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'search', component: SearchComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
