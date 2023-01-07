"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCampgroundArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdateManyMutationInput_1 = require("../../../inputs/CampgroundUpdateManyMutationInput");
const CampgroundWhereInput_1 = require("../../../inputs/CampgroundWhereInput");
let UpdateManyCampgroundArgs = class UpdateManyCampgroundArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateManyMutationInput_1.CampgroundUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateManyMutationInput_1.CampgroundUpdateManyMutationInput)
], UpdateManyCampgroundArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundWhereInput_1.CampgroundWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundWhereInput_1.CampgroundWhereInput)
], UpdateManyCampgroundArgs.prototype, "where", void 0);
UpdateManyCampgroundArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCampgroundArgs);
exports.UpdateManyCampgroundArgs = UpdateManyCampgroundArgs;
