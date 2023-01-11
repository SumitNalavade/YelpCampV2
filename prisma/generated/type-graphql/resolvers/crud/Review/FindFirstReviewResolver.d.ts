import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReviewArgs } from "./args/FindFirstReviewArgs";
import { Review } from "../../../models/Review";
export declare class FindFirstReviewResolver {
    findFirstReview(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewArgs): Promise<Review | null>;
}
