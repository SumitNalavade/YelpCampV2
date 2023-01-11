import type { GraphQLResolveInfo } from "graphql";
import { CreateOneReviewArgs } from "./args/CreateOneReviewArgs";
import { Review } from "../../../models/Review";
export declare class CreateOneReviewResolver {
    createOneReview(ctx: any, info: GraphQLResolveInfo, args: CreateOneReviewArgs): Promise<Review>;
}
