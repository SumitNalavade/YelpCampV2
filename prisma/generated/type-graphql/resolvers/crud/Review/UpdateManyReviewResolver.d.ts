import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyReviewArgs } from "./args/UpdateManyReviewArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyReviewResolver {
    updateManyReview(ctx: any, info: GraphQLResolveInfo, args: UpdateManyReviewArgs): Promise<AffectedRowsOutput>;
}
