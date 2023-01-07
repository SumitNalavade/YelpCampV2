import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCampgroundArgs } from "./args/CreateManyCampgroundArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCampgroundResolver {
    createManyCampground(ctx: any, info: GraphQLResolveInfo, args: CreateManyCampgroundArgs): Promise<AffectedRowsOutput>;
}
