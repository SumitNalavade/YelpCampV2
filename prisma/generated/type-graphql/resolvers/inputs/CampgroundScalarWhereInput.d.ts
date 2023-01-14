import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class CampgroundScalarWhereInput {
    AND?: CampgroundScalarWhereInput[] | undefined;
    OR?: CampgroundScalarWhereInput[] | undefined;
    NOT?: CampgroundScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    primaryImageB64?: StringFilter | undefined;
    secondaryImageB64s?: StringNullableListFilter | undefined;
    address?: StringFilter | undefined;
    price?: FloatFilter | undefined;
    userId?: StringFilter | undefined;
}
