import { CampgroundCreateManyUserInputEnvelope } from "../inputs/CampgroundCreateManyUserInputEnvelope";
import { CampgroundCreateOrConnectWithoutUserInput } from "../inputs/CampgroundCreateOrConnectWithoutUserInput";
import { CampgroundCreateWithoutUserInput } from "../inputs/CampgroundCreateWithoutUserInput";
import { CampgroundScalarWhereInput } from "../inputs/CampgroundScalarWhereInput";
import { CampgroundUpdateManyWithWhereWithoutUserInput } from "../inputs/CampgroundUpdateManyWithWhereWithoutUserInput";
import { CampgroundUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CampgroundUpdateWithWhereUniqueWithoutUserInput";
import { CampgroundUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CampgroundUpsertWithWhereUniqueWithoutUserInput";
import { CampgroundWhereUniqueInput } from "../inputs/CampgroundWhereUniqueInput";
export declare class CampgroundUpdateManyWithoutUserNestedInput {
    create?: CampgroundCreateWithoutUserInput[] | undefined;
    connectOrCreate?: CampgroundCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: CampgroundUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: CampgroundCreateManyUserInputEnvelope | undefined;
    set?: CampgroundWhereUniqueInput[] | undefined;
    disconnect?: CampgroundWhereUniqueInput[] | undefined;
    delete?: CampgroundWhereUniqueInput[] | undefined;
    connect?: CampgroundWhereUniqueInput[] | undefined;
    update?: CampgroundUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: CampgroundUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: CampgroundScalarWhereInput[] | undefined;
}
