import { Resolver, Query, Arg, FieldResolver, Root, Mutation, InputType, Field, ID } from "type-graphql";
import prisma from "../utils/prismaConfig";

import { Campground, Review, User } from "../../../prisma/generated/type-graphql";

@InputType()
class AddReviewInput implements Partial<Review> {
    @Field()
    rating: number

    @Field()
    body: string

    @Field(type => ID)
    userId: string

    @Field(type => ID)
    campgroundId: string
}

@Resolver(Review)
class ReviewResolver {
    @Query(() => [Review])
    async reviews() {
        return await prisma.review.findMany()        
    }

    @Query(() => Review)
    async review(@Arg("id") id: string) {
        return await prisma.review.findUniqueOrThrow({
            where: {
                id
            }
        })
    }

    @FieldResolver(() => User)
    async user(@Root() review: Review) {
        return await prisma.user.findUniqueOrThrow({
            where: {
                id: review.userId
            }
        })
    }

    @FieldResolver(() => Campground)
    async campground(@Root() review: Review) {
        return await prisma.campground.findUniqueOrThrow({
            where: {
                id: review.campgroundId
            }
        })
    }

    @Mutation(() => Review)
    async addReview(@Arg("data") addReviewData: AddReviewInput) {
        const { rating, body, userId, campgroundId } = addReviewData;

        return await prisma.review.create({
            data: {
                rating,
                body,
                userId,
                campgroundId
            }
        })
    }

    @Mutation(() => Review)
    async deleteReview(@Arg("id") id: string) {
        return await prisma.review.delete({
            where: {
                id
            }
        })
    }
}

export default ReviewResolver