import { z } from "zod";
import { User } from "../prisma/generated/type-graphql";

export const reviewFormSchema = z.object({
  rating: z.number().min(1).max(5),
  body: z.string().max(100),
  userId: z.string(),
  campgroundId: z.string()
})
export type TReviewForm = z.infer<typeof reviewFormSchema>

export interface IReview extends TReviewForm {
  id: string
  user: User
  campground: ICampground
}

export const campgroundFormSchema = z.object({
  name: z.string(),
  address: z.string(),
  price: z.number(),
  description: z.string().max(500),
  primaryImage: z.array(z.any()).length(1),
  secondaryImages: z.array(z.any()),
  userId: z.string()
})
export type TCampgroundForm = z.infer<typeof campgroundFormSchema>

export interface ICampground extends TCampgroundForm {
  id: string,
  reviews: IReview[]
  primaryImageB64: string
  secondaryImageB64s: string[]
  user: User
}
