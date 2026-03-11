import { Toy } from './toy.model';

// Definišemo tipove statusa prema zahtevima iz PDF-a [cite: 12]
export type CartItemStatus = 'rezervisano' | 'pristiglo' | 'otkazano';

export interface CartItem {
    // Koristimo kompoziciju - CartItem sadrži sve podatke o igrački 
    toy: Toy;
    
    // Status naručene igračke [cite: 12]
    status: CartItemStatus;
    
    // Ocena je opciona jer se unosi samo za status 'pristiglo' 
    userRating?: number;
    
    // Dodajemo datum kada je ubačeno u korpu radi lakšeg praćenja sesije
    addedAt: Date;
}