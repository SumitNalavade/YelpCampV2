"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUpdateManyMutationInput_1 = require("../../../inputs/ReviewUpdateManyMutationInput");
const ReviewWhereInput_1 = require("../../../inputs/ReviewWhereInput");
let UpdateManyReviewArgs = class UpdateManyReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyMutationInput_1.ReviewUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyMutationInput_1.ReviewUpdateManyMutationInput)
], UpdateManyReviewArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], UpdateManyReviewArgs.prototype, "where", void 0);
UpdateManyReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyReviewArgs);
exports.UpdateManyReviewArgs = UpdateManyReviewArgs;
