"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundAvgAggregate_1 = require("../outputs/CampgroundAvgAggregate");
const CampgroundCountAggregate_1 = require("../outputs/CampgroundCountAggregate");
const CampgroundMaxAggregate_1 = require("../outputs/CampgroundMaxAggregate");
const CampgroundMinAggregate_1 = require("../outputs/CampgroundMinAggregate");
const CampgroundSumAggregate_1 = require("../outputs/CampgroundSumAggregate");
let CampgroundGroupBy = class CampgroundGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundGroupBy.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundGroupBy.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundGroupBy.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundGroupBy.prototype, "primaryImageUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundGroupBy.prototype, "secondaryImageUrls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundGroupBy.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCountAggregate_1.CampgroundCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCountAggregate_1.CampgroundCountAggregate)
], CampgroundGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundAvgAggregate_1.CampgroundAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundAvgAggregate_1.CampgroundAvgAggregate)
], CampgroundGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundSumAggregate_1.CampgroundSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundSumAggregate_1.CampgroundSumAggregate)
], CampgroundGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundMinAggregate_1.CampgroundMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundMinAggregate_1.CampgroundMinAggregate)
], CampgroundGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundMaxAggregate_1.CampgroundMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundMaxAggregate_1.CampgroundMaxAggregate)
], CampgroundGroupBy.prototype, "_max", void 0);
CampgroundGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CampgroundGroupBy", {
        isAbstract: true
    })
], CampgroundGroupBy);
exports.CampgroundGroupBy = CampgroundGroupBy;
