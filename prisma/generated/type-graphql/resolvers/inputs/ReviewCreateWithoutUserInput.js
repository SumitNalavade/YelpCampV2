"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateNestedOneWithoutReviewInput_1 = require("../inputs/CampgroundCreateNestedOneWithoutReviewInput");
let ReviewCreateWithoutUserInput = class ReviewCreateWithoutUserInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutUserInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewCreateWithoutUserInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutUserInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateNestedOneWithoutReviewInput_1.CampgroundCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateNestedOneWithoutReviewInput_1.CampgroundCreateNestedOneWithoutReviewInput)
], ReviewCreateWithoutUserInput.prototype, "campground", void 0);
ReviewCreateWithoutUserInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateWithoutUserInput", {
        isAbstract: true
    })
], ReviewCreateWithoutUserInput);
exports.ReviewCreateWithoutUserInput = ReviewCreateWithoutUserInput;
