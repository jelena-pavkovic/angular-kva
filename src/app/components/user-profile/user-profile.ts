import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


import { MatSnackBar } from '@angular/material/snack-bar';
import { inject } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile {
  user: User | null = null;
  isEditing: boolean = false;

  private snackBar = inject(MatSnackBar);

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const activeUser = this.authService.getActiveUser();
    if (activeUser) {
      this.user = { ...activeUser };
    }
  }

  onEditProfile() {
    this.isEditing = true;
  }

  onSave() {
    if (this.user) {
      this.authService.updateUser(this.user);
      this.isEditing = false;
      this.snackBar.open('Podaci su uspešno ažurirani!', 'Zatvori', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['success-snackbar']
      });
    }
  }

  onCancel() {
    const activeUser = this.authService.getActiveUser();
    if (activeUser) {
      this.user = { ...activeUser };
    }
    this.isEditing = false;
  }
}
