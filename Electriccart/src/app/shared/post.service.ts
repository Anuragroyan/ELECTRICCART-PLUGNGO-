import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/Operators';
import { Post} from './post.model';
@Injectable()
export class PostService {
  selectedPost: Post;
  posts: Post[];
  readonly baseURL="http://localhost:3000/posts";
constructor(private http:HttpClient ) { }

postPost(posts:Post){
  return this.http.post(this.baseURL,posts);
}

 getPostList(){
   return this.http.get(this.baseURL);
 }

 putPosts(posts:Post){
  return this.http.put(this.baseURL+ `/${posts._id}`,posts);
}

deletePosts(_id: string) {
return this.http.delete(this.baseURL + `/${_id}`);
}
}
