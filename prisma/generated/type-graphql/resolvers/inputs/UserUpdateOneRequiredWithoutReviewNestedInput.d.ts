import { UserCreateOrConnectWithoutReviewInput } from "../inputs/UserCreateOrConnectWithoutReviewInput";
import { UserCreateWithoutReviewInput } from "../inputs/UserCreateWithoutReviewInput";
import { UserUpdateWithoutReviewInput } from "../inputs/UserUpdateWithoutReviewInput";
import { UserUpsertWithoutReviewInput } from "../inputs/UserUpsertWithoutReviewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutReviewNestedInput {
    create?: UserCreateWithoutReviewInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput | undefined;
    upsert?: UserUpsertWithoutReviewInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutReviewInput | undefined;
}
