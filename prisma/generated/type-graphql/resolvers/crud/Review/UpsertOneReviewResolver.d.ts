import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneReviewArgs } from "./args/UpsertOneReviewArgs";
import { Review } from "../../../models/Review";
export declare class UpsertOneReviewResolver {
    upsertOneReview(ctx: any, info: GraphQLResolveInfo, args: UpsertOneReviewArgs): Promise<Review>;
}
