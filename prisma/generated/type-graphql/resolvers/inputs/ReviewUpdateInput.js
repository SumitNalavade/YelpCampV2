"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdateOneRequiredWithoutReviewNestedInput_1 = require("../inputs/CampgroundUpdateOneRequiredWithoutReviewNestedInput");
const DateTimeFieldUpdateOperationsInput_1 = require("../inputs/DateTimeFieldUpdateOperationsInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutReviewNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReviewNestedInput");
let ReviewUpdateInput = class ReviewUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReviewNestedInput_1.UserUpdateOneRequiredWithoutReviewNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReviewNestedInput_1.UserUpdateOneRequiredWithoutReviewNestedInput)
], ReviewUpdateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateOneRequiredWithoutReviewNestedInput_1.CampgroundUpdateOneRequiredWithoutReviewNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateOneRequiredWithoutReviewNestedInput_1.CampgroundUpdateOneRequiredWithoutReviewNestedInput)
], ReviewUpdateInput.prototype, "campground", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFieldUpdateOperationsInput_1.DateTimeFieldUpdateOperationsInput)
], ReviewUpdateInput.prototype, "createdAt", void 0);
ReviewUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateInput", {
        isAbstract: true
    })
], ReviewUpdateInput);
exports.ReviewUpdateInput = ReviewUpdateInput;
