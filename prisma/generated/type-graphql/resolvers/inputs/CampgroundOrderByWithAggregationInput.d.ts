import { CampgroundAvgOrderByAggregateInput } from "../inputs/CampgroundAvgOrderByAggregateInput";
import { CampgroundCountOrderByAggregateInput } from "../inputs/CampgroundCountOrderByAggregateInput";
import { CampgroundMaxOrderByAggregateInput } from "../inputs/CampgroundMaxOrderByAggregateInput";
import { CampgroundMinOrderByAggregateInput } from "../inputs/CampgroundMinOrderByAggregateInput";
import { CampgroundSumOrderByAggregateInput } from "../inputs/CampgroundSumOrderByAggregateInput";
export declare class CampgroundOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    imageURL?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    _count?: CampgroundCountOrderByAggregateInput | undefined;
    _avg?: CampgroundAvgOrderByAggregateInput | undefined;
    _max?: CampgroundMaxOrderByAggregateInput | undefined;
    _min?: CampgroundMinOrderByAggregateInput | undefined;
    _sum?: CampgroundSumOrderByAggregateInput | undefined;
}