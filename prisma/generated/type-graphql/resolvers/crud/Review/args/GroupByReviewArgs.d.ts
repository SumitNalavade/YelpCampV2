import { ReviewOrderByWithAggregationInput } from "../../../inputs/ReviewOrderByWithAggregationInput";
import { ReviewScalarWhereWithAggregatesInput } from "../../../inputs/ReviewScalarWhereWithAggregatesInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
export declare class GroupByReviewArgs {
    where?: ReviewWhereInput | undefined;
    orderBy?: ReviewOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "rating" | "body" | "userId" | "campgroundId" | "createdAt">;
    having?: ReviewScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
