import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = "http://localhost:3000/posts"

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(this.apiUrl)
  }

  _persistPost(data: any) {
    return this.http.post(this.apiUrl, data)
  }

  _getOnePost(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`)
  }


}
