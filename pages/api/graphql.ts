import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema, Mutation, Query, Resolver, Arg } from "type-graphql";
import { PrismaClient } from '@prisma/client'

import { Campground } from "../../prisma/generated/type-graphql";

const prisma = new PrismaClient()

@Resolver(Campground)
class CampgroundResolver {
    @Query(() => [Campground])
    async campgrounds() {
        return await prisma.campground.findMany()
    }

    @Mutation(() => Campground)
    async addCampground(@Arg("name") name: string, @Arg("description") description: string, @Arg("imageURL") imageURL: string, @Arg("address") address: string, @Arg("price") price: number) {
        const newCampground = { name, description, imageURL, address, price }
        return await prisma.campground.create({ data: newCampground })
    }
}

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const schema = await buildSchema({
        resolvers: [CampgroundResolver],
      });
      
      const server = new ApolloServer({
        schema,
      });

    await server.start();

    await server.createHandler({ path: "/api/graphql" })(req, res)
}
  