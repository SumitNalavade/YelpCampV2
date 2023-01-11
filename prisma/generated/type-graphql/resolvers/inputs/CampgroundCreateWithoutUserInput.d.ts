import { CampgroundCreatesecondaryImageB64sInput } from "../inputs/CampgroundCreatesecondaryImageB64sInput";
import { ReviewCreateNestedManyWithoutCampgroundInput } from "../inputs/ReviewCreateNestedManyWithoutCampgroundInput";
export declare class CampgroundCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    description: string;
    averageRating?: number | undefined;
    primaryImageB64: string;
    secondaryImageB64s?: CampgroundCreatesecondaryImageB64sInput | undefined;
    address: string;
    price: number;
    Review?: ReviewCreateNestedManyWithoutCampgroundInput | undefined;
}
