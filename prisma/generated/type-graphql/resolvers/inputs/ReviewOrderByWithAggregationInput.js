"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewAvgOrderByAggregateInput_1 = require("../inputs/ReviewAvgOrderByAggregateInput");
const ReviewCountOrderByAggregateInput_1 = require("../inputs/ReviewCountOrderByAggregateInput");
const ReviewMaxOrderByAggregateInput_1 = require("../inputs/ReviewMaxOrderByAggregateInput");
const ReviewMinOrderByAggregateInput_1 = require("../inputs/ReviewMinOrderByAggregateInput");
const ReviewSumOrderByAggregateInput_1 = require("../inputs/ReviewSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewOrderByWithAggregationInput = class ReviewOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewOrderByWithAggregationInput.prototype, "campgroundId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCountOrderByAggregateInput_1.ReviewCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCountOrderByAggregateInput_1.ReviewCountOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewAvgOrderByAggregateInput_1.ReviewAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewAvgOrderByAggregateInput_1.ReviewAvgOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMaxOrderByAggregateInput_1.ReviewMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMaxOrderByAggregateInput_1.ReviewMaxOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMinOrderByAggregateInput_1.ReviewMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMinOrderByAggregateInput_1.ReviewMinOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewSumOrderByAggregateInput_1.ReviewSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewSumOrderByAggregateInput_1.ReviewSumOrderByAggregateInput)
], ReviewOrderByWithAggregationInput.prototype, "_sum", void 0);
ReviewOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewOrderByWithAggregationInput", {
        isAbstract: true
    })
], ReviewOrderByWithAggregationInput);
exports.ReviewOrderByWithAggregationInput = ReviewOrderByWithAggregationInput;
