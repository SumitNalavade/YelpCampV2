"use strict";
var CampgroundWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const FloatFilter_1 = require("../inputs/FloatFilter");
const ReviewListRelationFilter_1 = require("../inputs/ReviewListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
const StringNullableListFilter_1 = require("../inputs/StringNullableListFilter");
const UserRelationFilter_1 = require("../inputs/UserRelationFilter");
let CampgroundWhereInput = CampgroundWhereInput_1 = class CampgroundWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CampgroundWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CampgroundWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CampgroundWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CampgroundWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CampgroundWhereInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CampgroundWhereInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringNullableListFilter_1.StringNullableListFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringNullableListFilter_1.StringNullableListFilter)
], CampgroundWhereInput.prototype, "secondaryImageB64s", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CampgroundWhereInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFilter_1.FloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFilter_1.FloatFilter)
], CampgroundWhereInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRelationFilter_1.UserRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRelationFilter_1.UserRelationFilter)
], CampgroundWhereInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CampgroundWhereInput.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewListRelationFilter_1.ReviewListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewListRelationFilter_1.ReviewListRelationFilter)
], CampgroundWhereInput.prototype, "Review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], CampgroundWhereInput.prototype, "createdAt", void 0);
CampgroundWhereInput = CampgroundWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundWhereInput", {
        isAbstract: true
    })
], CampgroundWhereInput);
exports.CampgroundWhereInput = CampgroundWhereInput;
