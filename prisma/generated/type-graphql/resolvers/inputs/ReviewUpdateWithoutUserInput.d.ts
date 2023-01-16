import { CampgroundUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/CampgroundUpdateOneRequiredWithoutReviewNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ReviewUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    campground?: CampgroundUpdateOneRequiredWithoutReviewNestedInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
