import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {Post} from '../../models/post.model';
import {User} from '../../models/user.model';
import { PostComment } from '../../models/post-comment.model';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {UserService} from '../../services/user.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-post-detail',
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './post-detail.component.html',
  standalone: true,
  styleUrl: './post-detail.component.css'
})

export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  comments: PostComment[] = [];
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
      this.commentService.getCommentsByPost(post.id).subscribe(comments => {
        this.comments = comments;
        this.userService.getUsers().subscribe(users => this.users = users);
      });
    });
  }

  getAuthorUser(email: string) {
    return this.users.find(u => u.email === email);
  }
}

