"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdatesecondaryImageB64sInput_1 = require("../inputs/CampgroundUpdatesecondaryImageB64sInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const ReviewUpdateManyWithoutCampgroundNestedInput_1 = require("../inputs/ReviewUpdateManyWithoutCampgroundNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let CampgroundUpdateWithoutUserInput = class CampgroundUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "averageRating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdatesecondaryImageB64sInput_1.CampgroundUpdatesecondaryImageB64sInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpdatesecondaryImageB64sInput_1.CampgroundUpdatesecondaryImageB64sInput)
], CampgroundUpdateWithoutUserInput.prototype, "secondaryImageB64s", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], CampgroundUpdateWithoutUserInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyWithoutCampgroundNestedInput_1.ReviewUpdateManyWithoutCampgroundNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyWithoutCampgroundNestedInput_1.ReviewUpdateManyWithoutCampgroundNestedInput)
], CampgroundUpdateWithoutUserInput.prototype, "Review", void 0);
CampgroundUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateWithoutUserInput", {
        isAbstract: true
    })
], CampgroundUpdateWithoutUserInput);
exports.CampgroundUpdateWithoutUserInput = CampgroundUpdateWithoutUserInput;
