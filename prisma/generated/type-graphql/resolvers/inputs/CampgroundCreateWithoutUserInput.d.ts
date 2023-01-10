import { CampgroundCreatesecondaryImageUrlsInput } from "../inputs/CampgroundCreatesecondaryImageUrlsInput";
export declare class CampgroundCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    description: string;
    averageRating?: number | undefined;
    primaryImageUrl: string;
    secondaryImageUrls?: CampgroundCreatesecondaryImageUrlsInput | undefined;
    address: string;
    price: number;
}
