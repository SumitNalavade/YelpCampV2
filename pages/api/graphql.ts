import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { buildSchema, Query, Resolver } from "type-graphql";

@Resolver()
class HelloResolver {
  @Query(() => String)
  hello() {
    return "Hello World!";
  }
}

const schema = await buildSchema({
  resolvers: [HelloResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
    api: {
      bodyParser: false,
    },
};

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await startServer;
    await server.createHandler({ path: "/api/graphql" })(req, res)
}
  