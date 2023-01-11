"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewOrderByWithAggregationInput_1 = require("../../../inputs/ReviewOrderByWithAggregationInput");
const ReviewScalarWhereWithAggregatesInput_1 = require("../../../inputs/ReviewScalarWhereWithAggregatesInput");
const ReviewWhereInput_1 = require("../../../inputs/ReviewWhereInput");
const ReviewScalarFieldEnum_1 = require("../../../../enums/ReviewScalarFieldEnum");
let GroupByReviewArgs = class GroupByReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], GroupByReviewArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewOrderByWithAggregationInput_1.ReviewOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReviewArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarFieldEnum_1.ReviewScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByReviewArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewScalarWhereWithAggregatesInput_1.ReviewScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewScalarWhereWithAggregatesInput_1.ReviewScalarWhereWithAggregatesInput)
], GroupByReviewArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReviewArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByReviewArgs.prototype, "skip", void 0);
GroupByReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByReviewArgs);
exports.GroupByReviewArgs = GroupByReviewArgs;
