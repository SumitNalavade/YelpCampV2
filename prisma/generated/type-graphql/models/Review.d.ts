import { Campground } from "../models/Campground";
import { User } from "../models/User";
export declare class Review {
    id: string;
    rating: number;
    body: string;
    user?: User;
    userId: string;
    campground?: Campground;
    campgroundId: string;
    createdAt: Date;
}
