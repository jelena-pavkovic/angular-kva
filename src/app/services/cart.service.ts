import { Injectable } from '@angular/core';
import { CartItem, CartItemStatus } from '../models/cart-item.model';
import { Toy } from '../models/toy.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
    export class CartService {
    private items: CartItem[] = [];
    // Koristimo Subject da bi se UI (npr. mat-icon za korpu) osvežavao automatski
    private cartSubject = new BehaviorSubject<CartItem[]>([]);

    getCartItems() {
        return this.cartSubject.asObservable();
    }

    addToCart(toy: Toy): void {
        const newItem: CartItem = {
            toy: toy,
            status: 'rezervisano', // Početni status [cite: 12]
            addedAt: new Date()
        };
        this.items.push(newItem);
        this.cartSubject.next(this.items);
        alert('Igračka je uspešno rezervisana!'); 
    }

    // Kupac može brisati samo ako je status 'pristiglo' [cite: 15]
    removeItem(index: number): void {
        if (this.items[index].status === 'pristiglo') {
            this.items.splice(index, 1);
            this.cartSubject.next(this.items);
        } else {
            alert('Možete brisati samo igračke koje su u statusu "pristiglo".');
        }
    }

    // Kupac može menjati podatke (npr. ocenu ili količinu) u statusu 'rezervisano' [cite: 15]
    updateStatus(index: number, newStatus: CartItemStatus): void {
        this.items[index].status = newStatus;
        this.cartSubject.next(this.items);
    }

    calculateTotal(): number {
        return this.items.reduce((acc, item) => acc + item.toy.price, 0); 
    }

    addRating(index: number, rating: number): void {
        if (this.items[index].status === 'pristiglo') {
            this.items[index].userRating = rating; 
            this.cartSubject.next(this.items);
        }
    }
}