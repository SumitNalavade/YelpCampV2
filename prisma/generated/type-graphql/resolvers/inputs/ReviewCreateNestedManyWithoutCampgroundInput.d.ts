import { ReviewCreateManyCampgroundInputEnvelope } from "../inputs/ReviewCreateManyCampgroundInputEnvelope";
import { ReviewCreateOrConnectWithoutCampgroundInput } from "../inputs/ReviewCreateOrConnectWithoutCampgroundInput";
import { ReviewCreateWithoutCampgroundInput } from "../inputs/ReviewCreateWithoutCampgroundInput";
import { ReviewWhereUniqueInput } from "../inputs/ReviewWhereUniqueInput";
export declare class ReviewCreateNestedManyWithoutCampgroundInput {
    create?: ReviewCreateWithoutCampgroundInput[] | undefined;
    connectOrCreate?: ReviewCreateOrConnectWithoutCampgroundInput[] | undefined;
    createMany?: ReviewCreateManyCampgroundInputEnvelope | undefined;
    connect?: ReviewWhereUniqueInput[] | undefined;
}
