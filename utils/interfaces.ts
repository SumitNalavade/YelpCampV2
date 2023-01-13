import { User } from "../prisma/generated/type-graphql";

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
  id: string
  rating: number
  body: string
  user: User
  userId: string
  campground: ICampground
  campgroundId: string
}