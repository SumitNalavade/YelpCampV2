import { CampgroundAvgAggregate } from "../outputs/CampgroundAvgAggregate";
import { CampgroundCountAggregate } from "../outputs/CampgroundCountAggregate";
import { CampgroundMaxAggregate } from "../outputs/CampgroundMaxAggregate";
import { CampgroundMinAggregate } from "../outputs/CampgroundMinAggregate";
import { CampgroundSumAggregate } from "../outputs/CampgroundSumAggregate";
export declare class CampgroundGroupBy {
    id: string;
    name: string;
    description: string;
    primaryImageB64: string;
    secondaryImageB64s: string[] | null;
    address: string;
    price: number;
    userId: string;
    _count: CampgroundCountAggregate | null;
    _avg: CampgroundAvgAggregate | null;
    _sum: CampgroundSumAggregate | null;
    _min: CampgroundMinAggregate | null;
    _max: CampgroundMaxAggregate | null;
}
