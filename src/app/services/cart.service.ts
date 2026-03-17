import { Injectable, inject } from '@angular/core';
import { CartItem, CartItemStatus } from '../models/cart-item.model';
import { Toy } from '../models/toy.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class CartService {
    private items: CartItem[] = [];
    private cartSubject = new BehaviorSubject<CartItem[]>([]);
    private snackBar = inject(MatSnackBar);

    getCartItems() {
        return this.cartSubject.asObservable();
    }

    addToCart(toy: Toy): void {
        const existingItem = this.items.find(item =>
            item.toy.toyId === toy.toyId && item.status === 'rezervisano'
        );

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem: CartItem = {
                toy: toy,
                status: 'rezervisano',
                quantity: 1,
                addedAt: new Date()
            };
            this.items.push(newItem);
        }

        this.cartSubject.next(this.items);
        this.snackBar.open('Igračka je uspešno rezervisana!', 'Zatvori', {
            duration: 3000,
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            panelClass: ['success-snackbar']
        });
    }

    updateQuantity(index: number, newQuantity: number): void {
        if (newQuantity > 0) {
            this.items[index].quantity = newQuantity;
            this.cartSubject.next(this.items);
        }
    }

    calculateTotal(): number {
        return this.items
            .filter(item => item.status !== 'otkazano')
            .reduce((acc, item) => acc + (item.toy.price * item.quantity), 0);
    }

    removeItem(index: number): void {
        if (this.items[index].status === 'pristiglo' || this.items[index].status === 'otkazano') {
            this.items.splice(index, 1);
            this.cartSubject.next(this.items);
        } else {
            alert('Ne mozete brisati igracke sa statusom "rezervisano"');
        }
    }

    updateStatus(index: number, newStatus: CartItemStatus): void {
        this.items[index].status = newStatus;
        this.cartSubject.next(this.items);
    }

    addRating(index: number, rating: number): void {
        if (this.items[index].status === 'pristiglo') {
            this.items[index].userRating = rating;
            this.cartSubject.next(this.items);
        }
    }
}