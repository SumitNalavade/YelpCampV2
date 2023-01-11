"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const UserUpdateOneRequiredWithoutReviewNestedInput_1 = require("../inputs/UserUpdateOneRequiredWithoutReviewNestedInput");
let ReviewUpdateWithoutCampgroundInput = class ReviewUpdateWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateWithoutCampgroundInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ReviewUpdateWithoutCampgroundInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateWithoutCampgroundInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutReviewNestedInput_1.UserUpdateOneRequiredWithoutReviewNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserUpdateOneRequiredWithoutReviewNestedInput_1.UserUpdateOneRequiredWithoutReviewNestedInput)
], ReviewUpdateWithoutCampgroundInput.prototype, "user", void 0);
ReviewUpdateWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewUpdateWithoutCampgroundInput);
exports.ReviewUpdateWithoutCampgroundInput = ReviewUpdateWithoutCampgroundInput;
