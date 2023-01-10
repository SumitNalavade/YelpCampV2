import { UserCreateOrConnectWithoutCampgroundsInput } from "../inputs/UserCreateOrConnectWithoutCampgroundsInput";
import { UserCreateWithoutCampgroundsInput } from "../inputs/UserCreateWithoutCampgroundsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutCampgroundsInput {
    create?: UserCreateWithoutCampgroundsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutCampgroundsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
