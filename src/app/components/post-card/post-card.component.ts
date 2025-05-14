import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-card',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './post-card.component.html',
  standalone: true,
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() post!: Post;
}
