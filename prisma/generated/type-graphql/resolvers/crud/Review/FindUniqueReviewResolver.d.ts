import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueReviewArgs } from "./args/FindUniqueReviewArgs";
import { Review } from "../../../models/Review";
export declare class FindUniqueReviewResolver {
    review(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReviewArgs): Promise<Review | null>;
}
