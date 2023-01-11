import { ReviewCreateManyUserInputEnvelope } from "../inputs/ReviewCreateManyUserInputEnvelope";
import { ReviewCreateOrConnectWithoutUserInput } from "../inputs/ReviewCreateOrConnectWithoutUserInput";
import { ReviewCreateWithoutUserInput } from "../inputs/ReviewCreateWithoutUserInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewCreateNestedManyWithoutUserInput {
    create?: ReviewCreateWithoutUserInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: ReviewCreateManyUserInputEnvelope | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
}
