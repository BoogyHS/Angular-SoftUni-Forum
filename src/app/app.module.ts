import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { CoreModule } from './core/core.module';
import { ThemesModule } from './themes/themes.module';

import { UserService } from './user/user.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ThemesModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
