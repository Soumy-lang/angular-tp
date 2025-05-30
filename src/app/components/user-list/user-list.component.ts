import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {RouterLink} from '@angular/router';
import { CommonModule } from '@angular/common';
import {UserCardComponent} from '../user-card.component';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-user-list',
  imports: [
    CommonModule,
    RouterLink,
    UserCardComponent,
    HeaderComponent
  ],
  templateUrl: './user-list.component.html',
  standalone: true,
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
}
