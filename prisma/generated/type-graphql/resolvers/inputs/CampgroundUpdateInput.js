"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampgroundUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdatesecondaryImageB64sInput_1 = require("../inputs/CampgroundUpdatesecondaryImageB64sInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const FloatFieldUpdateOperationsInput_1 = require("../inputs/FloatFieldUpdateOperationsInput");
const ReviewUpdateManyWithoutCampgroundNestedInput_1 = require("../inputs/ReviewUpdateManyWithoutCampgroundNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutCampgroundsNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutCampgroundsNestedInput");
let CampgroundUpdateInput = class CampgroundUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "description", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "primaryImageB64", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdatesecondaryImageB64sInput_1.CampgroundUpdatesecondaryImageB64sInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpdatesecondaryImageB64sInput_1.CampgroundUpdatesecondaryImageB64sInput)
], CampgroundUpdateInput.prototype, "secondaryImageB64s", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FloatFieldUpdateOperationsInput_1.FloatFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCampgroundsNestedInput_1.UserUpdateOneRequiredWithoutCampgroundsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutCampgroundsNestedInput_1.UserUpdateOneRequiredWithoutCampgroundsNestedInput)
], CampgroundUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateManyWithoutCampgroundNestedInput_1.ReviewUpdateManyWithoutCampgroundNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewUpdateManyWithoutCampgroundNestedInput_1.ReviewUpdateManyWithoutCampgroundNestedInput)
], CampgroundUpdateInput.prototype, "Review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], CampgroundUpdateInput.prototype, "createdAt", void 0);
CampgroundUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CampgroundUpdateInput", {
        isAbstract: true
    })
], CampgroundUpdateInput);
exports.CampgroundUpdateInput = CampgroundUpdateInput;
