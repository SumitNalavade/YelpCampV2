import type { GraphQLResolveInfo } from "graphql";
import { FindFirstReviewOrThrowArgs } from "./args/FindFirstReviewOrThrowArgs";
import { Review } from "../../../models/Review";
export declare class FindFirstReviewOrThrowResolver {
    findFirstReviewOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstReviewOrThrowArgs): Promise<Review | null>;
}
