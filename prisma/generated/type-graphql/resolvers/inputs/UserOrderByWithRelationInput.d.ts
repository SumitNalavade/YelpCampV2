import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { CampgroundOrderByRelationAggregateInput } from "../inputs/CampgroundOrderByRelationAggregateInput";
import { ReviewOrderByRelationAggregateInput } from "../inputs/ReviewOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    emailVerified?: "asc" | "desc" | undefined;
    image?: "asc" | "desc" | undefined;
    accounts?: AccountOrderByRelationAggregateInput | undefined;
    sessions?: SessionOrderByRelationAggregateInput | undefined;
    Campgrounds?: CampgroundOrderByRelationAggregateInput | undefined;
    Review?: ReviewOrderByRelationAggregateInput | undefined;
}
