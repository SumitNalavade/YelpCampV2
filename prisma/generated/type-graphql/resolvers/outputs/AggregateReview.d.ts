import { ReviewAvgAggregate } from "../outputs/ReviewAvgAggregate";
import { ReviewCountAggregate } from "../outputs/ReviewCountAggregate";
import { ReviewMaxAggregate } from "../outputs/ReviewMaxAggregate";
import { ReviewMinAggregate } from "../outputs/ReviewMinAggregate";
import { ReviewSumAggregate } from "../outputs/ReviewSumAggregate";
export declare class AggregateReview {
    _count: ReviewCountAggregate | null;
    _avg: ReviewAvgAggregate | null;
    _sum: ReviewSumAggregate | null;
    _min: ReviewMinAggregate | null;
    _max: ReviewMaxAggregate | null;
}
