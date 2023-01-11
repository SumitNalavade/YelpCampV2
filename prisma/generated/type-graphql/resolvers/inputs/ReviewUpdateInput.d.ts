import { CampgroundUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/CampgroundUpdateOneRequiredWithoutReviewNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutReviewNestedInput } from "../inputs/UserUpdateOneRequiredWithoutReviewNestedInput";
export declare class ReviewUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    rating?: IntFieldUpdateOperationsInput | undefined;
    body?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutReviewNestedInput | undefined;
    campground?: CampgroundUpdateOneRequiredWithoutReviewNestedInput | undefined;
}
