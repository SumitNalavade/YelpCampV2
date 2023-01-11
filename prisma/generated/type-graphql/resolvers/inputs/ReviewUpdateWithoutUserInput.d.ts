import { CampgroundUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/CampgroundUpdateOneRequiredWithoutReviewNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReviewUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    campground?: CampgroundUpdateOneRequiredWithoutReviewNestedInput | undefined;
}
