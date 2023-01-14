import { CampgroundUpdatesecondaryImageB64sInput } from "../inputs/CampgroundUpdatesecondaryImageB64sInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CampgroundUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    primaryImageB64?: StringFieldUpdateOperationsInput | undefined;
    secondaryImageB64s?: CampgroundUpdatesecondaryImageB64sInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
}
