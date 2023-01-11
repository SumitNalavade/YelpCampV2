import { FloatFilter } from "../inputs/FloatFilter";
import { ReviewListRelationFilter } from "../inputs/ReviewListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class CampgroundWhereInput {
    AND?: CampgroundWhereInput[] | undefined;
    OR?: CampgroundWhereInput[] | undefined;
    NOT?: CampgroundWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    averageRating?: FloatFilter | undefined;
    primaryImageB64?: StringFilter | undefined;
    secondaryImageB64s?: StringNullableListFilter | undefined;
    address?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    Review?: ReviewListRelationFilter | undefined;
}
