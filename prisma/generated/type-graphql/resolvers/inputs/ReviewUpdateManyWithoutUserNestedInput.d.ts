import { ReviewCreateManyUserInputEnvelope } from "../inputs/ReviewCreateManyUserInputEnvelope";
import { ReviewCreateOrConnectWithoutUserInput } from "../inputs/ReviewCreateOrConnectWithoutUserInput";
import { ReviewCreateWithoutUserInput } from "../inputs/ReviewCreateWithoutUserInput";
import { ReviewScalarWhereInput } from "../inputs/ReviewScalarWhereInput";
import { ReviewUpdateManyWithWhereWithoutUserInput } from "../inputs/ReviewUpdateManyWithWhereWithoutUserInput";
import { ReviewUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ReviewUpdateWithWhereUniqueWithoutUserInput";
import { ReviewUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ReviewUpsertWithWhereUniqueWithoutUserInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewUpdateManyWithoutUserNestedInput {
    create?: ReviewCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: ReviewCreateManyUserInputEnvelope | undefined;
    set?: ReviewWhereUniqueInput[] | undefined;
    disconnect?: ReviewWhereUniqueInput[] | undefined;
    delete?: ReviewWhereUniqueInput[] | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: ReviewScalarWhereInput[] | undefined;
}
