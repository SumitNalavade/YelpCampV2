import type { GraphQLResolveInfo } from "graphql";
import { GroupByCampgroundArgs } from "./args/GroupByCampgroundArgs";
import { CampgroundGroupBy } from "../../outputs/CampgroundGroupBy";
export declare class GroupByCampgroundResolver {
    groupByCampground(ctx: any, info: GraphQLResolveInfo, args: GroupByCampgroundArgs): Promise<CampgroundGroupBy[]>;
}
