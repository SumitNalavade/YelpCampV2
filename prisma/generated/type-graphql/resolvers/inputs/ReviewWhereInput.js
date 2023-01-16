"use strict";
var ReviewWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundRelationFilter_1 = require("../inputs/CampgroundRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let ReviewWhereInput = ReviewWhereInput_1 = class ReviewWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReviewWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReviewWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ReviewWhereInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], ReviewWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundRelationFilter_1.CampgroundRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundRelationFilter_1.CampgroundRelationFilter)
], ReviewWhereInput.prototype, "campground", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ReviewWhereInput.prototype, "campgroundId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], ReviewWhereInput.prototype, "createdAt", void 0);
ReviewWhereInput = ReviewWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewWhereInput", {
        isAbstract: true
    })
], ReviewWhereInput);
exports.ReviewWhereInput = ReviewWhereInput;
