import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CampgroundOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    primaryImageB64?: "asc" | "desc" | undefined;
    secondaryImageB64s?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    Review?: ReviewOrderByRelationAggregateInput | undefined;
}
