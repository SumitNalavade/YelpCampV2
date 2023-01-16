import { ReviewAvgOrderByAggregateInput } from "../inputs/ReviewAvgOrderByAggregateInput";
import { ReviewCountOrderByAggregateInput } from "../inputs/ReviewCountOrderByAggregateInput";
import { ReviewMaxOrderByAggregateInput } from "../inputs/ReviewMaxOrderByAggregateInput";
import { ReviewMinOrderByAggregateInput } from "../inputs/ReviewMinOrderByAggregateInput";
import { ReviewSumOrderByAggregateInput } from "../inputs/ReviewSumOrderByAggregateInput";
export declare class ReviewOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    campgroundId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    _count?: ReviewCountOrderByAggregateInput | undefined;
    _avg?: ReviewAvgOrderByAggregateInput | undefined;
    _max?: ReviewMaxOrderByAggregateInput | undefined;
    _min?: ReviewMinOrderByAggregateInput | undefined;
    _sum?: ReviewSumOrderByAggregateInput | undefined;
}
