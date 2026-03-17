import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToyService } from '../../services/toy.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { ToyCard } from '../toy-card/toy-card';
import { Toy, ToyType, AgeGroup } from '../../models/toy.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ToyCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  allToys: Toy[] = [];
  filteredToys: Toy[] = [];
  types: ToyType[] = [];
  ageGroups: AgeGroup[] = [];

  filters = {
    name: '',
    typeId: null as number | null,
    ageGroupId: null as number | null,
    target: '',
    maxPrice: null as number | null
  };

  constructor(
    private toyService: ToyService,
    public authService: AuthService,
    private cartService: CartService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.toyService.getToys().subscribe({
      next: (data) => {
        this.allToys = data;
        this.applyFilters();
      },
      error: (err) => console.error('Greška pri učitavanju igračaka', err)
    });

    this.toyService.getTypes().subscribe((t: any) => this.types = t);
    this.toyService.getAgeGroups().subscribe((a: any) => this.ageGroups = a);
  }

  applyFilters() {
    this.filteredToys = this.allToys.filter(toy => {
      const matchName = toy.name.toLowerCase().includes(this.filters.name.toLowerCase());

      const matchType = this.filters.typeId ? toy.type.typeId === this.filters.typeId : true;
      const matchAge = this.filters.ageGroupId ? toy.ageGroup.ageGroupId === this.filters.ageGroupId : true;

      const matchTarget = this.filters.target ? toy.targetGroup === this.filters.target : true;
      const matchPrice = this.filters.maxPrice ? toy.price <= this.filters.maxPrice : true;

      return matchName && matchType && matchAge && matchTarget && matchPrice;
    });

    this.cdr.detectChanges();
  }

  handleReservation(toy: Toy) {
    if (this.authService.getActiveUser()) {
      this.cartService.addToCart(toy);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
