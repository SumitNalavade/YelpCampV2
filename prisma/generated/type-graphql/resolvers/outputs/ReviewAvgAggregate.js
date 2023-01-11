"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewAvgAggregate = class ReviewAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewAvgAggregate.prototype, "rating", void 0);
ReviewAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewAvgAggregate", {
        isAbstract: true
    })
], ReviewAvgAggregate);
exports.ReviewAvgAggregate = ReviewAvgAggregate;
