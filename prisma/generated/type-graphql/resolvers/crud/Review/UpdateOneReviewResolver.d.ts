import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneReviewArgs } from "./args/UpdateOneReviewArgs";
import { Review } from "../../../models/Review";
export declare class UpdateOneReviewResolver {
    updateOneReview(ctx: any, info: GraphQLResolveInfo, args: UpdateOneReviewArgs): Promise<Review | null>;
}
