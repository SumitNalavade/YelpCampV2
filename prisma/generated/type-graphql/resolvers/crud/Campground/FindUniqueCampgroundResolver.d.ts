import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCampgroundArgs } from "./args/FindUniqueCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class FindUniqueCampgroundResolver {
    campground(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCampgroundArgs): Promise<Campground | null>;
}
