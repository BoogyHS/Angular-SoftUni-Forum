import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITheme } from 'src/app/shared/interfaces/theme';

import { UserService } from 'src/app/user/user.service';
import { ThemesService } from '../themes.service';


@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.scss']
})
export class ThemeContentComponent implements OnInit {

  get isLogged() { return this.userService.isLogged }
  get userId() { return this.userService.userId }
  get theme(): ITheme { return this.themesService.theme }
  themeId: string

  constructor(
    private themesService: ThemesService,
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(par => {
      this.themeId = par['themeId'];
      this.themesService.loadTheme(this.themeId).subscribe();
    });
  }

  isLiked(likesArr) {
    if (likesArr.includes(this.userId)) {
      return true;
    }
    return false;
  }
}
