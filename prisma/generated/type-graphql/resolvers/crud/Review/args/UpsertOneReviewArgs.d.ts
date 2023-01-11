import { ReviewCreateInput } from "../../../inputs/ReviewCreateInput";
import { ReviewUpdateInput } from "../../../inputs/ReviewUpdateInput";
import { ReviewWhereUniqueInput } from "../../../inputs/ReviewWhereUniqueInput";
export declare class UpsertOneReviewArgs {
    where: ReviewWhereUniqueInput;
    create: ReviewCreateInput;
    update: ReviewUpdateInput;
}
