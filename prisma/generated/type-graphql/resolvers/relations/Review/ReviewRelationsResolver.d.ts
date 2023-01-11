import { Campground } from "../../../models/Campground";
import { Review } from "../../../models/Review";
import { User } from "../../../models/User";
export declare class ReviewRelationsResolver {
    user(review: Review, ctx: any): Promise<User>;
    campground(review: Review, ctx: any): Promise<Campground>;
}
