import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
    export class AuthService {
    private readonly USER_KEY = 'active_user';
    private readonly ALL_USERS_KEY = 'registered_users';

    constructor(private router: Router) {}

    register(userData: User): void {
        const users = JSON.parse(localStorage.getItem(this.ALL_USERS_KEY) || '[]');
        users.push(userData);
        localStorage.setItem(this.ALL_USERS_KEY, JSON.stringify(users));
        // Automatska prijava nakon registracije [cite: 22]
        this.login(userData.email, userData.password);
    }

    login(email: string, pass: string): boolean {
        const users: User[] = JSON.parse(localStorage.getItem(this.ALL_USERS_KEY) || '[]');
        const user = users.find(u => u.email === email && u.password === pass);
        
        if (user) {
            localStorage.setItem(this.USER_KEY, JSON.stringify(user));
            return true;
        }
        return false;
    }

    getActiveUser(): User | null {
        const data = localStorage.getItem(this.USER_KEY);
        return data ? JSON.parse(data) : null;
    }

    doLogout(): void {
        localStorage.removeItem(this.USER_KEY);
        this.router.navigate(['/login']);
    }

    updateProfile(updatedUser: User): void {
        localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
        // Ovde bi u pravoj aplikaciji išao i update u listi svih korisnika
    }
}