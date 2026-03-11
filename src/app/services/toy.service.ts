import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toy } from '../models/toy.model';

@Injectable({
    providedIn: 'root'
})
export class ToyService {
    private readonly baseUrl = 'https://toy.pequla.com/api';

    constructor(private http: HttpClient) {}

    // Lista svih igračaka (minimum 10 je ispunjeno preko API-ja)
    getToys(): Observable<Toy[]> {
        return this.http.get<Toy[]>(`${this.baseUrl}/toy`);
    }

    getToyById(id: number): Observable<Toy> {
        return this.http.get<Toy>(`${this.baseUrl}/toy/${id}`);
    }

    // Zahtevano za kriterijume pretrage u zadatku
    getAgeGroups(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/age-group`);
    }

    getTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/type`);
    }
}