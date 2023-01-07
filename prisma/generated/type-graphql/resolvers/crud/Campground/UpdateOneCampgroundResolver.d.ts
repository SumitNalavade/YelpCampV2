import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCampgroundArgs } from "./args/UpdateOneCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class UpdateOneCampgroundResolver {
    updateOneCampground(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCampgroundArgs): Promise<Campground | null>;
}
