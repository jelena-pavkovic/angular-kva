import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToyService } from '../../services/toy.service';
import { AuthService } from '../../services/auth.service';
import { Toy } from '../../models/toy.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  igracke: Toy[] = [];

  // PROMENA: Ubrizgavanje servisa kroz konstruktor
  constructor(
    private toyService: ToyService,
    public authService: AuthService, // public da bi mogla da ga koristiš u HTML-u
    //private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.toyService.getToys().subscribe(podaci => {
      this.igracke = podaci;
    });
  }

  // Popravljena funkcija: prima Toy (objekat), ne ToyService (klasu)
  reserveToy(toy: Toy) {
    if (this.authService.getActiveUser()) {
      // Ako je ulogovan, dodaj u korpu [cite: 20]
      //this.cartService.addToCart(toy);
      alert('Igračka je dodata u korpu!');
    } else {
      // Ako nije, pošalji ga na login [cite: 21]
      this.router.navigate(['/login']);
    }
  }

}
