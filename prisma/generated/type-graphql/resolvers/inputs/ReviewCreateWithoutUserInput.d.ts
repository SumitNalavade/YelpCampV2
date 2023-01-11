import { CampgroundCreateNestedOneWithoutReviewInput } from "../inputs/CampgroundCreateNestedOneWithoutReviewInput";
export declare class ReviewCreateWithoutUserInput {
    id?: string | undefined;
    rating: number;
    body: string;
    campground: CampgroundCreateNestedOneWithoutReviewInput;
}
