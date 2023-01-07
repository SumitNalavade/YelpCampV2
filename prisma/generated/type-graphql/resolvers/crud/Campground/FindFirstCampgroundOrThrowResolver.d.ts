import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCampgroundOrThrowArgs } from "./args/FindFirstCampgroundOrThrowArgs";
import { Campground } from "../../../models/Campground";
export declare class FindFirstCampgroundOrThrowResolver {
    findFirstCampgroundOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCampgroundOrThrowArgs): Promise<Campground | null>;
}
