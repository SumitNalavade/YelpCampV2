"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUpdateInput_1 = require("../../../inputs/ReviewUpdateInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
let UpdateOneReviewArgs = class UpdateOneReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateInput_1.ReviewUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateInput_1.ReviewUpdateInput)
], UpdateOneReviewArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], UpdateOneReviewArgs.prototype, "where", void 0);
UpdateOneReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneReviewArgs);
exports.UpdateOneReviewArgs = UpdateOneReviewArgs;
