import { CampgroundCreatesecondaryImageUrlsInput } from "../inputs/CampgroundCreatesecondaryImageUrlsInput";
import { UserCreateNestedOneWithoutCampgroundsInput } from "../inputs/UserCreateNestedOneWithoutCampgroundsInput";
export declare class CampgroundCreateInput {
    id?: string | undefined;
    name: string;
    description: string;
    averageRating?: number | undefined;
    primaryImageUrl: string;
    secondaryImageUrls?: CampgroundCreatesecondaryImageUrlsInput | undefined;
    address: string;
    price: number;
    user: UserCreateNestedOneWithoutCampgroundsInput;
}
