import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  data = {
    title: "",
    body: ""
  }

  constructor(public postsService: PostsService) { }

  ngOnInit(): void {
  }

  persistPost() {
    this.postsService._persistPost(this.data).subscribe(post => console.log(post))
  }

}
