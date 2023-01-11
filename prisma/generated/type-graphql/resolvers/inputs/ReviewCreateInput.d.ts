import { CampgroundCreateNestedOneWithoutReviewInput } from "../inputs/CampgroundCreateNestedOneWithoutReviewInput";
import { UserCreateNestedOneWithoutReviewInput } from "../inputs/UserCreateNestedOneWithoutReviewInput";
export declare class ReviewCreateInput {
    id?: string | undefined;
    rating: number;
    body: string;
    user: UserCreateNestedOneWithoutReviewInput;
    campground: CampgroundCreateNestedOneWithoutReviewInput;
}
