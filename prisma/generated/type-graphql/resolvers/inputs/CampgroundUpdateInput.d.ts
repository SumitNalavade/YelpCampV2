import { CampgroundUpdatesecondaryImageUrlsInput } from "../inputs/CampgroundUpdatesecondaryImageUrlsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutCampgroundsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutCampgroundsNestedInput";
export declare class CampgroundUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    averageRating?: FloatFieldUpdateOperationsInput | undefined;
    primaryImageUrl?: StringFieldUpdateOperationsInput | undefined;
    secondaryImageUrls?: CampgroundUpdatesecondaryImageUrlsInput | undefined;
    address?: StringFieldUpdateOperationsInput | undefined;
    price?: FloatFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutCampgroundsNestedInput | undefined;
}
