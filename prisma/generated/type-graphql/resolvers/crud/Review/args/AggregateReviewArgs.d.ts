import { ReviewOrderByWithRelationInput } from "../../../inputs/ReviewOrderByWithRelationInput";
import { ReviewWhereInput } from "../../../inputs/ReviewWhereInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";
export declare class AggregateReviewArgs {
    where?: ReviewWhereInput | undefined;
    orderBy?: ReviewOrderByWithRelationInput[] | undefined;
    cursor?: ReviewWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
