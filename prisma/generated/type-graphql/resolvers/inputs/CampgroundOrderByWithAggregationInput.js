"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundAvgOrderByAggregateInput_1 = require("../inputs/CampgroundAvgOrderByAggregateInput");
const CampgroundCountOrderByAggregateInput_1 = require("../inputs/CampgroundCountOrderByAggregateInput");
const CampgroundMaxOrderByAggregateInput_1 = require("../inputs/CampgroundMaxOrderByAggregateInput");
const CampgroundMinOrderByAggregateInput_1 = require("../inputs/CampgroundMinOrderByAggregateInput");
const CampgroundSumOrderByAggregateInput_1 = require("../inputs/CampgroundSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CampgroundOrderByWithAggregationInput = class CampgroundOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "secondaryImageB64s", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundOrderByWithAggregationInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCountOrderByAggregateInput_1.CampgroundCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCountOrderByAggregateInput_1.CampgroundCountOrderByAggregateInput)
], CampgroundOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundAvgOrderByAggregateInput_1.CampgroundAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundAvgOrderByAggregateInput_1.CampgroundAvgOrderByAggregateInput)
], CampgroundOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundMaxOrderByAggregateInput_1.CampgroundMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundMaxOrderByAggregateInput_1.CampgroundMaxOrderByAggregateInput)
], CampgroundOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundMinOrderByAggregateInput_1.CampgroundMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundMinOrderByAggregateInput_1.CampgroundMinOrderByAggregateInput)
], CampgroundOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundSumOrderByAggregateInput_1.CampgroundSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundSumOrderByAggregateInput_1.CampgroundSumOrderByAggregateInput)
], CampgroundOrderByWithAggregationInput.prototype, "_sum", void 0);
CampgroundOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundOrderByWithAggregationInput", {
        isAbstract: true
    })
], CampgroundOrderByWithAggregationInput);
exports.CampgroundOrderByWithAggregationInput = CampgroundOrderByWithAggregationInput;
