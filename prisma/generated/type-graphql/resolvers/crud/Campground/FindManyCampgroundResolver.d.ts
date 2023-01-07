import type { GraphQLResolveInfo } from "graphql";
import { FindManyCampgroundArgs } from "./args/FindManyCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class FindManyCampgroundResolver {
    campgrounds(ctx: any, info: GraphQLResolveInfo, args: FindManyCampgroundArgs): Promise<Campground[]>;
}
