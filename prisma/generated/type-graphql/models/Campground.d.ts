import { User } from "../models/User";
export declare class Campground {
    id: string;
    name: string;
    description: string;
    averageRating: number;
    primaryImageB64: string;
    secondaryImageB64s: string[];
    address: string;
    price: number;
    user?: User;
    userId: string;
}
