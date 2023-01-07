import type { GraphQLResolveInfo } from "graphql";
import { AggregateCampgroundArgs } from "./args/AggregateCampgroundArgs";
import { CreateManyCampgroundArgs } from "./args/CreateManyCampgroundArgs";
import { CreateOneCampgroundArgs } from "./args/CreateOneCampgroundArgs";
import { DeleteManyCampgroundArgs } from "./args/DeleteManyCampgroundArgs";
import { DeleteOneCampgroundArgs } from "./args/DeleteOneCampgroundArgs";
import { FindFirstCampgroundArgs } from "./args/FindFirstCampgroundArgs";
import { FindFirstCampgroundOrThrowArgs } from "./args/FindFirstCampgroundOrThrowArgs";
import { FindManyCampgroundArgs } from "./args/FindManyCampgroundArgs";
import { FindUniqueCampgroundArgs } from "./args/FindUniqueCampgroundArgs";
import { FindUniqueCampgroundOrThrowArgs } from "./args/FindUniqueCampgroundOrThrowArgs";
import { GroupByCampgroundArgs } from "./args/GroupByCampgroundArgs";
import { UpdateManyCampgroundArgs } from "./args/UpdateManyCampgroundArgs";
import { UpdateOneCampgroundArgs } from "./args/UpdateOneCampgroundArgs";
import { UpsertOneCampgroundArgs } from "./args/UpsertOneCampgroundArgs";
import { Campground } from "../../../models/Campground";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCampground } from "../../outputs/AggregateCampground";
import { CampgroundGroupBy } from "../../outputs/CampgroundGroupBy";
export declare class CampgroundCrudResolver {
    aggregateCampground(ctx: any, info: GraphQLResolveInfo, args: AggregateCampgroundArgs): Promise<AggregateCampground>;
    createManyCampground(ctx: any, info: GraphQLResolveInfo, args: CreateManyCampgroundArgs): Promise<AffectedRowsOutput>;
    createOneCampground(ctx: any, info: GraphQLResolveInfo, args: CreateOneCampgroundArgs): Promise<Campground>;
    deleteManyCampground(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCampgroundArgs): Promise<AffectedRowsOutput>;
    deleteOneCampground(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCampgroundArgs): Promise<Campground | null>;
    findFirstCampground(ctx: any, info: GraphQLResolveInfo, args: FindFirstCampgroundArgs): Promise<Campground | null>;
    findFirstCampgroundOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCampgroundOrThrowArgs): Promise<Campground | null>;
    campgrounds(ctx: any, info: GraphQLResolveInfo, args: FindManyCampgroundArgs): Promise<Campground[]>;
    campground(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCampgroundArgs): Promise<Campground | null>;
    getCampground(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCampgroundOrThrowArgs): Promise<Campground | null>;
    groupByCampground(ctx: any, info: GraphQLResolveInfo, args: GroupByCampgroundArgs): Promise<CampgroundGroupBy[]>;
    updateManyCampground(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCampgroundArgs): Promise<AffectedRowsOutput>;
    updateOneCampground(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCampgroundArgs): Promise<Campground | null>;
    upsertOneCampground(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCampgroundArgs): Promise<Campground>;
}
