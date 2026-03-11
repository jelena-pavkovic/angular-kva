import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Za ngModel
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Ove promenljive su nedostajale (Greška TS2339)
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Ova funkcija je nedostajala (Greška TS2339)
  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/']);
    } else {
      alert('Pogrešni podaci!');
    }
  }
}
