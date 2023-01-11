import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class ReviewScalarWhereInput {
    AND?: ReviewScalarWhereInput[] | undefined;
    OR?: ReviewScalarWhereInput[] | undefined;
    NOT?: ReviewScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    rating?: IntFilter | undefined;
    body?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    campgroundId?: StringFilter | undefined;
}
