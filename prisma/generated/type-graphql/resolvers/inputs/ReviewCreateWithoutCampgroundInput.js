"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserCreateNestedOneWithoutReviewInput_1 = require("../inputs/UserCreateNestedOneWithoutReviewInput");
let ReviewCreateWithoutCampgroundInput = class ReviewCreateWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCampgroundInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewCreateWithoutCampgroundInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateWithoutCampgroundInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReviewInput_1.UserCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReviewInput_1.UserCreateNestedOneWithoutReviewInput)
], ReviewCreateWithoutCampgroundInput.prototype, "user", void 0);
ReviewCreateWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewCreateWithoutCampgroundInput);
exports.ReviewCreateWithoutCampgroundInput = ReviewCreateWithoutCampgroundInput;
