"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundCreateManyUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreatesecondaryImageB64sInput_1 = require("../inputs/CampgroundCreatesecondaryImageB64sInput");
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
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CampgroundCreateManyUserInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreatesecondaryImageB64sInput_1.CampgroundCreatesecondaryImageB64sInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundCreatesecondaryImageB64sInput_1.CampgroundCreatesecondaryImageB64sInput)
], CampgroundCreateManyUserInput.prototype, "secondaryImageB64s", void 0);
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
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CampgroundCreateManyUserInput.prototype, "createdAt", void 0);
CampgroundCreateManyUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundCreateManyUserInput", {
        isAbstract: true
    })
], CampgroundCreateManyUserInput);
exports.CampgroundCreateManyUserInput = CampgroundCreateManyUserInput;
