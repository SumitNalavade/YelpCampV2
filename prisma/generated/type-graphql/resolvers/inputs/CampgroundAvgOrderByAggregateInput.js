"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CampgroundAvgOrderByAggregateInput = class CampgroundAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundAvgOrderByAggregateInput.prototype, "price", void 0);
CampgroundAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CampgroundAvgOrderByAggregateInput);
exports.CampgroundAvgOrderByAggregateInput = CampgroundAvgOrderByAggregateInput;
