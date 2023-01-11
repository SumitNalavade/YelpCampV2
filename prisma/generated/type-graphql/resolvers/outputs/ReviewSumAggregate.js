"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ReviewSumAggregate = class ReviewSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewSumAggregate.prototype, "rating", void 0);
ReviewSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReviewSumAggregate", {
        isAbstract: true
    })
], ReviewSumAggregate);
exports.ReviewSumAggregate = ReviewSumAggregate;
