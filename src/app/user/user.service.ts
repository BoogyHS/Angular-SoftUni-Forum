import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get isLogged() { return true }
  get userId() { return '5fa64b162183ce1728ff371d' }

  constructor() { }
}
