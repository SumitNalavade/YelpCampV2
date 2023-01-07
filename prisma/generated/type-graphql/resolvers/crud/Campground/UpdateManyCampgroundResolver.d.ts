import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCampgroundArgs } from "./args/UpdateManyCampgroundArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCampgroundResolver {
    updateManyCampground(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCampgroundArgs): Promise<AffectedRowsOutput>;
}
