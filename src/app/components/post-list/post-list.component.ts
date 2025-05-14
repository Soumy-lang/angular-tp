import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Post} from '../../models/post.model';
import {PostService} from '../../services/post.service';
import {HeaderComponent} from '../header/header.component';
import {PostCardComponent} from '../post-card/post-card.component';

@Component({
  selector: 'app-post-list',
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    PostCardComponent
  ],
  templateUrl: './post-list.component.html',
  standalone: true,
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
