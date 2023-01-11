import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyReviewArgs } from "./args/DeleteManyReviewArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyReviewResolver {
    deleteManyReview(ctx: any, info: GraphQLResolveInfo, args: DeleteManyReviewArgs): Promise<AffectedRowsOutput>;
}
