import { CampgroundCreateOrConnectWithoutReviewInput } from "../inputs/CampgroundCreateOrConnectWithoutReviewInput";
import { CampgroundCreateWithoutReviewInput } from "../inputs/CampgroundCreateWithoutReviewInput";
import { CampgroundWhereUniqueInput } from "../inputs/CampgroundWhereUniqueInput";
export declare class CampgroundCreateNestedOneWithoutReviewInput {
    create?: CampgroundCreateWithoutReviewInput | undefined;
    connectOrCreate?: CampgroundCreateOrConnectWithoutReviewInput | undefined;
    connect?: CampgroundWhereUniqueInput | undefined;
}
