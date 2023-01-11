import { Review } from "../models/Review";
import { User } from "../models/User";
import { CampgroundCount } from "../resolvers/outputs/CampgroundCount";
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
    Review?: Review[];
    _count?: CampgroundCount | null;
}
