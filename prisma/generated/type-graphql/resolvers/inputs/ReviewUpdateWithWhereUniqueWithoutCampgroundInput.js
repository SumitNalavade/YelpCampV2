"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpdateWithWhereUniqueWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewUpdateWithoutCampgroundInput_1 = require("../inputs/ReviewUpdateWithoutCampgroundInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpdateWithWhereUniqueWithoutCampgroundInput = class ReviewUpdateWithWhereUniqueWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpdateWithWhereUniqueWithoutCampgroundInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateWithoutCampgroundInput_1.ReviewUpdateWithoutCampgroundInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateWithoutCampgroundInput_1.ReviewUpdateWithoutCampgroundInput)
], ReviewUpdateWithWhereUniqueWithoutCampgroundInput.prototype, "data", void 0);
ReviewUpdateWithWhereUniqueWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpdateWithWhereUniqueWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewUpdateWithWhereUniqueWithoutCampgroundInput);
exports.ReviewUpdateWithWhereUniqueWithoutCampgroundInput = ReviewUpdateWithWhereUniqueWithoutCampgroundInput;
