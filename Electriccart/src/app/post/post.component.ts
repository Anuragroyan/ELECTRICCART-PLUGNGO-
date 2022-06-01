import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import { NgForm} from '@angular/forms';
import { Post} from '../shared/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
 
constructor(public PostService:  PostService) { }
ngOnInit() {
     this.resetForm();
     this.refreshPostList();
    }

    resetForm(form?: NgForm) {
      if (form)
       form.reset();
       this.PostService.selectedPost = {
         _id:"",
         topic: "",
         date: "",
         By: "",
         place: "",
         comment: "",
         content: "",
         like: null,
         dislike: null
       }
    }
    onSubmit(form: NgForm){
      if (form.value._id == ""){
        this.PostService.postPost(form.value).subscribe((res) => {
          this.resetForm(form);
          this.refreshPostList();
        });
      }
    else {
     this.PostService.putPosts(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshPostList();
      });
    }
  } 
        refreshPostList() {
          this.PostService.getPostList().subscribe((res) =>{
            this.PostService.posts = res as Post[];
          });
        }

        onEdit(posts:Post) {
          this.PostService.selectedPost = posts;
        }
           
    
        onDelete(_id: string, form: NgForm) {
          if (confirm('Are you sure to delete this record ?') == true) {
            this.PostService.deletePosts(_id).subscribe((res) => {
              this.refreshPostList();
              this.resetForm(form);
             
            });
          }
        }
}

export class post {}