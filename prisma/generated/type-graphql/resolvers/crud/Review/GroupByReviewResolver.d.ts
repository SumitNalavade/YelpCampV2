import type { GraphQLResolveInfo } from "graphql";
import { GroupByReviewArgs } from "./args/GroupByReviewArgs";
import { ReviewGroupBy } from "../../outputs/ReviewGroupBy";
export declare class GroupByReviewResolver {
    groupByReview(ctx: any, info: GraphQLResolveInfo, args: GroupByReviewArgs): Promise<ReviewGroupBy[]>;
}
