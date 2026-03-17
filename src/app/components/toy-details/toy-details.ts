import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToyService } from '../../services/toy.service';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { Toy, Review } from '../../models/toy.model';

@Component({
  selector: 'app-toy-details',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule],
  templateUrl: './toy-details.html',
  styleUrl: './toy-details.css',
})
export class ToyDetails {
  toy?: Toy;
  reviews: Review[] = [];
  canReview: boolean = false;
  newReview: Review = { author: '', comment: '', rating: 5 };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toyService: ToyService,
    private authService: AuthService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');

    if (idStr) {
      const id = Number(idStr);
      this.toyService.getToyById(id).subscribe({
        next: (data) => {
          this.toy = data;
          this.reviews = (data as any).reviews || [];

          this.checkEligibility(id);
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Greška pri povlačenju podataka:', err);
        }
      });
    }
  }

  loadToy(id: number) {
    this.toyService.getToyById(id).subscribe(data => {
      this.toy = data;
      this.reviews = (data as any).reviews || [];
    });
  }

  checkEligibility(toyId: number) {
    const user = this.authService.getActiveUser();
    if (user) {
      this.cartService.getCartItems().subscribe(items => {
        this.canReview = items.some(item =>
          item.toy.toyId === toyId && item.status === 'pristiglo'
        );
        this.cdr.detectChanges();
      });
    } else {
      this.canReview = false;
    }
  }

  submitRating() {
    if (this.toy) {
      const user = this.authService.getActiveUser();
      this.newReview.author = user ? user.username : 'Anonimni roditelj';

      this.toyService.submitReview(this.toy.toyId, this.newReview).subscribe(() => {
        this.reviews.push({ ...this.newReview });
        this.canReview = false;
        alert('Hvala na oceni!');
      });
    }
  }

  reserve(toy: Toy) {
    if (this.authService.getActiveUser()) {
      this.cartService.addToCart(toy);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
