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
import { MatSelectModule } from '@angular/material/select';


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
    MatButtonModule,
    MatSelectModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile implements OnInit {
  user: User | null = null;
  isEditing: boolean = false;

  isChangingPassword: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';

  availableTypes: string[] = [
    'Slagalica', 
    'Slikovnica', 
    'Figura', 
    'Automobil', 
    'Edukativna igra'
  ];

  private snackBar = inject(MatSnackBar);

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
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
      if (this.isChangingPassword) {
        if (this.newPassword !== this.confirmPassword) {
          this.snackBar.open('Lozinke se ne poklapaju!', 'Zatvori', { duration: 3000 });
          return;
        }
        if (this.newPassword.length < 4) {
          this.snackBar.open('Lozinka mora imati bar 4 karaktera!', 'Zatvori', { duration: 3000 });
          return;
        }
        this.user.password = this.newPassword;
      }

      this.authService.updateUser(this.user);
      this.resetPasswordFields();
      this.isEditing = false;
      this.snackBar.open('Podaci su uspešno ažurirani!', 'Zatvori', { duration: 3000 });
    }
  }

  onCancel() {
    this.loadUserData();
    this.resetPasswordFields();
    this.isEditing = false;
  }

  resetPasswordFields() {
    this.isChangingPassword = false;
    this.newPassword = '';
    this.confirmPassword = '';
  }
}
