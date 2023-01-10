import { Campground } from "../../../models/Campground";
import { User } from "../../../models/User";
export declare class CampgroundRelationsResolver {
    user(campground: Campground, ctx: any): Promise<User>;
}
