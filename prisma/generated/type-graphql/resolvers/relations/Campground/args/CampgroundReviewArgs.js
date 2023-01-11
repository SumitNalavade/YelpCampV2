"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundReviewArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewOrderByWithRelationInput_1 = require("../../../inputs/ReviewOrderByWithRelationInput");
const ReviewWhereInput_1 = require("../../../inputs/ReviewWhereInput");
const ReviewWhereUniqueInput_1 = require("../../../inputs/ReviewWhereUniqueInput");
const ReviewScalarFieldEnum_1 = require("../../../../enums/ReviewScalarFieldEnum");
let CampgroundReviewArgs = class CampgroundReviewArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereInput_1.ReviewWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereInput_1.ReviewWhereInput)
], CampgroundReviewArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewOrderByWithRelationInput_1.ReviewOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundReviewArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], CampgroundReviewArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundReviewArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundReviewArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewScalarFieldEnum_1.ReviewScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundReviewArgs.prototype, "distinct", void 0);
CampgroundReviewArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CampgroundReviewArgs);
exports.CampgroundReviewArgs = CampgroundReviewArgs;
