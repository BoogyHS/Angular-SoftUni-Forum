import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import { ThemesComponent } from './themes/themes.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { ThemeTitleComponent } from './theme-title/theme-title.component';


@NgModule({
  declarations: [
    AsideComponent,
    MainComponent,
    ThemesComponent,
    NewThemeComponent,
    ThemeContentComponent,
    ThemeTitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ThemesComponent,
    NewThemeComponent
  ]
})
export class ThemesModule { }
