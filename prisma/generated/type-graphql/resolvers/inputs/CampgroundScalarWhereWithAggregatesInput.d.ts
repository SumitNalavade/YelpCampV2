import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CampgroundScalarWhereWithAggregatesInput {
    AND?: CampgroundScalarWhereWithAggregatesInput[] | undefined;
    OR?: CampgroundScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CampgroundScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    averageRating?: FloatWithAggregatesFilter | undefined;
    primaryImageUrl?: StringWithAggregatesFilter | undefined;
    secondaryImageUrls?: StringNullableListFilter | undefined;
    address?: StringWithAggregatesFilter | undefined;
    price?: FloatWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
}
