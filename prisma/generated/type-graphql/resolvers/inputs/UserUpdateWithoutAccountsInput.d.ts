import { CampgroundUpdateManyWithoutUserNestedInput } from "../inputs/CampgroundUpdateManyWithoutUserNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReviewUpdateManyWithoutUserNestedInput } from "../inputs/ReviewUpdateManyWithoutUserNestedInput";
import { SessionUpdateManyWithoutUserNestedInput } from "../inputs/SessionUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutAccountsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    image?: NullableStringFieldUpdateOperationsInput | undefined;
    sessions?: SessionUpdateManyWithoutUserNestedInput | undefined;
    Campgrounds?: CampgroundUpdateManyWithoutUserNestedInput | undefined;
    Review?: ReviewUpdateManyWithoutUserNestedInput | undefined;
}
