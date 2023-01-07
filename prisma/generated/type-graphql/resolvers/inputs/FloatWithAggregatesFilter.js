"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedFloatFilter_1 = require("../inputs/NestedFloatFilter");
const NestedFloatWithAggregatesFilter_1 = require("../inputs/NestedFloatWithAggregatesFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
let FloatWithAggregatesFilter = class FloatWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FloatWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FloatWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FloatWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatWithAggregatesFilter_1.NestedFloatWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatWithAggregatesFilter_1.NestedFloatWithAggregatesFilter)
], FloatWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], FloatWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], FloatWithAggregatesFilter.prototype, "_max", void 0);
FloatWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("FloatWithAggregatesFilter", {
        isAbstract: true
    })
], FloatWithAggregatesFilter);
exports.FloatWithAggregatesFilter = FloatWithAggregatesFilter;
