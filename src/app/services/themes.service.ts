import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from '../shared/interfaces/theme'
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  themes: ITheme[];

  constructor(private http: HttpClient) { }

  loadThemes() {
    return this.http.get<ITheme[]>('http://localhost:3000/api/themes')
      .pipe(tap(themes => {
        this.themes = themes.sort((a, b) => { return b.subscribers.length - a.subscribers.length });
        console.log(themes)
      }));
  }
}
