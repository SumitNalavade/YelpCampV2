import { ReviewAvgAggregate } from "../outputs/ReviewAvgAggregate";
import { ReviewCountAggregate } from "../outputs/ReviewCountAggregate";
import { ReviewMaxAggregate } from "../outputs/ReviewMaxAggregate";
import { ReviewMinAggregate } from "../outputs/ReviewMinAggregate";
import { ReviewSumAggregate } from "../outputs/ReviewSumAggregate";
export declare class ReviewGroupBy {
    id: string;
    rating: number;
    body: string;
    userId: string;
    campgroundId: string;
    createdAt: Date;
    _count: ReviewCountAggregate | null;
    _avg: ReviewAvgAggregate | null;
    _sum: ReviewSumAggregate | null;
    _min: ReviewMinAggregate | null;
    _max: ReviewMaxAggregate | null;
}
