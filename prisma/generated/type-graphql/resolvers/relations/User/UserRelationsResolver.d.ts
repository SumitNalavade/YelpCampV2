import { Account } from "../../../models/Account";
import { Campground } from "../../../models/Campground";
import { Review } from "../../../models/Review";
import { Session } from "../../../models/Session";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserCampgroundsArgs } from "./args/UserCampgroundsArgs";
import { UserReviewArgs } from "./args/UserReviewArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
export declare class UserRelationsResolver {
    accounts(user: User, ctx: any, args: UserAccountsArgs): Promise<Account[]>;
    sessions(user: User, ctx: any, args: UserSessionsArgs): Promise<Session[]>;
    Campgrounds(user: User, ctx: any, args: UserCampgroundsArgs): Promise<Campground[]>;
    Review(user: User, ctx: any, args: UserReviewArgs): Promise<Review[]>;
}
