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
  author: string;
  comment: string;
  rating: number;
}

export interface Toy {
  toyId: number;
  name: string;
  permalink: string;
  description: string;
  targetGroup: 'svi' | 'dečak' | 'devojčica';
  productionDate: string;
  price: number;
  imageUrl: string;
  ageGroup: AgeGroup;
  type: ToyType;

  status?: 'rezervisano' | 'pristiglo' | 'otkazano';
  userRating?: number;
  reviews?: string[];
}