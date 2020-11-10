import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ThemesComponent } from './themes/themes/themes.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { NewThemeComponent } from './themes/new-theme/new-theme.component';
import { ThemeContentComponent } from './themes/theme-content/theme-content.component';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'themes/:themeId', component: ThemeContentComponent },
  { path: 'add-theme', component: NewThemeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
