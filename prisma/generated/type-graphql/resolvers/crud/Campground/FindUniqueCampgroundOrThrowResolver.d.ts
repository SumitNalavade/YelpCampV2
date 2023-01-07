import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCampgroundOrThrowArgs } from "./args/FindUniqueCampgroundOrThrowArgs";
import { Campground } from "../../../models/Campground";
export declare class FindUniqueCampgroundOrThrowResolver {
    getCampground(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCampgroundOrThrowArgs): Promise<Campground | null>;
}
