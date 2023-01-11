import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneReviewArgs } from "./args/DeleteOneReviewArgs";
import { Review } from "../../../models/Review";
export declare class DeleteOneReviewResolver {
    deleteOneReview(ctx: any, info: GraphQLResolveInfo, args: DeleteOneReviewArgs): Promise<Review | null>;
}
