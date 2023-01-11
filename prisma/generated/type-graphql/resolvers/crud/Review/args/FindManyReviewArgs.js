"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewOrderByWithRelationInput_1 = require("../../../inputs/ReviewOrderByWithRelationInput");
const ReviewWhereInput_1 = require("../../../inputs/ReviewWhereInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
const ReviewScalarFieldEnum_1 = require("../../../../enums/ReviewScalarFieldEnum");
let FindManyReviewArgs = class FindManyReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], FindManyReviewArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewOrderByWithRelationInput_1.ReviewOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReviewArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], FindManyReviewArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReviewArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyReviewArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarFieldEnum_1.ReviewScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyReviewArgs.prototype, "distinct", void 0);
FindManyReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyReviewArgs);
exports.FindManyReviewArgs = FindManyReviewArgs;
