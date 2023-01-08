import { PrismaClient } from "@prisma/client";
import { Resolver, Query } from "type-graphql";

import { Campground } from "../../../prisma/generated/type-graphql";

const prisma = new PrismaClient()

@Resolver(Campground)
class CampgroundResolver {
    @Query(() => [Campground])
    async campgrounds() {
        return await prisma.campground.findMany()
    }
}

export default CampgroundResolver