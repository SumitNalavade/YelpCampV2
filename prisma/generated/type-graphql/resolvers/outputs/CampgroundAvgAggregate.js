"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CampgroundAvgAggregate = class CampgroundAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundAvgAggregate.prototype, "price", void 0);
CampgroundAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CampgroundAvgAggregate", {
        isAbstract: true
    })
], CampgroundAvgAggregate);
exports.CampgroundAvgAggregate = CampgroundAvgAggregate;
