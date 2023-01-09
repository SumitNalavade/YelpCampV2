"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundSumAggregate = class CampgroundSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundSumAggregate.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundSumAggregate.prototype, "price", void 0);
CampgroundSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CampgroundSumAggregate", {
        isAbstract: true
    })
], CampgroundSumAggregate);
exports.CampgroundSumAggregate = CampgroundSumAggregate;
