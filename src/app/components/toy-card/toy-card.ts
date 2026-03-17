import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Toy } from '../../models/toy.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toy-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  template: `
    <mat-card class="toy-card" (click)="viewDetails()" style="cursor: pointer;">
      <img mat-card-image [src]="'https://toy.pequla.com' + toy.imageUrl" [alt]="toy.name">
      <mat-card-header>
        <mat-card-title>{{ toy.name }}</mat-card-title>
        <mat-card-subtitle>{{ toy.type.name }} | {{ toy.targetGroup }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>{{ toy.description }}</p>
        <p><strong>Uzrast:</strong> {{ toy.ageGroup.name }}</p>
        <p class="price">{{ toy.price | currency:'RSD ':'code':'1.0-0' }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="onReserve.emit(toy)">
          REZERVIŠI
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .toy-card { 
      height: 100%; 
      display: flex; 
      flex-direction: column; 
      justify-content: space-between;
      font-family: 'Baloo 2', cursive; /* Primena na celu karticu */
    }
    
    mat-card-title {
      font-family: 'Baloo 2', cursive;
      font-weight: 700; /* Podebljan naslov za "toy" vibe */
    }

    .price { 
      font-size: 1.2rem; 
      color: #3f51b5; 
      font-weight: 800; 
      font-family: 'Baloo 2', cursive;
    }

    button {
      font-family: 'Baloo 2', cursive;
      font-weight: 600;
    }
  `]
})
export class ToyCard {
  constructor(private router: Router) { }

  viewDetails() {
    this.router.navigate(['/toy', this.toy.toyId]);
  }

  @Input({ required: true }) toy!: Toy;
  @Output() onReserve = new EventEmitter<Toy>();
}
