import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../shared/interfaces/post';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: IPost[];

  constructor(private http: HttpClient) { }

  loadPosts(){
    return this.http.get<IPost[]>('http://localhost:3000/api/posts?limit=5')
      .pipe(tap(posts => {
        this.posts = posts;
        console.log(posts)
      }));
  }
}
