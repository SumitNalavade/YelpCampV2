import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class CampgroundWhereInput {
    AND?: CampgroundWhereInput[] | undefined;
    OR?: CampgroundWhereInput[] | undefined;
    NOT?: CampgroundWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    averageRating?: FloatFilter | undefined;
    primaryImageUrl?: StringFilter | undefined;
    secondaryImageUrls?: StringNullableListFilter | undefined;
    address?: StringFilter | undefined;
    price?: FloatFilter | undefined;
}
