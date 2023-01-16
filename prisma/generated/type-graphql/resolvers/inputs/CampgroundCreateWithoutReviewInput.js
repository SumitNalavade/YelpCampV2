"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateWithoutReviewInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreatesecondaryImageB64sInput_1 = require("../inputs/CampgroundCreatesecondaryImageB64sInput");
const UserCreateNestedOneWithoutCampgroundsInput_1 = require("../inputs/UserCreateNestedOneWithoutCampgroundsInput");
let CampgroundCreateWithoutReviewInput = class CampgroundCreateWithoutReviewInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutReviewInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutReviewInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutReviewInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutReviewInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreatesecondaryImageB64sInput_1.CampgroundCreatesecondaryImageB64sInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreatesecondaryImageB64sInput_1.CampgroundCreatesecondaryImageB64sInput)
], CampgroundCreateWithoutReviewInput.prototype, "secondaryImageB64s", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutReviewInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateWithoutReviewInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCampgroundsInput_1.UserCreateNestedOneWithoutCampgroundsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCampgroundsInput_1.UserCreateNestedOneWithoutCampgroundsInput)
], CampgroundCreateWithoutReviewInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CampgroundCreateWithoutReviewInput.prototype, "createdAt", void 0);
CampgroundCreateWithoutReviewInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateWithoutReviewInput", {
        isAbstract: true
    })
], CampgroundCreateWithoutReviewInput);
exports.CampgroundCreateWithoutReviewInput = CampgroundCreateWithoutReviewInput;
