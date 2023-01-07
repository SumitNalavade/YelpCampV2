import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCampgroundArgs } from "./args/DeleteManyCampgroundArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCampgroundResolver {
    deleteManyCampground(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCampgroundArgs): Promise<AffectedRowsOutput>;
}
