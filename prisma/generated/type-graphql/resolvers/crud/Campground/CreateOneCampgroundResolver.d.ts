import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCampgroundArgs } from "./args/CreateOneCampgroundArgs";
import { Campground } from "../../../models/Campground";
export declare class CreateOneCampgroundResolver {
    createOneCampground(ctx: any, info: GraphQLResolveInfo, args: CreateOneCampgroundArgs): Promise<Campground>;
}
