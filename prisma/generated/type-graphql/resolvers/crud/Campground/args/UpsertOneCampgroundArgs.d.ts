import { CampgroundCreateInput } from "../../../inputs/CampgroundCreateInput";
import { CampgroundUpdateInput } from "../../../inputs/CampgroundUpdateInput";
import { CampgroundWhereUniqueInput } from "../../../inputs/CampgroundWhereUniqueInput";
export declare class UpsertOneCampgroundArgs {
    where: CampgroundWhereUniqueInput;
    create: CampgroundCreateInput;
    update: CampgroundUpdateInput;
}
