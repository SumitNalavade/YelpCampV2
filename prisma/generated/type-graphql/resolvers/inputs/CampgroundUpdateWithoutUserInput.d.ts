import { CampgroundUpdatesecondaryImageB64sInput } from "../inputs/CampgroundUpdatesecondaryImageB64sInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CampgroundUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    averageRating?: FloatFieldUpdateOperationsInput | undefined;
    primaryImageB64?: StringFieldUpdateOperationsInput | undefined;
    secondaryImageB64s?: CampgroundUpdatesecondaryImageB64sInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
}
