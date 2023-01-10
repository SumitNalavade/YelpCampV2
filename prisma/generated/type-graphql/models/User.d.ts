import { Account } from "../models/Account";
import { Campground } from "../models/Campground";
import { Session } from "../models/Session";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name?: string | null;
    email?: string | null;
    emailVerified?: Date | null;
    image?: string | null;
    accounts?: Account[];
    sessions?: Session[];
    Campgrounds?: Campground[];
    _count?: UserCount | null;
}
