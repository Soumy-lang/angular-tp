import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PostComment } from '../models/post-comment.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getCommentsByPost(postId: number): Observable<PostComment[]> {
    return this.http.get<PostComment[]>(`${this.apiUrl}?postId=${postId}`);
  }

}
