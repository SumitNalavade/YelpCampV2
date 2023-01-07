import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCampgroundArgs } from "./args/FindFirstCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class FindFirstCampgroundResolver {
    findFirstCampground(ctx: any, info: GraphQLResolveInfo, args: FindFirstCampgroundArgs): Promise<Campground | null>;
}
