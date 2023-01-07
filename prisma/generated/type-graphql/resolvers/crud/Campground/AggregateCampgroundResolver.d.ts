import type { GraphQLResolveInfo } from "graphql";
import { AggregateCampgroundArgs } from "./args/AggregateCampgroundArgs";
import { AggregateCampground } from "../../outputs/AggregateCampground";
export declare class AggregateCampgroundResolver {
    aggregateCampground(ctx: any, info: GraphQLResolveInfo, args: AggregateCampgroundArgs): Promise<AggregateCampground>;
}
