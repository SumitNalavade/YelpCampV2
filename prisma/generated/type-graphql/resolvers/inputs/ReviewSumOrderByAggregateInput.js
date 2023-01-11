"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewSumOrderByAggregateInput = class ReviewSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewSumOrderByAggregateInput.prototype, "rating", void 0);
ReviewSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewSumOrderByAggregateInput", {
        isAbstract: true
    })
], ReviewSumOrderByAggregateInput);
exports.ReviewSumOrderByAggregateInput = ReviewSumOrderByAggregateInput;
