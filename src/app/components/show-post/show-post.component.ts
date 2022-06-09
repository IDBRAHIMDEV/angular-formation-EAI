import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(private router: ActivatedRoute, private postsService: PostsService) { }

  post = {
    title: "",
    body: ""
  }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.getOnePost(params["id"])
    })
  }

  getOnePost(id: number) {
    this.postsService._getOnePost(id).subscribe((post: any) => this.post = post)
  }

}
