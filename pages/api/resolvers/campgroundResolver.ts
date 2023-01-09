import { PrismaClient } from "@prisma/client";
import { Resolver, Query, Arg } from "type-graphql";

import { Campground } from "../../../prisma/generated/type-graphql";

const prisma = new PrismaClient()

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