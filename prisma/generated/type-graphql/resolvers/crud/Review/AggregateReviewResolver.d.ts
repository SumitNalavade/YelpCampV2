import type { GraphQLResolveInfo } from "graphql";
import { AggregateReviewArgs } from "./args/AggregateReviewArgs";
import { AggregateReview } from "../../outputs/AggregateReview";
export declare class AggregateReviewResolver {
    aggregateReview(ctx: any, info: GraphQLResolveInfo, args: AggregateReviewArgs): Promise<AggregateReview>;
}
