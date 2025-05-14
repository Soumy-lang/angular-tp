import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// @ts-ignore
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">
          <strong>Email:</strong> {{ user.email }}<br>
          <strong>Téléphone:</strong> {{ user.phone }}
        </p>
        <a [routerLink]="['/users', user.id]" class="btn btn-primary btn-sm">Voir profil</a>
      </div>
    </div>
  `
})
export class UserCardComponent {
  @Input() user!: User;
}
