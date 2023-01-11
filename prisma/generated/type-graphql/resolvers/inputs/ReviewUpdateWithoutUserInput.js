"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundUpdateOneRequiredWithoutReviewNestedInput_1 = require("../inputs/CampgroundUpdateOneRequiredWithoutReviewNestedInput");
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let ReviewUpdateWithoutUserInput = class ReviewUpdateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], ReviewUpdateWithoutUserInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], ReviewUpdateWithoutUserInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundUpdateOneRequiredWithoutReviewNestedInput_1.CampgroundUpdateOneRequiredWithoutReviewNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CampgroundUpdateOneRequiredWithoutReviewNestedInput_1.CampgroundUpdateOneRequiredWithoutReviewNestedInput)
], ReviewUpdateWithoutUserInput.prototype, "campground", void 0);
ReviewUpdateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateWithoutUserInput", {
        isAbstract: true
    })
], ReviewUpdateWithoutUserInput);
exports.ReviewUpdateWithoutUserInput = ReviewUpdateWithoutUserInput;
