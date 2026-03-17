import { Toy } from './toy.model';

export type CartItemStatus = 'rezervisano' | 'pristiglo' | 'otkazano';

export interface CartItem {
    toy: Toy;
    status: CartItemStatus;
    quantity: number;

    userRating?: number;
    addedAt: Date;
}