import { User } from "../models/User";
export declare class Campground {
    id: string;
    name: string;
    description: string;
    averageRating: number;
    primaryImageUrl: string;
    secondaryImageUrls: string[];
    address: string;
    price: number;
    user?: User;
    userId: string;
}
