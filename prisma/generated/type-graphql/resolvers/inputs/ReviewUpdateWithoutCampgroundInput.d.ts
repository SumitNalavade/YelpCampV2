import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReviewNestedInput";
export declare class ReviewUpdateWithoutCampgroundInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutReviewNestedInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
