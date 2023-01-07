import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedFloatWithAggregatesFilter } from "../inputs/NestedFloatWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class FloatWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedFloatWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _avg?: NestedFloatFilter | undefined;
    _sum?: NestedFloatFilter | undefined;
    _min?: NestedFloatFilter | undefined;
    _max?: NestedFloatFilter | undefined;
}
