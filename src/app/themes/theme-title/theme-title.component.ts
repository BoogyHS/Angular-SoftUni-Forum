import { Component, Input, OnInit } from '@angular/core';
import { ITheme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'app-theme-title',
  templateUrl: './theme-title.component.html',
  styleUrls: ['./theme-title.component.scss']
})
export class ThemeTitleComponent implements OnInit {

  @Input() theme: ITheme
  
  constructor() { }

  ngOnInit(): void {
  }

}
