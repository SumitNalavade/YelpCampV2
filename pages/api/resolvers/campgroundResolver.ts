import { Resolver, Query, Arg, FieldResolver, Root, Mutation, InputType, Field, ID } from "type-graphql";
import prisma from "../utils/prismaConfig";

import { Campground, Review, User } from "../../../prisma/generated/type-graphql";

@InputType()
class AddCampgroundInput implements Partial<Campground> {
    @Field()
    name: string

    @Field()
    description: string

    @Field()
    primaryImageB64: string

    @Field(type => [String])
    secondaryImageB64s: string[]

    @Field()
    address: string

    @Field()
    price: number

    @Field(type => ID)
    userId: string
}

@Resolver(Campground)
class CampgroundResolver {
    @Query(() => [Campground])
    async campgrounds() {
        return await prisma.campground.findMany()
    }

    @Query(() => Campground)
    async campground(@Arg("id") id: string) {
        return await prisma.campground.findFirstOrThrow({
            where: {
                id
            }
        })
    }

    @FieldResolver(() => User)
    async user(@Root() campground: Campground) {
        return await prisma.user.findUnique({
            where: {
                id: campground.userId
            }
        })
    }

    @FieldResolver(() => [Review])
    async reviews(@Root() campground: Campground) {
        return await prisma.review.findMany({
            where: {
                campgroundId: campground.id
            }
        })
    }

    @Mutation(() => Campground)
    async addCampground(@Arg("data") addCampgroundData: AddCampgroundInput) {
        const { name, description, primaryImageB64, secondaryImageB64s, address, price, userId } = addCampgroundData;

        return await prisma.campground.create({
            data: {
                name,
                description,
                primaryImageB64,
                secondaryImageB64s,
                address,
                price,
                userId,
            }
        })
    }
}

export default CampgroundResolver