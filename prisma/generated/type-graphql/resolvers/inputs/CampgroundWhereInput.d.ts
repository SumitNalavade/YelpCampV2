import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CampgroundWhereInput {
    AND?: CampgroundWhereInput[] | undefined;
    OR?: CampgroundWhereInput[] | undefined;
    NOT?: CampgroundWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringFilter | undefined;
    imageURL?: StringFilter | undefined;
    address?: StringFilter | undefined;
    price?: FloatFilter | undefined;
}
