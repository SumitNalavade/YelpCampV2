import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { CampgroundCreateNestedManyWithoutUserInput } from "../inputs/CampgroundCreateNestedManyWithoutUserInput";
import { ReviewCreateNestedManyWithoutUserInput } from "../inputs/ReviewCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    Campgrounds?: CampgroundCreateNestedManyWithoutUserInput | undefined;
    Review?: ReviewCreateNestedManyWithoutUserInput | undefined;
}
