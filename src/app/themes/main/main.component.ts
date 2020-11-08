import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../themes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  get themes() { return this.themesService.themes };

  constructor(private themesService: ThemesService) { }

  ngOnInit(): void {
    this.themesService.loadThemes().subscribe();
    console.log(this.themes)
  }

}
