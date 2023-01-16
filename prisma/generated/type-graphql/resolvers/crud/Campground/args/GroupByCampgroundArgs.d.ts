import { CampgroundOrderByWithAggregationInput } from "../../../inputs/CampgroundOrderByWithAggregationInput";
import { CampgroundScalarWhereWithAggregatesInput } from "../../../inputs/CampgroundScalarWhereWithAggregatesInput";
import { CampgroundWhereInput } from "../../../inputs/CampgroundWhereInput";
export declare class GroupByCampgroundArgs {
    where?: CampgroundWhereInput | undefined;
    orderBy?: CampgroundOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "primaryImageB64" | "secondaryImageB64s" | "address" | "price" | "userId" | "createdAt">;
    having?: CampgroundScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
