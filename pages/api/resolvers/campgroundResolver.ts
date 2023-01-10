import { Resolver, Query, Arg, FieldResolver, Root, Mutation, InputType, Field, ID } from "type-graphql";
import prisma from "../utils/prismaConfig";

import { Campground } from "../../../prisma/generated/type-graphql";
import { User } from "../../../prisma/generated/type-graphql";

@InputType()
class AddCampgroundInput implements Partial<Campground> {
    @Field()
    name: string

    @Field()
    description: string

    @Field()
    averageRating: number

    @Field()
    primaryImageUrl: string

    @Field(type => [String])
    secondaryImageUrls: string[]

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

    @Mutation(() => Campground)
    async addCampground(@Arg("data") addCampgroundData: AddCampgroundInput) {
        const { name, description, averageRating, primaryImageUrl, secondaryImageUrls, address, price, userId } = addCampgroundData;

        return await prisma.campground.create({
            data: {
                name,
                description,
                averageRating,
                primaryImageUrl,
                secondaryImageUrls,
                address,
                price,
                userId,
            }
        })
    }
}

export default CampgroundResolver