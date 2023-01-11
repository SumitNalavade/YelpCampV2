import { ReviewCreateManyCampgroundInputEnvelope } from "../inputs/ReviewCreateManyCampgroundInputEnvelope";
import { ReviewCreateOrConnectWithoutCampgroundInput } from "../inputs/ReviewCreateOrConnectWithoutCampgroundInput";
import { ReviewCreateWithoutCampgroundInput } from "../inputs/ReviewCreateWithoutCampgroundInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutCampgroundInput } from "../inputs/ReviewUpdateManyWithWhereWithoutCampgroundInput";
import { ReviewUpdateWithWhereUniqueWithoutCampgroundInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutCampgroundInput";
import { ReviewUpsertWithWhereUniqueWithoutCampgroundInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutCampgroundInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewUpdateManyWithoutCampgroundNestedInput {
    create?: ReviewCreateWithoutCampgroundInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutCampgroundInput[] | undefined;
    upsert?: ReviewUpsertWithWhereUniqueWithoutCampgroundInput[] | undefined;
    createMany?: ReviewCreateManyCampgroundInputEnvelope | undefined;
    set?: ReviewWhereUniqueInput[] | undefined;
    disconnect?: ReviewWhereUniqueInput[] | undefined;
    delete?: ReviewWhereUniqueInput[] | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
    update?: ReviewUpdateWithWhereUniqueWithoutCampgroundInput[] | undefined;
    updateMany?: ReviewUpdateManyWithWhereWithoutCampgroundInput[] | undefined;
    deleteMany?: ReviewScalarWhereInput[] | undefined;
}
