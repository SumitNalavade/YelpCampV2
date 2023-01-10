"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreatesecondaryImageUrlsInput_1 = require("../inputs/CampgroundCreatesecondaryImageUrlsInput");
const UserCreateNestedOneWithoutCampgroundsInput_1 = require("../inputs/UserCreateNestedOneWithoutCampgroundsInput");
let CampgroundCreateInput = class CampgroundCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateInput.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateInput.prototype, "primaryImageUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreatesecondaryImageUrlsInput_1.CampgroundCreatesecondaryImageUrlsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreatesecondaryImageUrlsInput_1.CampgroundCreatesecondaryImageUrlsInput)
], CampgroundCreateInput.prototype, "secondaryImageUrls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCampgroundsInput_1.UserCreateNestedOneWithoutCampgroundsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutCampgroundsInput_1.UserCreateNestedOneWithoutCampgroundsInput)
], CampgroundCreateInput.prototype, "user", void 0);
CampgroundCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateInput", {
        isAbstract: true
    })
], CampgroundCreateInput);
exports.CampgroundCreateInput = CampgroundCreateInput;
