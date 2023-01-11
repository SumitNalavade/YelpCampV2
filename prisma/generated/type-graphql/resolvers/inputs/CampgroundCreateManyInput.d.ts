import { CampgroundCreatesecondaryImageB64sInput } from "../inputs/CampgroundCreatesecondaryImageB64sInput";
export declare class CampgroundCreateManyInput {
    id?: string | undefined;
    name: string;
    description: string;
    averageRating?: number | undefined;
    primaryImageB64: string;
    secondaryImageB64s?: CampgroundCreatesecondaryImageB64sInput | undefined;
    address: string;
    price: number;
    userId: string;
}
