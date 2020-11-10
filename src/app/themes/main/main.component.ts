import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

import { ThemesService } from '../themes.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  get isLogged() { return this.userService.isLogged };
  get userId() { return this.userService.userId };
  get themes() { return this.themesService.themes };

  constructor(
    private themesService: ThemesService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.themesService.loadThemes().subscribe();
  }

  isSubscribed(subscribersArr) {
    if (subscribersArr.includes(this.userId)) {
      return true
    }
    return false
  }
}
