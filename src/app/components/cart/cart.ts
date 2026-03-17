import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatSelectModule, FormsModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  items: CartItem[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(data => {
      this.items = data;
      this.totalPrice = this.cartService.calculateTotal();
    });
  }

  changeQuantity(index: number, qty: number) {
    this.cartService.updateQuantity(index, qty);
  }

  changeStatus(index: number, newStatus: any) {
    this.cartService.updateStatus(index, newStatus);
  }

  remove(index: number) {
    this.cartService.removeItem(index);
  }
}
