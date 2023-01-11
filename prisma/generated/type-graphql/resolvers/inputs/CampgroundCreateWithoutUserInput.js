"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreatesecondaryImageB64sInput_1 = require("../inputs/CampgroundCreatesecondaryImageB64sInput");
const ReviewCreateNestedManyWithoutCampgroundInput_1 = require("../inputs/ReviewCreateNestedManyWithoutCampgroundInput");
let CampgroundCreateWithoutUserInput = class CampgroundCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateWithoutUserInput.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutUserInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreatesecondaryImageB64sInput_1.CampgroundCreatesecondaryImageB64sInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreatesecondaryImageB64sInput_1.CampgroundCreatesecondaryImageB64sInput)
], CampgroundCreateWithoutUserInput.prototype, "secondaryImageB64s", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateWithoutUserInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateWithoutUserInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateNestedManyWithoutCampgroundInput_1.ReviewCreateNestedManyWithoutCampgroundInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewCreateNestedManyWithoutCampgroundInput_1.ReviewCreateNestedManyWithoutCampgroundInput)
], CampgroundCreateWithoutUserInput.prototype, "Review", void 0);
CampgroundCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateWithoutUserInput", {
        isAbstract: true
    })
], CampgroundCreateWithoutUserInput);
exports.CampgroundCreateWithoutUserInput = CampgroundCreateWithoutUserInput;
