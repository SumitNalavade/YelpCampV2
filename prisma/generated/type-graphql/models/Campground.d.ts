import { Review } from "../models/Review";
import { User } from "../models/User";
import { CampgroundCount } from "../resolvers/outputs/CampgroundCount";
export declare class Campground {
    id: string;
    name: string;
    description: string;
    primaryImageB64: string;
    secondaryImageB64s: string[];
    address: string;
    price: number;
    user?: User;
    userId: string;
    Review?: Review[];
    createdAt: Date;
    _count?: CampgroundCount | null;
}
