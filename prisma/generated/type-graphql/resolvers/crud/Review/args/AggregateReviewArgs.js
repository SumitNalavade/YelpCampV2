"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewOrderByWithRelationInput_1 = require("../../../inputs/ReviewOrderByWithRelationInput");
const ReviewWhereInput_1 = require("../../../inputs/ReviewWhereInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
let AggregateReviewArgs = class AggregateReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], AggregateReviewArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewOrderByWithRelationInput_1.ReviewOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateReviewArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], AggregateReviewArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReviewArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateReviewArgs.prototype, "skip", void 0);
AggregateReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateReviewArgs);
exports.AggregateReviewArgs = AggregateReviewArgs;
