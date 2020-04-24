import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import {element} from 'protractor';
import {AppError} from '../common/app-error';
import {NotFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts: any = [];
status = true;
post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  };
  constructor(private postService: PostService) {
  }
  ngOnInit() {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts()
      .subscribe(response => {
        this.posts = response;
      }, error =>  {
        alert('erreur inattendue');
      });
  }
  createPost() {
    this.postService.createPost(this.post)
      .subscribe(response => {
        this.posts.unshift(response);
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 0
        };
      }, (error: AppError) => {
        if (error instanceof BadInput) {
          alert('check your infos');
        } else {
          alert('erreur inattendue');
        }
      });
  }
  editPost(post) {
    this.post = post;
    this.status = false;
  }
  updatePost() {
    this.postService.updatePost(this.post)
      .subscribe(response => {
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 0
        };
        this.status = true;
      }, error => {
        alert('erreur inattendue');
      });
  }
  deletePost(post) {
    this.postService.deletePost(123)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this is deleted');
        } else {
          alert('erreur inattendue');
        }
      });
  }
}
