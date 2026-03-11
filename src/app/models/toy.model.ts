export interface AgeGroup {
  ageGroupId: number;
  name: string;
  description: string;
}

export interface ToyType {
  typeId: number;
  name: string;
  description: string;
}

export interface Review {
  author: string;   // Ime roditelja ili deteta [cite: 7]
  comment: string;  // Tekst recenzije
  rating: number;   // Ocena (1-5)
}

export interface Toy {
  toyId: number; // API koristi toyId umesto id [cite: 5]
  name: string;
  permalink: string;
  description: string;
  targetGroup: 'svi' | 'dečak' | 'devojčica'; // [cite: 7, 12]
  productionDate: string; // 
  price: number;
  imageUrl: string;
  ageGroup: AgeGroup; // Objekat, ne string 
  type: ToyType; // Objekat, ne string 
  
  // Polja potrebna za simulaciju pozadinske logike i korpe 
  status?: 'rezervisano' | 'pristiglo' | 'otkazano'; 
  userRating?: number; // Ocena (samo za status 'pristiglo') [cite: 12, 17]
  reviews?: string[]; // Recenzije korisnika [cite: 7, 10, 16]
}