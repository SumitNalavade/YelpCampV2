import { CampgroundUpdatesecondaryImageB64sInput } from "../inputs/CampgroundUpdatesecondaryImageB64sInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { ReviewUpdateManyWithoutCampgroundNestedInput } from "../inputs/ReviewUpdateManyWithoutCampgroundNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCampgroundsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCampgroundsNestedInput";
export declare class CampgroundUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    averageRating?: FloatFieldUpdateOperationsInput | undefined;
    primaryImageB64?: StringFieldUpdateOperationsInput | undefined;
    secondaryImageB64s?: CampgroundUpdatesecondaryImageB64sInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCampgroundsNestedInput | undefined;
    Review?: ReviewUpdateManyWithoutCampgroundNestedInput | undefined;
}
