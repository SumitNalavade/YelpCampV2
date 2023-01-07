import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCampgroundArgs } from "./args/DeleteOneCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class DeleteOneCampgroundResolver {
    deleteOneCampground(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCampgroundArgs): Promise<Campground | null>;
}
