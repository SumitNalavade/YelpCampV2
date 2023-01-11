import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { CampgroundCreateNestedManyWithoutUserInput } from "../inputs/CampgroundCreateNestedManyWithoutUserInput";
import { ReviewCreateNestedManyWithoutUserInput } from "../inputs/ReviewCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: Date | undefined;
    image?: string | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    Campgrounds?: CampgroundCreateNestedManyWithoutUserInput | undefined;
    Review?: ReviewCreateNestedManyWithoutUserInput | undefined;
}
