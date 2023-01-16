import { UserCreateNestedOneWithoutReviewInput } from "../inputs/UserCreateNestedOneWithoutReviewInput";
export declare class ReviewCreateWithoutCampgroundInput {
    id?: string | undefined;
    rating: number;
    body: string;
    user: UserCreateNestedOneWithoutReviewInput;
    createdAt?: Date | undefined;
}
