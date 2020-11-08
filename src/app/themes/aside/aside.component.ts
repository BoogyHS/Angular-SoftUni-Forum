import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  get posts() { return this.postsService.posts };

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.loadPosts().subscribe();
    console.log(this.posts);
  }

}
