import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { ThemesComponent } from './themes/themes.component';


@NgModule({
  declarations: [
    AsideComponent,
    MainComponent,
    ThemesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ThemesComponent,
  ]
})
export class ThemesModule { }
