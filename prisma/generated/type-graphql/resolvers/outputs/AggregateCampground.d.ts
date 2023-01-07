import { CampgroundAvgAggregate } from "../outputs/CampgroundAvgAggregate";
import { CampgroundCountAggregate } from "../outputs/CampgroundCountAggregate";
import { CampgroundMaxAggregate } from "../outputs/CampgroundMaxAggregate";
import { CampgroundMinAggregate } from "../outputs/CampgroundMinAggregate";
import { CampgroundSumAggregate } from "../outputs/CampgroundSumAggregate";
export declare class AggregateCampground {
    _count: CampgroundCountAggregate | null;
    _avg: CampgroundAvgAggregate | null;
    _sum: CampgroundSumAggregate | null;
    _min: CampgroundMinAggregate | null;
    _max: CampgroundMaxAggregate | null;
}
