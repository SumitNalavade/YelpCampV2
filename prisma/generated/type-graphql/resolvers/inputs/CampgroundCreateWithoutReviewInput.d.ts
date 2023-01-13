import { CampgroundCreatesecondaryImageB64sInput } from "../inputs/CampgroundCreatesecondaryImageB64sInput";
import { UserCreateNestedOneWithoutCampgroundsInput } from "../inputs/UserCreateNestedOneWithoutCampgroundsInput";
export declare class CampgroundCreateWithoutReviewInput {
    id?: string | undefined;
    name: string;
    description: string;
    averageRating?: number | undefined;
    primaryImageB64: string;
    secondaryImageB64s?: CampgroundCreatesecondaryImageB64sInput | undefined;
    address: string;
    price: number;
    user: UserCreateNestedOneWithoutCampgroundsInput;
}