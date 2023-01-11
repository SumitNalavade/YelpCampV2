"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewUpsertWithWhereUniqueWithoutCampgroundInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReviewCreateWithoutCampgroundInput_1 = require("../inputs/ReviewCreateWithoutCampgroundInput");
const ReviewUpdateWithoutCampgroundInput_1 = require("../inputs/ReviewUpdateWithoutCampgroundInput");
const ReviewWhereUniqueInput_1 = require("../inputs/ReviewWhereUniqueInput");
let ReviewUpsertWithWhereUniqueWithoutCampgroundInput = class ReviewUpsertWithWhereUniqueWithoutCampgroundInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewWhereUniqueInput_1.ReviewWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewWhereUniqueInput_1.ReviewWhereUniqueInput)
], ReviewUpsertWithWhereUniqueWithoutCampgroundInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewUpdateWithoutCampgroundInput_1.ReviewUpdateWithoutCampgroundInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewUpdateWithoutCampgroundInput_1.ReviewUpdateWithoutCampgroundInput)
], ReviewUpsertWithWhereUniqueWithoutCampgroundInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewCreateWithoutCampgroundInput_1.ReviewCreateWithoutCampgroundInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ReviewCreateWithoutCampgroundInput_1.ReviewCreateWithoutCampgroundInput)
], ReviewUpsertWithWhereUniqueWithoutCampgroundInput.prototype, "create", void 0);
ReviewUpsertWithWhereUniqueWithoutCampgroundInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ReviewUpsertWithWhereUniqueWithoutCampgroundInput", {
        isAbstract: true
    })
], ReviewUpsertWithWhereUniqueWithoutCampgroundInput);
exports.ReviewUpsertWithWhereUniqueWithoutCampgroundInput = ReviewUpsertWithWhereUniqueWithoutCampgroundInput;
