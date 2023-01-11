import type { GraphQLResolveInfo } from "graphql";
import { FindManyReviewArgs } from "./args/FindManyReviewArgs";
import { Review } from "../../../models/Review";
export declare class FindManyReviewResolver {
    reviews(ctx: any, info: GraphQLResolveInfo, args: FindManyReviewArgs): Promise<Review[]>;
}
