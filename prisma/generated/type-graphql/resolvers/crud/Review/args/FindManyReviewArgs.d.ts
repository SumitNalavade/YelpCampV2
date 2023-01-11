import { ReviewOrderByWithRelationInput } from "../../../inputs/ReviewOrderByWithRelationInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";
export declare class FindManyReviewArgs {
    where?: ReviewWhereInput | undefined;
    orderBy?: ReviewOrderByWithRelationInput[] | undefined;
    cursor?: ReviewWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "rating" | "body" | "userId" | "campgroundId"> | undefined;
}
