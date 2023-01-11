import { UserCreateOrConnectWithoutReviewInput } from "../inputs/UserCreateOrConnectWithoutReviewInput";
import { UserCreateWithoutReviewInput } from "../inputs/UserCreateWithoutReviewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutReviewInput {
    create?: UserCreateWithoutReviewInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
