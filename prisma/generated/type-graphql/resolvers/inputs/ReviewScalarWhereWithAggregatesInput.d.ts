import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReviewScalarWhereWithAggregatesInput {
    AND?: ReviewScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReviewScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReviewScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    rating?: IntWithAggregatesFilter | undefined;
    body?: StringWithAggregatesFilter | undefined;
    userId?: StringWithAggregatesFilter | undefined;
    campgroundId?: StringWithAggregatesFilter | undefined;
}
