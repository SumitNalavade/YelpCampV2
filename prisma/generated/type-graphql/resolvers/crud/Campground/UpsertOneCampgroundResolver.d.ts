import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCampgroundArgs } from "./args/UpsertOneCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class UpsertOneCampgroundResolver {
    upsertOneCampground(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCampgroundArgs): Promise<Campground>;
}
