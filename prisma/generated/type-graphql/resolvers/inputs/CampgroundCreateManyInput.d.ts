import { CampgroundCreatesecondaryImageUrlsInput } from "../inputs/CampgroundCreatesecondaryImageUrlsInput";
export declare class CampgroundCreateManyInput {
    id?: string | undefined;
    name: string;
    description: string;
    averageRating?: number | undefined;
    primaryImageUrl: string;
    secondaryImageUrls?: CampgroundCreatesecondaryImageUrlsInput | undefined;
    address: string;
    price: number;
}
