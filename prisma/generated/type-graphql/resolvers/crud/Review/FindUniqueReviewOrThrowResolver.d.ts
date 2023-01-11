import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueReviewOrThrowArgs } from "./args/FindUniqueReviewOrThrowArgs";
import { Review } from "../../../models/Review";
export declare class FindUniqueReviewOrThrowResolver {
    getReview(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewOrThrowArgs): Promise<Review | null>;
}
