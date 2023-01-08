import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema, Query, Resolver } from "type-graphql";

import CampgroundResolver from "./resolvers/campgroundResolver";

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return "Hello World!";
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