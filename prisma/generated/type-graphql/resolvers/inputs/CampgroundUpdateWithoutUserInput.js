"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdatesecondaryImageUrlsInput_1 = require("../inputs/CampgroundUpdatesecondaryImageUrlsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
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
], CampgroundUpdateWithoutUserInput.prototype, "primaryImageUrl", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdatesecondaryImageUrlsInput_1.CampgroundUpdatesecondaryImageUrlsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpdatesecondaryImageUrlsInput_1.CampgroundUpdatesecondaryImageUrlsInput)
], CampgroundUpdateWithoutUserInput.prototype, "secondaryImageUrls", void 0);
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
CampgroundUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateWithoutUserInput", {
        isAbstract: true
    })
], CampgroundUpdateWithoutUserInput);
exports.CampgroundUpdateWithoutUserInput = CampgroundUpdateWithoutUserInput;
