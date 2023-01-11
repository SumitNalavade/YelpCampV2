import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";

import CampgroundResolver from "./resolvers/campgroundResolver";
import ReviewResolver from "./resolvers/reviewResolver";

export const config = {
    api: {
      bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const schema = await buildSchema({
        resolvers: [CampgroundResolver, ReviewResolver],
        validate: false
    });
  
    const server = new ApolloServer({
        schema,
    });
  
    await server.start();

    await server.createHandler({ path: "/api/graphql" })(req, res)
}