"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CampgroundCreateNestedOneWithoutReviewInput_1 = require("../inputs/CampgroundCreateNestedOneWithoutReviewInput");
const UserCreateNestedOneWithoutReviewInput_1 = require("../inputs/UserCreateNestedOneWithoutReviewInput");
let ReviewCreateInput = class ReviewCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ReviewCreateInput.prototype, "rating", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ReviewCreateInput.prototype, "body", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutReviewInput_1.UserCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserCreateNestedOneWithoutReviewInput_1.UserCreateNestedOneWithoutReviewInput)
], ReviewCreateInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CampgroundCreateNestedOneWithoutReviewInput_1.CampgroundCreateNestedOneWithoutReviewInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CampgroundCreateNestedOneWithoutReviewInput_1.CampgroundCreateNestedOneWithoutReviewInput)
], ReviewCreateInput.prototype, "campground", void 0);
ReviewCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewCreateInput", {
        isAbstract: true
    })
], ReviewCreateInput);
exports.ReviewCreateInput = ReviewCreateInput;
