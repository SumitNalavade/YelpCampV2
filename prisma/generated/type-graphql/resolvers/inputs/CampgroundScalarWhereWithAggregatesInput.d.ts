import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CampgroundScalarWhereWithAggregatesInput {
    AND?: CampgroundScalarWhereWithAggregatesInput[] | undefined;
    OR?: CampgroundScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CampgroundScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    imageURL?: StringWithAggregatesFilter | undefined;
    address?: StringWithAggregatesFilter | undefined;
    price?: FloatWithAggregatesFilter | undefined;
}
