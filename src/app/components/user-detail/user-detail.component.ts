import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {Post} from '../../models/post.model';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {UserService} from '../../services/user.service';
import {PostService} from '../../services/post.service';
import {NgForOf, NgIf} from '@angular/common';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-user-detail',
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    HeaderComponent
  ],
  templateUrl: './user-detail.component.html',
  standalone: true,
  styleUrl: './user-detail.component.css'
})

export class UserDetailComponent implements OnInit {
  user: User | undefined;
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private postService: PostService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user => this.user = user);
    this.postService.getPostsByUser(id).subscribe(posts => this.posts = posts);
  }
}

