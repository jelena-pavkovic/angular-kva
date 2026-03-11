import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Toy } from '../models/toy.model';

@Injectable({ providedIn: 'root' })
export class ToyService {
  private apiUrl = 'https://toy.pequla.com/api/toy';
  private baseUrl = 'https://toy.pequla.com';

  constructor(private http: HttpClient) {}

  // Dobavljanje svih igračaka sa API-ja
  getToys(): Observable<Toy[]> {
    return this.http.get<Toy[]>(this.apiUrl).pipe(
      map(toys => toys.map(toy => ({
        ...toy,
        // API vraća /img/1.png, mi pravimo pun URL
        imageUrl: toy.imageUrl ? this.baseUrl + toy.imageUrl : 'assets/placeholder.png'
      })))
    );
  }
}