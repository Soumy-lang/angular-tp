import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {User} from '../../models/user.model';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../services/post.service';
import {CommentService} from '../../services/comment.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.component.html',
  standalone: true,
  styleUrl: './post-detail.component.css'
})

export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  comments: Comment[] = [];
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

  getAuthorName(email: string): string {
    const user = this.users.find(u => u.email === email);
    return user ? user.name : email;
  }
}

