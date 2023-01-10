import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CampgroundOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    averageRating?: "asc" | "desc" | undefined;
    primaryImageUrl?: "asc" | "desc" | undefined;
    secondaryImageUrls?: "asc" | "desc" | undefined;
    address?: "asc" | "desc" | undefined;
    price?: "asc" | "desc" | undefined;
    user?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
}
