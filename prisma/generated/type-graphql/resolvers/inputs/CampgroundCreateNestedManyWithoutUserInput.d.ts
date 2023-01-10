import { CampgroundCreateManyUserInputEnvelope } from "../inputs/CampgroundCreateManyUserInputEnvelope";
import { CampgroundCreateOrConnectWithoutUserInput } from "../inputs/CampgroundCreateOrConnectWithoutUserInput";
import { CampgroundCreateWithoutUserInput } from "../inputs/CampgroundCreateWithoutUserInput";
import { CampgroundWhereUniqueInput } from "../inputs/CampgroundWhereUniqueInput";
export declare class CampgroundCreateNestedManyWithoutUserInput {
    create?: CampgroundCreateWithoutUserInput[] | undefined;
    connectOrCreate?: CampgroundCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: CampgroundCreateManyUserInputEnvelope | undefined;
    connect?: CampgroundWhereUniqueInput[] | undefined;
}
