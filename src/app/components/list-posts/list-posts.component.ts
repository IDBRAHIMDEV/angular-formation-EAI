import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  posts: any[] = []

  ngOnInit(): void {
    this.retreiveAllPosts()
  }

  retreiveAllPosts() {
    this.postsService.getAllPosts().subscribe((data: any) => {
      this.posts = data
    })
  }

}
