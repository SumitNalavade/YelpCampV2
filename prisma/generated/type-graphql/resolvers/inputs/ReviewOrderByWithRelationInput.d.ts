import { CampgroundOrderByWithRelationInput } from "../inputs/CampgroundOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ReviewOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    body?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    campground?: CampgroundOrderByWithRelationInput | undefined;
    campgroundId?: "asc" | "desc" | undefined;
}
