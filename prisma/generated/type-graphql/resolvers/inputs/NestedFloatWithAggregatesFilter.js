"use strict";
var NestedFloatWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedFloatFilter_1 = require("../inputs/NestedFloatFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let NestedFloatWithAggregatesFilter = NestedFloatWithAggregatesFilter_1 = class NestedFloatWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedFloatWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedFloatWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatWithAggregatesFilter)
], NestedFloatWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedFloatWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], NestedFloatWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], NestedFloatWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], NestedFloatWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], NestedFloatWithAggregatesFilter.prototype, "_max", void 0);
NestedFloatWithAggregatesFilter = NestedFloatWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedFloatWithAggregatesFilter", {
        isAbstract: true
    })
], NestedFloatWithAggregatesFilter);
exports.NestedFloatWithAggregatesFilter = NestedFloatWithAggregatesFilter;
