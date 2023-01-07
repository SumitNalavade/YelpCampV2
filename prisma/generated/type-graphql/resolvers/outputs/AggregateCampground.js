"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCampground = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundAvgAggregate_1 = require("../outputs/CampgroundAvgAggregate");
const CampgroundCountAggregate_1 = require("../outputs/CampgroundCountAggregate");
const CampgroundMaxAggregate_1 = require("../outputs/CampgroundMaxAggregate");
const CampgroundMinAggregate_1 = require("../outputs/CampgroundMinAggregate");
const CampgroundSumAggregate_1 = require("../outputs/CampgroundSumAggregate");
let AggregateCampground = class AggregateCampground {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCountAggregate_1.CampgroundCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCountAggregate_1.CampgroundCountAggregate)
], AggregateCampground.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundAvgAggregate_1.CampgroundAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundAvgAggregate_1.CampgroundAvgAggregate)
], AggregateCampground.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundSumAggregate_1.CampgroundSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundSumAggregate_1.CampgroundSumAggregate)
], AggregateCampground.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundMinAggregate_1.CampgroundMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundMinAggregate_1.CampgroundMinAggregate)
], AggregateCampground.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundMaxAggregate_1.CampgroundMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundMaxAggregate_1.CampgroundMaxAggregate)
], AggregateCampground.prototype, "_max", void 0);
AggregateCampground = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCampground", {
        isAbstract: true
    })
], AggregateCampground);
exports.AggregateCampground = AggregateCampground;
