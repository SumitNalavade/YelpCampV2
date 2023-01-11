"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ReviewAvgOrderByAggregateInput = class ReviewAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewAvgOrderByAggregateInput.prototype, "rating", void 0);
ReviewAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewAvgOrderByAggregateInput", {
        isAbstract: true
    })
], ReviewAvgOrderByAggregateInput);
exports.ReviewAvgOrderByAggregateInput = ReviewAvgOrderByAggregateInput;
