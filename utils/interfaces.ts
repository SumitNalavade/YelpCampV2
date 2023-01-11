import { User } from "@prisma/client";

export interface ICampground {
  id: string;
  name: string;
  description: string;
  averageRating: number;
  reviews: IReview[]
  primaryImageB64: string;
  secondaryImageB64s: string[];
  address: string;
  price: number;
  user: User
}

export interface IReview {
  rating: number
  body: string
  user: User
}