"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CampgroundSumOrderByAggregateInput = class CampgroundSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundSumOrderByAggregateInput.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundSumOrderByAggregateInput.prototype, "price", void 0);
CampgroundSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundSumOrderByAggregateInput", {
        isAbstract: true
    })
], CampgroundSumOrderByAggregateInput);
exports.CampgroundSumOrderByAggregateInput = CampgroundSumOrderByAggregateInput;
