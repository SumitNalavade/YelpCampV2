import { CampgroundCreateNestedManyWithoutUserInput } from "../inputs/CampgroundCreateNestedManyWithoutUserInput";
import { ReviewCreateNestedManyWithoutUserInput } from "../inputs/ReviewCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    Campgrounds?: CampgroundCreateNestedManyWithoutUserInput | undefined;
    Review?: ReviewCreateNestedManyWithoutUserInput | undefined;
}
