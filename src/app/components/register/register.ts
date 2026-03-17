import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  userData: User = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    favoriteToyTypes: [],
    username: '',
    password: ''
  };

  availableTypes: string[] = ['Slagalica', 'Slikovnica', 'Figura', 'Automobil', 'Edukativna igra'];

  constructor(private authService: AuthService, private router: Router) { }

  onRegister() {
    const allFieldsFilled = Object.values(this.userData).every(value =>
      Array.isArray(value) ? value.length > 0 : (value !== null && value !== '')
    );

    if (allFieldsFilled) {
      this.authService.register(this.userData);
      alert('Uspešna registracija!');
      this.router.navigate(['/']);
    } else {
      alert('Molimo popunite apsolutno sva polja.');
    }
  }
}
