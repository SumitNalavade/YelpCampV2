import type { GraphQLResolveInfo } from "graphql";
import { CreateManyReviewArgs } from "./args/CreateManyReviewArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyReviewResolver {
    createManyReview(ctx: any, info: GraphQLResolveInfo, args: CreateManyReviewArgs): Promise<AffectedRowsOutput>;
}
