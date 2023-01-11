import { Campground } from "../../../models/Campground";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
import { CampgroundReviewArgs } from "./args/CampgroundReviewArgs";
export declare class CampgroundRelationsResolver {
    user(campground: Campground, ctx: any): Promise<User>;
    Review(campground: Campground, ctx: any, args: CampgroundReviewArgs): Promise<Review[]>;
}
