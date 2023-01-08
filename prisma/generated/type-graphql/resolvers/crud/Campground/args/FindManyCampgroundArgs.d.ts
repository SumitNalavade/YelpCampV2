import { CampgroundOrderByWithRelationInput } from "../../../inputs/CampgroundOrderByWithRelationInput";
import { CampgroundWhereInput } from "../../../inputs/CampgroundWhereInput";
import { CampgroundWhereUniqueInput } from "../../../inputs/CampgroundWhereUniqueInput";
export declare class FindManyCampgroundArgs {
    where?: CampgroundWhereInput | undefined;
    orderBy?: CampgroundOrderByWithRelationInput[] | undefined;
    cursor?: CampgroundWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "imageURL" | "address" | "price"> | undefined;
}