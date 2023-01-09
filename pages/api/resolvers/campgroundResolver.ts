import { Resolver, Query, Arg } from "type-graphql";
import prisma from "../utils/prismaConfig";

import { Campground } from "../../../prisma/generated/type-graphql";


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
}

export default CampgroundResolver