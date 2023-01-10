import { UserCreateOrConnectWithoutCampgroundsInput } from "../inputs/UserCreateOrConnectWithoutCampgroundsInput";
import { UserCreateWithoutCampgroundsInput } from "../inputs/UserCreateWithoutCampgroundsInput";
import { UserUpdateWithoutCampgroundsInput } from "../inputs/UserUpdateWithoutCampgroundsInput";
import { UserUpsertWithoutCampgroundsInput } from "../inputs/UserUpsertWithoutCampgroundsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutCampgroundsNestedInput {
    create?: UserCreateWithoutCampgroundsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCampgroundsInput | undefined;
    upsert?: UserUpsertWithoutCampgroundsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutCampgroundsInput | undefined;
}
