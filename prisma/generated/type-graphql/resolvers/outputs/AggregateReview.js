"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReview = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewAvgAggregate_1 = require("../outputs/ReviewAvgAggregate");
const ReviewCountAggregate_1 = require("../outputs/ReviewCountAggregate");
const ReviewMaxAggregate_1 = require("../outputs/ReviewMaxAggregate");
const ReviewMinAggregate_1 = require("../outputs/ReviewMinAggregate");
const ReviewSumAggregate_1 = require("../outputs/ReviewSumAggregate");
let AggregateReview = class AggregateReview {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCountAggregate_1.ReviewCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCountAggregate_1.ReviewCountAggregate)
], AggregateReview.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewAvgAggregate_1.ReviewAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewAvgAggregate_1.ReviewAvgAggregate)
], AggregateReview.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewSumAggregate_1.ReviewSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewSumAggregate_1.ReviewSumAggregate)
], AggregateReview.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMinAggregate_1.ReviewMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMinAggregate_1.ReviewMinAggregate)
], AggregateReview.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewMaxAggregate_1.ReviewMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewMaxAggregate_1.ReviewMaxAggregate)
], AggregateReview.prototype, "_max", void 0);
AggregateReview = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateReview", {
        isAbstract: true
    })
], AggregateReview);
exports.AggregateReview = AggregateReview;
