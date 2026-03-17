import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Toy, Review } from '../models/toy.model';

@Injectable({
    providedIn: 'root'
})
export class ToyService {
    private readonly baseUrl = 'https://toy.pequla.com/api';

    constructor(private http: HttpClient) { }

    getToys(): Observable<Toy[]> {
        return this.http.get<Toy[]>(`${this.baseUrl}/toy`);
    }

    getToyById(id: number): Observable<Toy> {
        return this.http.get<Toy>(`${this.baseUrl}/toy/${id}`);
    }

    getAgeGroups(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/age-group`);
    }

    getTypes(): Observable<string[]> {
        return this.http.get<string[]>(`${this.baseUrl}/type`);
    }

    checkReviewEligibility(toyId: number, userId: number): Observable<boolean> {
        return this.http.get<boolean>(`${this.baseUrl}/user/${userId}/can-review/${toyId}`);
    }

    submitReview(toyId: number, review: Review): Observable<any> {
        return this.http.post(`${this.baseUrl}/toy/${toyId}/reviews`, review);
    }
}