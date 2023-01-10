"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreatesecondaryImageUrlsInput_1 = require("../inputs/CampgroundCreatesecondaryImageUrlsInput");
let CampgroundCreateManyUserInput = class CampgroundCreateManyUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateManyUserInput.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyUserInput.prototype, "primaryImageUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreatesecondaryImageUrlsInput_1.CampgroundCreatesecondaryImageUrlsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreatesecondaryImageUrlsInput_1.CampgroundCreatesecondaryImageUrlsInput)
], CampgroundCreateManyUserInput.prototype, "secondaryImageUrls", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyUserInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CampgroundCreateManyUserInput.prototype, "price", void 0);
CampgroundCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateManyUserInput", {
        isAbstract: true
    })
], CampgroundCreateManyUserInput);
exports.CampgroundCreateManyUserInput = CampgroundCreateManyUserInput;
