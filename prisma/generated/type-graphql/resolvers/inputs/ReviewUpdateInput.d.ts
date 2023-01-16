import { CampgroundUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/CampgroundUpdateOneRequiredWithoutReviewNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReviewNestedInput";
export declare class ReviewUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutReviewNestedInput | undefined;
    campground?: CampgroundUpdateOneRequiredWithoutReviewNestedInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
