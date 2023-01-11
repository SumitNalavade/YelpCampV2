import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import prisma from "../utils/prismaConfig";

import { Campground, Review, User } from "../../../prisma/generated/type-graphql";

@Resolver(Review)
class ReviewResolver {
    @Query(returns => [Review])
    async reviews() {
        return await prisma.review.findMany()        
    }

    @Query(returns => Review)
    async review(@Arg("id") id: string) {
        return await prisma.review.findUniqueOrThrow({
            where: {
                id
            }
        })
    }

    @FieldResolver(returns => User)
    async user(@Root() review: Review) {
        return await prisma.user.findUniqueOrThrow({
            where: {
                id: review.userId
            }
        })
    }

    @FieldResolver(returns => Campground)
    async campground(@Root() review: Review) {
        return await prisma.campground.findUniqueOrThrow({
            where: {
                id: review.campgroundId
            }
        })
    }
}

export default ReviewResolver