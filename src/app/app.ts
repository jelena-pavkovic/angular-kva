import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common'; // Obavezno za *ngFor
import { ToyService } from './services/toy'; // Proveri putanju
import { Toy } from './models/toy.model';
import { Observable } from 'rxjs'; // Dodaj ovaj import

@Component({
  selector: 'app-root',
  standalone: true, //dodala
  imports: [CommonModule],//promena
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
// Inicijalizujemo prazan niz igračaka [cite: 6]
  igracke$!: Observable<Toy[]>;

  // Korak 5.1: Ubacivanje servisa u konstruktor
  constructor(private toyService: ToyService) {}

  // Korak 5.2: Pozivanje servisa pri učitavanju komponente
  ngOnInit() {
    /*this.toyService.getToys().subscribe({
      next: (podaci) => {
        this.igracke = podaci;
        console.log('Igračke su uspešno učitane:', this.igracke);
      },
      error: (err) => {
        console.error('Greška pri učitavanju:', err);
      }
    });*/
    this.igracke$ = this.toyService.getToys();
  }
}
