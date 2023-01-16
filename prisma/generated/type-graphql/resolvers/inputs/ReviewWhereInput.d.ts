import { CampgroundRelationFilter } from "../inputs/CampgroundRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ReviewWhereInput {
    AND?: ReviewWhereInput[] | undefined;
    OR?: ReviewWhereInput[] | undefined;
    NOT?: ReviewWhereInput[] | undefined;
    id?: StringFilter | undefined;
    rating?: IntFilter | undefined;
    body?: StringFilter | undefined;
    user?: UserRelationFilter | undefined;
    userId?: StringFilter | undefined;
    campground?: CampgroundRelationFilter | undefined;
    campgroundId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
}
