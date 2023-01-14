import { CampgroundUpdatesecondaryImageB64sInput } from "../inputs/CampgroundUpdatesecondaryImageB64sInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { ReviewUpdateManyWithoutCampgroundNestedInput } from "../inputs/ReviewUpdateManyWithoutCampgroundNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CampgroundUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    primaryImageB64?: StringFieldUpdateOperationsInput | undefined;
    secondaryImageB64s?: CampgroundUpdatesecondaryImageB64sInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    Review?: ReviewUpdateManyWithoutCampgroundNestedInput | undefined;
}
