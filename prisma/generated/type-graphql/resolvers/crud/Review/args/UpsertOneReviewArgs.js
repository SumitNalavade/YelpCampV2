"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateInput_1 = require("../../../inputs/ReviewCreateInput");
const ReviewUpdateInput_1 = require("../../../inputs/ReviewUpdateInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
let UpsertOneReviewArgs = class UpsertOneReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], UpsertOneReviewArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateInput_1.ReviewCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewCreateInput_1.ReviewCreateInput)
], UpsertOneReviewArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateInput_1.ReviewUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateInput_1.ReviewUpdateInput)
], UpsertOneReviewArgs.prototype, "update", void 0);
UpsertOneReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneReviewArgs);
exports.UpsertOneReviewArgs = UpsertOneReviewArgs;
