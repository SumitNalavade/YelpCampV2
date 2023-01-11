import { CampgroundCreateOrConnectWithoutReviewInput } from "../inputs/CampgroundCreateOrConnectWithoutReviewInput";
import { CampgroundCreateWithoutReviewInput } from "../inputs/CampgroundCreateWithoutReviewInput";
import { CampgroundUpdateWithoutReviewInput } from "../inputs/CampgroundUpdateWithoutReviewInput";
import { CampgroundUpsertWithoutReviewInput } from "../inputs/CampgroundUpsertWithoutReviewInput";
import { CampgroundWhereUniqueInput } from "../inputs/CampgroundWhereUniqueInput";
export declare class CampgroundUpdateOneRequiredWithoutReviewNestedInput {
    create?: CampgroundCreateWithoutReviewInput | undefined;
    connectOrCreate?: CampgroundCreateOrConnectWithoutReviewInput | undefined;
    upsert?: CampgroundUpsertWithoutReviewInput | undefined;
    connect?: CampgroundWhereUniqueInput | undefined;
    update?: CampgroundUpdateWithoutReviewInput | undefined;
}
